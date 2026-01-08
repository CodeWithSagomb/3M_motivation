import type { Message } from '@/shared/types';

/**
 * Interface for AI Message Service
 * Follows Interface Segregation Principle
 */
export interface IMessageService {
    send(messages: Message[], userMessage: string): Promise<string>;
}

/**
 * Interface for Contact Service
 */
export interface IContactService {
    submit(data: {
        name: string;
        email: string;
        subject: string;
        message: string;
    }): Promise<{ success: boolean; error?: string }>;
}
