<template>
	<div class="product-cards">
		<div class="product-cards__container" :style="`transform: translate(${translateX}px, 0)`">
			<ProductCard class="product-card"
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

	computed: {
		cards() {
			let cards = store.state.productCards
			const filterName = store.state.filter
			console.log('filter: ', filterName)
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
		swipeEnd() {
			const containerLeft = document.querySelector('.filter-button').getBoundingClientRect().left
			let index = 0
			for (const card of document.querySelectorAll('.product-card')) {
				if (Math.abs(card.getBoundingClientRect().left - containerLeft) < 10) {
					this.$emit('setFirst', index)
				}
				index++
			}
			console.log('end swipe!')
		}
	},
	mounted() {
		const updateFirst = function() {
			console.log('swipe -- !')
			setTimeout(function() {
				let index = 0
				const containerLeft = document.querySelector('.filter-button').getBoundingClientRect().left
				console.log('container-left: ', containerLeft)
				for (const card of document.querySelectorAll('.product-card')) {
					if (Math.abs(card.getBoundingClientRect().left - containerLeft) < 1) {
						console.log(index)
						this.$emit('updateFirst', index)
					}
					index++
				}
			}.bind(this), 900)
			
		}
		console.log(document.querySelector('.filter-toolbar__scroll-arrow').style.display)
		if (document.querySelector('.filter-toolbar__scroll-arrow').style.display === '') {
			document.addEventListener('pointercancel', updateFirst.bind(this))
			document.addEventListener('pointerup', updateFirst.bind(this))
		}
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

@media screen and (width < $desktop) {
	.product-cards {
		width: 100vw;
		padding-left: calc(50vw - 50% + 20px);
		padding-right: calc(50vw - 50% + 20px);
		box-sizing: border-box;
		scroll-snap-type: x mandatory;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
	}
	.product-card {
		scroll-snap-align: center;
	}
}
</style>
