# Architecture d'un composant

## Création d'un composant

Les composants React majoritairements créés en tant que fonctions. Voici un exemple d'un composant simple :

```jsx
function Greeting() {
  return <h1>Bonjour, bienvenue dans React !</h1>;
}

export default Greeting;
```

## Import/Export des composants

Pour réutiliser les composants, on les exporte et les importe dans d'autres fichiers :

```jsx
// Composant Greeting //
export default function Greeting() {
  return <h1>Bonjour, bienvenue dans React !</h1>;
}
```

```jsx
// Composant parent App.jsx //
import Greeting from "./Greeting";

export default App() {
    return (
        <>
            <Greeting />
        </>
    )
}
```

## JSX

JSX (JavaScript XML) est une syntaxe utilisée dans React pour décrire à quoi ressemble l'interface utilisateur. Elle permet de combiner des éléments HTML et du JavaScript au sein d'un même fichier, ce qui rend le code plus lisible et facile à comprendre.

- **Syntaxe proche de l'HTML :** JSX ressemble fortement à du HTML, mais avec quelques différences importantes pour que JavaScript et HTML fonctionnent ensemble de manière fluide.

```jsx
const element = <h1>Bonjour, bienvenue dans React !</h1>;
```

- **Intégration de JavaScript avec des accolades {} :** Dans JSX, vous pouvez insérer des expressions JavaScript en utilisant des accolades {}. Par exemple, vous pouvez insérer une variable, une fonction ou même des calculs directement dans le JSX.

```jsx
const name = "John";
const greeting = <h1>Bonjour, {name} !</h1>;
```

- **Attributs en camelCase :** En HTML, les attributs comme class ou for sont utilisés. Cependant, en JSX, ces attributs sont remplacés par className et htmlFor pour des raisons de compatibilité avec le JavaScript.

```jsx
const button = <button className="btn">Cliquez-moi</button>;
```

- **Les balises JSX doivent être fermées :** Contrairement à HTML, toutes les balises dans JSX doivent être fermées, même celles qui sont auto-fermantes comme `<img />`, `<input />`, etc.

```jsx
const image = <img src="image.jpg" alt="exemple" />;
```

- **Composants React dans JSX :** Vous pouvez utiliser des composants React dans votre JSX, en les appelant comme des balises HTML personnalisées, mais avec une majuscule au début du nom du composant.

```jsx
// Composant Greeting //
export default function Greeting() {
  return <h1>Bonjour, bienvenue dans React !</h1>;
}
```

```jsx
// Composant parent App.jsx //
import Greeting from "./Greeting";

export default App() {
    return (
        <>
            <Greeting />
        </>
    )
}
```

- **Expressions conditionnelles et boucles dans JSX :** Vous pouvez inclure des expressions conditionnelles dans JSX, comme l'utilisation de l'opérateur ternaire pour afficher des éléments de manière conditionnelle.

Rendu conditionnel :

```jsx
const isLoggedIn = true;
const message = isLoggedIn ? (
  <h1>Bienvenue</h1>
) : (
  <h1>Veuillez vous connecter</h1>
);
```

Rendu en boucle :

```jsx
const fruits = ["Pommes", "Bananes", "Cerises"];
const listFruits = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

return <ul>{listFruits}</ul>;
```

- **Ecouteurs d'évenement :** Vous pouvez ajouter des listeners pour réagir aux événements utilisateurs, comme un clic.

```jsx
function Button() {
  function handleClick() => {
    alert("Bouton cliqué !");
  };

  return <button onClick={handleClick}>Cliquez-moi</button>;
}
```
