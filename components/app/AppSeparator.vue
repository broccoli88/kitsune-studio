<script setup></script>

<template>
	<div class="separator"></div>
</template>

<style scoped>
	.separator {
		--_parent-height: var(--parent-height, 100%);
		--_parent-width: var(--parent-width, min-content);
		--_sep-height: var(--sep-height, 40%);
		--_sep-width: var(--sep-width, 1px);
		--_sep-bottom: var(--sep-bottom, 0);
		--_sep-left: var(--sep-left, 0);
		--_sep-line-bot: var(--sep-line-bot, 90px);
		--_sep-line-left: var(--sep-line-left, 0);
		--_sep-dot-bot: var(--sep-dot-bot, 60px);
		--_sep-dot-left: var(--sep-dot-left, -4.5px);

		position: absolute;
		width: var(--_parent-width);
		max-width: 500px;
		height: var(--_parent-height);
		bottom: var(--_sep-bottom);
		left: var(--_sep-left);
	}
	.separator::before,
	.separator::after {
		content: "";
		position: absolute;
		background-color: var(--clr-txt);
		opacity: 0.3;
	}

	.separator::before {
		bottom: var(--_sep-line-bot);
		left: var(--_sep-line-left);
		width: var(--_sep-width);
		height: var(--_sep-height);
	}

	.separator::after {
		bottom: var(--_sep-dot-bot);
		left: var(--_sep-dot-left);
		width: 10px;
		aspect-ratio: 1;
		border-radius: 50%;
	}
</style>
