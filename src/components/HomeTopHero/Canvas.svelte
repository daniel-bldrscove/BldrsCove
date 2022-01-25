<style>
	#canvas {
		position: absolute;
		z-index: 0;
	}
</style>

<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { themeMode } from '../../stores';

	$: themeColor = $themeMode === 'dark' ? '#363f58' : '#bfc7df';

	let canvas;

	const drawCircle1 = (context, w, h) => {
		const c = context;
		c.beginPath();
		c.arc(0, 0, 150, 0, Math.PI * 2);
		c.stroke();
	};

	const drawCircle2 = (c, w, h) => {
		c.beginPath();
		c.arc(w - 480, -20, 170, 0, Math.PI * -1.25);
		c.stroke();
	};

	const drawCircle3 = (context, w, h) => {
		const c = context;
		c.beginPath();
		c.arc(w - 200, h - 200, 225, 0, Math.PI * 2);
		c.stroke();
	};

	const drawLine1 = (context, w, h) => {
		const c = context;
		c.beginPath();
		c.moveTo(65, 100);
		c.lineTo(300, 100);
		c.stroke();
	};

	const drawLine2 = (context, w, h) => {
		const c = context;
		c.beginPath();
		c.moveTo(w / 3, h - h / 6);
		c.lineTo(w - w / 2, h - h / 6);
		c.stroke();
	};

	const drawSquare1 = (context, w, h) => {
		const c = context;
		c.beginPath();
		c.strokeRect(75, h - h / 8, 30, 30);
	};

	const drawSquare2 = (context, w, h) => {
		const c = context;
		c.beginPath();
		c.strokeRect(w - w / 2, h - h / 5, 15, 15);
	};

	const drawSquare3 = (context, w, h) => {
		const c = context;
		c.beginPath();
		c.strokeRect(w - 130, 50, 15, 15);
	};

	let context;

	const initCanvas = (w: number, h: number) => {
		context.clearRect(0, 0, w, h);
		context.strokeStyle = themeColor;
		drawLine1(context, w, h);
		drawLine2(context, w, h);
		drawCircle1(context, w, h);
		drawCircle2(context, w, h);
		drawCircle3(context, w, h);
		drawSquare1(context, w, h);
		drawSquare2(context, w, h);
		drawSquare3(context, w, h);
	};

	const calculateCanvasSize = () => {
		if (browser) {
			const topHeroHeight = window.getComputedStyle(document.getElementById('top-hero-container'));
			const canvasHeight = parseInt(topHeroHeight.getPropertyValue('height'));
			const canvasWidth = document.body.clientWidth;
			canvas.width = canvasWidth;
			canvas.height = canvasHeight;
			initCanvas(canvasWidth, canvasHeight);
		}
	};

	onMount(() => {
		context = canvas.getContext('2d');
		calculateCanvasSize();

		// make canvas responsive
		window.addEventListener('resize', calculateCanvasSize, false);

		// clean up
		return () => {
			window.removeEventListener('resize', calculateCanvasSize, false);
		};
	});
</script>

<canvas bind:this="{canvas}" aria-label="Top hero background texture" role="img" id="canvas"
></canvas>
