<template>
	<section class="product-cards-area">
		<DefaultSectionHeader :text="title" />
		<Filters @scrollNext="scrollNext"/>
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
			this.firstCard = (this.firstCard + 1) % store.state.productCards.length
		},
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