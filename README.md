# Coach 3M - Site Web Officiel

Application web professionnelle pour Coach 3M (Moustapha Mahamat Moustapha).

## Stack Technique

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS (local)
- **API**: Vercel Serverless Functions
- **Architecture**: SOLID, Feature-based

## Démarrage Local

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build
```

## Variables d'Environnement

Créer un fichier `.env.local` basé sur `.env.example` :

```env
GEMINI_API_KEY=votre_clé_gemini
RESEND_API_KEY=votre_clé_resend
```

## Déploiement Vercel

### 1. Installation CLI
```bash
npm install -g vercel
```

### 2. Connexion
```bash
vercel login
```

### 3. Déploiement
```bash
vercel deploy --prod
```

### 4. Variables d'environnement
Dans Vercel Dashboard > Settings > Environment Variables, ajouter :
- `GEMINI_API_KEY`
- `RESEND_API_KEY`

## Structure du Projet

```
src/
├── core/domain/      # Entités et interfaces
├── features/         # Modules (home, contact, consulting...)
├── shared/           # Composants réutilisables
├── services/         # Services API
├── hooks/            # Hooks personnalisés
└── lib/              # Utilitaires

api/
├── chat.ts           # Proxy Gemini AI
└── contact.ts        # Envoi emails Resend
```

## Contact

- Email: mmmotivation03@gmail.com
- Téléphone: +235 69 11 73 88

---
Conçu avec passion par c.Sagombaye
