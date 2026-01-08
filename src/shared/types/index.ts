import React from 'react';

// Domain Entities

export interface Message {
    id?: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp?: Date;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ContactSubmission extends ContactFormData {
    submittedAt: Date;
}

// Service Types

export interface ServiceCard {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    type: 'consulting' | 'motivation';
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    image: string;
}

export interface Stat {
    label: string;
    value: string;
}

export interface SocialLink {
    name: string;
    icon: React.ReactNode;
    href: string;
}

// API Response Types

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface ChatResponse {
    message: string;
}

export interface ContactResponse {
    submitted: boolean;
    messageId?: string;
}

// Component Props Types

export interface NavigationProps {
    currentView: string;
    onNavigate: (view: string) => void;
}

export interface FooterProps {
    onNavigate: (view: string) => void;
}

export interface ServicesProps {
    onNavigate?: (view: string) => void;
}

// View Types

export type ViewType = 'home' | 'consulting' | 'motivation' | 'bio' | 'contact';
