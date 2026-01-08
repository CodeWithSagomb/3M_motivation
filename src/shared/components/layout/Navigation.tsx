import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsScrolled } from '@/hooks';
import { NAV_LINKS } from '@/shared/constants';
import { Button } from '../ui';
import type { NavigationProps } from '@/shared/types';

/**
 * Main Navigation Component
 * Handles desktop and mobile navigation with scroll effects
 */
export const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
    const isScrolled = useIsScrolled(50);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (id: string) => {
        onNavigate(id);
        window.location.hash = id;
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled || currentView !== 'home' ? 'py-3' : 'py-6'
            )}
        >
            <div className="container mx-auto px-6">
                <div
                    className={cn(
                        'glass-nav rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-300',
                        (isScrolled || currentView !== 'home') && 'shadow-lg'
                    )}
                >
                    {/* Logo */}
                    <button
                        onClick={() => handleNavClick('home')}
                        className="flex items-center group"
                        aria-label="Accueil Coach 3M"
                    >
                        <img
                            src="/images/logo-3m.png"
                            alt="3M Motivation"
                            className="h-14 w-auto"
                        />
                    </button>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={cn(
                                    'transition-colors text-sm font-medium tracking-wide',
                                    currentView === link.id
                                        ? 'text-gold'
                                        : 'text-white/80 hover:text-gold'
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleNavClick('contact')}
                        >
                            Réserver Session
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'md:hidden absolute top-full left-0 right-0 mt-2 px-6 transition-all duration-300',
                    isMobileMenuOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-10 pointer-events-none'
                )}
            >
                <div className="bg-petrol border border-white/10 rounded-2xl p-6 space-y-4 shadow-2xl">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={cn(
                                'block w-full text-left py-3 text-lg font-medium border-b border-white/5',
                                currentView === link.id ? 'text-gold' : 'text-white'
                            )}
                        >
                            {link.name}
                        </button>
                    ))}
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full mt-4"
                        onClick={() => handleNavClick('contact')}
                    >
                        Réserver Session
                    </Button>
                </div>
            </div>
        </nav>
    );
};
