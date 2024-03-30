import client from '../../../sanityClient';
import type {
	OptimizedProjectImages,
	OptimizedUrlSrcSet,
	WebDesignProjectData,
} from '$lib/types/projectTypes';
import optimizeImages from '$lib/utilities/optimizeImages';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const pageSlug = params.webDesignDetail;
	const shortSlug = pageSlug.replace('-website-design', '');

	const query = `*[_type == 'web-design-project' && slug.current == '${pageSlug}']{
	coverImage{
      alt,
      asset
  },
	title,
	description,
	projectLink,
	disclaimer,
	projectImages,
	}`;

	return {
		data: await client
			.fetch(query)
			.then((data) => {
				if (data.length > 0) {
					const project: WebDesignProjectData = data[0];
					let coverImageAltText = project.coverImage.altText;
					let title = project.title;
					let description = project.description;
					let projectLink = project.projectLink;
					let disclaimer = '';

					if (project.disclaimer) {
						disclaimer = project.disclaimer;
					}

					const optimizedCoverImage = optimizeImages(project.coverImage.asset, client);
					const optimizedProjectImages = optimizeImages(project.projectImages, client);

					return Promise.all([optimizedCoverImage, optimizedProjectImages]).then((values) => {
						const coverImageAsset: OptimizedUrlSrcSet | undefined = values[0] as OptimizedUrlSrcSet;
						const projectImages: OptimizedProjectImages | undefined =
							values[1] as OptimizedProjectImages;

						return {
							coverImage: {
								altText: coverImageAltText,
								asset: coverImageAsset,
							},
							title,
							description,
							projectLink,
							disclaimer,
							projectImages,
							shortSlug,
						};
					});
				}
			})
			.catch((error) => {
				console.log('Encountered error when fetching content: ', error);
				throw new Error(error);
			}),
	};
}
