import type { VercelRequest, VercelResponse } from '@vercel/node';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RECIPIENT_EMAIL = 'mmmotivation03@gmail.com';

interface ContactData {
    name: string;
    email: string;
    subject: string;
    message: string;
    submittedAt: string;
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

    try {
        const { name, email, subject, message } = req.body as ContactData;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Tous les champs obligatoires doivent être remplis' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Email invalide' });
        }

        // If Resend is configured, send email
        if (RESEND_API_KEY) {
            const emailResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${RESEND_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: 'Coach 3M <onboarding@resend.dev>',
                    to: RECIPIENT_EMAIL,
                    subject: `[Coach 3M] ${subject || 'Nouveau message'} - ${name}`,
                    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0A192F; border-bottom: 2px solid #C5A059; padding-bottom: 10px;">
                Nouveau message de contact
              </h2>
              <p><strong>Nom:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Sujet:</strong> ${subject || 'Non spécifié'}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <h3 style="color: #0A192F;">Message:</h3>
              <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="color: #888; font-size: 12px;">
                Envoyé depuis le site Coach 3M le ${new Date().toLocaleString('fr-FR')}
              </p>
            </div>
          `,
                }),
            });

            if (!emailResponse.ok) {
                const errorData = await emailResponse.json();
                console.error('Resend error:', errorData);
                return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
            }
        } else {
            // Log to console if Resend not configured (for development)
            console.log('Contact form submission:', { name, email, subject, message });
        }

        return res.status(200).json({
            success: true,
            message: 'Votre message a été envoyé avec succès'
        });
    } catch (error) {
        console.error('Contact API error:', error);
        return res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
