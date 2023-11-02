<script setup>
	defineProps({
		name: {
			type: String,
			default: "link",
		},
		link: {
			type: [String, Object],
			default: "#",
		},
		title: {
			type: String,
			default: "Click to go to selected section",
		},
	});
</script>

<template>
	<article class="mt-11 grid max-w-[55ch] app-body">
		<slot> </slot>
		<AppButtonLink
			class="app-btn justify-self-end mt-11 order-2"
			:name="name"
			:link="link"
			:title="title"
		/>
	</article>
</template>
;

<style scoped>
	.app-body {
		--_btn-display: var(--btn-display, flex);
	}
	.app-btn {
		display: var(--_btn-display);
	}
</style>
