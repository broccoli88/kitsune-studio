<script setup>
	const route = useRoute();
	const isMainPage = ref(true);

	watch(
		() => route.name,
		() => {
			route.name === "index"
				? (isMainPage.value = true)
				: (isMainPage.value = false);
		},
		{ flush: "post" }
	);
</script>

<template>
	<footer
		class="footer flex gap-3 justify-center items-center py-6"
		:class="{ 'main-page-footer': isMainPage }"
	>
		<p>made by</p>
		<AppLogo />
	</footer>
</template>

<style scoped>
	.footer {
		background-image: linear-gradient(to top, black 30%, transparent);
	}

	.main-page-footer {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}
</style>
