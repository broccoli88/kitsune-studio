<script setup>
	import mainPageText from "@/data/main-page-text.json";
</script>

<template>
	<section class="hero h-screen">
		<picture class="hero__bg">
			<NuxtImg src="/images/bg1.png" alt="" class="hero__bg-img" />
			<!-- <img src="images/woman-4.png" alt="" class="hero__bg-img" /> -->
		</picture>

		<!-- /hero__bg -->

		<div class="hero__wrapper">
			<!-- /navbar -->
			<section
				class="h-full z-10 flex flex-col justify-center text-center md:justify-end max-w-[70ch] px-5 mx-auto md:pb-[60px] md:pl-[60px] md:text-left md:mx-0"
			>
				<!-- ?Think about placing text in bottom left corner -->
				<header class="mb-8">
					<p class="capitalize">{{ mainPageText.hero.subtitle }}</p>
					<h1 class="capitalize">{{ mainPageText.hero.title }}</h1>
				</header>
				<p>{{ mainPageText.hero.p }}</p>
			</section>
			<TheNavbar />
		</div>

		<!-- /section -->
	</section>
</template>

<style scoped>
	.hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		isolation: isolate;
	}

	.hero > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}

	.hero__bg {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 150%;
		opacity: 0.4;
		z-index: -2;
	}

	.hero__bg::before,
	.hero__bg::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.hero__bg::before {
		background-image: linear-gradient(
			-135deg,
			transparent 40%,
			var(--clr-bg)
		);
	}
	@media (min-width: 768px) {
		.hero__wrapper {
			display: grid;
			grid-template-columns: 1fr minmax(
					min(100%, 150px),
					min(300px, 26vw)
				);
			gap: 2rem;
		}
		.hero__bg::after {
			background-image: linear-gradient(
				90deg,
				transparent 40%,
				var(--clr-bg)
			);
		}

		.hero__bg::before {
			background-image: linear-gradient(
				-180deg,
				transparent 30%,
				var(--clr-bg)
			);
		}

		.hero__bg-img {
			object-position: -10vw top;
		}
	}
</style>
