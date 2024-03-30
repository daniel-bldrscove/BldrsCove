<style>
	#canvas {
		position: absolute;
		z-index: 0;
	}
</style>

<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { themeMode } from '../../../stores';

	type Context = CanvasRenderingContext2D;

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D;
	let unsubscribe: () => void;

	const getThemeColor = function () {
		if ($themeMode === 'dark') {
			return '#363f58';
		} else if ($themeMode === 'light') {
			return '#bfc7df';
		} else {
			return '#000000';
		}
	};

	const drawCircle1 = (c: Context) => {
		c.beginPath();
		c.arc(0, 0, 150, 0, Math.PI * 2);
		c.stroke();
	};

	const drawCircle2 = (c: Context, w: number) => {
		c.beginPath();
		c.arc(w - 480, -20, 170, 0, Math.PI * -1.25);
		c.stroke();
	};

	const drawCircle3 = (c: Context, w: number, h: number) => {
		c.beginPath();
		c.arc(w - 200, h - 200, 225, 0, Math.PI * 2);
		c.stroke();
	};

	const drawLine1 = (c: Context) => {
		c.beginPath();
		c.moveTo(65, 100);
		c.lineTo(300, 100);
		c.stroke();
	};

	const drawLine2 = (c: Context, w: number, h: number) => {
		c.beginPath();
		c.moveTo(w / 3, h - h / 6);
		c.lineTo(w - w / 2, h - h / 6);
		c.stroke();
	};

	const drawSquare1 = (c: Context, h: number) => {
		c.beginPath();
		c.strokeRect(75, h - h / 8, 30, 30);
	};

	const drawSquare2 = (c: Context, w: number, h: number) => {
		c.beginPath();
		c.strokeRect(w - w / 2, h - h / 5, 15, 15);
	};

	const drawSquare3 = (c: Context, w: number) => {
		c.beginPath();
		c.strokeRect(w - 130, 50, 15, 15);
	};

	const drawCanvas = (w: number, h: number) => {
		context.clearRect(0, 0, w, h);
		context.strokeStyle = getThemeColor();
		drawLine1(context);
		drawLine2(context, w, h);
		drawCircle1(context);
		drawCircle2(context, w);
		drawCircle3(context, w, h);
		drawSquare1(context, w);
		drawSquare2(context, w, h);
		drawSquare3(context, w);
	};

	const calculateCanvasSize = async () => {
		if (browser) {
			const element = document.getElementById('top-hero-container');
			if (element) {
				const topHeroHeight = window.getComputedStyle(element);
				const canvasHeight = parseInt(topHeroHeight.getPropertyValue('height'));
				const canvasWidth = document.body.clientWidth;
				canvas.width = canvasWidth;
				canvas.height = canvasHeight;
				drawCanvas(canvasWidth, canvasHeight);
			}
		}
	};

	onMount(() => {
		context = canvas.getContext('2d')!;

		unsubscribe = themeMode.subscribe(() => {
			calculateCanvasSize().then(() => {
				// make canvas responsive
				window.addEventListener('resize', calculateCanvasSize, false);
			});
		});

		return () => {
			window.removeEventListener('resize', calculateCanvasSize, false);
			unsubscribe();
		};
	});
</script>

<canvas bind:this="{canvas}" aria-label="Top hero background texture" id="canvas"></canvas>
