<template>
	<div class="product-cards">
		<div class="product-cards__container" :style="`transform: translate(${translateX}px, 0)`">
			<ProductCard class="product-card"
				v-for="card, cardNum in currentCards" 
				:key="`product-card_num-${cardNum}`"
				:description="card" />
			<div class="invisible-card"></div>
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

	computed: {
		cards() {
			let cards = store.state.productCards
			const filterName = store.state.filter
			if (filterName) {
				return cards.filter((elem) => elem.category === filterName)
			}
			return cards
		},
		translateX() {
			return this.firstCard * (-400);
		},
		currentCards() {
			return this.cards
		},
	},
	mounted() {
		const callback = function() {
				let index = 0
				const containerLeft = document.querySelector('.filter-button').getBoundingClientRect().left
				for (const card of document.querySelectorAll('.product-card')) {
					if (Math.abs(card.getBoundingClientRect().left - containerLeft) < 100) {
						this.$emit('updateFirst', index)
					}
					index++
				}
			}
		const targets = document.querySelectorAll('.product-card')
		const config = { root: document.querySelector('.product-cards'), rootMargin: '-1% 0% -99% 0%', threshold: 0  };

		const observer = new IntersectionObserver(callback.bind(this), config)
		targets.forEach(target => observer.observe(target))
	}
}
</script>

<style scoped lang="scss">
.product-cards {
	width: 100%;
	overflow: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
}
.product-cards::-webkit-scrollbar {
	display: none;
}
.product-cards__container {
	display: inline-flex;
	gap: 20px;
	transition: all 1s;
	scroll-snap-type: x mandatory;
}

.invisible-card {
	position: absolute;
}

@media screen and (width < $desktop) {
	.product-cards {
		scroll-snap-type: x mandatory;
	}
	.product-card {
		scroll-snap-align: start;
	}
}
</style>
