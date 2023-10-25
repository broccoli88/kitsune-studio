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
	<article class="mt-11 grid max-w-2xl">
		<slot> </slot>
		<AppButton
			class="justify-self-end mt-11"
			:name="name"
			:link="link"
			:title="title"
		/>
	</article>
</template>
;

<style scoped></style>
