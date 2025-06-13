# Ui Components

A repository to share a UI Lib with Front projects based on ReactJS to have a uniform and consistent UI/UX.

## Use package in react web app

-   Create a .npmrc file with following content :

```shell


```

The authToken value should be retrieve from this repo.
You can find one in Seetings > CI/CD > Variables > REGISTRY_TOKEN.

-   Add the component library to your dependencies as a NPM package :

```
"@myui/MyUI-components" : "X.X.X"
```

with X.X.X, the version of the package.

To find the package versions, you can take a look here : Deploy > Package Registry.

## Usage

### Basic Set Up

To set up the component library, you should import the CSS file before at the root of your application :

```tsx
// import '@myui/MyUI-components/dist/css/style.css';
// import '@myui/MyUI-components/dist/fonts/fonts.css';

function App() {
    return <div>hello</div>;
}

export default App;
```

It includes the **fonts** and the **themes**.

### Theme set up

By default, the UI Library use the Dark Theme.
To modify this theme, you should add an attribute "data-theme" on the block tag you want to theme.
You could use multiple theme that work together, for example, you could have a subpage with a specific theme.

```html
<!doctype html>
<html lang="en" data-theme="light-theme">
    <head>
        <title>App</title>
    </head>

    <body>
        <div id="main-app">
            <h1>Example with subpage in dark theme</h1>
            <div data-theme="dark-theme">The content of this div will be in dark theme</div>
            <div>On the other hand, this one will be in light theme defined above</div>
        </div>
    </body>
</html>
```

Values possibles for **data-theme** :

-   light-theme
-   dark-theme (default)

### Import a component from the Library

```tsx
// Component
import { Title } from '@myui/MyUI-components';

function App() {
    return (
        <div>
            <Title>hello</Title>
        </div>
    );
}

export default App;
```

### Using the style from the Design System

The design system uses a Design Token that contains a bunch of variables to use for the different components.
The library exports CSS variables and SCSS variables to use in the different applications.
To use the CSS variables, you just have to include the CSS file we saw above.
To use the SCSS variables, you'll have to import the set of variables as follow :

```scss
// Application entry point
```

The name of a variable follows this naming :

-   CSS

```
--path-to-the-variable-value-in-kebab-case
```

-   SCSS

```
$path-to-the-variable-value-in-kebab-case
```

**_How to find the variable path :_** To find the variable path, go on Figma, then activate the _Dev_ mode, click on the component you want and check the variables in the inspect block. You will see something like that :

```css
background: var(--Theme-background-button-primary-accent, #dc314e);
```

The name of the variable is --Theme-background-button-primary-accent and the value is #DC314E.
To get CSS variable or the SCSS variable, just follow the instructions we saw above (for example : --theme-background-button-primary-accent of $theme-background-button-primary-accent).

Never use directly the values, if the value from the library doesn't match the one on Figma, it's because the Design Token is probably not up to date.

**Note that**, for the light theme, the variable names use a prefix -alt. To make it easier to use, the -alt has been delete from every variables, it will be automatically handled by the library.
**Note also** that the SCSS variables use the CSS variables under the hood.

### Using the fonts with the SCSS Mixins

The lib also exports all the fonts availables in the Design System as SCSS Mixins.
You can use them as follow :

```scss
// Application entry point
@import '@myui/MyUI-components/dist/scss/mixins-font.scss';

.title_7 {
    @include brand-title-7-desktop;
}
```

### Defining and using the fonts with Tailwindcss

In the lib, we define classes for the font thanks to the directive @apply like this :

```css
.brand-lab-2 {
    @apply font-brand-lab-2 text-brand-lab-2 font-fw-brand-lab-2 tracking-brand-lab-2 leading-brand-lab-2 no-underline uppercase;
}
```

Then we can use the classes (ex: `brand-lab-2`) on any component to apply all the font style :

```tsx
// Component
const App = () => {
    return <div className="brand-lab-2">My App</div>;
};

export default App;
```

### Use with Tailwindcss

To be more consistent, the config overload of Tailwindcss has been exported.
To use this config, you should import the CSS from `@myui/MyUI-components/dist/css/style.css` in your index.css and then import the config as follow :

```js
import { tailwindConfig } from '@myui/MyUI-components';

/** @type {import('tailwindcss').Config} */
export default {
    ...tailwindConfig,
};
```

Of course, everything can be overrided if you need it (like the content, plugins...).

### Variables available

To check all variable, you an check the folder assets/css (for CSS variables) and the folder assets/scss (for SCSS variables).

### What's new ?

See the changelog files for breaking changes.

## Development Scripts

### Install dependencies

```
yarn install
```

### Build the style from the token

```
yarn build:style
```

The result should be pushed in Gitlab.

### Build the library

```
yarn build
```

### Run tests

```
yarn test
```

### Run storybook locally

```
yarn storybook
```

### Build storybook static pages

```
yarn build:storybook
```

## Legacy to migrate to Tailwindcss

In order to clean the lib and make it work for everyone (included Tailwindcss users), a refacto has begun.
The repository will be modified to be based on an Atomic Design approach. In the ./src/components folder, everything will be arranged as follow :

-   atoms : basic components
-   molecules : composed of multiple atoms
-   organisms : combination of atoms and molecules
-   layout : a variant of the templates, more like of how the pages should work in terms of responsivity

Every other components that don't match this organisation should be refacto with Tailwindcss and we should take a look at the Design System to make sure we use every variables of the Design Token.

## Gitlab Pages

Here you will find all the link to the pages deployed on Gitlab


## Commit Message Guidelines

In this repository, we follow the **Conventional Commits** standard to maintain a consistent and readable commit history. All commit messages must use one of the following prefixes:

-   `ci`: Changes related to Continuous Integration (CI) configurations.
-   `chore`: General maintenance or non-functional updates (e.g., dependencies, build tasks).
-   `docs`: Documentation changes or additions.
-   `ticket`: Work related to a specific issue or ticket.
-   `feat`: Introducing a new feature.
-   `fix`: A bug fix.
-   `perf`: Changes that improve performance.
-   `refactor`: Code refactoring without adding new functionality or fixing bugs.
-   `revert`: Reverts a previous commit.
-   `style`: Code style changes (formatting, whitespace, etc.).

Please ensure that your commit messages follow this structure. To automate the process, this repository uses `commitlint` to enforce these rules.

Example normal commit:

❌ non valid commits :

```shell
- fix: correction  bug affichage
- [APP-789] ajout test unitaire
```


✅ valid commits : 
```shell
- feat(ui): [CGA-123] add user authentication
- feat(Select): add async select version

# Example of breaking changes commit:
- feat(Select): change value to val
  BREAKING CHANGE: change Select props

```






