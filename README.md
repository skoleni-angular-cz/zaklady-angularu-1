# Základy Angularu - Cvičení 1 - Úkolníček

Naším cílem bude naprogramovat si jednoduchý úkolníček, kam půjde:
1. Přidávat úkoly s uživatelsky volitelným názvem,
2. Označovat již přidané úkoly jako hotové,
3. Mazat již přidané úkoly (bez ohledu na jejich stav).

## Dílčí práce k provedení

V souboru `src/app/app.component.html` máte připravené jednoduché statické HTML, které odpovídá GUI budoucího interaktivního úkolníčku. Úkolem tohoto cvičení bude toto HTML *oživit* za pomocí technologie Angular.

### 1. Identifikujte UI atomy a vytvořte z nich komponenty se vhodnými `@Input`y.

### 2. Identifikujte UI molekuly a vytvořte z nich komponenty se vhodnými `@Input`y.

### 3. Doimplementujte do UI atomů a molekul `@Outputy`. Snažte se eventy dotáhnout až na úroveň `AppComponent`, kde ponecháte prázdnou obsluhu daných eventů.
* Pomocný kód pro zjištění hodnoty HTML `input` elementu z JS `Event`u:
```
const inputValue = ($event.target as HTMLInputElement).value;
```

### 4. Použijte direktivy pro oživení vykreslování:
#### 4.1 `*ngFor` pro vykreslení seznamu objektů `TodoItem`.
#### 4.2 `*ngIf` pro podmínění zobrazení zelené fajfky na základě podmínky `todoItem.completed === true`.
#### 4.3 Nechť se mění barva názvu úkolu na zelenou na základě podmínky `todoItem.completed === true`.
* Text udělá zeleným CSS třída `text-success`.

### 5. Pokuste se naimplementovat jednoduchou lokální databázi úkolů formou manipulace s JS polem:
#### 5.1 Implementujte operaci přidání úkolu do seznamu,
#### 5.2 Implementujte operaci odebrání úkolu ze seznamu,
#### 5.3 Implementujte operaci označení úkolu jako hotového.
