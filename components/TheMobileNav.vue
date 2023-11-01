<script setup>
	import links from "@/data/links.json";

	const navLinks = Object.values(links);
	const isMobileMenuOpen = ref(false);
	const openMobileMenu = () =>
		(isMobileMenuOpen.value = !isMobileMenuOpen.value);

	watch(isMobileMenuOpen, () => usePreventScrolling(isMobileMenuOpen));
	console.log(navLinks.value);
</script>

<template>
	<header class="navbar">
		<AppLogo />
		<button
			title="navbar menu button"
			@click="openMobileMenu"
			class="nav__mobile-menu-btn w-8 aspect-square bg-transparent border-3 border-txt rounded-full grid place-content-center outline-none md:hidden"
		>
			<TransitionsMinify>
				<Icon name="ic:baseline-circle" v-if="!isMobileMenuOpen" />
				<Icon name="ic:baseline-close" v-else />
			</TransitionsMinify>
		</button>
		<nav
			class="navbar__nav"
			:class="{ 'navbar__nav-active': isMobileMenuOpen }"
		>
			<AppButton
				class="text-2xl"
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
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100dvw;
		width: 100vw;
		z-index: 999;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding-inline: 20px;
		padding-block: 20px;

		background-image: linear-gradient(black, transparent);
	}

	.navbar__nav {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
		z-index: -1;
		background-color: var(--clr-bg-lighter);

		display: grid;
		place-content: center;
		gap: 20px;

		clip-path: circle(0% at 100% 53%);
		transition: var(--tr-def);
	}

	.navbar__nav-active {
		clip-path: circle(100.1% at 88% 49%);
	}

	.nav__mobile-menu-btn:hover,
	.nav__mobile-menu-btn:focus {
		animation: pulse 1.5s infinite linear;
	}

	@keyframes pulse {
		0% {
			scale: 1;
		}

		33% {
			scale: 0.95;
		}

		66% {
			scale: 1.05;
		}

		100% {
			scale: 1;
		}
	}

	@media (min-width: 768px) {
		.navbar {
			display: none;
		}
	}
</style>
