# TP 01 IMC

- Utiliser la maquette <code>App.jsx</code> pour réaliser ce tp.
- L'ajout de la ligne suivante dans le <code>head</code> de votre <code>index.html</code> permet d'utiliser les classe Bootstrap de la maquette fournie.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
/>
```

- Saisir le poids en kg
- Saisir la taille en m

imc = poids / (taille\*taille)

80kg / (1.8m\* 1.8m) = 25

Si imc < 18.5 je suis en tranche maigreur  
Si 18.5 <imc < 25 je suis en tranche normal  
Si 25 <imc < 30 je suis en tranche surpoids  
Si 30 <imc < 35 je suis en tranche obésité  
Si 35 <imc < 40 je suis en tranche obésité massive  
Si > 40 je suis en tranche obésité sévère

changer les couleur className en fonction de l'imc

Afficher le poids à atteindre
Afficher le nombre de kg à perdre

https://fr.wikipedia.org/wiki/Indice_de_masse_corporelle
