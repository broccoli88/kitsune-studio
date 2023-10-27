<script setup>
	import SectionPartHeader from "./section-part/SectionPartHeader.vue";
	import SectionPartBody from "./section-part/SectionPartBody.vue";
	import SectionPartFrame from "./section-part/SectionPartFrame.vue";
	import mainPageText from "@/data/main-page-text.json";
	const imgSrc = "/images/about.png";
</script>

<template>
	<SectionPartFrame>
		<SectionPartHeader> {{ mainPageText.about.title }} </SectionPartHeader>
		<SectionPartBody>
			<p class="pl-95">
				{{ mainPageText.about.p }}
			</p>
		</SectionPartBody>
		<AppImage :img-src="imgSrc" class="about--img" />
	</SectionPartFrame>
</template>

<style scoped>
	@media (min-width: 768px) {
		.about--img {
			--right: -400px;
			--top: 5vh;
		}
	}
</style>
