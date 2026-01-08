import React, { useState, useCallback } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button, Input, Textarea, Select } from '@/shared/components';
import { contactService } from '@/services/api';
import { CONTACT_INFO } from '@/shared/constants';

const SUBJECT_OPTIONS = [
    { value: 'consulting', label: 'Accompagnement Business (Consulting)' },
    { value: 'coaching', label: 'Coaching Personnel (Motivation)' },
    { value: 'conference', label: 'Conférence / Événement' },
    { value: 'other', label: 'Autre' },
];

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

/**
 * Contact Section Component
 * With functional form submission
 */
export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: 'consulting',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [error, setError] = useState<string | null>(null);

    const handleChange = useCallback((field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setError(null);
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setError(null);

        const result = await contactService.submit({
            name: formData.name,
            email: formData.email,
            subject: SUBJECT_OPTIONS.find(o => o.value === formData.subject)?.label || formData.subject,
            message: formData.message,
        });

        if (result.success) {
            setStatus('success');
            setFormData({ name: '', email: '', subject: 'consulting', message: '' });
        } else {
            setStatus('error');
            setError(result.error || 'Une erreur est survenue');
        }
    }, [formData]);

    return (
        <section id="contact" className="py-24 bg-petrol text-white">
            <div className="container mx-auto px-6">
                <div className="bg-white/5 border border-white/10 rounded-6xl p-8 md:p-16">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Info */}
                        <div className="w-full lg:w-1/2 space-y-10">
                            <div className="space-y-6">
                                <h2 className="section-title">Prêt pour le changement ?</h2>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                    Discutons de votre <br />
                                    Prochain Sommet.
                                </h3>
                                <p className="text-white/60 text-lg">
                                    Que ce soit pour un audit business ou un accompagnement
                                    personnel, mon équipe et moi-même sommes à votre écoute.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { icon: <Mail className="w-6 h-6 text-gold" />, title: 'Email', value: CONTACT_INFO.email },
                                    { icon: <Phone className="w-6 h-6 text-gold" />, title: 'Téléphone', value: CONTACT_INFO.phone },
                                    { icon: <MapPin className="w-6 h-6 text-gold" />, title: 'Bureau', value: CONTACT_INFO.address },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start space-x-6">
                                        <div className="bg-white/5 p-4 rounded-xl">{item.icon}</div>
                                        <div>
                                            <p className="text-xs text-white/40 uppercase font-bold tracking-wider mb-1">
                                                {item.title}
                                            </p>
                                            <p className="text-xl font-medium">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div className="w-full lg:w-1/2">
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white p-10 rounded-5xl space-y-6 shadow-2xl"
                            >
                                <h4 className="text-petrol text-2xl font-serif font-bold mb-8">
                                    Envoyez un Message
                                </h4>

                                {status === 'success' && (
                                    <div className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-xl">
                                        <CheckCircle className="w-5 h-5" />
                                        <p>Votre message a été envoyé avec succès.</p>
                                    </div>
                                )}

                                {status === 'error' && error && (
                                    <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl">
                                        <AlertCircle className="w-5 h-5" />
                                        <p>{error}</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        label="Nom Complet"
                                        placeholder="cSagombaye"
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        required
                                    />
                                    <Input
                                        label="Email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        required
                                    />
                                </div>

                                <Select
                                    label="Objet"
                                    options={SUBJECT_OPTIONS}
                                    value={formData.subject}
                                    onChange={(e) => handleChange('subject', e.target.value)}
                                />

                                <Textarea
                                    label="Message"
                                    rows={4}
                                    placeholder="Parlez-nous de votre vision..."
                                    value={formData.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    required
                                />

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    isLoading={status === 'loading'}
                                    leftIcon={<Send className="w-5 h-5" />}
                                >
                                    Envoyer la demande
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
