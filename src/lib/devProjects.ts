import bbsCoverImage from '../images/bbs-build-beautiful-spaces.jpg';
import deltaNorthCoverImage from '../images/delta-north-trading-journal-cover-image.png';

const webDevProjects: {
		title: string;
		coverImage: string;
		coverImageAlt: string;
		description: string;
		techStack: string[];
		gitHubLink: string;
		projectLink: string;
	}[] = [
		{
			title: 'BBS Portfolio Website',
			coverImage: bbsCoverImage,
			coverImageAlt: 'BBS logo overlaid on beautiful wall',
			description:
				'Clean and snappy photo portfolio for a small restoration and renovation company. Due to the site being image heavy, a fast solution that leveraged caching and lazy loading was used along with pagination for the main work page. File upload and email integration was also added for ease of contact.',
			techStack: ['Gatsby', 'Slider JS', 'Framer Motion', 'Cloudinary', 'SendGrid'],
			gitHubLink: 'https://github.com/tgdpez/BBS-Website',
			projectLink: 'https://buildbeautifulspaces.com'
		},
		{
			title: 'Delta North Trading Journal',
			coverImage: deltaNorthCoverImage,
			coverImageAlt: 'Woman working the Delta North trading journal app',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			techStack: ['React', 'Node JS', 'TD Ameritrade API', 'React Query', 'Material UI'],
			gitHubLink: 'https://github.com/tgdpez/TradingJournal',
			projectLink: 'https://deltanorthtradingjournal.com'
		}
	];

export default webDevProjects;