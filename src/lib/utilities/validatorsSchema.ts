import * as Yup from 'yup';

const characterLimit = 220;

const contactFormSchema = Yup.object({
	fullName: Yup.string().required('Required').max(20, 'Must be 20 characters or less'),
	email: Yup.string().required('Required').email('Invalid email address'),
	message: Yup.string()
		.required('Required')
		.max(characterLimit, `Must be ${characterLimit} characters or less`),
});

export default contactFormSchema;
