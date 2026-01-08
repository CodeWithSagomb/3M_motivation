import React, { useState, useEffect } from 'react';
import {
    History,
    Award,
    BookOpen,
    MapPin,
    ExternalLink,
    X,
    ArrowRight,
    ShieldCheck,
    Target
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/shared/components';

interface BioDetail {
    icon: React.ReactElement;
    title: string;
    desc: string;
    fullStory: string;
}

const BIO_CARDS: BioDetail[] = [
    {
        icon: <History className="text-gold" />,
        title: "Le Parcours",
        desc: "Des bancs de l'université aux plus grandes tables de conseil.",
        fullStory: "Le parcours de Coach 3M est une ode à la persévérance. Après des études brillantes, il a choisi le chemin difficile de l'entrepreneuriat au Tchad, transformant chaque obstacle en une leçon stratégique. Son ascension est le fruit d'une discipline de fer et d'une soif constante d'excellence."
    },
    {
        icon: <BookOpen className="text-petrol" />,
        title: "La Vision",
        desc: "Bâtir un écosystème où chaque jeune Tchadien possède les outils du succès.",
        fullStory: "Coach 3M rêve d'une Afrique où l'innovation n'est plus une exception mais la norme. Sa vision 3M (Motivation, Mindset, Management) vise à doter la nouvelle génération de compétences mondiales tout en restant ancré dans les réalités locales."
    }
];

const VALUES = [
    "L'Excellence : Ne jamais se contenter du 'bon assez'.",
    "L'Intégrité : La base de toute relation d'affaires solide.",
    "La Transmission : Apprendre pour mieux enseigner.",
    "L'Action : Une idée sans exécution n'est qu'un mirage."
];

/**
 * Bio Page Component
 * Displays Coach 3M's biography, values and story
 */
export const BioPage: React.FC = () => {
    const [selectedBio, setSelectedBio] = useState<BioDetail | null>(null);

    useEffect(() => {
        if (selectedBio) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedBio]);

    return (
        <div className="pt-24 animate-in">
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Left side: Photo & Social Proof */}
                        <div className="lg:w-1/3 lg:sticky lg:top-32">
                            <div className="relative group p-2 border border-gray-100 rounded-6xl overflow-hidden bg-white shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-petrol/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <img
                                    src="/images/coach-3m-portrait.jpg"
                                    alt="Moustapha Mahamat Moustapha"
                                    className="rounded-5xl w-full shadow-lg transition-transform duration-700 group-hover:scale-105 object-cover"
                                />
                            </div>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center space-x-3 text-gray-500 bg-offwhite p-4 rounded-2xl">
                                    <MapPin size={18} className="text-gold" />
                                    <span className="font-medium">Basé à N'Djamena, Tchad</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-500 bg-offwhite p-4 rounded-2xl">
                                    <Award size={18} className="text-gold" />
                                    <span className="font-medium">10+ ans d'impact stratégique</span>
                                </div>
                            </div>
                        </div>

                        {/* Right side: Story */}
                        <div className="lg:w-2/3 space-y-12">
                            <header className="space-y-4">
                                <h1 className="text-5xl md:text-7xl font-serif font-bold text-petrol leading-tight">
                                    L'Homme derrière <br />
                                    <span className="gold-text-gradient">La Vision</span>
                                </h1>
                                <p className="text-2xl text-gray-400 font-light italic">
                                    Moustapha Mahamat Moustapha
                                </p>
                            </header>

                            <div className="prose prose-xl text-gray-600 max-w-none space-y-8">
                                <p className="leading-relaxed">
                                    Coach 3M n'est pas seulement un nom, c'est un engagement. Né d'une volonté de transformer le paysage entrepreneurial du Tchad, Moustapha a bâti son expertise sur le terrain, en affrontant les réalités économiques de la sous-région.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 my-12">
                                    {BIO_CARDS.map((card, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedBio(card)}
                                            className={cn(
                                                'p-10 rounded-5xl text-left transition-all hover:scale-[1.03] group relative overflow-hidden',
                                                i === 0
                                                    ? 'bg-petrol text-white'
                                                    : 'bg-offwhite border border-gray-100 text-petrol'
                                            )}
                                        >
                                            <div className="mb-6 transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-1">
                                                {card.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                                            <p className={cn('text-sm mb-6', i === 0 ? 'text-white/70' : 'text-gray-500')}>
                                                {card.desc}
                                            </p>
                                            <div className={cn(
                                                'flex items-center text-xs font-bold uppercase tracking-widest',
                                                i === 0 ? 'text-gold' : 'text-petrol'
                                            )}>
                                                <span>Découvrir l'histoire</span>
                                                <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <h3 className="text-3xl font-serif font-bold text-petrol pt-8 flex items-center">
                                    <Target className="text-gold mr-4" />
                                    Mes Valeurs Fondamentales
                                </h3>
                                <ul className="space-y-4 list-none p-0">
                                    {VALUES.map((v, i) => (
                                        <li key={i} className="flex items-center space-x-4 border-b border-gray-100 pb-4 group">
                                            <span className="w-3 h-3 rounded-full bg-gold group-hover:scale-150 transition-transform" />
                                            <span className="font-semibold text-petrol text-lg">{v}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-10 flex flex-wrap gap-6">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    leftIcon={<ExternalLink size={22} />}
                                >
                                    Dossier de Presse Complet
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedBio && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-petrol/80 animate-backdrop"
                    onClick={() => setSelectedBio(null)}
                >
                    <div
                        className="bg-white w-full max-w-2xl rounded-6xl overflow-hidden shadow-2xl animate-premium-slide"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-12 relative">
                            <button
                                onClick={() => setSelectedBio(null)}
                                className="absolute top-8 right-8 text-gray-300 hover:text-petrol transition-colors"
                                aria-label="Fermer"
                            >
                                <X size={32} />
                            </button>

                            <div className="flex items-center space-x-4 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-offwhite flex items-center justify-center">
                                    {React.cloneElement(selectedBio.icon, { size: 32 })}
                                </div>
                                <h3 className="text-4xl font-serif font-bold text-petrol">{selectedBio.title}</h3>
                            </div>

                            <div className="w-20 h-1 bg-gold mb-8" />

                            <p className="text-xl text-gray-600 leading-relaxed font-light mb-10 italic border-l-4 border-gold pl-6">
                                {selectedBio.fullStory}
                            </p>

                            <div className="bg-petrol p-8 rounded-3xl text-white">
                                <div className="flex items-center space-x-3 mb-4">
                                    <ShieldCheck className="text-gold" />
                                    <span className="font-bold uppercase tracking-widest text-xs">Engagement Qualité</span>
                                </div>
                                <p className="text-sm text-white/60">
                                    Chaque étape de ce parcours a été validée par des résultats tangibles et une éthique de travail irréprochable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
