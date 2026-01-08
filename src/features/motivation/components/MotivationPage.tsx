import React, { useState, useEffect, useCallback } from 'react';
import {
    Zap,
    Flame,
    Heart,
    Award,
    Star,
    Mic2,
    Users,
    X,
    CheckCircle2,
    ArrowRight,
    Play,
    Film
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/shared/components';

interface MotivationPillar {
    icon: React.ReactElement;
    title: string;
    desc: string;
    details: string;
    features: string[];
}

const PILLARS: MotivationPillar[] = [
    {
        icon: <Mic2 />,
        title: "Conférences Impactantes",
        desc: "Des interventions sur-mesure pour inspirer vos équipes ou votre communauté.",
        details: "Coach 3M transforme la scène en un espace de révélation. Nos conférences sont conçues pour briser le statu quo et insuffler une énergie de conquête durable au sein des organisations.",
        features: ["Leadership Transformationnel", "Gestion du Stress & Performance", "Vision 2030 pour l'Afrique", "Intelligence Émotionnelle"]
    },
    {
        icon: <Users />,
        title: "Mastermind Group",
        desc: "Un cercle restreint de leaders pour grandir ensemble et s'élever mutuellement.",
        details: "L'excellence solitaire est limitée. Rejoignez un écosystème de pairs rigoureusement sélectionnés pour confronter vos idées, résoudre vos blocages et accélérer votre croissance.",
        features: ["Cercles de confiance", "Résolution collaborative", "Accès réseau VIP", "Retraites stratégiques"]
    },
    {
        icon: <Heart />,
        title: "Coaching de Vie",
        desc: "Un accompagnement individuel pour aligner vos actions avec vos valeurs.",
        details: "Le succès extérieur sans paix intérieure est un échec. Nous travaillons sur les racines de votre identité pour construire un leadership authentique et équilibré.",
        features: ["Alignement Mission de Vie", "Discipline & Habitudes", "Gestion du Temps", "Confiance en Soi"]
    }
];

/**
 * Motivation Page Component
 * Displays motivation services, keynote video section, and pillars
 */
export const MotivationPage: React.FC = () => {
    const [selectedPillar, setSelectedPillar] = useState<MotivationPillar | null>(null);

    useEffect(() => {
        if (selectedPillar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedPillar]);

    const handleRegisterClick = useCallback(() => {
        window.location.hash = 'contact';
    }, []);

    return (
        <div className="pt-24 animate-in">
            {/* Hero Section */}
            <section className="bg-gold py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <Star className="absolute top-10 right-10 w-64 h-64 text-white rotate-12" />
                    <Star className="absolute bottom-10 left-10 w-32 h-32 text-white -rotate-12" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-petrol mb-8">
                        3M <span className="text-white">Motivation</span>
                    </h1>
                    <p className="text-2xl text-petrol/80 max-w-3xl mx-auto leading-relaxed font-light mb-12">
                        Réveillez le leader qui sommeille en vous. La discipline est le pont entre vos objectifs et vos accomplissements.
                    </p>
                    <Button
                        variant="dark"
                        size="lg"
                        leftIcon={<Flame className="text-gold" />}
                        onClick={handleRegisterClick}
                    >
                        Rejoindre le Mouvement
                    </Button>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="py-24 bg-offwhite">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gold/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img
                                src="/images/coach-3m-conference.jpg"
                                alt="Conférence Coach 3M"
                                className="relative rounded-6xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>

                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="section-heading">Le Mindset du Champion</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Mes conférences et ateliers ne sont pas de simples discours. Ce sont des catalyseurs de changement conçus pour briser les barrières mentales.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {PILLARS.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedPillar(item)}
                                        className="w-full flex text-left gap-6 p-6 rounded-6xl border border-transparent hover:border-gold hover:bg-white hover:shadow-xl transition-all group"
                                    >
                                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-gold/10 text-gold flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:-translate-y-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-petrol mb-1 flex items-center">
                                                {item.title}
                                                <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                            </h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -translate-x-1/2" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <div className="inline-flex items-center space-x-2 text-gold font-bold uppercase tracking-[0.2em] text-xs">
                            <Film size={14} />
                            <span>Keynote Snippets</span>
                        </div>
                        <h2 className="section-heading">L'Impact en Images</h2>
                        <p className="text-gray-500 text-lg">
                            Vivez l'énergie d'une salle comble. Nos extraits vous donnent un aperçu de la transformation qui s'opère lors des interventions de Coach 3M.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto relative group">
                        {/* YouTube Embed */}
                        <div className="aspect-video w-full rounded-6xl overflow-hidden bg-petrol shadow-2xl relative border-4 border-gold/10 group-hover:border-gold/30 transition-all duration-500">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/videoseries?list=UU3mmotivation"
                                title="Coach 3M - Conférences Motivation"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Description Badge */}
                        <div className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-8 rounded-5xl shadow-2xl max-w-sm border border-gray-100 animate-float">
                            <h4 className="text-petrol font-serif font-bold text-xl mb-3">Une Expérience Immersive</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Plus qu'un discours, une véritable décharge d'adrénaline entrepreneuriale. Coach 3M captive son auditoire.
                            </p>
                            <a
                                href="https://youtube.com/@3mmotivation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 flex items-center space-x-2 text-gold font-bold text-xs uppercase tracking-widest hover:underline"
                            >
                                <span>Visionner sur YouTube</span>
                                <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedPillar && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-petrol/80 animate-backdrop"
                    onClick={() => setSelectedPillar(null)}
                >
                    <div
                        className="bg-white w-full max-w-2xl rounded-6xl overflow-hidden shadow-2xl animate-premium-zoom"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-gold p-10 relative">
                            <button
                                onClick={() => setSelectedPillar(null)}
                                className="absolute top-8 right-8 text-petrol/50 hover:text-petrol"
                                aria-label="Fermer"
                            >
                                <X size={28} />
                            </button>
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-petrol mb-6">
                                {React.cloneElement(selectedPillar.icon, { size: 32 })}
                            </div>
                            <h3 className="text-4xl font-serif font-bold text-petrol mb-4">{selectedPillar.title}</h3>
                            <p className="text-petrol/70 text-lg leading-relaxed">{selectedPillar.details}</p>
                        </div>
                        <div className="p-10 space-y-8">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {selectedPillar.features.map((f, i) => (
                                    <div key={i} className="flex items-center space-x-3 text-gray-700">
                                        <CheckCircle2 size={18} className="text-gold" />
                                        <span className="font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>
                            <Button
                                variant="dark"
                                size="lg"
                                className="w-full"
                                onClick={() => { setSelectedPillar(null); window.location.hash = 'contact'; }}
                            >
                                S'inscrire au Prochain Événement
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Quote Section */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Award className="w-20 h-20 text-gold mx-auto mb-10 opacity-20" />
                    <h3 className="text-4xl md:text-5xl font-serif italic text-petrol leading-tight mb-10">
                        "Le Tchad de demain se construit avec les esprits brillants d'aujourd'hui qui osent rêver grand et agir avec discipline."
                    </h3>
                    <p className="font-bold text-gold uppercase tracking-widest text-sm">— Coach 3M</p>
                </div>
            </section>
        </div>
    );
};
