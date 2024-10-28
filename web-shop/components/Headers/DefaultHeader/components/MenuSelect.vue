<template>
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
</template>

<script>
import { store } from '~/store';

export default {
	methods: {
		showDocumentationDialog() {
			window.event.stopPropagation()
			store.commit('changeDialogMode', {mode: ['documentation']})
		},
		showContactsDialog() {
			window.event.stopPropagation()
			store.commit('changeDialogMode', {mode: ['contacts']})
		},
		scrollTo(elemId) {
			window.event.stopPropagation()
			store.commit("scrollToElem", elemId)
		}
	}
}
</script>

<style lang="scss" scoped>
.select-list {
	position: absolute;
	margin-top: 65px;
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

@media screen and (min-width: 1280px) {
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
</style>
