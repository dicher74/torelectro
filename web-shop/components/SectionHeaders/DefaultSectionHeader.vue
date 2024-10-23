<template>
	<div class="default-section-header">
		<p class="default-section-header__text" v-html="text"> </p>
	</div>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: ''
		},
	}
}
</script>

<style scoped lang="scss">
.default-section-header {
	width: 820px;
	display: flex;
	align-items: end;

	&__text {
		font-size: 30px;
		font-weight: 700;
		font-family: Evolventa;
		white-space: nowrap;
	}
}

</style>