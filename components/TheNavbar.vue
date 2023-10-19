<script setup>
	import links from "../data/links.json";

	const insideLinks = links.inside;
	const isMobileMenuOpen = ref(false);

	const openMobileMenu = () =>
		(isMobileMenuOpen.value = !isMobileMenuOpen.value);
</script>

<template>
	<header class="navbar">
		<AppLogo />
		<button
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
				v-for="{ name, link } in insideLinks"
				:key="name"
				:name="name"
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
		padding-inline: 12px;
		padding-block: 20px;
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
			position: static;
			width: 300px;
			height: 100dvh;
			height: 100vh;
			margin-left: auto;
			flex-direction: column;
			align-items: start;
			padding-left: 4vw;
			padding-block: 40px 60px;
			position: relative;
		}

		.navbar::before,
		.navbar::after {
			content: "";
			position: absolute;
			background-color: var(--clr-txt);
			opacity: 0.2;
		}

		.navbar::before {
			bottom: 90px;
			left: 0;
			width: 1px;
			height: 40%;
		}

		.navbar::after {
			bottom: 60px;
			left: -4.5px;
			width: 10px;
			aspect-ratio: 1;

			border-radius: 50%;
		}

		.navbar__nav {
			height: min-content;
			position: initial;
			clip-path: none;
			z-index: initial;
			background-color: transparent;
			place-content: initial;
		}
	}
</style>
