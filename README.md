# RJ Leyva's Modern Docs Example

A modern documentation site built with cutting-edge web technologies for fast, accessible, and maintainable documentation.

## Tech Stack

### Core Framework
- **React 19.2.3** - Latest React with concurrent features and improved performance
- **TypeScript 5.9.3** - Strict type checking and modern JavaScript features
- **Vite 7.3.0** - Lightning-fast build tool with HMR and optimized production builds

### Build & Development Tools
- **pnpm** - Fast, disk-efficient package manager
- **React Compiler** - Automatic optimization of React components
- **ESLint** - Code linting with strict TypeScript rules
- **Prettier** - Code formatting with import sorting

### Documentation Processing
- **Unified** - Text processing framework for markdown
- **Remark** - Markdown parser with GitHub Flavored Markdown support
- **Rehype** - HTML processor for custom React components
- **YAML Frontmatter** - Metadata support for pages

### Styling & UI
- **Modern Normalize** - Modern CSS reset for consistent styling
- **React Helmet** - Dynamic head management for SEO

### Development Experience
- **Strict TypeScript Configuration** - Type-safe development with no `any` types
- **Accessibility Linting** - JSX accessibility rules enforcement
- **React Refresh** - Fast refresh during development
- **Path Aliases** - Clean imports with `@/` prefix

## Features

- ⚡ **Fast Development** - Vite's instant HMR and React Compiler
- 🎯 **Type Safe** - Full TypeScript coverage with strict rules
- 📝 **Markdown First** - Content-driven with rich markdown processing
- ♿ **Accessible** - Built-in accessibility linting and best practices
- 🔍 **SEO Optimized** - Dynamic meta tags and structured content
- 🚀 **Production Ready** - Optimized builds with modern tooling

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
      // other options...
    }
  }
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactDom from 'eslint-plugin-react-dom'
import reactX from 'eslint-plugin-react-x'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
      // other options...
    }
  }
])
```
