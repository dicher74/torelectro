<template>
	<div class="filter-toolbar">
		<nav class="filter-toolbar__filter-buttons">
			<FilterButton 
				v-for="filter, filterNum in filters" 
				:key="`filter-button_num-${filterNum}`" 
				:text="filter.text"
				:selected="selected === filter.id" 
				:hint="filter.hint"
				@click="select(filterNum)"/>
		</nav>
	<img class="filter-toolbar__scroll-arrow" @click="scrollNext" src="~assets/images/scroll-arrow.svg" />
	</div>
</template>

<script>
import { store } from '~/store';
import FilterButton from './FilterButton.vue';

export default {
	components: {
		FilterButton,
	},
	data() {
		return {
			filters: [
				{
					id: 'У-ПВС', 
					text: 'У-ПВС',
					hint: `удлинители с проводом 
							виниловым соединительным`},
				{
					id: 'У-КГ',
					text: 'У-КГ ХЛ',
					hint: `удлинители с кабелем
							гибким`
				},
			]
		}
	},
	computed: {
		selected() {
			return store.state.filter
		}
	},
	methods: {
		select(index) {
			store.commit('setFilter', {
				filterName: this.filters[index].id,
				select: true
			})
		},
		scrollNext() {
			this.$emit('scrollNext')
		}
	},
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
		cursor: pointer;
	}
}

@media screen and (width < $ipad) {
	.filter-toolbar__scroll-arrow {
		display: none;
	};
}
</style>