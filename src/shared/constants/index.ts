import React from 'react';
import {
    Briefcase,
    Zap,
    Facebook,
    Youtube,
} from 'lucide-react';
import type { ServiceCard, Stat, Testimonial, SocialLink } from '../types';

// Color Palette
export const COLORS = {
    petrol: '#0A192F',
    gold: '#C5A059',
    offwhite: '#F8F9FA',
} as const;

// Contact Information
export const CONTACT_INFO = {
    phone: '+235 69 11 73 88',
    email: 'mmmotivation03@gmail.com',
    address: "N'Djamena, Tchad",
} as const;

// Services
export const SERVICES: ServiceCard[] = [
    {
        id: 'consulting',
        title: '3M Consulting',
        description: 'Accompagnement stratégique premium pour entreprises et porteurs de projets. Audit, structuration et développement business.',
        icon: React.createElement(Briefcase, { className: 'w-8 h-8' }),
        type: 'consulting',
    },
    {
        id: 'motivation',
        title: '3M Motivation',
        description: 'Programmes de transformation mentale et leadership. Conférences inspirantes et ateliers de coaching de vie.',
        icon: React.createElement(Zap, { className: 'w-8 h-8' }),
        type: 'motivation',
    },
];

// Statistics
export const STATS: Stat[] = [
    { label: 'Ambassadeurs du Changement', value: '5000+' },
    { label: 'Projets Accompagnés', value: '120+' },
    { label: 'Heures de Formation', value: '1500+' },
    { label: 'Conférences Données', value: '45+' },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Idriss Mahamat',
        role: 'Entrepreneur Tech',
        content: "L'approche de Coach 3M a radicalement transformé ma vision du business. La discipline est devenue mon plus grand atout.",
        image: 'https://picsum.photos/seed/idriss/200/200',
    },
    {
        id: '2',
        name: 'Fatima Zohra',
        role: 'Leader Communautaire',
        content: "Un mentorat d'une qualité rare. Plus qu'une formation, c'est un éveil au leadership africain moderne.",
        image: 'https://picsum.photos/seed/fatima/200/200',
    },
];

// Social Links
export const SOCIALS: SocialLink[] = [
    {
        name: 'Facebook',
        icon: React.createElement(Facebook, { className: 'w-5 h-5' }),
        href: 'https://www.facebook.com/share/1CQGCCYFPa/'
    },
    {
        name: 'YouTube',
        icon: React.createElement(Youtube, { className: 'w-5 h-5' }),
        href: 'https://youtube.com/@3mmotivation'
    },
];

// Navigation Links
export const NAV_LINKS = [
    { name: 'Accueil', id: 'home' },
    { name: 'Consulting', id: 'consulting' },
    { name: 'Motivation', id: 'motivation' },
    { name: 'Bio', id: 'bio' },
    { name: 'Contact', id: 'contact' },
] as const;
