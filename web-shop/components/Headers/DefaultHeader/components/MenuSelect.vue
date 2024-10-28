<template>
	<div class="select-shadow">
		<img class="shadow__close" src="~assets/images/dialog-cross.svg"
			@click="closeDialog"/>
		<nav class="select-list">
			<div class="select-list__section">
				<a class="select-list__tip" @click="scrollTo('catalog')"> Каталог всего ассортимента компании </a>
				<a class="select-list__tip" @click="scrollTo('presentation')"> Презентация для сотрудничества</a>
				<a class="select-list__tip" @click="scrollTo('information')"> Информация о компании </a>
			</div>
			<hr class="select-list__separator"/>
			<div class="select-list__section">
				<a class="select-list__tip" @click="showDocumentationDialog" > Необходимая документация </a>
				<a class="select-list__tip" @click="showContactsDialog" > Контактная информация </a>
			</div>
		</nav>
	</div>
</template>

<script>
import { store } from '~/store';

export default {
	methods: {
		showDocumentationDialog() {
			window.event.stopPropagation()
			this.$emit('choose')
			store.commit('changeDialogMode', {mode: ['documentation']})
		},
		showContactsDialog() {
			window.event.stopPropagation()
			this.$emit('choose')
			store.commit('changeDialogMode', {mode: ['contacts']})
		},
		scrollTo(elemId) {
			window.event.stopPropagation()
			this.$emit('choose')
			store.commit("scrollToElem", elemId)
		},
		closeDialog() {
			this.$emit('choose')
		}
	}
}
</script>

<style lang="scss" scoped>
.select-list {
	position: absolute;
	margin-top: 85px;
	right: calc(50vw - 598px);
	display: inline-flex;
	flex-direction: column;
	gap: 15px;
	padding: 15px 20px 20px 40px;
	border-radius: 5px;
	overflow: hidden;

	background-color: #FFFFFF;

	&__separator {
		outline: none;
		border: 0.5px #F0F0F0 solid;
		border-radius: 0.5px;
		margin-right: -20px;
	}

	&__section {
		display: inline-flex;
		flex-direction: column;
		gap: 10px;
	}

	&__tip {
		text-decoration: none;
		cursor: pointer;
	}
}

.select-shadow {
	top: 0;
	left: 0	;
	width: 100%;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	height: 4735px;
}

.shadow__close {
	width: 24.38px;
	height: 24.38px;
	cursor: pointer;
	opacity: 0.25;
	transition: opacity 0.3s;
	position: absolute;
	margin-top: 55px;
	right: calc(50vw - 598px);
}

@media screen and (min-width: $desktop) {
	.select-list__tip:hover {
		text-decoration: underline;
		&:before {
			content: '';
      		display: inline-block;
			width: 8px;
			height: 8px;
			border-radius: 100px;
			margin-left: -20px;
			margin-top: 6px;
			background-color: #FF3D00;
			text-decoration: none;
			position: absolute;
		}
	}
}

@media screen and (width < $desktop) and (width >= $ipad) {
	.select-list {
		right: calc(50vw - 398px);
	}
	.shadow__close {
		right: calc(50vw - 398px);
	}
}

@media screen and (width < $ipad) {
	.select-list {
		font-size: 14px;
		line-height: 15.4px;
		right: calc(50vw - 182px);
	}
	.shadow__close {
		right: calc(50vw - 182px);
	}
}

@media screen and (hover: hover){
	.shadow__close:hover {
		opacity: 1;
	}
}
</style>
