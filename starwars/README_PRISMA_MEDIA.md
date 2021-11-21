## TEST PRISMA MEDIA

Voici ici toutes mes notes et commentaires pour éviter de polluer le code pour le test,
éclaircir certains points ou des bonnes pratiques à ne pas oublier et mettre en place.

### `API`
Il n'y a pas eu besoin de faire d'appel API sur ce test, mais en général, l'architecture contient quelques dossiers permettant de mettre en place des requêtes.

Les dossiers qui touchent les appels API:
 - redux
 - middleware
 - store

### `Translations`
On peut utiliser un système de traduction avec `i18n` pour faire une gestion de clef de traduction en plusieurs langues
différentes et permet un accès au wording simple pour le métier.

Structure dossier: `public/assets/i18n/`

Fichiers à l'intérieur:
 - index.js
 - fr.js
 - en.js
 - ...

### `Test Unitaires`
Je n'ai pas fait de tests unitaires dans ce test, mais ce sont des bonnes
pratiques à mettre en place. En général je les places dans chaque dossier
parent.

Structure dossier: `src/js/component/myComponent/__tests__`

Fichiers à l'intérieur:
 - myComponent.test.js
 - \_\_snapshots__/myComponent.test.js.snap
 
 ### `Atomic Design`
J'ai mis en place ici la structure atomic design, que je trouve être
une très bonne pratique pour la réutilisation des composants et
de les classifier.
 - atoms
 - molecules
 - organisms
 - templates
 - pages

 ### `ESLint`
 Le linter est une bonne pratique à mettre en place pour vérifier une 
 norme à suivre pour avoir un code ISO, avec une base saine pour
 un code propre pour faciliter la lecture du code et de repasser dessus
 sans se perdre.
 
  ### `Responsive Design`
Le responsive design est l'une des bases d'une US à mettre en place.
Ici elle n'était pas demandé dans le test, mais c'est une chose à faire attention
et à ne pas oublier pour un développeur, afin que le projet puisse être lisible sur
toutes les plateformes.
En genéral, on le fait grace aux media-queries: `@media`.
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
