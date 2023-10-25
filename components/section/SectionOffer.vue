<script setup>
	import SectionPartFrame from "./section-part/SectionPartFrame.vue";
	import SectionPartHeader from "./section-part/SectionPartHeader.vue";
	import SectionPartBody from "./section-part/SectionPartBody.vue";
	import mainPageText from "../../data/main-page-text.json";

	const imgSrc = "/images/about.png";
	const offer = mainPageText;
	const subSectionText = offer.offer["sub-section"];
</script>

<template>
	<SectionPartFrame>
		<SectionPartHeader>offer ?</SectionPartHeader>
		<SectionPartBody>
			<p>{{ offer.offer.p }}</p>

			<ul>
				<li class="pl-7 mt-7">
					<h3 class="offer__sub-section-title relative mb-">
						{{ subSectionText.design.title }}
					</h3>
					<p class="">{{ subSectionText.design.text }}</p>
				</li>
			</ul>
		</SectionPartBody>
	</SectionPartFrame>
</template>

<style scoped>
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
</style>
