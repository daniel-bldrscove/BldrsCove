import type { DevProjectTypes } from '../../types/ComponentTypes';

import bbsFeatImgLg from '../images/bbs-feat-image-1276px.jpg';
import bbsFeatImgMd from '../images/bbs-feat-image-768px.jpg';
import bbsFeatImgSm from '../images/bbs-feat-image-530px.jpg';
import tradingAllyFeatImgLg from '../images/trading-ally-feat-image-1276px.jpg';
import tradingAllyFeatImgMd from '../images/trading-ally-feat-image-768px.jpg';
import tradingAllyFeatImgSm from '../images/trading-ally-feat-image-530px.jpg';

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
		gitHubLink: 'https://github.com/daniel-bldrscove/BBS-Website',
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
			'Trading Ally helps keep trading goals front and center, highlighting user performance in a way that\'s flexible and easy to understand. \n\n Although there are many apps that help track market data, the user interface and data can still be complicated to understand, especially for the new investors. This is where Trading Ally helps distill noisy data into a simple and clear UI. \n\n Although still in development, Trading Ally seeks to help users answer three simple questions. \n\n - "What was my past trading performance?" \n - "What is my current trading performance?" \n - "Where do I want my future trading performance to be?" \n\n Trading Ally empowers it\'s users by giving them control over their own data and provides suggestions that can help investors achieve their goals.',
		excerpt:
			"Trading Ally helps keep trading goals front and center, highlighting user performance in a way that's flexible and easy to understand.",
		techStack: [
			{
				tech1: 'React',
				tech2: 'Chakra UI',
				tech3: 'Netlify',
			},
			{
				tech1: 'Typescript',
				tech2: 'Fauna DB',
				tech3: 'Formik',
			},
			{
				tech1: 'React Query',
				tech2: 'React Table',
				tech3: 'Yup',
			},
		],
		gitHubLink: 'https://github.com/daniel-bldrscove/trading-ally',
		projectLink: 'https://tradingally.netlify.app/',
	},
];

export default webDevProjects;
