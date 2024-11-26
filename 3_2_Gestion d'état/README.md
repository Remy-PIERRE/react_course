# Gestion d'état

## Définition

L'état (state) permet de stocker des informations qui affectent le rendu de votre composant, c'est à dire que le composant sera rafraichit à chaque modification de l'état.

## Syntaxe

React fournit un hook appelé useState pour gérer l'état :

```jsx
const [getter, setter] = useState(valeurInitiale);
```

- `getter` : permet d'utiliser la valeur actuelle de notre état.
- `setter` : permet de modifier la valeur de notre état et de déclencher le rafraichissement de notre composant.
- `valeurInitiale` : permet d'offrir à notre état ne valeur initiale, peut être nulle.

_warning_ On ne modifie jamais directement la valeur d'un état en passant par son getter, cela entrainerais des erreurs et ne déclenche pas le rafraichissement de notre composant.

```jsx
// On importe le hook pour pouvoir l'utiliser depuis notre composant //
import { useState } from "react";

function Counter() {
    // On déclare et initialise notre état //
  const [count, setCount] = useState(0);

    // On utilise notre setter pour modifier la valeur de notre état //
  function increment() => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Compteur: {count}</p>
      <button onClick={increment}>Ajouter 1</button>
    </div>
  );
}
```

## Un exemple concret d'utilisation

Les formulaires dans React se gèrent de manière similaire, en utilisant l'état pour capturer les valeurs des champs.

```jsx
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) => {
    event.preventDefault();
    alert(`Nom: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Nom"
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <button type="submit">Valider</button>
    </form>
  );
}
```
