<script setup>
	const projectRef = ref();

	const showProject = (e) => {
		const projects = document.querySelectorAll(".project");

		projects.forEach((project) => {
			project.classList.remove("project--active");
		});

		if (projectRef.value.contains(e.target)) {
			projectRef.value.classList.add("project--active");
		}
	};
</script>

<template>
	<article class="project" ref="projectRef">
		<button class="project__btn" @click="showProject">
			<AppButtonCircle class="project__btn-circle" />
			<div class="project__description">
				<h4 class="project__title">homey goat studio</h4>
			</div>
		</button>
		<NuxtPicture src="/images/hg.png" class="project__img" />

		<div class="project__description-alt-wrapper">
			<div class="project__description-alt">
				<h4>homey goat studio</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nemo, at?
				</p>
			</div>
		</div>
	</article>
</template>

<style scoped>
	.project {
		display: grid;
		position: relative;
		cursor: pointer;
	}

	.project:hover .project__btn-circle,
	.project:focus .project__btn-circle,
	.project:hover .project__description h4,
	.project:focus .project__description h4 {
		--_color: white;
		color: var(--_color);
	}

	.project::after {
		content: "";
		position: absolute;
		bottom: -10px;
		right: 50%;
		width: 80%;
		height: 1px;

		transform: translateX(50%);

		background-color: var(--clr-txt);
		opacity: 0.3;
	}

	.project__btn {
		order: 2;
		display: flex;
		align-items: center;
		gap: 12px;
		padding-block: 10px;
	}

	.project__img {
		order: 1;
	}

	.project__description p {
		display: none;
	}

	@media (min-width: 768px) {
		.project {
			grid-template-columns: 60px 0fr;
			grid-template-rows: 70vh;
			overflow: hidden;
			transition: 1s all linear;
			transform-origin: left;
			position: relative;
			isolation: isolate;
		}

		.project--active,
		.project--active .project__description h4 {
			--_color: white;
			color: var(--_color);
		}

		.project::after {
			display: none;
		}

		.project--active {
			flex: 1;
			grid-template-columns: 60px 1fr;
		}

		.project__description-alt-wrapper {
			position: absolute;
			bottom: 0;
			left: 60px;
			width: calc(100% - 60px);
			height: 60px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			overflow-x: hidden;
		}

		.project__description-alt {
			transform: translateX(-100%);
			transition: 1s all linear 1s;
			opacity: 0;
		}

		.project__description-alt p,
		.project__description-alt h4 {
			white-space: nowrap;
		}

		.project--active .project__description-alt {
			transform: translateX(12px);
			opacity: 1;
		}

		.project__btn {
			flex-direction: column;
			justify-content: flex-end;
			padding-inline: 10px;
			padding-block: 12px;
			background-color: var(--clr-bg);
			position: relative;
			transition: 1s all linear;
		}

		.project__btn::after {
			content: "";
			position: absolute;
			bottom: 50%;
			right: 0;
			width: 1px;
			height: 60%;

			transform: translateY(50%);

			background-color: var(--clr-txt);
			opacity: 0.3;
		}

		.project--active .project__btn {
			background-color: transparent;
		}

		.project__description {
			display: flex;
			width: 100%;
			height: 100%;
			align-items: center;
			overflow-y: hidden;
			position: relative;
		}

		.project__title {
			display: flex;
			align-items: center;
			writing-mode: vertical-rl;
			rotate: 180deg;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;

			transform: translateY(12px);
			transition: 1s all linear 1s;
			opacity: 1;
		}

		.project--active .project__title {
			transform: translateY(-100%);
			opacity: 0;
		}

		.project__btn-circle {
			order: 1;
		}

		.project__img {
			position: absolute;
			inset: 0;
			z-index: -1;
		}

		.project__img :deep(img) {
			object-position: top;
		}
	}
</style>
