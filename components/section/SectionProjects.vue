<script setup>
	import SectionPartFrame from "./section-part/SectionPartFrame.vue";
	import SectionPartHeader from "./section-part/SectionPartHeader.vue";
	import SectionPartBody from "./section-part/SectionPartBody.vue";
	import SectionPartProject from "./section-part/SectionPartProject.vue";
	import mainPageText from "@/data/main-page-text.json";
	import projects from "@/data/projects.json";
	import links from "@/data/links.json";

	const projectsLinks = links.projects;

	const displayFirstProject = () => {
		const projects = document.querySelectorAll(".project");
		const lastProject = projects[projects.length - 1];
		lastProject.classList.add("project--active");
	};

	onMounted(() => {
		displayFirstProject();
	});
</script>

<template>
	<div class="min-h-screen grid gap-10 px-5 pb-16">
		<SectionPartFrame class="work__frame">
			<div>
				<SectionPartHeader>
					{{ mainPageText.projects.title }}</SectionPartHeader
				>
				<SectionPartBody
					:name="projectsLinks.lng_name"
					:title="projectsLinks.title"
					:link="projectsLinks.link"
				>
					<p class="md:pl-95">{{ mainPageText.projects.p }}</p>
				</SectionPartBody>
			</div>
		</SectionPartFrame>
		<!--  /.work-frame -->

		<div class="work__projects">
			<SectionPartProject
				v-for="(project, index) in projects"
				:key="index"
				:title="project.name"
				:description="project.shortDescription"
				:preview="project.previewImg"
			/>
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
		position: relative;
		/* z-index: -1; */
	}

	@media (min-width: 768px) {
		.work__projects {
			width: 100%;
			max-height: 700px;
			margin-inline: auto;
			max-width: 1300px;
			flex-direction: row;
			gap: 0;
		}
	}
</style>
