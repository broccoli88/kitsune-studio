<script setup>
	import SectionPartHeader from "./section-part/SectionPartHeader.vue";
	import SectionPartBody from "./section-part/SectionPartBody.vue";
	import SectionPartFrame from "./section-part/SectionPartFrame.vue";
	const imgSrc = "/images/about.png";
</script>

<template>
	<SectionPartFrame>
		<SectionPartHeader> about ? </SectionPartHeader>
		<SectionPartBody>
			<p class="pl-95">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
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
