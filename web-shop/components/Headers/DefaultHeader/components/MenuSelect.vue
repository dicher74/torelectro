<template>
	<nav class="select-list">
		<div class="select-list__section">
			<a class="select-list__tip" href="#catalog"> Каталог всего ассортимента компании </a>
			<a class="select-list__tip" href="#presentation"> Презентация для сотрудничества</a>
			<a class="select-list__tip" href="#information"> Информация о компании </a>
			<a class="select-list__tip" href="#questions"> Популярные вопросы </a>
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
			store.commit('changeDialogMode', {mode: 'documentation'})
		},
		showContactsDialog() {
			store.commit('changeDialogMode', {mode: 'contacts'})
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
	animation-name: down;
	animation-duration: 1s;
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
			width: 7px;
			height: 7px;
			border-radius: 3.5px;
			margin-left: -20px;
			margin-top: 8px;
			background-color: #FF3D00;
			text-decoration: none;
			position: absolute;
		}
	}
}

@keyframes down {
	from {
		max-height: 0px;
	}
	to {
		max-height: 300px;
	}
}
</style>
