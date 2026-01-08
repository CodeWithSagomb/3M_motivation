import React from 'react';
import { Home, ArrowLeft, Search, MessageSquare } from 'lucide-react';
import { Button } from '@/shared/components';

interface NotFoundPageProps {
    onNavigate: (view: string) => void;
}

/**
 * 404 Not Found Page Component
 * Displays a professional error page with navigation options
 */
export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
    const handleGoHome = () => {
        onNavigate('home');
    };

    const handleContact = () => {
        onNavigate('contact');
    };

    return (
        <div className="min-h-screen bg-petrol flex items-center justify-center relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gold/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    {/* 404 Number */}
                    <div className="relative">
                        <span className="text-[12rem] md:text-[16rem] font-serif font-bold text-white/5 leading-none select-none">
                            404
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Search className="w-24 h-24 md:w-32 md:h-32 text-gold/30" />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">
                            Page <span className="gold-text-gradient">Introuvable</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 max-w-lg mx-auto leading-relaxed">
                            La page que vous recherchez n'existe pas ou a été déplacée.
                            Pas d'inquiétude, l'excellence est toujours à portée de clic.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-px bg-white/20" />
                        <span className="text-gold font-serif italic">Coach 3M</span>
                        <div className="w-16 h-px bg-white/20" />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button
                            variant="primary"
                            size="lg"
                            leftIcon={<Home className="w-5 h-5" />}
                            onClick={handleGoHome}
                        >
                            Retour à l'Accueil
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            leftIcon={<MessageSquare className="w-5 h-5" />}
                            onClick={handleContact}
                        >
                            Nous Contacter
                        </Button>
                    </div>

                    {/* Quick Links */}
                    <div className="pt-8">
                        <p className="text-white/40 text-sm mb-4">Pages populaires :</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['consulting', 'motivation', 'bio'].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => onNavigate(page)}
                                    className="text-gold hover:text-white transition-colors text-sm font-medium capitalize"
                                >
                                    {page === 'bio' ? 'Biographie' : page}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-petrol to-transparent" />
        </div>
    );
};
