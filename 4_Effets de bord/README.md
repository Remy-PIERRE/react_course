# Les effets de bord avec useEffect

## Définition

Un effet de bord est une action qui intervient après le rendu d'un composant, comme la récupération de données via une API ou l'ajout d'un événement.

## Syntaxe

On utilise le hook `useEffect` pour contrôler les effets de bords :

```jsx
useEffect(() => {
  // instructions lors de la création / raffraichissement de notre composant //

  return () => {
    // instructions lors de la destruction / avant le rafraichissement de notre composant //
  };
}, [dependances]);
```

- **instructions** : Ces instructions sont executées lorsque le composant est créé ou rafraichit.
- **return** : Ces instructions sont executées lorsque le composant est détruit ou juste avant le rafraichissement de ce dernier. Cette parie est optionnelle.
- **depandances** : C'est un tableau qui permet de controler sous quelles conditions l'effet de bord se déclenche. Si'il n'est pas mentionné, l'effet se déclenche à chaque rafraichissement. Si c'est un tableau vide, alors il ne se déclenche que le première fois que le composant est crée. S'il contient des éléments, l'effet se déclenche à chaque fois qu'une des dépendances est modifiée.

```jsx
import { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  // Ici, l'effet n'est lancé qu'à la création du composant, inutile de relancer la requête une fois les données obtenues //
  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return <div>{data ? JSON.stringify(data) : "Chargement..."}</div>;
}
```

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);

  // Ici, on supprime l'interval lorsque le composant est supprimé / avant son rafraichissement //
  // Autrement, on risque de cumulé les intervals et de le déclencher plusieurs fois à chaque itération /
  return () => clearInterval(timer);
}, []);
```

```jsx
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Ici, l'effet n'est déclenché que si l'état count à été modifié //
  useEffect(() => {
    console.log(`Le compteur a changé ! Nouvelle valeur : ${count}`);
  }, [count]);

  return (
    <div>
      <p>Compteur: {count}</p>
      <button onClick={() => setCount(count + 1)}>Ajouter 1</button>
    </div>
  );
}

export default Counter;
```
