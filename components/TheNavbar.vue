<script setup>
	import links from "@/data/links.json";
	const navLinks = Object.values(links);
</script>

<template>
	<header
		class="navbar relative hidden justify-center pt-5 pb-[60px] md:grid"
	>
		<AppSeparator />
		<AppLogo />
		<nav class="flex-col justify-end gap-5 flex">
			<AppButtonLink
				v-for="{ name, link, title } in navLinks"
				:key="name"
				:name="name"
				:title="title"
				:link="link"
			/>
		</nav>
	</header>
</template>

<style scoped>
	@media (min-width: 768px) {
		.navbar {
			background-image: linear-gradient(var(--clr-bg), transparent 25%);
		}
	}
</style>
