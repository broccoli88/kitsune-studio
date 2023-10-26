<script setup>
	const cardRef = ref();

	const showProject = (e) => {
		const cards = document.querySelectorAll(".card");
		const btn = cardRef.value.querySelector(".card__btn");

		cards.forEach((card) => {
			card.classList.remove("card--active");
		});

		if (cardRef.value.contains(e.target)) {
			cardRef.value.classList.add("card--active");
		}
	};
</script>

<template>
	<article class="card" ref="cardRef">
		<button class="card__btn" @click="showProject">
			<AppButtonCircle class="card__btn-circle" />
			<div class="card__description">
				<h4 class="project__title">homey goat studio</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nemo, at?
				</p>
			</div>
		</button>
		<NuxtPicture src="/images/hg.png" class="project__img" />
	</article>
</template>

<style scoped>
	.card {
		display: grid;
		grid-template-columns: 60px 0fr;
		grid-template-rows: 70vh;
		overflow: hidden;
		transition: 1s all linear;
		transform-origin: left;
		position: relative;
		isolation: isolate;
	}

	.card--active {
		flex: 1;
		grid-template-columns: 60px 1fr;
	}

	.card__btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		gap: 12px;
		padding-inline: 10px;
		padding-block: 12px;
		border: 1px solid white;
		background-color: black;
	}

	.card__description {
		display: flex;
		align-items: center;
	}

	.project__title {
		writing-mode: vertical-rl;
		rotate: 180deg;
	}

	.card__btn-circle {
		order: 1;
	}

	.card__description p {
		display: none;
	}

	.project__img {
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	.project__img :deep(img) {
		object-position: top;
	}
</style>
