<template>
	<div class="filter-toolbar">
		<nav class="filter-toolbar__filter-buttons">
			<FilterButton 
				v-for="filter, filterNum in filters" 
				:key="`filter-button_num-${filterNum}`" 
				:text="filter.text"
				:selected="false" />
		</nav>
	<img class="filter-toolbar__scroll-arrow" src="~assets/images/scroll-arrow.svg" />
	</div>
</template>

<script>
import FilterButton from './FilterButton.vue';

export default {
	components: {
		FilterButton,
	},
	data() {
		return {
			filters: [
				{text: 'У-ПВС'},
				{text: 'У-КГ'},
			]
		}
	}
}
</script>

<style scoped lang="scss">
.filter-toolbar {
	width: 100%;
	display: inline-flex;
	justify-content: space-between;
	align-items: center;

	&__filter-buttons {
		box-sizing: border-box;
		display: inline-flex;
		gap: 10px;
	}
	&__scroll-arrow {
		display: flex;
		justify-self: end;
	}
}
</style>