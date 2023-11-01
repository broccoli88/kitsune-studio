<script setup>
	defineProps({
		label: {
			type: String,
			default: "",
		},
		id: {
			type: String,
			default: "",
		},
		placeholder: {
			type: String,
			default: "",
		},
	});
	defineEmits(["update:modelValue"]);
</script>

<template>
	<div class="flex flex-col gap-2">
		<label :for="id" class="pl-5 flex items-center gap-3">
			<div class="border-2 border-txt rounded-full w-2 h-2"></div>
			{{ label }}</label
		>

		<textarea
			rows="10"
			type="text"
			:id="id"
			:placeholder="placeholder"
			@input="$emit('update:modelValue', $event.target.value)"
			class="input border-2 border-secondary rounded-lg pl-10 pr-5 py-3 text-fsm-txt outline-none tracking-[2px] md:text-fsd-txt"
		/>
		<!-- <p class="text-fsm-txt md:text-fsd-txt text-primary2">error</p> -->
	</div>
</template>

<style scoped>
	.input {
		background-color: hsl(330, 9%, 4%, 0.6);
	}
</style>
