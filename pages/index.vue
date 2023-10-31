<script setup>
	useHead({
		title: "Kitsune--studio -> Home Page",
	});
</script>

<template>
	<main class="relative isolate overflow-hidden">
		<!-- <NuxtPicture src="/images/bg1.png" class="hero-bg" /> -->
		<!-- <NuxtPicture src="/images/contact-bg.png" class="contact-bg" /> -->
		<!-- <SectionHero /> -->
		<!-- <SectionAbout /> -->
		<!-- <SectionOffer /> -->
		<!-- <SectionWork /> -->
		<!-- <SectionContact /> -->
	</main>
</template>

<style scoped>
	.hero-bg,
	.contact-bg {
		position: absolute;
		left: 0;
		z-index: -1;
		opacity: 0.5;
	}

	.hero-bg {
		top: 0;
		width: 120%;
		height: 140vh;
		-webkit-mask-image: linear-gradient(-175deg, black, transparent);
		mask-image: linear-gradient(-175deg, black, transparent 75%);
	}

	.hero-bg :deep(img),
	.contact-bg :deep(img) {
		object-position: center top;
	}

	.contact-bg {
		bottom: -10vh;
		width: 130%;
		height: 160vh;
		-webkit-mask-image: linear-gradient(0deg, black, transparent);
		mask-image: linear-gradient(0deg, black, transparent);
	}

	@media (min-width: 768px) {
		.hero-bg,
		.contact-bg {
			opacity: 0.8;
		}
	}
</style>
a
