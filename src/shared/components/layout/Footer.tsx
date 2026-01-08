import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SOCIALS, NAV_LINKS } from '@/shared/constants';
import type { FooterProps } from '@/shared/types';

/**
 * Footer Component with navigation and social links
 */
export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const scrollToTop = () => {
        onNavigate('home');
        window.location.hash = 'home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLink = (id: string) => {
        onNavigate(id);
        window.location.hash = id;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = NAV_LINKS.filter(link => link.id !== 'home');

    return (
        <footer className="bg-petrol pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-12">
                    {/* Logo & Vision */}
                    <div className="max-w-xs text-center md:text-left space-y-6">
                        <button
                            onClick={() => handleLink('home')}
                            className="block"
                        >
                            <img
                                src="/images/logo-3m.png"
                                alt="3M Motivation"
                                className="h-16 w-auto"
                            />
                        </button>
                        <p className="text-white/40 text-sm leading-relaxed">
                            L'excellence entrepreneuriale au service de la jeunesse africaine.
                            Redéfinissons ensemble les standards du succès.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-8 text-white/60 font-medium">
                        {footerLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleLink(link.id)}
                                className="hover:text-gold transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {SOCIALS.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:scale-110 transition-all shadow-lg"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6 text-xs font-bold text-white/20 uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} COACH 3M. Tous droits réservés.</p>
                    <p className="text-white/30 normal-case tracking-normal">
                        Conçu avec passion par <span className="text-gold font-semibold">c.Sagombaye</span>
                    </p>
                    <div className="flex space-x-6">
                        <a href="#mentions-legales" className="hover:text-white transition-colors">
                            Mentions Légales
                        </a>
                        <a href="#confidentialite" className="hover:text-white transition-colors">
                            Confidentialité
                        </a>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                        aria-label="Retour en haut"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
};
