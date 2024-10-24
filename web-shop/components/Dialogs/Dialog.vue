<template>
	<div class="dialog">
		<div :class="`dialog__shadow dialog__shadow_${dialogMode}`">
			<div :class="`dialog__window-container dialog__window-container_${dialogMode}`">
				<img class="dialog-window__close" src="~assets/images/dialog-cross.svg"
					@click="closeDialog"/>
				<div class="dialog__window">
					<ProductDialog v-if="dialogMode === 'product'" />
					<PresentationDialog v-if="dialogMode === 'presentation'" id="presentation-dialog"/>
					<ConsultationDialog v-if="dialogMode === 'consultation'" />
					<DialogsDocumentationDialog v-if="dialogMode === 'documentation'" />
					<DialogsContactInformationDialog v-if="dialogMode === 'contacts'" />
					<DialogsPolicyDialog v-if="dialogMode === 'policy'" />
					<VacansionDialog v-if="dialogMode === 'vacansion'" />
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
import VacansionDialog from './VacansionDialog/VacansionDialog.vue';

export default {
	components: {
		ProductDialog,
		PresentationDialog,
		ConsultationDialog,
		VacansionDialog,
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

	position: absolute;
	margin-top: 90px;
	top: 0;
	left: 50%;
	transform: translate(-50%, 0);
}

.dialog-window__close {
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
</style>