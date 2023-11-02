<template>
	<button class="btn flex gap-3 items-center lowercase" v-bind="$attrs">
		<AppButtonCircle />
		<slot />
	</button>
</template>

<script setup></script>
