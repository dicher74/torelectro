<template>
	<div class="information-drop-list">
		<InformationDropItem 
			v-for="item, itemNum in items"
			:key="`information-frop-list__item_num-${itemNum}`"
			:title="item.title"
			:description="item.description"
			:theme="theme"
			:showMode="active === item.title"
			@click="choose(item.title)"
			/>
	</div>
</template>

<script>
import InformationDropItem from './InformationDropItem.vue';

export default {
	components: {
		InformationDropItem,
	},
	props: {
		items: {
			type: Array,
			default: () => [],
		},
		theme: {
			type: String,
			default: "white",
		}
	},
	data() {
		return {
			active: null,
		}
	},
	methods: {
		choose(item) {
			if (this.active === item) {
				this.active = null
				return;
			}
			this.active = item
		}
	}
}
</script>

<style scoped>
.information-drop-list {
	width: 100%;
	display: inline-flex;
	flex-direction: column;
	gap: 10px;
}
</style>