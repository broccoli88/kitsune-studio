<script setup>
	useHead({
		title: "Kitsune--studio -> Home Page",
	});
</script>

<template>
	<main class="relative isolate overflow-hidden grid gap-24 pb-32">
		<NuxtPicture src="/images/bg1.webp" class="hero-bg" />
		<SectionHero />
		<SectionAbout />
		<SectionProjects />
		<SectionOffer />
		<SectionContact />
		<NuxtPicture src="/images/contact-bg.webp" class="contact-bg" />
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
		width: 115%;
		height: 140vh;
		z-index: -1;
		-webkit-mask-image: linear-gradient(-175deg, black, transparent);
		mask-image: linear-gradient(-175deg, black, transparent 95);
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

		.contact-bg {
			left: -15%;
		}
	}
</style>
