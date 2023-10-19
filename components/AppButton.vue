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
	});
</script>

<template>
	<NuxtLink :to="link" class="btn flex gap-3 items-center lowercase">
		<div
			class="btn-tag-outside w-10 h-10 border-3 rounded-full border-txt bg-transparent grid place-content-center"
		>
			<div class="btn-tag-inside w-6 h-6 bg-txt rounded-full"></div>
		</div>

		{{ name }}
	</NuxtLink>
</template>

<style scoped>
	.btn,
	.btn-tag-outside,
	.btn-tag-inside {
		transition: var(--tr-def);
		outline: none;
	}

	.btn:hover,
	.btn:focus {
		--_color: white;

		color: var(--_color);
	}

	.btn-tag-outside {
		border-color: var(--_color);
	}

	.btn-tag-inside {
		background-color: var(--_color);
	}
</style>
