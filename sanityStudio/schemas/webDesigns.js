export default {
	// This is the display name for the type
	title: 'Web Design Project',
	// The identifier for this document type used in the api's
	name: 'web-design-project',
	type: 'document',
	fields: [
		{
			title: 'Cover image',
			name: 'coverImage',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					title: 'Alt text',
					name: 'alt',
					type: 'string',
					options: {
						isHighlighted: true, // <-- make this field easily accessible
					},
				},
			],
		},
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Description',
			name: 'description',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Caption', value: 'caption' },
						{ title: 'Break Before', value: 'breakBefore' },
					],
				},
				{
					type: 'image',
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Alternative text',
							description: `Some visitors may not see images for a variety of reasons. 
                    Alternative text is today's standard for helping those who are visually impaired.`,
							options: {
								isHighlighted: true,
							},
						},
					],
				},
			],
		},
		{
			title: 'Disclaimer',
			name: 'disclaimer',
			type: 'string',
		},
		{
			title: 'Project link',
			name: 'projectLink',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 200, // will be ignored if slugify is set
				slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
			},
		},
		{
			title: 'Project order',
			name: 'projectOrder',
			type: 'string',
		},
		{
			title: 'Project Images',
			name: 'projectImages',
			type: 'array',
			of: [
				{
					type: 'image',
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Alternative text',
							description: `Some visitors may not see images for a variety of reasons. 
                    Alternative text is today's standard for helping those who are visually impaired.`,
							options: {
								isHighlighted: true,
							},
						},
					],
				},
			],
		},
	],
};
