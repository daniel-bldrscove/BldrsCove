import client from '../../sanityClient';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get() {
	// fetch sanity content
	const query = `*[_type == 'web-design-project']`;
	return await client
		.fetch(query)
		.then((data) => {
			// console.log('Data: ', data);
			if (data.length > 0) {
				return {
					body: data
				};
			}
		})
		.catch((error) => {
			console.log('Encountered error when fetching content: ', error);
			return {
				status: 500,
				error: error
			};
		});
}
