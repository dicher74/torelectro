<template>
	<div class="scroll-progress">
		<div 
			v-for="card in cardsAmount" :key="`scroll-progress__item_num-${card}`"
			:class="`scroll-progress__item scroll-progress__item_choosed-${choosed + 1 == card}`"></div>
	</div>
</template>

<script>
export default {
	props: {
		choosed: {
			type: Number,
			default: 0,
		},
		cardsAmount: {
			type: Number,
			default: 0,
		},
	},
	mounted() {
		console.log(this.choosed, this.cardsAmount)
	}
}
</script>

<style lang="scss" scoped>
.scroll-progress {
	display: inline-flex;
	align-self: center;
	gap: 2px;
	margin-top: -5px;

	&__item {
		background-color: rgba(255, 61, 0, 0.25);
		width: 10px;
		height: 10px;
		border-radius: 5px;
	}
	&__item_choosed-true {
		background-color: rgba(255, 61, 0, 0.75);
	}
}
</style>