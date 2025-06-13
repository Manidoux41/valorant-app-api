# Valorant UI App

Une application web moderne développée avec Next.js pour explorer l'univers de Valorant. Cette application fournit une interface utilisateur élégante pour consulter les informations sur les agents, les cartes et les épisodes du jeu.

## 🚀 Démo en direct

[https://valorant-app-api.vercel.app/](https://valorant-app-api.vercel.app/)

## ✨ Fonctionnalités

- **🎮 Agents** : Parcourez tous les agents de Valorant avec leurs détails et capacités
- **🗺️ Cartes** : Explorez toutes les cartes disponibles dans le jeu
- **📅 Jours/Épisodes** : Suivez les différents épisodes et actes du jeu
- **🌓 Mode sombre/clair** : Interface adaptative avec basculement entre thèmes
- **📱 Design responsive** : Compatible avec tous les appareils
- **⚡ Performance optimisée** : Chargement rapide grâce à Next.js

## 🛠️ Technologies utilisées

- **Framework** : Next.js
- **Hébergement** : Vercel
- **API** : Valorant API pour les données du jeu
- **Styling** : CSS/Tailwind CSS (présumé)
- **TypeScript** : Pour un code plus robuste

## 📦 Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/valorant-app-api.git
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

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env.local
   ```
   
   Ajoutez vos clés API dans `.env.local` :
   ```env
   NEXT_PUBLIC_VALORANT_API_URL=https://valorant-api.com/v1
   ```

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

## 🚀 Déploiement

Cette application est optimisée pour un déploiement sur Vercel :

1. **Déploiement automatique**
   - Connectez votre repository GitHub à Vercel
   - Chaque push sur la branche principale déclenchera un déploiement automatique

2. **Déploiement manuel**
   ```bash
   npm run build
   npm run start
   ```

## 📁 Structure du projet

```
valorant-app-api/
├── pages/              # Pages Next.js
│   ├── agents/         # Page des agents
│   ├── maps/           # Page des cartes
│   └── episodes/       # Page des épisodes
├── components/         # Composants réutilisables
├── styles/            # Fichiers de style
├── public/            # Assets statiques
├── lib/               # Utilitaires et helpers
└── api/               # Routes API Next.js
```

## 🎯 Utilisation

### Navigation
- **Agents** : Cliquez sur "Agents" pour voir tous les personnages jouables
- **Maps** : Accédez à la section "Maps" pour explorer les cartes
- **Jours/Épisodes** : Consultez les informations sur les épisodes actuels et passés
- **Mode sombre** : Utilisez le bouton de basculement pour changer de thème

### API Endpoints
L'application utilise probablement des endpoints comme :
- `/api/agents` - Récupérer tous les agents
- `/api/maps` - Récupérer toutes les cartes
- `/api/episodes` - Récupérer les informations sur les épisodes

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- [Valorant API](https://valorant-api.com/) pour fournir les données du jeu
- [Riot Games](https://www.riotgames.com/) pour le jeu Valorant
- La communauté Next.js pour l'excellent framework

## 📞 Contact

Si vous avez des questions ou des suggestions, n'hésitez pas à :
- Ouvrir une issue sur GitHub
- Me contacter via [votre-email@example.com]

## 🔗 Liens utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Valorant API Documentation](https://valorant-api.com/)
- [Vercel Documentation](https://vercel.com/docs)

---

Développé avec ❤️ pour la communauté Valorant