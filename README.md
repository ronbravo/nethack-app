# Nethack Game

A game based on the nethack game built for learning web development concepts.

In many of the directories of the project are found `README.md` files (ex: `/public/README.md`). These help to document the structure, coding style, and concepts / ideas behind the project. This all can be used as a reference to help guide you in your own projects.

## Project Setup and Configuration

This project uses a `package.json5` instead of a `package.json` file. This is because the project is to be installed and managed with [pnpm](https://pnpm.js.org/) instea of npm. Because of this change pnpm supports the [json5](https://json5.org/) file format which allows for comments, trailing commas, single quotes for property names, and [much more](https://json5.org/). Think of it like JSON++.

### Helpful Tips

- Set projects to be of type `"type": "module"` so that it will use the latest ES6 features (ex: import, export, async, await, etc).
- The `scripts` area is where you can write custom commands that can then be run with something like `pnpm run <my-custom-command>`.

