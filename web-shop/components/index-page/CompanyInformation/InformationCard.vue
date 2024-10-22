<template>
	<div class="information-card">
		<p class="information-card__title"> {{ title }} </p>
		<p class="information-card__description"> {{ description }} </p>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
	}
}
</script>

<style scoped lang="scss">
.information-card {
	background-color: #FFFFFF;
	display: inline-flex;
	flex-direction: column;

	padding: 50px 20px;

	&__description {
		white-space: pre-line;
		font-size: 18px;
	}

	&__title {
		color: #FF3D00;
		font-weight: 700;
		font-size: 24px;
	}
}
</style>