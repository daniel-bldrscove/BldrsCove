import type { InputValue } from '$lib/types/pTRendererTypes';

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

export type WebDesignProject = {
	coverImage: {
		alt: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
	slug: {
		current: string;
		_type: string;
	};
	title: string;
};

export type WebDesignProjects = Array<WebDesignProject>;

export type WebDesignProjectData = {
	coverImage: {
		altText: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
	description: InputValue;
	disclaimer: string | null;
	projectImages: {
		alt: string;
		asset: {
			_ref: string;
			_type: string;
		};
		_key: string;
		_type: string;
	}[];
	projectLink: string;
	title: string;
};

export type OptimizedUrlSrcSet = {
	urlSrc: string;
	urlSrcSet: {
		w640: string;
		w768: string;
		w1024: string;
		w1280: string;
		w1536: string;
		w1920: string;
		w2000: string;
	};
};

export type OptimizedProjectImages = {
	altText: string;
	asset: OptimizedUrlSrcSet;
	_key: string;
	_type: string;
}[];
