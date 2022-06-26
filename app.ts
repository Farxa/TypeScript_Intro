/*
Warum TypeScrip?
- vanilla JS skaliert nicht so gut. Ohne TS fehlen mit JS gewisse “leitplanken” / Fehler-vermeiden. Im Team muss viel mehr Absprache stattfinden um Fehler zu vermeiden (besonders für größere Teams keine gute Sache).



Was ist TS:
programmierSprache vom microsoft, das erste mal 2012 veröffentlicht. Ca. alle 3 monate erscheint eine neue version.
Inhaltlich gesehen ist TS eine erweiterung con JS. TS ist komplett abwärtskompatibel mit JS. Das heißt ich kann mit TS genau das machen, was ich mit JS machen kann, allerdings mit noch mehr genauigkeit. 

Es handelt sich bei tS um 2 Aspekte:
1. Zum einen bietet TS das Statische Typ System. (ähnlich zu C+ und Java)
2. Zu anderen hat TS ein Precompiler, so wie babbel. Das heisst es kann ältere JS code in moderne Sprache übersetzen um die kompatibilität zu alten browsern zu wahren.

Ein NAchteil:
TS steht zur Compile zeit zur verfügung aber nicht zur laufzeit.

*/


let text: string = 'Hallo Welt!';

text = 'Hello World!'; // <- okay because text is type string

//text = 23; <- doesn't work

const add = (left: number, right: number): number => {
    return left + right;
};


const print1 = (value: unknown): void => {
    // void: diese Function hat keinen Rückgabewert
    // unknown: we have to do some 
    // form of checking before performing 
    // most operations on values of type unknown

    // andere Typen:
    // any: wie unknown aber less strict
}

/* 
const print2 = (): never => {
    // diese Function, die niemals zurückkehrt, 
    //weil sie z.B. zum Programmabbruch führt
    // in dem sie eine exception wirft

    //example:
    //throw new Error();
}

console.log(text);

*/

// -------------------------------------------------------------------

import Todo from "Todo";
import Metadata from "Metadata";
import TodoList from "TodoList";


const todoList = new TodoList<Metadata>();

todoList.note('Code aufräumen', {assignee: '@farxa'})


// 1:05:08 Klassen und objektorientierte Programmierung

