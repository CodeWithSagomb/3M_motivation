import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { useScrollPosition } from '@/hooks';
import { Button } from '@/shared/components';

/**
 * Hero Section Component
 * Main landing section with parallax effect
 */
export const Hero: React.FC = () => {
    const scrollY = useScrollPosition();

    return (
        <section
            id="accueil"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-petrol"
        >
            {/* Abstract Background Elements with Parallax */}
            <div
                className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"
                style={{ transform: `translate(25%, -50%) translateY(${scrollY * 0.15}px)` }}
            />
            <div
                className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gold/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none"
                style={{ transform: `translate(-25%, 50%) translateY(${scrollY * -0.1}px)` }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-3/5 space-y-8">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-bold uppercase tracking-widest animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-gold" />
                            <span>L'Excellence à votre portée</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                            L'Architecture de <br />
                            <span className="gold-text-gradient">Votre Succès</span> <br />
                            commence ici.
                        </h1>

                        <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
                            Transformez votre vision en réalité avec Coach 3M. Leader inspirant
                            et stratège business, Moustapha Mahamat Moustapha vous accompagne
                            vers les sommets de l'entrepreneuriat moderne.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button variant="primary" size="lg" rightIcon={<ChevronRight className="w-5 h-5" />}>
                                Démarrer l'Accompagnement
                            </Button>
                            <Button variant="secondary" size="lg" leftIcon={<Play className="w-5 h-5 fill-white" />}>
                                Voir la Présentation
                            </Button>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className="w-full lg:w-2/5 relative">
                        <div className="relative z-10 rounded-6xl overflow-hidden border-2 border-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-petrol group aspect-[3/4]">
                            <img
                                src="/images/coach-3m-hero.jpg"
                                alt="Coach 3M - Moustapha Mahamat Moustapha"
                                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-petrol via-transparent to-transparent opacity-40" />

                            {/* Decorative corner light */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-gold/20 transition-colors" />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-3xl shadow-2xl animate-float z-20 max-w-[200px]">
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="flex -space-x-2">
                                    <img
                                        src="/images/coach-3m-portrait.jpg"
                                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                        alt="Leader"
                                    />
                                    <img
                                        src="/images/coach-3m-action.jpg"
                                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                        alt="Coaching"
                                    />
                                    <img
                                        src="/images/coach-3m-conference.jpg"
                                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                        alt="Conférence"
                                    />
                                </div>
                                <span className="text-xs font-bold text-petrol">+5K</span>
                            </div>
                            <p className="text-sm font-serif font-bold text-petrol">
                                Esprits Transformés en Afrique
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
