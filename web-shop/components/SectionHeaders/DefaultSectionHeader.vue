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
	display: flex;
	position: relative;
	top: 1px;

	&__text {
		font-size: 30px;
		font-weight: 700;
		font-family: Evolventa;
		white-space: nowrap;
		line-height: 33px;
		height: 50px;
	}
}

@media screen and (width >= $ipad) and (width <= $desktop) {
	.default-section-header{
		&__text {
			font-size: 24px;
			list-style: 26.4px
		}
	}
}
</style>