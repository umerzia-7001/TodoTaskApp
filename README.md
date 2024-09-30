# Modern Todo App

A sleek, responsive Todo application built with React, TypeScript, and Tailwind CSS.



[View Live Demo](https://drive.google.com/file/d/11jsZvnqkpg6oTl6ZP0fVN68gLEZ-ZmUe/view?usp=sharing)

Click the video above to watch a demonstration of the Todo App.



## Features

- Add, toggle, and remove todos
- Set priority levels for todos
- Responsive design for mobile and desktop
- Clean and intuitive user interface

## Technologies Used

React + TypeScript + Vite

- React 18
- TypeScript
- Tailwind CSS
- Redux Toolkit for state management
- Vite for fast development and building

## Scalability Considerations

- **Component Structure**: The project uses a modular component structure, making it easy to add new features or modify existing ones.
- **State Management**: Redux Toolkit is used for state management, allowing for easy scaling of application state as the app grows.
- **Custom Hooks**: Reusable logic is extracted into custom hooks, promoting code reuse and maintainability.
- **TypeScript**: Strong typing with TypeScript ensures code quality and makes refactoring easier as the project scales.
- **Tailwind CSS**: Utility-first CSS approach allows for rapid UI development and easy customization.

## Future Enhancements

- Implement user authentication
- Add data persistence with a backend API
- Create categories or tags for todos
- Implement drag-and-drop functionality for reordering todos


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
