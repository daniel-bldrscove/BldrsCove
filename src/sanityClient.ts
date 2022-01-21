import sanityClient from '@sanity/client';

// allows connection between svelete and sanity
const client = sanityClient({
	projectId: 'fv0ic7lw',
	dataset: 'production',
	apiVersion: '2021-09-01', // use current UTC date - see "specifying API version"!
	useCdn: true,
});

export default client;
