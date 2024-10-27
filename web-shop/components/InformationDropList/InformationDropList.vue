<template>
	<div class="information-drop-list">
		<InformationDropItem 
			v-for="item, itemNum in items"
			:key="`information-frop-list__item_num-${itemNum}_desktop`"
			:title="item.title.phone"
			:description="item.description.phone"
			:theme="theme"
			:showMode="active === item.title.phone"
			class="information-drop-item information-drop-item_phone"
			@choose="choose(item.title.phone)"
			/>
		<InformationDropItem 
			v-for="item, itemNum in items"
			:key="`information-frop-list__item_num-${itemNum}_phone`"
			:title="item.title.desktop"
			:description="item.description.desktop"
			:theme="theme"
			:showMode="active === item.title.desktop"
			class="information-drop-item information-drop-item_desktop"
			@choose="choose(item.title.desktop)"
			/>
		<InformationDropItem 
			v-for="item, itemNum in items"
			:key="`information-frop-list__item_num-${itemNum}_ipad`"
			:title="item.title.ipad"
			:description="item.description.ipad"
			:theme="theme"
			:showMode="active === item.title.ipad"
			class="information-drop-item information-drop-item_ipad"
			@choose="choose(item.title.ipad)"
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

<style scoped lang="scss">
.information-drop-list {
	width: 100%;
	display: inline-flex;
	flex-direction: column;
	gap: 10px;
}

.information-drop-item_phone {
	display: none;
}
.information-drop-item_ipad {
	display: none;
}

@media screen and (width < $ipad) {
	.information-drop-item_phone {
		display: inline-flex;
	}
	.information-drop-item_desktop {
		display: none;
	}
}

@media screen and (width >= $ipad) and (width < $desktop) {
	.information-drop-item_desktop {
		display: none;
	}
	.information-drop-item_ipad {
		display: inline-flex;
	}
}
</style>