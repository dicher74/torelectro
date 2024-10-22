<template>
	<div class="product-cards">
		<ProductCard
			v-for="card, cardNum in currentCards" 
			:key="`product-card_num-${cardNum}`"
			:description="card" />
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
	components: {
		ProductCard,
	},
	props: {
		startCard: {
			type: Number,
			default: 0,
		}
	},

	data() {
		return {
			cardsAmount: 3,
			cards: [
				{
					title: 'Удлинители в бухте · без заземления',
					options: [
						{name: 'сеченик кабеля', value: '2х1,0 · 2х1,5 · 2х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 50 метров'},
						{name: 'защита кабеля', value: 'IP44 · крышка на розетке'}
					],
				},
				{
					title: 'Удлинители в бухте · без заземления',
					options: [
						{name: 'сеченик кабеля', value: '2х1,0 · 2х1,5 · 2х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 50 метров'},
						{name: 'защита кабеля', value: 'IP44 · крышка на розетке'}
					],
				},
			]
		}
	},

	computed: {
		currentCards() {
			return this.cards
		}
	}
}
</script>

<style scoped>
.product-cards {
	display: inline-flex;
	gap: 20px;
}
</style>
