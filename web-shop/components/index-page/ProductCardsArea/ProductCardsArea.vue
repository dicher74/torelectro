<template>
	<section class="product-cards-area">
		<DefaultSectionHeader :text="title"class="product-cards__title"/>
		<Filters @scrollNext="scrollNext" @changeFilter="changeFilter"/>
		<ProductCards :firstCard="firstCard" @updateFirst="updateFirst"/>
		<ScrollProgress :choosed="progressCard" :cards-amount="cardsAmount"/>
	</section>
</template>

<script>
import DefaultSectionHeader from '~/components/SectionHeaders/DefaultSectionHeader.vue';
import Filters from './Filters/Filters.vue';
import ProductCards from './ProductCards/ProductCards.vue';
import ScrollProgress from './ScrollProgress.vue';

import { store } from "~/store"

export default {
	components: {
		DefaultSectionHeader,
		Filters,
		ProductCards,
		ScrollProgress,
	},
	data() {
		return {
			title: "Каталог со всеми категориями нашего ассортимента",
			firstCard: 0,
			progressCard: 0,
		}
	},
	computed: {
		cardsAmount() {
			const filterName = store.state.filter
			let cards = store.state.productCards
			if (filterName) {
				cards = store.state.productCards.filter((elem) => elem.category === filterName)
			}
			console.log(cards)
			return cards.length
		}
	},
	methods: {
		scrollNext() {
			const filterName = store.state.filter
			let cards = store.state.productCards
			if (filterName) {
				cards = store.state.productCards.filter((elem) => elem.category === filterName)
			}
			this.firstCard = (this.firstCard + 1) % cards.length
			this.progressCard =  this.firstCard
		},
		changeFilter() {
			this.firstCard = 0
			this.progressCard = 0
		},
		updateFirst(index) {
			this.progressCard = index
			console.log('update first! ', index)
		}
	},
}
</script>

<style lang="scss" scoped>
.product-cards-area {
	display: inline-flex;
	flex-direction: column;
	gap: 20px;
	margin-top: 250px;
	width: 100%;
}
.product-cards__title {
	top: 10px;
}
@media screen and (width < $ipad) {
	.product-cards-area {
		margin-top: 100px;
		
	}
}

@media screen and (width >= $ipad) and (width < $desktop) {
	.product-cards-area {
		margin-top: 270px;
	}
}

@media screen and (width < $ipad) {
	.product-cards__title {
		top: 0px;
	}
}
</style>