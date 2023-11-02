<script setup>
	import formText from "@/data/form-text.json";

	const fullName = formText.fullName;
	const email = formText.email;
	const phone = formText.phone;
	const inquiry = formText.inquiry;
	const message = formText.message;

	const state = reactive({
		fullName: "",
		email: "",
		phone: null,
		inquiry: "",
		message: "",
	});

	const submitMessage = () => {
		console.log(state);
	};
</script>

<template>
	<form class="flex flex-col gap-4 w-full" @submit.prevent="submitMessage">
		<SectionSectionFormInput
			:label="fullName.label"
			:id="fullName.id"
			:placeholder="fullName.placeholder"
			v-model="state.fullName"
		/>
		<div class="md:grid md:grid-cols-2 gap-4">
			<SectionSectionFormInput
				type="email"
				:label="email.label"
				:id="email.id"
				:placeholder="email.placeholder"
				v-model="state.email"
			/>
			<SectionSectionFormInput
				type="tel"
				:label="phone.label"
				:id="phone.id"
				:placeholder="phone.placeholder"
				v-model="state.phone"
			/>
		</div>
		<SectionSectionFormInput
			:label="inquiry.label"
			:id="inquiry.id"
			:placeholder="inquiry.placeholder"
			v-model="state.inquiry"
		/>
		<SectionSectionFormTextArea
			:label="message.label"
			:id="message.id"
			:placeholder="message.placeholder"
			v-model="state.message"
		/>
		<AppButton class="self-end mt-11"> send message ? </AppButton>
	</form>
</template>

<style scoped></style>
