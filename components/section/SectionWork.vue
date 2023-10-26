<script setup>
	import SectionPartFrame from "./section-part/SectionPartFrame.vue";
	import SectionPartHeader from "./section-part/SectionPartHeader.vue";
	import SectionPartBody from "./section-part/SectionPartBody.vue";
	import SectionPartProject from "./section-part/SectionPartProject.vue";
	import mainPageText from "../../data/main-page-text.json";
	import projects from "../../data/projects.json";

	const displayFirstProject = () => {
		const projects = document.querySelectorAll(".project");
		const lastProject = projects[projects.length - 1];
		lastProject.classList.add("project--active");
	};

	onMounted(() => displayFirstProject());
</script>

<template>
	<div class="min-h-screen grid gap-10 px-5 pb-16">
		<SectionPartFrame class="work__frame">
			<div>
				<SectionPartHeader>our work ?</SectionPartHeader>
				<SectionPartBody>
					<p class="md:pl-95">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Lorem ipsum dolor sit, amet
						consectetur adipisicing elit.
					</p>
				</SectionPartBody>
			</div>
		</SectionPartFrame>
		<!--  /.work-frame -->

		<div class="work__projects">
			<SectionSectionPartProject />
			<SectionSectionPartProject />
			<SectionSectionPartProject />
			<SectionSectionPartProject />
		</div>
	</div>
</template>

<style scoped>
	.work__frame {
		--align: center;
		--justify: flex-start;
	}

	.work__frame :deep(.section-container) {
		min-height: min-content;
	}

	.work__projects {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	@media (min-width: 768px) {
		.work__projects {
			width: 100%;
			margin-inline: auto;
			max-width: 1300px;
			flex-direction: row;
			gap: 0;
		}
	}
</style>
