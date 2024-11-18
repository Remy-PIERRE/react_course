# Affichage et gestion d'une liste de fruits

## Mise en place

- Récupérer le fichier `App.jsx`
- Assurez-vous que Bootstrap est activé dans votre application pour garantir un affichage correct.

# Affichage des éléments d'une liste (rendu en boucle)

1. À partir de la liste de fruits suivante :

```js
const fruits = [
  { id: 1, name: "cerise" },
  { id: 2, name: "fraise" },
  { id: 3, name: "citron" },
  { id: 4, name: "orange" },
  { id: 5, name: "litchi" },
];
```

- Afficher cette liste de fruits dans un tableau. Remplacez les éléments par défaut par ceux de cette liste en utilisant la méthode .map() pour éviter la répétition de code.
- Créez une fonction permettant d'ajouter un fruit à la liste existante lors de la soumission du formulaire. L'affichage doit être mis à jour automatiquement grâce à l'utilisation du state.
- Créez une fonction permettant de supprimer un fruit en cliquant sur le bouton "Supprimer". Cette fonction doit mettre à jour l'affichage de l'application en temps réel.

# Composants

Le composant App.jsx peut devenir assez volumineux. Pour alléger ce composant, nous allons créer un composant enfant FruitRow.jsx.

- Créez le composant FruitRow.jsx et transférez-y le code JSX relatif à l'affichage d'un fruit (supprimez le code redondant du composant parent).
- Passez les props nécessaires pour afficher correctement le nom du fruit dans le composant FruitRow.
- Passez également une prop pour permettre au composant FruitRow de signaler au parent la suppression d'un fruit.
- Mettez à jour l'affichage pour refléter les fruits restants après une suppression.
