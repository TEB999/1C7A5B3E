# NÁZA WEBOLDAL

## Projekt témája
Ez a projekt egy **űr-tematikájú weboldal**, ahol a felhasználók felfedezhetik a bolygókat, csillagokat és galaxisokat.  
A cél egy vizuálisan vonzó, egyszerűen navigálható weboldal létrehozása, ami magyar nyelven nyújt alapinformációkat az univerzumról.

---

## Használt programok és nyelvek

- **Next.js 13+** – React alapú keretrendszer, App Router használattal.
- **React** – Felhasználói felület komponensek létrehozásához.
- **TypeScript** – Biztonságos típuskezelés a kódminőség érdekében.
- **TailwindCSS** – Reszponzív és modern stílushoz.
- **VS Code** – Fejlesztőkörnyezet.
- **Node.js & npm** – Projekt futtatásához és csomagkezeléshez.

**Megjegyzés:** A projekt jelenlegi verziója **nem használ külső animációs könyvtárakat** (pl. Framer Motion), hogy egyszerű és könnyen futtatható legyen.

---

## Projekt struktúra

A projekt a **Next.js App Router** struktúráját követi:

/project-root
│
├─ /app
│ ├─ layout.tsx # Root layout, globális stílusok, fontok
│ ├─ page.tsx # Fő kezdőoldal (Űr-tematikus)
│ └─ /bolygok
│ └─ page.tsx # Aloldal a bolygók listájához (jelenleg üres, fejleszthető)
│
├─ /public
│ ├─ stars.svg # Csillag-háttér kép
│ └─ egyéb képek (ikonok, logók)
│
├─ /styles
│ └─ globals.css # Alap TailwindCSS stílusok
│
├─ package.json # Projektfüggőségek és parancsok
└─ tsconfig.json # TypeScript konfiguráció




---

## Funkcionalitás

1. **Főoldal (`/`)**  
   - Űr-tematikájú háttér és gradient.  
   - Címsor, leírás és két gomb:  
     - Fedezd a bolygókat (`/bolygok`)  
     - NASA weboldal linkje  
   - Lábléc a szerzői információkkal.

2. **Aloldal (`/bolygok`)**  
   - Jelenleg üres, később lehet hozzá bolygólista, képek és leírások.

3. **Reszponzív design**  
   - Teljesen mobilbarát, TailwindCSS flex/grid elrendezésekkel.

---

## Jövőbeli fejlesztési ötletek

- Bolygó-adatlapok létrehozása (`/bolygok/[planet]`).  
- Egyszerű animációk CSS-sel (pl. csillagok mozognak).  
- Sötét és világos mód kapcsoló.  
- Több nyelv támogatás (i18n).

---

## Telepítés és futtatás

1. Klónozd a projektet:

```bash
git clone <repo-url>
cd project-root
```

---

# Megjegyzés Tanár Úrnak:
Magát a szöveg tartalmát AI-al generáltam, MD struktúráját és szerkesztését saját kezem álltal csináltam. Weboldal elkészítésében szintén AI segített.