<script setup>
	import SectionPartHeader from "./section-part/SectionPartHeader.vue";
	import SectionPartBody from "./section-part/SectionPartBody.vue";
	import SectionPartFrame from "./section-part/SectionPartFrame.vue";
	import mainPageText from "@/data/main-page-text.json";
	import links from "@/data/links.json";

	const imgSrc = "/images/about.png";
	const aboutLinks = links.about;
</script>

<template>
	<SectionPartFrame>
		<SectionPartHeader> {{ mainPageText.about.title }} </SectionPartHeader>
		<SectionPartBody
			:name="aboutLinks.lng_name"
			:title="aboutLinks.title"
			:link="aboutLinks.link"
			class="about-body"
		>
			<p class="md:pl-95">
				{{ mainPageText.about.p }}
			</p>
		</SectionPartBody>
		<AppImage :img-src="imgSrc" class="about--img" />
	</SectionPartFrame>
</template>

<style scoped>
	.about-body {
		/* --btn-display: none; */
	}

	.about--img {
		--right: 0;
		--top: 7vh;
	}

	@media (min-width: 768px) {
		.about--img {
			--right: -40vw;
		}
	}
</style>
