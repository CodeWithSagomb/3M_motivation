import type { Message } from '@/shared/types';
import type { IMessageService } from '@/core/domain/interfaces';

const API_ENDPOINT = '/api/chat';

/**
 * Chat Service Implementation
 * Repository pattern for AI chat operations
 */
class ChatServiceImpl implements IMessageService {
    async send(messages: Message[], userMessage: string): Promise<string> {
        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: messages.map(m => ({
                        role: m.role,
                        content: m.content,
                    })),
                    userMessage,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();
            return data.message || 'Désolé, je n\'ai pas pu générer de réponse.';
        } catch (error) {
            console.error('Chat service error:', error);
            throw new Error('Connexion momentanément interrompue. Réessayez dans un instant.');
        }
    }
}

// Singleton instance
export const chatService = new ChatServiceImpl();
