<template>
	<div class="information-drop-list">
		<InformationDropItem 
			v-for="item, itemNum in items"
			:key="`information-frop-list__item_num-${itemNum}`"
			:title="item.title"
			:description="item.description"
			:theme="theme"
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