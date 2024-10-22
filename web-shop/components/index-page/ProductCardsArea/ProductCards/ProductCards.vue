<template>
	<div class="product-cards">
		<div class="product-cards__container" :style="`transform: translate(${translateX}px, 0)`">
			<ProductCard
				v-for="card, cardNum in currentCards" 
				:key="`product-card_num-${cardNum}`"
				:description="card" />
		</div>
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { store } from '~/store'

export default {
	components: {
		ProductCard,
	},
	props: {
		firstCard: {
			type: Number,
			default: 0,
		}
	},

	data() {
		return {
			cardsAmount: 3,
			cards: store.state.productCards
		}
	},

	computed: {
		translateX() {
			return this.firstCard * (-400);
		},
		currentCards() {
			return this.cards
		}
	}
}
</script>

<style scoped>
.product-cards {
	width: 100%;
	overflow: hidden;
}
.product-cards__container {
	display: inline-flex;
	gap: 20px;
	transition: all 1s;
}
</style>
