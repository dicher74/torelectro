<template>
	<div class="dialog">
		<div class="dialog__shadow">
			<div class="dialog__window-container">
				<img class="dialog-window__close" src="~assets/images/dialog-cross.svg"
					@click="closeDialog"/>
				<div class="dialog__window">
					<ProductDialog v-if="dialogMode === 'product'" />
					<PresentationDialog v-if="dialogMode === 'presentation'" />
					<ConsultationDialog v-if="dialogMode === 'consultation'" />
					<DialogsDocumentationDialog v-if="dialogMode === 'documentation'" />
					<DialogsContactInformationDialog v-if="dialogMode === 'contacts'" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { store } from '~/store';
import ProductDialog from './ProductDialog/ProductDialog.vue';
import PresentationDialog from './PresentationDialog/PresentationDialog.vue';
import ConsultationDialog from './ConsultationDialog/ConsultationDialog.vue';

export default {
	components: {
		ProductDialog,
		PresentationDialog,
		ConsultationDialog,
	},
	computed: {
		dialogMode() {
			return store.state.dialogMode
		}
	},
	methods: {
		closeDialog() {
			store.commit('closeDialog')
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
.dialog__shadow {
	position: fixed;
	top: 0;
	left: 0	;
	width: 100%;
	min-height: 100vh;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.5)
}
.dialog__window {
	background-color: #FFFFFF;
	padding: 20px;
	border-radius: 5px;
	width: 1180px;
	box-sizing: border-box;
	display: inline-flex;
	justify-content: center;
}

.dialog__window-container {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 5px;

	opacity: 1;
    animation: show 0.8s;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.dialog-window__close {
	cursor: pointer;
}

@keyframes show {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
</style>