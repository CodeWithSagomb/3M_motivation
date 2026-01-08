import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { chatService } from '@/services/api';
import type { Message } from '@/shared/types';

const INITIAL_MESSAGE: Message = {
    role: 'assistant',
    content: "Bonjour ! Je suis l'assistant digital de Coach 3M. Comment puis-je vous aider dans votre vision business ou votre mindset aujourd'hui ?",
};

/**
 * AI Coach Chat Widget
 * Floating chat interface with Gemini AI integration
 */
export const AICoach: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen, scrollToBottom]);

    const handleSend = useCallback(async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const responseText = await chatService.send(messages, input);
            const assistantMessage: Message = { role: 'assistant', content: responseText };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue';
            setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    }, [input, isLoading, messages]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    }, [handleSend]);

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={cn(
                    'fixed bottom-8 right-8 z-[60] w-16 h-16 rounded-full gold-gradient shadow-2xl',
                    'flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95',
                    isOpen ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100'
                )}
                aria-label="Ouvrir le chat Coach 3M AI"
            >
                <MessageSquare className="w-8 h-8" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-white" />
                </span>
            </button>

            {/* Chat Window */}
            <div
                className={cn(
                    'fixed bottom-8 right-8 z-[60] w-[90vw] md:w-[400px] h-[600px]',
                    'bg-white rounded-5xl shadow-2xl flex flex-col overflow-hidden border border-gray-100',
                    'transition-all duration-500 transform',
                    isOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-20 pointer-events-none'
                )}
                role="dialog"
                aria-label="Chat Coach 3M AI"
            >
                {/* Header */}
                <div className="bg-petrol p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h4 className="text-white font-serif font-bold leading-tight">
                                Coach 3M AI
                            </h4>
                            <p className="text-gold text-[10px] font-bold uppercase tracking-widest">
                                Assistant Digital
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white/60 hover:text-white transition-colors"
                        aria-label="Fermer le chat"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-offwhite/50">
                    {messages.map((m, i) => (
                        <div
                            key={i}
                            className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}
                        >
                            <div
                                className={cn(
                                    'max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm',
                                    m.role === 'user'
                                        ? 'bg-gold text-white rounded-tr-none'
                                        : 'bg-white text-petrol rounded-tl-none border border-gray-100'
                                )}
                            >
                                {m.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100">
                                <Loader2 className="w-5 h-5 animate-spin text-gold" />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-100">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Posez votre question business..."
                            className="w-full bg-offwhite rounded-xl py-4 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading || !input.trim()}
                            className="absolute right-2 p-2 text-gold hover:bg-gold/10 rounded-lg transition-all disabled:opacity-50"
                            aria-label="Envoyer le message"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
