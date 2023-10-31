<script setup>
	useHead({
		title: "Kitsune--studio -> Home Page",
	});
</script>

<template>
	<main class="relative isolate overflow-x-hidden">
		<NuxtPicture src="/images/bg1.png" class="hero-bg" />
		<SectionHero />
		<SectionAbout />
		<!-- <SectionOffer /> -->
		<!-- <SectionWork /> -->
		<!-- <SectionContact /> -->
	</main>
</template>

<style scoped>
	.hero-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 120%;
		height: 140vh;
		z-index: -1;
		opacity: 0.5;
		mask-image: linear-gradient(-240deg, black, transparent 75%);
	}

	.hero-bg :deep(img) {
		object-position: center top;
	}
</style>
a
