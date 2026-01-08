import { useEffect } from 'react';

interface SEOConfig {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
}

const BASE_TITLE = 'Coach 3M';
const DEFAULT_DESCRIPTION = "Coach 3M - Excellence entrepreneuriale et coaching de vie au Tchad. Moustapha Mahamat Moustapha accompagne les entrepreneurs vers le succès.";

/**
 * SEO configurations for each page
 */
export const SEO_CONFIG: Record<string, SEOConfig> = {
    home: {
        title: `${BASE_TITLE} | Excellence Entrepreneuriale`,
        description: DEFAULT_DESCRIPTION,
        keywords: 'Coach 3M, coaching, entrepreneuriat, Tchad, Moustapha Mahamat Moustapha, consulting, motivation, leadership',
    },
    consulting: {
        title: `3M Consulting | Conseil Stratégique - ${BASE_TITLE}`,
        description: "Accompagnement stratégique premium pour entreprises au Tchad. Audit, structuration et développement business avec Coach 3M.",
        keywords: 'consulting Tchad, conseil stratégique, audit entreprise, développement business, Coach 3M',
    },
    motivation: {
        title: `3M Motivation | Coaching & Conférences - ${BASE_TITLE}`,
        description: "Programmes de transformation mentale et leadership. Conférences inspirantes et ateliers de coaching de vie par Coach 3M.",
        keywords: 'motivation, coaching de vie, conférences, leadership, développement personnel, Coach 3M',
    },
    bio: {
        title: `Moustapha Mahamat Moustapha | Biographie - ${BASE_TITLE}`,
        description: "Découvrez le parcours de Coach 3M, Moustapha Mahamat Moustapha, consultant et coach reconnu au Tchad et en Afrique.",
        keywords: 'Moustapha Mahamat Moustapha, biographie, parcours, Coach 3M, Tchad',
    },
    contact: {
        title: `Contact | Réserver une Session - ${BASE_TITLE}`,
        description: "Contactez Coach 3M pour un accompagnement business ou coaching personnel. Basé à N'Djamena, Tchad.",
        keywords: 'contact Coach 3M, réservation, session coaching, N\'Djamena',
    },
};

/**
 * Hook to update page SEO meta tags dynamically
 * Updates title, description and keywords based on current view
 */
export function useSEO(view: string): void {
    useEffect(() => {
        const config = SEO_CONFIG[view] || SEO_CONFIG.home;

        // Update title
        document.title = config.title;

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', config.description);
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords && config.keywords) {
            metaKeywords.setAttribute('content', config.keywords);
        }

        // Update Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', config.title);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', config.description);
        }

        // Update Twitter
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', config.title);
        }

        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', config.description);
        }
    }, [view]);
}
