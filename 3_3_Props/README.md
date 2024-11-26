# Les Props

## Definition

Les props (propriétés) sont des objets qui permettent de passer des informations d'un composant parent à un composant enfant. Elles sont utilisées pour rendre les composants plus dynamiques et réutilisables. Les props sont immuables dans le composant enfant, c'est-à-dire qu'un composant enfant ne peut pas modifier les props qu'il reçoit.

## Passer des props vers un composant enfant

Pour passer des props à un composant enfant, vous incluez les données sous forme d'attributs sur la balise du composant enfant dans le composant parent.

```jsx
import React from "react";

// Composant parent
function App() {
  return (
    <div>
      {/* La props name est passée à chacun des composants enfant */}
      <Greeting name="John" />
      <Greeting name="Doe" />
    </div>
  );
}

// Composant enfant //
function Greeting(props) {
  // On peut extraire l'information en atnt que props et l'utilisée depuis le composant //
  return <h1>Bonjour, {props.name} !</h1>;
}

export default App;
```

## Remonter des informations vers le composant parent

```jsx
import React, { useState } from "react";

// Composant parent //
function App() {
  const [message, setMessage] = useState("");

  const handleButtonClick = (msg) => {
    // La fonction est exécutée par l'enfant pour mettre à jour l'état du parent //
    setMessage(msg);
  };

  return (
    <div>
      <Button onButtonClick={handleButtonClick} />
      <p>Message du parent: {message}</p>
    </div>
  );
}

// Composant enfant //
function Button(props) {
  function handleClick() => {
    // L'enfant appelle la fonction du parent via les props //
    props.onButtonClick("C'est l'enfant qui parle !");
  };

  return <button onClick={handleClick}>Cliquez-moi</button>;
}

export default App;
```

## Passer des props avec des objets ou des tableaux

Les props peuvent être de n'importe quel type : chaînes de caractères, nombres, tableaux, objets, fonctions, etc. Voici un exemple où nous passons un objet et un tableau comme props.

```jsx
import React from "react";

// Composant parent //
function App() {
  const user = { name: "John Doe", email: "johnDoe@example.com" };
  const fruits = ["Pommes", "Bananes", "Cerises"];

  return (
    <div>
      <UserProfile user={user} />
      <List data={fruits} />
    </div>
  );
}

// Composant enfant UserProfile //
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

// Composant enfant List //
function List({ data }) {
  return (
    <ul>
      {data.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
}

export default App;
```
