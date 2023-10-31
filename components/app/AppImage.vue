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
	<NuxtPicture :src="imgSrc" class="app-img" :img-attrs="{ class: 'img' }" />
</template>

<style scoped>
	.app-img {
		--_top: var(--top, 0);
		--_right: var(--right, 0);
		--_width: var(--width, 130%);
		--_height: var(--height, 130%);
		--_opacity: var(--opacity, 0.7);
		--_deg: var(--deg, -135deg);
		--_transparency: var(--transparency, 60%);

		position: absolute;
		top: var(--_top);
		right: var(--_right);
		width: max(800px, var(--_width));
		height: var(--_height);
		z-index: -1;
		opacity: var(--_opacity);
		-webkit-mask-image: linear-gradient(
			var(--_deg),
			black,
			transparent var(--_transparency)
		);
		mask-image: linear-gradient(
			black,
			var(--clr-bg),
			transparent var(--_transparency)
		);
	}

	.app-img :deep(img) {
		object-fit: contain;
	}
</style>
