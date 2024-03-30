import type { DevProjectTypes } from '../types/projectTypes';

import bbsFeatImgLg from '$lib/assets/images/bbs-feat-image-1276px.jpg';
import bbsFeatImgMd from '$lib/assets/images/bbs-feat-image-768px.jpg';
import bbsFeatImgSm from '$lib/assets/images/bbs-feat-image-530px.jpg';
import tradingAllyFeatImgLg from '$lib/assets/images/trading-ally-feat-image-1276px.jpg';
import tradingAllyFeatImgMd from '$lib/assets/images/trading-ally-feat-image-768px.jpg';
import tradingAllyFeatImgSm from '$lib/assets/images/trading-ally-feat-image-530px.jpg';

const webDevProjects: DevProjectTypes[] = [
	{
		title: 'Build Beautiful Spaces',
		subhead: 'Business Website',
		coverImage: {
			lg: bbsFeatImgLg,
			md: bbsFeatImgMd,
			sm: bbsFeatImgSm,
		},
		coverImageAlt: 'BBS logo overlaid on beautiful wall',
		description:
			'Build Beautiful Spaces is a small business that specializes in restoration and interior renovation. \n \n Lacking an online presence, the project consisted of developing a user friendly website that would not sacrifice on speed due to its image-heavy content. For this reason, I decided on Gatsby’s SSG build, and implemented caching and lazy loading. \n \n Integrating pagination for the main work page also made sense from a performance and UX standpoint. The file upload and email integrations leverage 3rd party APIs, which makes the contact user experience easy and help prevent bot submissions.',
		excerpt:
			'The BBS website build project consisted of developing a clean and fast portfolio that would not sacrifice speed due to its image-heavy content.',
		techStack: [
			{
				tech1: 'Gatsby',
				tech2: 'Tailwindcss',
				tech3: 'Framer Motion',
			},
			{
				tech1: 'Cloudinary',
				tech2: 'Sendgrid',
				tech3: 'Formik',
			},
			{
				tech1: 'Google Maps',
			},
		],
		gitHubLink: 'https://github.com/edwindanlopez/BBS-Website',
		projectLink: 'https://buildbeautifulspaces.com',
	},
	{
		title: 'Trading Ally',
		subhead: 'Trade tracking C.R.U.D. application',
		coverImage: {
			lg: tradingAllyFeatImgLg,
			md: tradingAllyFeatImgMd,
			sm: tradingAllyFeatImgSm,
		},
		coverImageAlt: 'Trading Ally journal app ui screenshot',
		description:
			'This React web app incorporates reusable functional components and follows best practices for passing data between component UI. \n\n Trading Ally also integrates with Fauna DB for data storage and is built with Typescript to help increase efficiency in maintainability and future development. \n\n Future plans include integrating with Netlify ID for user authentication, and integrating with the TD Ameritrade API, to automatically log trades for users with a ThinkorSwim account.',
		excerpt:
			'Trading Ally is a web application that allows users to log their latest stock trades, keeping their trading goals front and center.',
		techStack: [
			{
				tech1: 'React',
				tech2: 'Chakra UI',
				tech3: 'Netlify',
			},
			{
				tech1: 'Typescript',
				tech2: 'Fauna DB',
				tech3: 'React Query',
			},
			{
				tech1: 'React Table',
				tech2: 'Yup',
			},
		],
		gitHubLink: 'https://github.com/edwindanlopez/Trading-Ally',
		projectLink: 'https://tradingally.netlify.app/',
	},
];

export default webDevProjects;
