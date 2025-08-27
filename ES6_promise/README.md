# ES6 Promises

## 📌 Description
Projet d'apprentissage sur les **Promises en JavaScript ES6**.  
L’objectif est de comprendre :
- comment fonctionnent les Promises,
- comment gérer le succès et l’échec (`then`, `catch`),
- comment utiliser `async/await`,
- et les différentes méthodes (`all`, `race`, `allSettled`, etc.).

---

## 📚 Ressources
- [JavaScript Promise: An introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)  
- [Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await)  
- [Try / Catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)  

---

## 🎯 Learning Objectives
À la fin de ce projet, vous devez être capable d’expliquer (sans Google) :  
- Les Promises : pourquoi et comment elles sont utilisées.  
- L’utilisation de `then`, `resolve`, `catch`.  
- Les méthodes de l’objet `Promise` :  
  - `all`, `race`, `allSettled`, `any`  
- `throw` et `try/catch`.  
- L’opérateur `await`.  
- Les fonctions `async`.  

---

## ⚙️ Setup
### Prérequis
- **Node.js** v20.x.x  
- **npm** v9.x.x  

### Installation
```bash
# Installer Node.js (si nécessaire)
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

# Vérifier versions
node -v
npm -v

# Installer dépendances
npm install
