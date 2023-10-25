<script setup>
	defineProps({
		imgSrc: {
			type: String,
			default: "#",
		},
		imgAlt: {
			type: String,
			default: "#",
		},
	});
</script>

<template>
	<NuxtPicture format="avif, webp" :src="imgSrc" class="app-img" />
</template>

<style scoped>
	.app-img {
		--_top: var(--top, 0);
		--_right: var(--right, 0);
		--_width: var(--width, 100%);
		--_height: var(--height, 100%);
		--_opacity: var(--opacity, 0.7);
		--_deg: var(--deg, -135deg);
		--_transparency: var(--transparency, 65%);

		position: absolute;
		top: var(--_top);
		right: var(--_right);
		width: var(--_width);
		height: var(--_height);
		z-index: -1;
		opacity: var(--_opacity);
		mask-image: linear-gradient(
			var(--_deg),
			black,
			transparent var(--_transparency)
		);
	}
</style>
