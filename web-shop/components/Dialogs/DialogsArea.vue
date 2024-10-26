<template>
	<div class="dialog-area">
		<div class="dialog__shadow">
			<div class="dialogs-container" :style="`margin-top: ${marginTop}px`">
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
	data() {
		return {
			firstDialogHeight: 0
		}
	},
	computed: {
		dialogList() {
			return store.state.dialogList
		},
		central() {
			const centralModes = ['presentation', 'consultation', 'product']
			for (const dialog of this.dialogList) {
				if (centralModes.includes(dialog)) {
					return true;
				}
			}
			return false;
		},
		marginTop() {
			if (this.central) {
				console.log(window.scrollY)
				console.log('page height:', window.innerHeight)
				return window.scrollY - this.firstDialogHeight / 2 + window.innerHeight / 2 - 110
			}
			return 0;
		},
		styleList() {
			return `margin-top: ${this.marginTop - 90}px;`
		}
	},
	mounted() {
		if (!this.central) {
			store.commit('scrollToTop')
		}
		this.firstDialogHeight = document.querySelector('.dialog__window').getBoundingClientRect().height
		console.log(this.firstDialogHeight)
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
	position: absolute;
	width: 100%;
	display: inline-flex;
	flex-direction: column;
	gap: 1000px;
	align-items: center;
}
</style>