# 2. Applicatie

## Lesdoelen
Aan het einde van deze les heb je:

## Opdracht
In deze les gaan we verder met het ontwikkelen van onze 'Fitness Tracker' applicatie. We zullen ons richten op het implementeren van de frontend van de applicatie.

Je hebt waarschijnlijk wel al een idee van de classes die je kunt gaan definieren voor de applicatie, zoals `Exercise`, `Workout`, en `User`. Minder voor de hand liggend maar deste belangrijk is de `Application` zelf. 

De `Application` klasse zal de applicatie starten en de gebruikersinterface beheren. Zoals data-communicatie, de DOM aanpassen, event listeners toevoegen, en de juiste acties uitvoeren wanneer de gebruiker interactie heeft met de applicatie.

### 2.1. De Application klasse

1. Begin met het schrijven van de `Application` class.  
   Deze class zal de hoofdfunctionaliteit van onze applicatie bevatten.

2. Voeg een constructor toe aan de `Application` class.  
   Deze constructor wordt aangeroepen wanneer we een nieuw object van de `Application` class maken.  
   Log een bericht naar de console om te controleren of de constructor correct wordt aangeroepen.

3. Schrijf een methode in de `Application` class die de DOM update.  
   Deze methode moet de links voor inloggen/uitloggen tonen of verbergen afhankelijk van of een gebruiker is ingelogd of niet. Omdat er nu nog geen gebruiker is ingelogd, moet je de juiste links verbergen. Maak voor deze gebruiker een eigenschap in de class.

4. In de constructor, koppel een methode aan het 'load' event van het document.  
   Dit zorgt ervoor dat de methode wordt uitgevoerd zodra de pagina volledig is geladen en is handig omdat het ons in staat stelt om ervoor te zorgen dat onze applicatie correct is geïnitialiseerd voordat we proberen om interactie te hebben met de DOM.

5. Maak een nieuw object van de `Application` class.  
   Dit zal de applicatie starten en de gebruikersinterface beheren.

6. Test je applicatie door de pagina te herladen en te controleren of de links voor inloggen/uitloggen worden getoond of verborgen.

### 2.2. De login/logout functionaliteit

1. Schrijf een methode in de `Application` class die de gebruiker inlogt.  
   Deze methode moet het dialoogvenster voor inloggen tonen en de gebruiker inloggen wanneer de gebruiker de juiste gegevens invoert.  
   Deze controle kan voor nu eenvoudig zijn, bijvoorbeeld door te controleren of de gebruikersnaam en het wachtwoord niet leeg zijn, maar gaan we later met de backend uitvoeren.  

2. Schrijf de `User` class.  
   Deze class zal de gebruiker representeren en bestaat voor nu uit een username. Gebruik deze class om de gebruiker te representeren in de `Application` class.
   
3. Schrijf een methode in de `Application` class die de gebruiker uitlogt.

4. Voeg event listeners toe aan de links voor inloggen/uitloggen.  
   Koppel de juiste methode aan de links voor inloggen/uitloggen zodat de gebruiker kan inloggen en uitloggen.

5. Test je applicatie door de pagina te herladen en te controleren of je kunt inloggen en uitloggen.

6. UITDAGING  
   Onthoudt de gebruiker die is ingelogd in de browser, zodat als de pagina wordt herladen direct de gebruiker is ingelogd.

## Kennis: DialogElement

De `DialogElement` is een HTML element dat een dialoogvenster weergeeft. Het dialoogvenster kan worden geopend en gesloten met JavaScript. Het dialoogvenster kan worden gestyled met CSS.

### Eigenschappen

- `open`  
  Een boolean die aangeeft of het dialoogvenster open is of niet.

### Methoden

- `show()`  
  Opent het dialoogvenster.

- `close()`
    Sluit het dialoogvenster.

### Gebruik

```html
<dialog id="closeDialog">
    <form method="dialog">
        <button value="Jan">Jan</button>
        <button value="Piet">Piet</button>
    </form>
</dialog>
```

```javascript
const closeDialog = document.getElementById('closeDialog');

closeDialog.show();
closeDialog.close();

closeDialog.addEventListener('close', () => {
    const naam = closeDialog.returnValue;
    console.log('Het dialoogvenster is gesloten door: ' + naam);
});
```

### Meer informatie

- [MDN web docs: DialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
- [W3Schools: HTML `<dialog>` Tag](https://www.w3schools.com/tags/tag_dialog.asp)

## Kennis: import/export

In JavaScript kunnen we code vanuit andere bestanden importeren en exporteren. Dit is handig om code te structureren en te hergebruiken.

Je moet dan wel het javascript bestand in de HTML pagina importeren met een script tag met als attribuut `type="module"`. Dit zorgt ervoor dat de code in het bestand als module wordt behandeld en dat je gebruik kunt maken van de import/export functionaliteit.

```html
<script type="module" src="script/application.js"></script>
```

### Exporteren

```javascript
// exporteren van een functie
export function greet(name) {
    return 'Hello, ' + name + '!';
}

// exporteren van een variabele
export const PI = 3.14159265359;

// exporteren van een class
export class Person {
    constructor(name) {
        this.name = name;
    }
}
```

### Importeren

```javascript
// importeren van een functie
import { greet } from './greet.js';

// importeren van een variabele
import { PI } from './math.js';

// importeren van een class
import { Person } from './person.js';
```

### Meer informatie

- [MDN web docs: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [MDN web docs: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [W3Schools: JavaScript Modules](https://www.w3schools.com/js/js_modules.asp)

## Kennis: Security

Het is belangrijk om de privacy en security van de gebruiker te waarborgen. Een belangrijk punt is om nooit wachtwoorden op te slaan in de frontend. Wachtwoorden moeten altijd worden gecontroleerd in de backend.

Ook is het belangrijk om er niet van uit te gaan dat data in cookies of local storage veilig is. Deze data kan worden aangepast door de gebruiker. Gebruik deze data alleen voor tijdelijke opslag en niet voor belangrijke data zoals wachtwoorden.