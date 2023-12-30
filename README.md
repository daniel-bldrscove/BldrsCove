# edwindanlopez.com

![edl-portfolio-website](https://res.cloudinary.com/edwindanlopez/image/upload/v1643160984/Readmes/Edwindanlopez-Portfolio/edl-portfolio-img_q7izwn.jpg)

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

Other services used

- Google recaptcha
- UseBasin

Packages were last updated on 1.18.22

## Set up & Installation

Most likely, you will need to mitigate a few breaking changes depending on the time of installation, mainly due to SvelteKit. To run this app on your machine, clone down this repo using npm. You will need node and npm installed globally on your machine. After you've git cloned, cd into the project directory, and install the dependencies.

The 'Contact' form section integrates with google recaptcha, which requires the recaptcha key in a .env file. Set up your recaptcha key through the [v3 Admin Console](https://www.google.com/recaptcha/about/). Create a .env file and paste those keys in the following format:
`RECAPTCHA_SECRET_KEY={secret_key_here}`
`VITE_RECAPTCHA_PUBLIC_KEY={public_key_here}`

Note that the form also sends to an external 'Back-end form endpoint' provider such as UseBasin or GetForm. I did this to make submissions more secure. You could skip this step and instead just directly send to an email. You could even skip the whole recaptcha process too if you wanted.

Installation
`npm install`

Start server
`npm run dev`

Vist app:
`localhost:3000`

## Description

This project is built with SvelteKit, Tailwindcss, and integrates Sanity as a headless CMS.

The top hero section is minimal and has room for growth. At this point, it's using HTML 5 canvas to display some shape textures. In the future, I'd like to use WebGL and bring in a 3D render. One of the current challenges is refreshing the canvas whenever the user toggles between theme modes. Theme mode is based on system preferences/local storage, and the canvas colors refresh based on these settings during initial page load or when window is resized.

The 'Featured Work' section is being mapped from an array, and currently stored in a single .ts file. This is a temporary solution and I'm looking to change as this section grows. Open to regular Markdown, or integrating with Sanity, or something else.

The 'Other Work' section pulls data from the Sanity CMS. In the past, this section of work was hosted with Adobe Portfolio and I wanted to keep it on some sort of CMS since it was quick to edit and had worked well in the past. I also wanted to gain some knowledge integrating a headless CMS. I picked Sanity but there are other good options as well.

The Contact section integrates with Google recaptcha to try to prevent bot submissions. This makes a call to a recaptcha.ts api route, which talks to google for a recaptcha score. Depending on the score, submission is allowed. I have UseBasin as a 'backend form submission' provider, which receives the formData and sends it to the email of my choice. There are other 'back-end form solutions" out there, but they've proven reliable for what I need so far.

MIT license [@edwindanlopez](https://github.com/edwindanlopez/Edwindanlopez-Portfolio/blob/main/LICENSE)
