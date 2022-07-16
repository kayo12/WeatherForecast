# WeatherForecast in Vue 3 + Typescript + Vite

This template should get help you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

## For Commits

Since making a commit is something that a developer should know how to make it right, we are using Conventional Commits messages, following the template below:

`<type>`[optional scope]: `<description>`

[optional body]

[optional footer(s)]

## VsCode Git Commit Message

For making it simple, may be a good idea see the [VsCode Git Commit Message extension](https://marketplace.visualstudio.com/items?itemName=rioukkevin.vscode-git-commit) guide;

## Api Usage

For this project we are going to use the [OpenWeatherMap](https://openweathermap.org) API for two main reasons:

1- That API generously free plan allows us up to 60 calls/minute - and for a study webapp that is awesome;
2- The Free Data is updated every two hours - witch is super okay for this project

Fun fact - **The second free plan API that I found allows users up to 60 calls PER DAY - nothing against it but, for a student project, more is best!**

`It's free!`

