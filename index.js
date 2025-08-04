/*
  1) Quali sono i tipi primitivi principali in TypeScript?

  2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

  3) Tipizza il parametro della seguente funzione:

const greet = (name) => {  return "Ciao " + name }

  4) Specifica il tipo di ritorno della seguente funzione:

const sum = (a: number, b: number) => {  return a + b }

  5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

  6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

  7) Cos'è un Type Union e come si scrive?

  8) Crea una variabile che possa contenere un numero, null o undefined.

  9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

  10) Tipizza il seguente array di numeri nei due modi possibili:

const numbers = [1, 2, 3]

  11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

  12) Qual è la differenza tra type e interface?

  13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

  14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

  15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

  16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

  17) Crea un oggetto che implementi l'interfaccia Auto.

  18) Cosa sono i Generics in TypeScript?

  19) È possibile avere più tipi generici in un'interfaccia?

  20) Crea un'interfaccia generica per una risposta API.
*/

// 1) I tipi primitivi principali in TypeScript sono: string, number, boolean, null, undefined, any ecc.

// 2) Variabili tipizzate
var myName = "Francesco";
var myAge = 23;
var isStudying = true;

// 3) Tipizzazione del parametro della funzione greet
var greet = function (name) {
    return "Ciao " + name;
};

// 4) Specifica del tipo di ritorno della funzione sum
var sum = function (a, b) {
    return a + b;
};

// 5) Funzione che calcola il prezzo con IVA
var calculatePriceWithVAT = function (price) {
    var vatRate = 0.22;
    return price + (price * vatRate);
};

// 6) Funzione che concatena due stringhe e restituisce la lunghezza totale
var concatenateAndGetLength = function (str1, str2) {
    var concatenatedString = str1 + str2;
    return concatenatedString.length;
};

// 8) Variabile che può contenere un numero, null o undefined
var optionalNumber;
optionalNumber = 42; // può essere un numero
optionalNumber = null; // può essere null
optionalNumber = undefined; // può essere undefined

// 10) Tipizzazione dell'array di numeri
var firstNumbers = [1, 2, 3]; // Primo modo
var secondNumbers = [1, 2, 3]; // Secondo modo