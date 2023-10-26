<script setup></script>

<template>
	<section class="section overflow-hidden">
		<div
			class="section-container min-h-screen relative isolate pt-14 flex flex-col"
		>
			<slot></slot>
		</div>
	</section>
</template>

<style scoped>
	.section {
		--_justify: var(--justify, center);
		--_align: var(--align, initial);
	}

	.section-container {
		justify-content: var(--_justify);
		align-items: var(--_align);
	}
</style>
