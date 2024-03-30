<script lang="ts">
	export let optimizedImg = {
		urlSrc: '',
		urlSrcSet: {
			w640: '',
			w768: '',
			w1024: '',
			w1280: '',
			w1536: '',
			w1920: '',
			w2000: '',
		},
	};
	export let imgWidth = '';
	export let imgHeight = '';
	export let altText = '';
	export let loading: 'eager' | 'lazy' | undefined;
	export let customStyling = '';
</script>

<figure>
	<img
		src="{optimizedImg.urlSrc}"
		srcset="{`
      ${optimizedImg.urlSrcSet.w640} 640w, 
      ${optimizedImg.urlSrcSet.w768} 768w, 
      ${optimizedImg.urlSrcSet.w1024} 1024w, 
      ${optimizedImg.urlSrcSet.w1280} 1280w, 
      ${optimizedImg.urlSrcSet.w1536} 1536w, 
      ${optimizedImg.urlSrcSet.w1920} 1920w, 
      ${optimizedImg.urlSrcSet.w2000} 2000w, 
    `}"
		width="{imgWidth}"
		height="{imgHeight}"
		alt="{altText}"
		loading="{loading}"
		class="{customStyling}"
	/>
</figure>
