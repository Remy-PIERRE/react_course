- Récupérer le fichier <code>App.jsx</code>
- Bootstrap doit être activé sur votre application pour un affichage correcte

# Affichage des éléments d'une liste (rendu en boucle)

- En utilisant la liste de fruits suivantes :

```js
const fruits = [
  {
    id: 1,
    name: "cerise",
  },
  {
    id: 2,
    name: "fraise",
  },
  {
    id: 3,
    name: "citron",
  },
  {
    id: 4,
    name: "orange",
  },
  {
    id: 5,
    name: "litchi",
  },
];
```

- Afficher dans le tableau les fruits renseignés (remplacer ceux indiqués par defaut) en utilisant la méthode <code>.map</code> pour éviter les répétitions de code.
- Créez un fonction permettant de supprimer un fruit en clickant sur le bouton "Supprimer" et qui mette à jour l'affichage de votre application automatiquement (utiliser un state pour gérer le rendu).

# Composants

Le composant <code>App.jsx</code> est un peu imposant.
Nous allons réduire la quantité de code dans ce composant en créant un composant enfant <code>FruitRow.jsx</code>

- Créer ce nouveau composant et y insérer le code jsx correspondant (supprimer le code redondant du composant parent).
- Insérer les props permettant d'afficher le nom du fruit correctement.
- Insérer les props permettant de reporter au composant parent la suppression d'un fruit.
- Mettre à jour l'affichage en fonction des fruits restants.
