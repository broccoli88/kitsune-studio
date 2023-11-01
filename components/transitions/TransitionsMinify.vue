<script setup></script>

<template>
	<Transition name="minify" mode="out-in">
		<slot></slot>
	</Transition>
</template>

<style scoped>
	.minify-enter-from,
	.minify-leave-to {
		scale: 0.3;
		opacity: 0;
	}

	.minify-enter-active,
	.minify-leave-active {
		transition: 0.3s all ease-out;
	}
</style>
