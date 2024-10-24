<template>
	<div class="dialog-area">
		<div class="dialog__shadow">
			<div class="dialogs-container">
				<Dialog 
					v-for="(dialog, dialogNum) in dialogList" :key="`diallog_num-${dialogNum}`"
					:dialogMode="dialog" />
			</div>
		</div>
	</div>
</template>

<script>
import { store } from '~/store';
import Dialog from './Dialog.vue';

export default {
	components: {
		Dialog,
	},
	computed: {
		dialogList() {
			return store.state.dialogList
		}
	},
	mounted() {
		console.log('show dialog!')
		store.commit('scrollToTop')
	}
}
</script>

<style lang="scss" scoped>
.dialog__shadow {
	top: 0;
	left: 0	;
	width: 100%;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	height: 4735px;
}
.dialogs-container {
	display: inline-flex;
	flex-direction: column;
	gap: 1000px;
}
</style>