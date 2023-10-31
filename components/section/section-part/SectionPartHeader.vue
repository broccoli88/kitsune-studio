<script setup></script>

<template>
	<header class="grid relative w-min whitespace-nowrap">
		<h2>
			<slot />
		</h2>
		<AppSeparator class="header--separator" />
	</header>
</template>

<style scoped>
	.header--separator {
		--parent-height: min-content;
		--parent-width: 60vw;
		--sep-height: 1px;
		--sep-width: 100%;
		--sep-bottom: -15px;
		--sep-left: 5px;
		--sep-line-bot: 4.5px;
		--sep-line-left: 20px;
		--sep-dot-bot: 0;
	}

	@media (min-width: 768px) {
		.header--separator {
			--parent-width: 40vw;
		}
	}
</style>
