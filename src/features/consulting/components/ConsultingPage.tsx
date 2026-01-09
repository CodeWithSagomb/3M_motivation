import React, { useState, useEffect, useCallback } from 'react';
import {
    BarChart,
    ShieldCheck,
    Globe,
    X,
    CheckCircle2,
    ArrowRight,
    Target,
    LineChart,
    Briefcase,
    Calendar,
    Layers,
    Zap
} from 'lucide-react';
import { Button } from '@/shared/components';

interface ExpertiseDetail {
    id: string;
    icon: React.ReactElement;
    title: string;
    desc: string;
    longDesc: string;
    features: string[];
    impact: string;
}

const EXPERTISES: ExpertiseDetail[] = [
    {
        id: 'audit',
        icon: <BarChart />,
        title: "Audit Stratégique",
        desc: "Évaluation complète de votre structure pour identifier les leviers de croissance inexploités.",
        longDesc: "Notre audit stratégique est une immersion profonde dans l'ADN de votre entreprise. Nous ne nous arrêtons pas aux bilans comptables ; nous analysons votre culture, vos workflows et votre agilité face au marché Tchadien en pleine mutation.",
        features: [
            "Diagnostic organisationnel complet",
            "Analyse de rentabilité par département",
            "Évaluation de l'agilité opérationnelle",
            "Plan de redressement et croissance à 3 ans"
        ],
        impact: "+35% de gain d'efficacité opérationnelle en moyenne"
    },
    {
        id: 'project',
        icon: <Layers />,
        title: "Project Management",
        desc: "Accompagnement opérationnel pour transformer vos idées en résultats concrets et mesurables.",
        longDesc: "L'idée est 1%, l'exécution est 99%. Nous apportons la rigueur nécessaire pour que vos projets franchissent la ligne d'arrivée. Du planning à la livraison, nous gérons la complexité pour vous laisser la vision.",
        features: [
            "Mise en place de PMO (Project Management Office)",
            "Suivi budgétaire et gestion des risques",
            "Tableaux de bord de pilotage en temps réel",
            "Formation des équipes aux méthodes Agiles"
        ],
        impact: "95% de taux de réussite sur les projets complexes"
    },
    {
        id: 'market',
        icon: <Globe />,
        title: "Expansion Marché",
        desc: "Stratégies d'implantation et de développement sur le marché Tchadien et régional.",
        longDesc: "Le marché africain ne se conquiert pas par hasard. Nous mettons à votre service notre connaissance intime des réseaux d'influence et des dynamiques locales pour sécuriser votre entrée sur le marché.",
        features: [
            "Études de marché et segmentation locale",
            "Networking et mise en relation stratégique",
            "Optimisation de la chaîne logistique",
            "Audit de conformité réglementaire"
        ],
        impact: "Accès privilégié à un réseau de 50+ partenaires clés"
    },
    {
        id: 'gov',
        icon: <ShieldCheck />,
        title: "Gouvernance & Risques",
        desc: "Mise en place de structures de gestion pour sécuriser vos investissements long terme.",
        longDesc: "La pérennité est le fruit d'une structure saine. Nous aidons les entreprises familiales et les grands groupes à moderniser leur gouvernance pour attirer les investisseurs et sécuriser leur héritage.",
        features: [
            "Structuration de Conseil d'Administration",
            "Charte de gouvernance familiale",
            "Cartographie des risques stratégiques",
            "Planification de la succession"
        ],
        impact: "Renforcement de la confiance investisseur de 40%"
    }
];

const METHODOLOGY_STEPS = [
    {
        num: "01",
        title: "Diagnostic",
        icon: <Target />,
        desc: "Immersion totale dans votre environnement pour identifier les goulots d'étranglement réels."
    },
    {
        num: "02",
        title: "Architecture",
        icon: <Layers />,
        desc: "Conception d'un plan stratégique précis avec des jalons (milestones) et budgets clairs."
    },
    {
        num: "03",
        title: "Propulsion",
        icon: <Zap />,
        desc: "Accompagnement quotidien dans le déploiement et optimisation continue des résultats."
    }
];

/**
 * Consulting Page Component
 * Displays consulting services with interactive modal details
 */
