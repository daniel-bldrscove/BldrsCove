export type DevProjectTypes = {
	title: string;
	subhead: string;
	coverImage:
		| {
				lg: string;
				md: string;
				sm: string;
		  }
		| Record<string, unknown>;
	coverImageAlt: string;
	description: string;
	excerpt: string;
	techStack: string[] | Record<string, unknown>[];
	gitHubLink: string;
	projectLink: string;
};
