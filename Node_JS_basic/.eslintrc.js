module.exports = {
    env: {
      browser: false,     // Ce projet ne tourne pas dans un navigateur
      commonjs: true,     // Utilise require/module.exports
      es2021: true,       // Active les fonctionnalités ES2021
      node: true,         // Active les variables globales Node.js
      jest: true          // Permet d'utiliser les globals Jest (describe, test, expect, etc.)
    },
    extends: 'eslint:recommended',  // Utilise les règles recommandées d'ESLint
    parserOptions: {
      ecmaVersion: 12               // Prend en charge les fonctionnalités ECMAScript jusqu’à ES2021
    },
    rules: {
      indent: ['error', 2],         // Imposer 2 espaces pour l’indentation
      'linebreak-style': ['error', 'unix'], // Utilise les sauts de ligne Unix (\n)
      quotes: ['error', 'single'],  // Utilise des guillemets simples
      semi: ['error', 'always']     // Imposer l’usage du point-virgule
    }
  };
