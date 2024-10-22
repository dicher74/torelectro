<template>
	<section class="product-cards-area">
		<DefaultSectionHeader :text="title" />
		<Filters />
		<ProductCards />
	</section>
</template>

<script>
import DefaultSectionHeader from '~/components/SectionHeaders/DefaultSectionHeader.vue';
import Filters from './Filters/Filters.vue';
import ProductCards from './ProductCards/ProductCards.vue';

export default {
	components: {
		DefaultSectionHeader,
		Filters,
		ProductCards,
	},
	data() {
		return {
			title: "Каталог со всеми категориями нашего ассортимента",
		}
	}
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