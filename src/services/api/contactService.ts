import type { IContactService } from '@/core/domain/interfaces';
import { ContactEntity } from '@/core/domain/entities';

const API_ENDPOINT = '/api/contact';

/**
 * Contact Service Implementation
 * Repository pattern for contact form operations
 */
class ContactServiceImpl implements IContactService {
    async submit(data: {
        name: string;
        email: string;
        subject: string;
        message: string;
    }): Promise<{ success: boolean; error?: string }> {
        // Create entity and validate
        const contact = new ContactEntity(data);
        const validation = contact.validate();

        if (!validation.valid) {
            return {
                success: false,
                error: validation.errors[0],
            };
        }

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact.toJSON()),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `HTTP error: ${response.status}`);
            }

            return { success: true };
        } catch (error) {
            console.error('Contact service error:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Une erreur est survenue',
            };
        }
    }
}

// Singleton instance
export const contactService = new ContactServiceImpl();
