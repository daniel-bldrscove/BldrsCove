import sanityClient from '@sanity/client';

// allows connection between svelete and sanity
const client = sanityClient({
	projectId: 'wydp43aa',
	dataset: 'production',
	apiVersion: '2021-09-01', // use current UTC date - see "specifying API version"!
	useCdn: true,
});

export default client;
