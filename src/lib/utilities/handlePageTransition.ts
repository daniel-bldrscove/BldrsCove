import { isMobileMenuOpen} from '../../stores';
import { browser } from '$app/env';
import { goto, prefetch } from '$app/navigation';

const navigate = (project: string):void => {
	prefetch(project);
	goto(project);
};

browser &&
		window.addEventListener('scroll', () => {
			document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
		});

	// maintain scroll location on desktop and mobile when modal is open or hidden
	export const handleMobileMenu = (anchor?: string): void => {
		const checkMenu = async () => {
			if (isMobileMenuOpen) {
				// close modal
				document.body.style.top = '';
				document.body.classList.remove('modal-open');
				isMobileMenuOpen.update((val) => (val = !val));
			} else {
				// open modal
				const scrolled = document.documentElement.style.getPropertyValue('--scroll-y');
				document.body.style.top = `-${scrolled}`;
				document.body.classList.add('modal-open');
				isMobileMenuOpen.update((val) => (val = !val));
			}
		};

		checkMenu().then(() => {
			return anchor && navigate(anchor);
		});
	};