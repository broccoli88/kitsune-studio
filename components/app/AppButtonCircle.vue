<script setup></script>

<template>
	<div
		class="btn-tag-outside w-10 h-10 border-3 rounded-full border-txt bg-transparent grid place-content-center"
	>
		<div class="btn-tag-inside w-6 h-6 bg-txt rounded-full"></div>
	</div>
</template>

<style scoped>
	.btn-tag-outside,
	.btn-tag-inside {
		transition: var(--tr-def);
		outline: none;
	}

	.btn-tag-outside {
		border-color: var(--_color);
	}

	.btn-tag-inside {
		background-color: var(--_color);
	}
</style>
