/**
 * Message Entity
 * Represents a chat message in the AI Coach feature
 */
export class MessageEntity {
    readonly id: string;
    readonly role: 'user' | 'assistant';
    readonly content: string;
    readonly timestamp: Date;

    constructor(role: 'user' | 'assistant', content: string) {
        this.id = crypto.randomUUID();
        this.role = role;
        this.content = content;
        this.timestamp = new Date();
    }

    toJSON() {
        return {
            id: this.id,
            role: this.role,
            content: this.content,
            timestamp: this.timestamp,
        };
    }
}

/**
 * Contact Entity
 * Represents a contact form submission
 */
export class ContactEntity {
    readonly name: string;
    readonly email: string;
    readonly subject: string;
    readonly message: string;
    readonly submittedAt: Date;

    constructor(data: {
        name: string;
        email: string;
        subject: string;
        message: string;
    }) {
        this.name = data.name.trim();
        this.email = data.email.trim().toLowerCase();
        this.subject = data.subject;
        this.message = data.message.trim();
        this.submittedAt = new Date();
    }

    validate(): { valid: boolean; errors: string[] } {
        const errors: string[] = [];

        if (!this.name || this.name.length < 2) {
            errors.push('Le nom doit contenir au moins 2 caractères');
        }

        if (!this.email || !this.isValidEmail(this.email)) {
            errors.push('Email invalide');
        }

        if (!this.message || this.message.length < 10) {
            errors.push('Le message doit contenir au moins 10 caractères');
        }

        return {
            valid: errors.length === 0,
            errors,
        };
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    toJSON() {
        return {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
            submittedAt: this.submittedAt,
        };
    }
}
