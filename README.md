# Tik Tuk

## For developers

### Getting started

Let us take some steps to start working on the project:

1. First of all clone this repository.
2. Run `npm install` in terminal.
3. Run `npm run prepare` in terminal.
4. Rename `.env.example` to `.env`.
5. Run `npm start` in terminal.

### Project structure

I will leave a few words about the folder and logic structure of this project:

- `assets` - folder with used images, icons, fonts and other media.
- `common`- folder with constants and numeric values.
  - `constants` - here you can find most of useful constants.
  - `enums` - numeric values for better code readability.
- `components` - components and pages, which are used:
  - `basic` - basic UI components, which are used to build bigger common parts. In this folder you can find buttons, logo, inputs, etc.
  - `common` - UI components, which are commonly used on the site pages, such as navbar, footer, tiktuk, etc.
  - `modals` - just all modals.
  - `pages` - directory with pages, which are based on components.
- `containers` - logic units, which passes props to the pages. The pages just visualize their properties, but all logic is located in the containers. The containers are connecte with the app router.
  - `*/logic` - folders with logic of this container, where some actions with the store are performed.
- `helpers` - functions, classes, which are not connected to the app, but are used in its parts.
- `mocks` - mocked data, which is used here to replace not working API.
- `services` - place, where all business logic of API integration is located.
- `store` - some initial app store settings are here.
- `styles` - basic app styles, for example normalize and other.
- `types` - types of API entities ants their parts.

### Used tools

The list of tools, which are used:

- App: `TypeScript`.
- Framework: `React`.
- Store: `Redux`, `Redux Toolkit`, `Redux Saga`.
- Styled: `SCSS`, `Normalize`, `Font Awesome`.
- Developing:
  - `Husky` - pre-commit checks.
  - `Lint-staged` - capturing staged files.
  - `Prettier` - automatic formatting tool.
  - `Stylelint` - static analisis of styles.
  - `Eslint` - static analisis of scripts.
  - `Commitlint` - analisis of commit messages.
- Deploy - `Vercel`.

### Additional information

- Config of all tools are only basic and located in the root folder. You can use your own - much stricter.
- All tools work by using NPM scripts. You can find them in `package.json` in ther root folder.
- Use index files and fast imports, for example: change

  ```js
  import Button from '../../components/basic/button/index.ts';
  ```

  to

  ```js
  import { Button } from 'components';
  ```

  TypeScript is already configured for that.

## For users

It is so easy to visit the portal - just click a [link](https://tik-tuk.vercel.app/).
