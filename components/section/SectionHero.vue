<script setup></script>

<template>
	<section class="hero h-screen">
		<TheNavbar />

		<!-- /navbar -->

		<picture class="hero__bg">
			<NuxtImg src="/images/bg1.png" alt="" class="hero__bg-img" />
			<!-- <img src="images/woman-4.png" alt="" class="hero__bg-img" /> -->
		</picture>

		<!-- /hero__bg -->

		<section
			class="z-10 flex flex-col justify-center text-center md:justify-end max-w-[70ch] px-5 mx-auto md:pb-[60px] md:pl-[60px] md:text-left md:mx-0"
		>
			<!-- ?Think about placing text in bottom left corner -->
			<header class="mb-8">
				<p>Frontend Development & Design</p>
				<h1>Crafting Digital experiences</h1>
			</header>

			<p>
				Welcome to my world of web design and development. I'm Pawel, a
				passionate frontend developer dedicated to creating elegant and
				interactive digital experiences.
			</p>
		</section>

		<!-- /section -->
	</section>
</template>

<style scoped>
	.hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
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
