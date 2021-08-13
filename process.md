# process

## create project by JavaScript template

```sh
npx degit solidjs/templates/js my-app
cd my-app
npm i # or yarn or pnpm
npm run dev # or yarn or pnpm
```

## create project by TypeScript template

```sh
npx degit solidjs/templates/ts my-app
cd my-app
npm i # or yarn or pnpm
npm run dev # or yarn or pnpm
```

## install plugin

- **`solid-app-router:`** [https://github.com/solidjs/solid-app-router](https://github.com/solidjs/solid-app-router)

    ```sh
    npm i solid-app-router
    ```

- **`tailwindcss:`** [https://dev.to/wobsoriano/install-tailwind-css-in-solid-and-vite-jfl](https://dev.to/wobsoriano/install-tailwind-css-in-solid-and-vite-jfl)

    ```sh
    npm i -D tailwindcss@latest postcss@latest autoprefixer@latest
    ```

    Next, generate `tailwind.config.js` and `postcss.config.js` files by this command:

    ```sh
    npx tailwindcss init -p
    ```

    Open the `tailwind.config.js` file and update the `purge` property to include the path to our `src` folder and `index.html` file.

    ```js
    module.exports = {
        purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        darkMode: false, // or 'media' or 'class'
        theme: {
            extend: {},
        },
        variants: {
            extend: {},
        },
        plugins: [],
    }
    ```

    Next, we’ll import Tailwind’s styles using the `@tailwind` directive within our entry CSS file:

    ```ts
    /* ./src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    Finally, ensure your CSS file is being imported in your `./src/index.js` or `./src/index.ts` file:

    ```ts
    import { render } from "solid-js/web";

    import "./index.css";
    import App from "./App";

    render(() => <App />, document.getElementById("root"));
    ```

- Or we can use **`Vite + Solid + Tailwind CSS starter:`** [https://github.com/wobsoriano/vite-solid-tailwind-starter](https://github.com/wobsoriano/vite-solid-tailwind-starter)


## changes

- `FunctionComponent` => `Component`
- `useMemo` => `createMemo` > no need dependencies for createMemo
- `onChange` => `onKeyUp`
- `e.target.value` => `e.currentTarget.value`
- instead of `map`, we use `<For></For>` on solid-js. Also no need `key` for that.
- `useState` => `createSignal`
- `useEffect` => `createResource`
