import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/shared/constants';

/**
 * Testimonials Section Component
 * Displays client testimonials
 */
export const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title">Ils nous font confiance</h2>
                    <h3 className="text-4xl font-serif font-bold text-petrol">
                        Témoignages de Réussite
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {TESTIMONIALS.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-offwhite p-10 rounded-6xl border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-gold/10" />
                            <div className="flex items-center space-x-4 mb-8">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-gold/20"
                                />
                                <div>
                                    <h4 className="font-bold text-petrol">{testimonial.name}</h4>
                                    <p className="text-sm text-gold font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed italic text-lg">
                                "{testimonial.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
