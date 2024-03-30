import * as Yup from 'yup';

const characterLimit = 220;

const contactFormSchema = Yup.object({
	fullName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
	email: Yup.string().email('Invalid email address').required('Required'),
	message: Yup.string()
		.max(characterLimit, `Must be ${characterLimit} characters or less`)
		.required('Required'),
});

export default contactFormSchema;
