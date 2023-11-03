<script setup>
	defineProps({
		title: {
			type: String,
			default: "",
		},
		description: {
			type: String,
			default: "",
		},
		preview: {
			type: String,
			default: "",
		},
	});
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
				<h4 class="project__title">{{ title }}</h4>
			</div>
		</button>
		<NuxtPicture :src="preview" class="project__img" />

		<div class="project__description-alt-wrapper-container">
			<div class="project__description-alt-wrapper">
				<div class="project__description-alt">
					<div>
						<h4>{{ title }}</h4>
						<p>
							{{ description }}
						</p>
					</div>
					<NuxtLink
						to="#"
						class="flex btn items-center text-[var(--clr-txt)] hover:text-white gap-1"
					>
						details
						<Icon
							name="ph:arrow-elbow-down-right-fill"
							size="20px"
						/>
					</NuxtLink>
				</div>
			</div>
		</div>
	</article>
</template>

<style scoped>
	.project {
		--tr-col: 0.5s;
		--tr-txt: 0.6s;
		--col-width-btn: 60px;
		--space-block: 10px;
		--space-inline: 12px;

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
		bottom: var(--space-block) * -1;
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
		gap: var(--space-inline);
		padding-block: var(--space-block);
	}

	.project__img {
		order: 1;
	}

	.project__img :deep(img) {
		object-position: top;
	}

	.project__description-alt-wrapper {
		display: none;
	}

	@media (min-width: 768px) {
		.project {
			grid-template-columns: var(--col-width-btn) 0fr;
			grid-template-rows: 70vh;
			transition: var(--tr-col) all ease-out;
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
			grid-template-columns: var(--col-width-btn) 1fr;
		}

		.project__description-alt-wrapper-container {
			position: absolute;
			bottom: 0;
			left: 0;
			height: var(--col-width-btn);
			width: 100%;
			background-color: var(--clr-bg);
			z-index: 0;
		}

		.project__description-alt-wrapper {
			position: absolute;
			bottom: 0;
			left: var(--col-width-btn);
			width: calc(100% - var(--col-width-btn));
			height: var(--col-width-btn);
			display: flex;
			flex-direction: column;
			justify-content: center;
			overflow-x: hidden;
			background-image: linear-gradient(
				to right,
				var(--clr-bg) 70%,
				var(--clr-primary)
			);
		}

		.project__description-alt {
			transform: translateX(-100%);
			transition: var(--tr-txt) all linear var(--tr-col);
			opacity: 0;
			display: flex;
			justify-content: space-between;
			padding-right: 30px;
		}

		.project__description-alt p,
		.project__description-alt h4 {
			white-space: nowrap;
		}

		.project--active .project__description-alt {
			transform: translateX(var(--space-inline));
			opacity: 1;
		}

		.project__btn {
			flex-direction: column;
			justify-content: flex-end;
			padding-inline: var(--space-block);
			padding-block: var(--space-inline);
			background-color: var(--clr-bg);
			position: relative;
			transition: var(--tr-txt) all linear;
			z-index: 1;
			max-height: 700px;
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

		.project--active .project__btn::after {
			display: none;
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

			transform: translateY(var(--space-inline));
			transition: var(--tr-txt) all linear var(--tr-col);
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
		}
	}
</style>
