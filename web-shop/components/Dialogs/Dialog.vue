<template>
	<div :class="`dialog__window-container dialog__window-container_${dialogMode}`">
		<img class="dialog-window__close" src="~assets/images/dialog-cross.svg"
			@click="closeDialog"/>
		<div class="dialog__window">
			<ProductDialog v-if="dialogMode === 'product'" />
			<PresentationDialog v-if="dialogMode === 'presentation'" id="presentation-dialog"/>
			<ConsultationDialog v-if="dialogMode === 'consultation'" id="consultation-dialog" />
			<DialogsDocumentationDialog v-if="dialogMode === 'documentation'" />
			<DialogsContactInformationDialog v-if="dialogMode === 'contacts'" />
			<DialogsPolicyDialog v-if="dialogMode === 'policy'" />
			<VacansionDialog v-if="dialogMode === 'vacansion'" />
			<AnketDialog v-if="dialogMode === 'anket'" id="anket" />
		</div>
	</div>
</template>

<script>
import { store } from '~/store';
import ProductDialog from './ProductDialog/ProductDialog.vue';
import PresentationDialog from './PresentationDialog/PresentationDialog.vue';
import ConsultationDialog from './ConsultationDialog/ConsultationDialog.vue';
import VacansionDialog from './VacansionDialog/VacansionDialog.vue';
import AnketDialog from './AnketDialog/AnketDialog.vue';

export default {
	components: {
		ProductDialog,
		PresentationDialog,
		ConsultationDialog,
		VacansionDialog,
		AnketDialog,
	},
	props: {
		dialogMode: {
			type: String,
			default: '',
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
	},
}
</script>

<style lang="scss" scoped>
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

	margin-top: 90px;
}

.dialog-window__close {
	width: 24.38px;
	height: 24.38px;
	cursor: pointer;
	opacity: 0.25;
	transition: opacity 0.3s;
}

@keyframes show {
    0% {opacity: 0;}
    100% {opacity: 1;}
}

@media screen and (min-width: 1280px) and (hover: hover) {
	.dialog-window__close:hover {
		opacity: 1;
	}
}

@media screen and (width >= $ipad) and (width < $desktop) {
	.dialog__window {
		width: 780px;
	}
} 
</style>