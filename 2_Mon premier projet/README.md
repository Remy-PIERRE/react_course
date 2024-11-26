# Création de mon premier projet

## Installation de Node.js

Pour travailler avec React dans un environnement professionnel, il est recommandé d'installer Node.js. Cela permet de gérer les dépendances via npm (Node Package Manager) et d'utiliser des outils comme Webpack ou Vite.

[Télécharger Node.js](https://nodejs.org/en/download/prebuilt-installer)

Une fois installé, depuis votre invite de commande, vous pouvez vérifier que tout fonctionne avec les commandes :

`node -v`
`npm -v`

## Utilisation de create-react-app

create-react-app est un outil permettant de générer un projet React pré-configuré avec Webpack, Babel et d'autres outils nécessaires au développement.

:warning:
Attention, cette commande est bonne à utiliser pour les petites applications ou pour tester rapidement React mais pas pour un projet professionnel.

```shell
npx create-react-app my-app
cd my-app
npm start
```

Cela créera un projet de base avec la structure nécessaire pour commencer à développer une application React.

## Utilisation de Vite

Vite est un autre outil de développement moderne, plus rapide que create-react-app grâce à son utilisation du "hot module replacement" et de la compilation native en ES Modules.

```shell
npm create vite@latest my-vite-app
cd my-vite-app
npm install
npm run dev
```

## Présentation de l'arborescence des dossiers

- node_modules : Contient toutes les dépendances installées via npm.
- package.json : Fichier qui gère les dépendances et scripts du projet.
- public : Contient les fichiers statiques les images, etc.
- index.html : Le fichier HTML de base qui charge votre application React.
- src : Contient le code source de votre application (composants React, styles, etc.).
