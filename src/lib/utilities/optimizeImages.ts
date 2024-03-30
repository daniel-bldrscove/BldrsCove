import imageUrlBuilder from '@sanity/image-url';
import type { WebDesignProjectData } from '$lib/types/projectTypes';
import type { SanityClient } from '@sanity/client';

type CoverImgAssetObject = WebDesignProjectData['coverImage']['asset'];
type ImgAsset = CoverImgAssetObject | WebDesignProjectData['projectImages'];

export default async function optimizeImages(imgAsset: ImgAsset, client: SanityClient) {
	const isArray = Array.isArray(imgAsset);
	const builder = imageUrlBuilder(client);
	const urlFor = function (source: { _ref: string; _type: string }) {
		return builder.image(source);
	};

	const optimizeImg = function (imgObject: CoverImgAssetObject) {
		for (const key in imgObject) {
			if (imgObject.hasOwnProperty(key)) {
				return {
					urlSrc: urlFor(imgObject).format('webp').url(),
					urlSrcSet: {
						w640: urlFor(imgObject).format('webp').width(640).url(),
						w768: urlFor(imgObject).format('webp').width(678).url(),
						w1024: urlFor(imgObject).format('webp').width(1024).url(),
						w1280: urlFor(imgObject).format('webp').width(1280).url(),
						w1536: urlFor(imgObject).format('webp').width(1536).url(),
						w1920: urlFor(imgObject).format('webp').width(1920).url(),
						w2000: urlFor(imgObject).format('webp').width(2000).url(),
					},
				};
			}
		}
	};

	if (isArray) {
		// return array of multiple image objects
		return imgAsset.map((e) => {
			return {
				altText: e.alt,
				asset: optimizeImg(e.asset),
				_key: e._key,
				_type: e._type,
			};
		});
	} else {
		// return single image object
		return optimizeImg(imgAsset);
	}
}
