# edwindanlopez.com

## Project Status
Although this portfolio project is built on an unstable version of SvelteKit (1.0.0-next.238), it's performant and stable enough for this simple portfolio project. I'm currently using it to feature my own work, and am expecting to migrate when SvelteKit releases their first stable version. This is the very first version of this portfolio project. Deployed on Vercel.

## Technologies

This portfolio project is created/configured with: 
- Svelte 3.44
- SvelteKit 1.0.0-next.238
- Sanity 2.23
- Tailwindcss 3.0
- PostCss 8.4
- Typescript 4.4
- Eslint airbnb-base 15.0
- Yup 0.32

Packages were last updated on 1.18.22

## Set up & Installation

Most likely, you will need to mitigate a few breaking changes depending on the time of installation, mainly due to SvelteKit. To run this app on your machine, clone down this repo using npm.  You will need node and npm installed globally on your machine. After you've git cloned, cd into the project directory, and install the dependencies.

Installation
`npm install`

Start server
`npm run dev`

Vist app:
`localhost:3000`


## Background

Svelte and SvelteKit were appealing to me because of their speed, lightweight, and simplicity. The structure of my portfolio was simple, and Svelte offered a good solution to build something that looked good, while not being too complicated.

I also wanted to gain knowledge in integrating with a headless CMS and take advantage of a more streamlined way to upload work. Happy with what Sanity offered, although I'm still thinking if this integration is really needed. I'm sticking with it for now.

It's interesting to see the differences between a framework like Svelte and React, especially when it comes to reactivity, markup, global stores, state management, and component prop handling. I'm still learning the framework, and this portfolio will need some refactoring, but I'm happy with how fast everything feels, and the simplicity behind some of the svelte abstractions.

I integrated with Vercel because of their speed and simplicity, although I like Netlify just as much.

MIT license [@edwindanlopez](https://github.com/edwindanlopez/Edwindanlopez-Portfolio/blob/main/LICENSE)