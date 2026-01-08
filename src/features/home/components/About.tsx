import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/shared/components';

const VALUES = [
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Discipline',
        text: 'La clé de voûte de toute réussite pérenne.',
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: 'Innovation',
        text: "Réinventer les modèles business pour l'Afrique de demain.",
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: 'Leadership',
        text: "Inspirer l'action par l'exemple concret.",
    },
];

/**
 * About Section Component
 * Brief introduction to Coach 3M
 */
export const About: React.FC = () => {
    return (
        <section id="bio" className="py-24 bg-offwhite overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 p-1 bg-gradient-to-br from-gold to-petrol rounded-6xl shadow-2xl group overflow-hidden aspect-[3/4]">
                            <div className="bg-white rounded-5xl overflow-hidden h-full">
                                <img
                                    src="/images/coach-3m-action.jpg"
                                    alt="Coach 3M en Action"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        {/* Geometric background element */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-2">
                            <h2 className="section-title">Qui est Coach 3M ?</h2>
                            <div className="w-12 h-1 bg-gold rounded-full" />
                        </div>

                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-petrol leading-tight">
                            Un Bâtisseur de Destins, <br />
                            Un Stratège de Vision.
                        </h3>

                        <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-gold pl-6 py-2">
                            "Mon ambition est de voir une jeunesse africaine décomplexée,
                            outillée et prête à conquérir les marchés mondiaux."
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Moustapha Mahamat Moustapha, affectueusement appelé Coach 3M,
                            incarne cette nouvelle génération de consultants tchadiens. Son
                            parcours atypique, marqué par la résilience et l'innovation, fait
                            de lui une référence incontournable au Tchad et dans la sous-région.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6 pt-6">
                            {VALUES.map((v, i) => (
                                <div
                                    key={i}
                                    className="space-y-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-50 hover:border-gold/30 transition-colors"
                                >
                                    <div className="text-gold">{v.icon}</div>
                                    <h4 className="font-bold text-petrol">{v.title}</h4>
                                    <p className="text-xs text-gray-500 leading-tight">{v.text}</p>
                                </div>
                            ))}
                        </div>

                        <Button variant="dark" size="lg">
                            Découvrir mon parcours complet
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
