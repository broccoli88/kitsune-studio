<script setup>
	import SectionPartFrame from "./section-part/SectionPartFrame.vue";
	import SectionPartHeader from "./section-part/SectionPartHeader.vue";
	import SectionPartBody from "./section-part/SectionPartBody.vue";
	import mainPageText from "../../data/main-page-text.json";

	const imgSrc = "/images/offer.png";
	const offer = mainPageText;
	const subSectionTexts = offer.offer["sub-section"];
</script>

<template>
	<SectionPartFrame class="offer__frame">
		<div>
			<SectionPartHeader>{{
				mainPageText.offer.title
			}}</SectionPartHeader>
			<SectionPartBody class="md:pl-95">
				<p>{{ offer.offer.p }}</p>
				<ul>
					<li
						class="pl-7 mt-7"
						v-for="subSection in subSectionTexts"
						:key="subSection.title"
					>
						<h4 class="offer__sub-section-title relative mb-3">
							{{ subSection.title }}
						</h4>
						<p class="md:pl-95">{{ subSection.text }}</p>
					</li>
				</ul>
			</SectionPartBody>
		</div>
		<AppImage :img-src="imgSrc" class="offer--bg" />
	</SectionPartFrame>
</template>

<style scoped>
	.offer__frame {
		--align: flex-end;
	}
	.offer__sub-section-title::before {
		content: "";
		position: absolute;
		top: 50%;
		left: -25px;
		width: 10px;
		aspect-ratio: 1;
		border: 2px solid white;
		border-radius: 50%;
		transform: translateY(-50%);
	}

	.offer--bg {
		--right: -40%;
		--top: 5vh;
		--opacity: 0.5;
		--transparency: 70%;
	}

	@media (min-width: 768px) {
		.offer--bg {
			--right: 10vw;
		}
	}
</style>
