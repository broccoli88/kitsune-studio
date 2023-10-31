<script setup>
	import mainPageText from "@/data/main-page-text.json";
</script>

<template>
	<section
		class="contact-wrapper section-container min-h-screen grid grid-cols-1 px-5"
	>
		<div class="flex flex-col gap-11">
			<SectionSectionPartHeader>
				{{ mainPageText.contact.title }}
			</SectionSectionPartHeader>
			<p>{{ mainPageText.contact.p }}</p>
		</div>
		<SectionSectionFormForm class="mt-11 md:mt-24 md:self-center" />
	</section>
</template>

<style scoped>
	@media (min-width: 768px) {
		.contact-wrapper {
			grid-template-columns: 40% 1fr;
			gap: 40px;
		}
	}
</style>
