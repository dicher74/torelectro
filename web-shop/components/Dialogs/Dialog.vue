<template>
	<div class="dialog">
		<div class="dialog__shadow"></div>
		<div class="dialog__window">
			<img class="dialog-window__close" src="~assets/images/dialog-cross.svg"/>
			<ProductDialog v-if="dialogMode === 'product'" />
		</div>
	</div>
</template>

<script>
import { store } from '~/store';
import ProductDialog from './ProductDialog/ProductDialog.vue';

export default {
	components: {
		ProductDialog,
	},
	data() {
		return {
			dialogMode: store.state.dialogMode
		}
	},
	watch: {
		dialogMode(newValue) {
			console.log('dialog mode: ', newValue)
		}
	}
}
</script>

<style lang="scss" scoped>
.dialog__window {
	background-color: #FFFFFF;
	padding: 20px;
	border-radius: 5px;
}
</style>