export const ConsultingPage: React.FC = () => {
    const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseDetail | null>(null);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (selectedExpertise) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedExpertise]);

    const scrollToExpertise = useCallback(() => {
        document.getElementById('expertise-grid')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const handleContactClick = useCallback(() => {
        setSelectedExpertise(null);
        window.location.hash = 'contact';
    }, []);

    return (
        <div className="pt-24 animate-in">
            {/* Hero Section */}
            <section className="bg-petrol py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-gold/10 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl space-y-8">
                        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-bold uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            <span>Division Conseil Stratégique</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-none">
                            3M <span className="gold-text-gradient">Consulting</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed font-light">
                            Nous ne donnons pas seulement des conseils. Nous construisons avec vous{' '}
                            <span className="text-white font-medium">l'architecture de votre succès</span>{' '}
                            institutionnel et commercial.
                        </p>

                        <Button
                            variant="primary"
                            size="lg"
                            rightIcon={<ArrowRight className="w-5 h-5" />}
                            onClick={scrollToExpertise}
                        >
                            Explorer nos Solutions
                        </Button>
                    </div>
                </div>

                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
            </section>

            {/* Expertise Grid Section */}
            <section id="expertise-grid" className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                        <div className="max-w-2xl space-y-4">
                            <h2 className="section-heading">Solutions sur-mesure</h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Chaque entreprise est unique. Nos interventions sont calibrées pour répondre à vos défis spécifiques avec une précision chirurgicale.
                            </p>
                        </div>
                        <div className="hidden lg:flex items-center space-x-8 text-petrol/5">
                            <LineChart size={120} />
                            <Briefcase size={100} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {EXPERTISES.map((exp) => (
                            <div
                                key={exp.id}
                                onClick={() => setSelectedExpertise(exp)}
                                className="group relative bg-offwhite p-10 rounded-6xl border border-gray-100 cursor-pointer hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(10,25,47,0.1)] transition-all duration-500 h-full flex flex-col"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gold mb-8 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-12 group-hover:-translate-y-3 group-hover:shadow-lg group-hover:bg-gold group-hover:text-white">
                                    {React.cloneElement(exp.icon, { size: 32 })}
                                </div>

                                <h3 className="text-2xl font-serif font-bold text-petrol mb-4 group-hover:text-gold transition-colors">
                                    {exp.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                    {exp.desc}
                                </p>

                                <div className="flex items-center text-gold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                    <span>Détails de l'expertise</span>
                                    <ArrowRight size={14} className="ml-2" />
                                </div>

                                <div className="absolute top-8 right-8 text-petrol/5 group-hover:text-gold/10 transition-colors">
                                    <Layers size={48} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedExpertise && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-petrol/90 backdrop-blur-md animate-in"
                    onClick={() => setSelectedExpertise(null)}
                >
                    <div
                        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-6xl overflow-hidden shadow-2xl animate-premium-zoom flex flex-col lg:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Sidebar */}
                        <div className="lg:w-2/5 bg-petrol p-8 md:p-12 relative flex flex-col justify-between overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center text-gold mb-8">
                                    {React.cloneElement(selectedExpertise.icon, { size: 32 })}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                    {selectedExpertise.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    {selectedExpertise.longDesc}
                                </p>
                            </div>

                            <div className="relative z-10 pt-12 space-y-4">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Impact Mesuré</p>
                                    <p className="text-white font-serif text-lg">{selectedExpertise.impact}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedExpertise(null)}
                                className="lg:hidden absolute top-6 right-6 text-white/50 hover:text-white"
                                aria-label="Fermer"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="lg:w-3/5 p-8 md:p-12 flex flex-col overflow-y-auto">
                            <div className="flex justify-between items-start mb-12">
                                <h4 className="text-xs font-bold text-petrol uppercase tracking-widest flex items-center">
                                    <span className="w-12 h-px bg-gold mr-4" />
                                    Périmètre d'Action
                                </h4>
                                <button
                                    onClick={() => setSelectedExpertise(null)}
                                    className="hidden lg:flex p-3 rounded-full hover:bg-gray-100 transition-colors"
                                    aria-label="Fermer"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="grid gap-6 flex-grow">
                                {selectedExpertise.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start p-5 bg-offwhite rounded-2xl border border-gray-50 hover:border-gold/30 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white shrink-0 mt-1 mr-4">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <p className="text-gray-700 font-medium leading-relaxed">{feature}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-12 space-y-6">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    leftIcon={<Calendar className="w-5 h-5" />}
                                    onClick={handleContactClick}
                                >
                                    Discuter de ce Service
                                </Button>
                                <p className="text-center text-gray-400 text-sm">
                                    Premier diagnostic gratuit pour les nouveaux projets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Methodology Section */}
            <section className="py-32 bg-offwhite relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <h2 className="section-heading">L'Exécution 3M</h2>
                        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
                        <p className="text-gray-500">
                            Une approche rigoureuse inspirée des standards internationaux de conseil, adaptée aux réalités africaines.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 relative">
                        {METHODOLOGY_STEPS.map((step, i) => (
                            <div key={i} className="group bg-white p-10 rounded-6xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-petrol text-white flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-12 group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-gold">
                                        {step.icon}
                                    </div>
                                    <span className="text-4xl font-serif font-bold text-petrol/10">{step.num}</span>
                                </div>
                                <h4 className="text-2xl font-bold text-petrol mb-4">{step.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-petrol relative overflow-hidden">
                <div className="container mx-auto px-6 text-center space-y-10 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white max-w-4xl mx-auto leading-tight">
                        Prêt à transformer votre <span className="gold-text-gradient">Vision</span> en{' '}
                        <span className="text-white">Valeur</span> durable ?
                    </h2>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="bg-white text-petrol hover:bg-gold hover:text-white"
                        onClick={() => { window.location.hash = 'contact'; }}
                    >
                        Lancer un Audit Business
                    </Button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
            </section>
        </div>
    );
};
