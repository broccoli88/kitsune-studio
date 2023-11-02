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
	<NuxtLink
		:to="link"
		class="btn flex gap-3 items-center lowercase"
		type="button"
	>
		<AppButtonCircle />
		{{ name }}
	</NuxtLink>
</template>

<style>
	.btn {
		transition: var(--tr-def);
		outline: none;
		font-size: var(--fs-txt);
		letter-spacing: 2px;
	}

	.btn:hover,
	.btn:focus {
		--_color: var(--color, white);
		color: var(--_color);
	}
</style>
