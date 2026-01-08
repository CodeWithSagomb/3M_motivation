import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SERVICES } from '@/shared/constants';
import type { ServicesProps } from '@/shared/types';

/**
 * Services Section Component
 * Displays the two main service pillars
 */
export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="section-title">Nos deux piliers</h2>
                    <h3 className="section-heading mb-6">
                        L'Excellence Entrepreneuriale au Service de la Jeunesse
                    </h3>
                    <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Nous fusionnons le sérieux du conseil en stratégie avec l'énergie
                        du développement personnel pour créer des leaders complets.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => onNavigate?.(service.type)}
                            className={cn(
                                'group p-10 rounded-6xl transition-all duration-500 hover:shadow-2xl relative overflow-hidden cursor-pointer',
                                service.type === 'consulting'
                                    ? 'bg-petrol text-white'
                                    : 'bg-white border-2 border-gray-100 text-petrol'
                            )}
                        >
                            {/* Icon */}
                            <div
                                className={cn(
                                    'w-16 h-16 rounded-2xl flex items-center justify-center mb-8',
                                    'transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 group-hover:-translate-y-2',
                                    service.type === 'consulting'
                                        ? 'bg-gold/20 text-gold'
                                        : 'bg-petrol/5 text-petrol'
                                )}
                            >
                                {service.icon}
                            </div>

                            <h4 className="text-3xl font-serif font-bold mb-6">
                                {service.title}
                            </h4>
                            <p
                                className={cn(
                                    'text-lg leading-relaxed mb-8 opacity-80',
                                    service.type === 'consulting' ? 'text-white/80' : 'text-gray-600'
                                )}
                            >
                                {service.description}
                            </p>

                            <button
                                className={cn(
                                    'inline-flex items-center space-x-2 font-bold transition-all',
                                    service.type === 'consulting'
                                        ? 'text-gold hover:text-white'
                                        : 'text-petrol hover:text-gold'
                                )}
                            >
                                <span>En savoir plus</span>
                                <ArrowUpRight className="w-5 h-5" />
                            </button>

                            {/* Decorative background circle */}
                            <div
                                className={cn(
                                    'absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-30',
                                    service.type === 'consulting' ? 'bg-gold' : 'bg-petrol'
                                )}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
