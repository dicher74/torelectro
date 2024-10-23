<template>
	<section class="product-cards-area">
		<DefaultSectionHeader :text="title" />
		<Filters @scrollNext="scrollNext" @changeFilter="changeFilter"/>
		<ProductCards :firstCard="firstCard"/>
	</section>
</template>

<script>
import DefaultSectionHeader from '~/components/SectionHeaders/DefaultSectionHeader.vue';
import Filters from './Filters/Filters.vue';
import ProductCards from './ProductCards/ProductCards.vue';

import { store } from "~/store"

export default {
	components: {
		DefaultSectionHeader,
		Filters,
		ProductCards,
	},
	data() {
		return {
			title: "Каталог со всеми категориями нашего ассортимента",
			firstCard: 0,
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
		},
		changeFilter() {
			this.firstCard = 0
		}
	},
}
</script>

<style scoped>
.product-cards-area {
	display: inline-flex;
	flex-direction: column;
	gap: 20px;
	margin-top: 250px;
	width: 100%;
}
</style>