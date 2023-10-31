<script setup></script>

<template>
	<section class="overflow-hidden relative">
		<div class="section-container min-h-screen pt-14 flex flex-col">
			<slot></slot>
		</div>
	</section>
</template>

<style scoped>
	.section-container {
		--_justify: var(--justify, center);
		--_align: var(--align, initial);

		justify-content: var(--_justify);
		align-items: var(--_align);
	}
</style>
