<script setup>
	import mainPageText from "@/data/main-page-text.json";
</script>

<template>
	<section class="hero">
		<section
			class="text-center max-w-[55ch] md:text-left md:self-end md:m-[60px]"
		>
			<!-- ?Think about placing text in bottom left corner -->
			<header class="lowercase mb-6">
				<p class="text-lg">
					{{ mainPageText.hero.subtitle }}
				</p>
				<h1>{{ mainPageText.hero.title }}</h1>
			</header>
			<p>{{ mainPageText.hero.p }}</p>
		</section>
		<TheNavbar />

		<!-- /section -->
	</section>
</template>

<style scoped>
	.hero {
		height: 100vh;
		position: relative;
		display: grid;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 768px) {
		.hero {
			grid-template-columns: 1fr minmax(min(100%, 150px), 300px);
			align-items: stretch;
		}
	}
</style>
