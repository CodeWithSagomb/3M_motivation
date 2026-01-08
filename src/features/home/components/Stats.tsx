import React from 'react';
import { STATS } from '@/shared/constants';

/**
 * Stats Section Component
 * Displays key metrics
 */
export const Stats: React.FC = () => {
    return (
        <section className="py-16 bg-white border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group hover:-translate-y-1 transition-transform"
                        >
                            <p className="text-4xl md:text-5xl font-serif font-bold text-petrol mb-2 group-hover:text-gold transition-colors">
                                {stat.value}
                            </p>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
