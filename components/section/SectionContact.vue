<script setup>
	import mainPageText from "@/data/main-page-text.json";
</script>

<template>
	<section class="relative">
		<div
			class="contact-wrapper section-container min-h-screen grid grid-cols-1 px-5"
		>
			<NuxtPicture src="/images/contact-bg.png" class="contact__bg" />
			<div class="flex flex-col gap-11">
				<SectionSectionPartHeader class="h-min">
					{{ mainPageText.contact.title }}
				</SectionSectionPartHeader>
				<p>{{ mainPageText.contact.p }}</p>
			</div>
			<SectionSectionFormForm class="mt-11 md:mt-24 md:self-center" />
		</div>
	</section>
</template>

<style scoped>
	.contact__bg {
		position: absolute;
		top: -20%;
		left: 0;
		width: 150%;
		height: 180%;
		z-index: -1;
		opacity: 0.7;
		-webkit-mask-image: linear-gradient(to top, black 10%, transparent);
		mask-image: linear-gradient(to top, black 10%, transparent);
	}

	.contact__bg :deep(img) {
		object-position: top;
	}
	@media (min-width: 768px) {
		.contact-wrapper {
			grid-template-columns: 40% 1fr;
			gap: 40px;
		}

		.contact__bg {
			left: -30%;
		}
	}
</style>
