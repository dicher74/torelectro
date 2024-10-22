<template>
	<div class="filter-toolbar">
		<nav class="filter-toolbar__filter-buttons">
			<FilterButton 
				v-for="filter, filterNum in filters" 
				:key="`filter-button_num-${filterNum}`" 
				:text="filter.text"
				:selected="filter.selected" 
				:hint="filter.hint"
				@click="select(filterNum)"/>
		</nav>
	<img class="filter-toolbar__scroll-arrow" @click="scrollNext" src="~assets/images/scroll-arrow.svg" />
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
				{text: 'У-ПВС', selected: false, 
					hint: `удлинители с проводом 
							виниловым соединительным`},
				{text: 'У-КГ', selected: false,
					hint: `удлинители с кабелем
							гибким`
				},
			]
		}
	},
	methods: {
		select(index) {
			for (let filterNum = 0; filterNum < this.filters.length; filterNum++) {
				if (filterNum === index) continue;
				this.filters[filterNum].selected = false
			}
			this.filters[index].selected = !this.filters[index].selected
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
</style>