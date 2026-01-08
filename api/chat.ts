import type { VercelRequest, VercelResponse } from '@vercel/node';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

const SYSTEM_INSTRUCTION = `Tu es l'assistant digital de Coach 3M (Moustapha Mahamat Moustapha). 
Ton ton est inspirant, direct, structuré et bienveillant. 
Tu es un expert en entrepreneuriat au Tchad, leadership et stratégie business. 
Tes réponses doivent être concises et motiver l'utilisateur à l'action. 
Utilise des expressions comme "L'excellence est un choix" ou "Passez à l'action".
Réponds toujours en français.`;

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

interface RequestBody {
    messages: ChatMessage[];
    userMessage: string;
}

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!GEMINI_API_KEY) {
        console.error('GEMINI_API_KEY not configured');
        return res.status(500).json({ error: 'Service non configuré' });
    }

    try {
        const { messages, userMessage } = req.body as RequestBody;

        if (!userMessage || typeof userMessage !== 'string') {
            return res.status(400).json({ error: 'Message requis' });
        }

        // Build conversation history for Gemini
        const contents = [
            {
                role: 'user',
                parts: [{ text: SYSTEM_INSTRUCTION }],
            },
            {
                role: 'model',
                parts: [{ text: "Compris. Je suis l'assistant digital de Coach 3M, prêt à inspirer et guider." }],
            },
            ...messages.map(m => ({
                role: m.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: m.content }],
            })),
            {
                role: 'user',
                parts: [{ text: userMessage }],
            },
        ];

        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents,
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1024,
                },
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Gemini API error:', errorText);
            return res.status(500).json({ error: 'Erreur du service IA' });
        }

        const data = await response.json();
        const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!generatedText) {
            return res.status(500).json({ error: 'Réponse vide du service IA' });
        }

        return res.status(200).json({ message: generatedText });
    } catch (error) {
        console.error('Chat API error:', error);
        return res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
