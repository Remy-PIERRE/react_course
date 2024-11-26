# Routing basique

## Définition et avantages du routing avec React

Le routing permet de naviguer entre différentes pages de l'application sans recharger la page complète. React Router est une bibliothèque populaire pour gérer la navigation dans les applications React.

## Utilisation

Pour ajouter le routing à votre application, vous devez installer react-router-dom :

```shell
npm install react-router-dom
```

Le router doit être importé dans le fichier `main.jsx` :

```jsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// router //
import { BrowserRouter } from "react-router-dom";

// Le composant BrowserRouter encadre le composant App : on peut maintenant utiliser toutes ses fonctionnalités depuis App et ses composants enfants //
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

Nous créons maintenant 3 composants (Accueil.jsx, Apropos.jsx et Connexion.jsx) que nous insérons dans le dossier `pages` selon le modèle suivant :

```jsx
function Accueil() {
  return <h1>Bienvenue sur la page d'accueil</h1>;
}

export default Accueil;
```

Nous ajouter une barre de navigation depuis le composant App pour permettre de naviguer entre nos pages fraichement créées :

```jsx
// Ces composants permettent la navigation entre nos pages //
import { Routes, Route, Link } from "react-router-dom";

// On importe les composants concernés //
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div>
      {/* Notre barre de navigation */}
      <nav>
        <ul>
          <li>
            {/* Le composant Link est un équivalent à la balise <a> du html dans cette situation */}
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a-propos">À propos</Link>
          </li>
          <li>
            <Link to="/connexion">Connexion</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* Le composant Routes permet d'afficher la page actuellement séléctionnée // */}
      <Routes>
        {/* Chaque Route permet de séléctionner une page (=element) selon l'url actuelle (=path) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/connexion" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
```

Vous pouvez maintenant naviguer entre vos pages sans rechargement de l'application.
