import bbsFeatImgLg from '../images/bbs-feat-image-1276px.jpg';
import bbsFeatImgMd from '../images/bbs-feat-image-768px.jpg';
import bbsFeatImgSm from '../images/bbs-feat-image-530px.jpg';
import tradingJournalFeatImgLg from '../images/trading-journal-feat-image-1276px.jpg';
import tradingJournalFeatImgMd from '../images/trading-journal-feat-image-768px.jpg';
import tradingJournalFeatImgSm from '../images/trading-journal-feat-image-530px.jpg';

const webDevProjects: {
		title: string;
		subhead: string;
		coverImage: {
			lg: string;
			md: string;
			sm: string;
		}
		coverImageAlt: string;
		description: string;
		excerpt: string;
		techStack: string[];
		gitHubLink: string;
		projectLink: string;
	}[] = [
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
			excerpt: 'The BBS website build project consisted of developing a clean and fast portfolio that would not sacrifice speed due to its image-heavy content.',
			techStack: ['Gatsby', 'Slider JS', 'Framer Motion', 'Cloudinary', 'SendGrid'],
			gitHubLink: 'https://github.com/tgdpez/BBS-Website',
			projectLink: 'https://buildbeautifulspaces.com'
		},
		{
			title: 'Delta North Trading Journal',
			subhead: 'CRUD Tracking Journal',
			coverImage: {
				lg: tradingJournalFeatImgLg,
				md: tradingJournalFeatImgMd,
				sm: tradingJournalFeatImgSm,
			},
			coverImageAlt: 'Delta North trading journal app ui screenshot',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n \n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			excerpt:
				'This is a dev card descrition with a read more link at the end triggering a modal pop-up',
			techStack: ['React', 'Node JS', 'TD Ameritrade API', 'React Query', 'Material UI'],
			gitHubLink: 'https://github.com/tgdpez/TradingJournal',
			projectLink: 'https://deltanorthtradingjournal.com'
		}
	];

export default webDevProjects;