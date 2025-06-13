# Valorant App API

Une application web moderne développée avec Next.js pour explorer l'univers de Valorant. Cette application fournit une interface utilisateur élégante pour consulter les informations sur les agents, les cartes et les épisodes du jeu.

## 🚀 Démo en direct

[https://valorant-app-api.vercel.app/](https://valorant-app-api.vercel.app/)

## ✨ Fonctionnalités

- **🎮 Agents** : Parcourez tous les agents de Valorant avec leurs détails et capacités
- **🗺️ Maps** : Explorez toutes les cartes disponibles dans le jeu
- **📅 Jours/Épisodes** : Suivez les différents épisodes et actes du jeu
- **🌓 Mode sombre/clair** : Interface adaptative avec basculement entre thèmes
- **📱 Design responsive** : Compatible avec tous les appareils
- **⚡ Performance optimisée** : Chargement rapide grâce à Next.js

## 🆕 Fonctionnalités Next.js 15.3

Cette application utilise les dernières fonctionnalités de Next.js 15.3 avec App Router :

- **🚀 App Router** : Nouvelle architecture de routage pour de meilleures performances
- **⚡ Server Components** : Rendu côté serveur par défaut pour un chargement optimisé
- **🔄 Streaming** : Chargement progressif des composants
- **📁 File-based Routing** : Routes basées sur la structure des dossiers dans `/app`
- **🎯 Layout System** : Layouts imbriqués pour une meilleure organisation
- **🔗 Dynamic Routes** : Routes dynamiques avec paramètres `[id]`

## 🛠️ Technologies utilisées
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **API** : [Valorant API](https://valorant-api.com/) pour les données du jeu
- **Hébergement** : Vercel
- **UI Components** : Composants React personnalisés

## 📦 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/Manidoux41/valorant-app-api.git
   cd valorant-app-api
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configurer les variables d'environnement** (si nécessaire)
   ```bash
   cp .env.example .env.local
   ```
   
   L'application utilise l'API publique de Valorant, aucune clé API n'est requise.

4. **Lancer l'application en développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

5. **Ouvrir dans le navigateur**
   
   Naviguez vers [http://localhost:3000](http://localhost:3000)

## 🚀 Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement (localhost:3000)
npm run build    # Construit l'application pour la production
npm run start    # Démarre le serveur de production
npm run lint     # Vérifie le code avec ESLint
npm run type-check # Vérification TypeScript (si configuré)
```

## 🚀 Déploiement

Cette application est optimisée pour un déploiement sur Vercel :

### Déploiement automatique
- Connectez votre repository GitHub à Vercel
- Chaque push sur la branche principale déclenchera un déploiement automatique

### Déploiement manuel
```bash
npm run build
npm run start
```

## 📁 Structure du projet

```
valorant-app-api/
├── app/                # App Router (Next.js 15.3)
│   ├── layout.tsx      # Layout racine
│   ├── page.tsx        # Page d'accueil
│   ├── globals.css     # Styles globaux
│   ├── agents/         # Route /agents
│   │   ├── page.tsx    # Page liste des agents
│   │   └── [id]/       # Route dynamique agent
│   │       └── page.tsx
│   ├── maps/           # Route /maps
│   │   ├── page.tsx    # Page liste des cartes
│   │   └── [id]/       # Route dynamique carte
│   │       └── page.tsx
│   ├── episodes/       # Route /episodes
│   │   └── page.tsx    # Page des épisodes
│   └── api/            # Routes API
│       ├── agents/     # API endpoints agents
│       ├── maps/       # API endpoints cartes
│       └── episodes/   # API endpoints épisodes
├── components/         # Composants React réutilisables
├── lib/               # Utilitaires et configuration
├── types/             # Définitions TypeScript
├── public/            # Assets statiques
└── styles/            # Fichiers de style additionnels
```

## 🎯 Utilisation

### Navigation principale
- **🏠 Accueil** : Vue d'ensemble de l'application
- **👥 Agents** : Liste complète des agents avec détails
- **🗺️ Maps** : Galerie des cartes de jeu
- **📅 Épisodes** : Informations sur les épisodes et actes

### Fonctionnalités
- **Recherche** : Filtrez les agents et cartes
- **Détails** : Cliquez sur un élément pour voir les informations détaillées
- **Thème** : Basculez entre mode sombre et clair
- **Responsive** : Interface adaptée à tous les écrans

## 🔌 API

L'application utilise l'API Valorant publique avec les nouveaux patterns Next.js 15.3 :
- **Base URL** : `https://valorant-api.com/v1/`
- **Routes API (App Router)** :
  - `GET /api/agents` - Liste des agents
  - `GET /api/agents/[id]` - Détails d'un agent
  - `GET /api/maps` - Liste des cartes
  - `GET /api/maps/[id]` - Détails d'une carte
  - `GET /api/episodes` - Informations des épisodes

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. **Créez** votre branche de fonctionnalité
   ```bash
   git checkout -b feature/NouvelleFonctionnalite
   ```
3. **Committez** vos changements
   ```bash
   git commit -m 'Ajout d'une nouvelle fonctionnalité'
   ```
4. **Push** vers la branche
   ```bash
   git push origin feature/NouvelleFonctionnalite
   ```
5. **Ouvrez** une Pull Request

### Guidelines de contribution
- Respectez le style de code existant
- Ajoutez des tests si nécessaire
- Mettez à jour la documentation
- Utilisez des messages de commit descriptifs

## 🐛 Signaler des bugs

Si vous trouvez un bug, veuillez ouvrir une issue avec :
- Description détaillée du problème
- Étapes pour reproduire le bug
- Comportement attendu vs observé
- Captures d'écran si applicable

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- **[Valorant API](https://valorant-api.com/)** - Pour l'API gratuite et complète
- **[Riot Games](https://www.riotgames.com/)** - Pour le jeu Valorant
- **Communauté Next.js** - Pour l'excellent framework
- **Communauté Valorant** - Pour l'inspiration et les retours

## 📞 Contact

**Manidoux41**
- GitHub : [@Manidoux41](https://github.com/Manidoux41)
- Application : [valorant-app-api.vercel.app](https://valorant-app-api.vercel.app/)

Pour toute question ou suggestion :
- 🐛 Ouvrez une [issue](https://github.com/Manidoux41/valorant-app-api/issues)
- 💡 Proposez une [feature request](https://github.com/Manidoux41/valorant-app-api/issues/new)

## 🔗 Liens utiles

- [Documentation Next.js 15](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Valorant API Documentation](https://valorant-api.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vercel Documentation](https://vercel.com/docs)

---

<div align="center">
  <strong>Développé avec ❤️ pour la communauté Valorant</strong>
  <br>
  <sub>Projet open source sous licence MIT</sub>
</div>