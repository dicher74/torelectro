<template>
	<footer class="default-footer">
		<div class="default-footer__background"></div>
		<div class="default-footer__container">
			<div class="default-footer__empty-zone"></div>
			<div class="default-footer__content">
				<div class="content-column content-column_num-1">
					<a class="content-column__item" href="#catalog"> Каталог всего ассортимента компании</a>
					<a class="content-column__item" href="#presentation">Презентация для сотрудничества</a>
					<a class="content-column__item" href="#questions">Популярные вопросы</a>
				</div>
				<div class="content-column content-column_num-2">
					<a class="content-column__item">Вакансия</a>
					<a class="content-column__item" @click="showDocumentationDialog">Документация</a>
					<a class="content-column__item" @click="showContactsDialog">Контактная информация</a>
				</div>
				<div class="content-column content-column_num-3">
					<a class="content-column__item_last">+7 999 999 99 99</a>
					<a class="content-column__item_last">tor@torelektro.ru</a>
				</div>
				<img class="telegram-icon" src="~assets/images/telegram-icon.svg" />
			</div>
			<p class="default-footer__disclaimer">
				Настоящий интернет-сайт, а также вся информация о товарах и об услугах, предоставленная на нём, носит исключительно
				информационный характер и ни при каких условиях не является офертой, определяемой действующим российским законодательством
			</p>
			<div class="default-footer__extra-information">
				<a class="extra-information__item extra-information__item_num-1" @click="showPolicyDialog" href="#header">
					Политика конфиденциальности</a>
				<a class="extra-information__item extra-information__item_num-2">ООО «ТОРЭЛЕКТРО» · 123456789012345</a>
				<a class="extra-information__item extra-information__item_num-3">by FFTF</a>
			</div>
			<div class="default-footer__map-area"></div>
		</div>
	</footer>
</template>


<script>
import { store } from '~/store';

export default {
	methods: {
		showDocumentationDialog() {
			store.commit("changeDialogMode", { mode: 'documentation' })
		},
		showContactsDialog() {
			store.commit("changeDialogMode", {mode: 'contacts'})
		},
		showPolicyDialog() {
			store.commit("changeDialogMode", {mode: 'policy'})
		}
	}
}
</script>

<style lang="scss" scoped>
.default-footer {
	width: 100%;
	box-sizing: border-box;
	background-color: #101010;
	margin-top: 150px;
	display: inline-flex;

	&__background {
		background-color: #101010;
		width: 100vw;
		height: 545px;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
	}
	&__container {
		width: 1180px;
		box-sizing: border-box;
		position: absolute;
		display: inline-flex;
		flex-direction: column;
		gap: 30px;
		padding: 60px 0 50px 0;
	}
	&__empty-zone {
		background-color: #F0F0F0;
		width: 380px;
		height: 40px;
		border-radius: 5px;
	}
	&__content {
		z-index: 1;
		display: inline-flex;
	}
	&__disclaimer {
		white-space: pre-line;
		color: #505050;
		line-height: 17.6px;
		height: 35px;
	}
	&__extra-information {
		display: inline-flex;
	}
	&__map-area {
		height: 150px;
		background-color: #F0F0F0;
		border-radius: 5px;
	}
}

.content-column {
	display: inline-flex;
	flex-direction: column;
	gap: 5px;

	&_num-2 {
		position: absolute;
		margin-left: 400px;
	}
	&_num-3 {
		position: absolute;
		margin-left: 800px;
	}

	&__item {
		cursor: pointer;
		font-size: 16px;
		color: #909090;
		line-height: 17.6px;
		height: 20px;
		text-decoration: none;
	}

	&__item_last {
		font-size: 18px;
		color: #FFFFFF;
		line-height: 19.8px;
	}
}

.extra-information__item {
	color: #505050;
	line-height: 17.6px;
	height: 20px;

	&_num-2 {
		position: absolute;
		margin-left: 400px;
	}
	&_num-3 {
		position: absolute;
		margin-left: 800px;
		font-family: RAYDIS;
		font-weight: 700;
	}
}

.telegram-icon {
	margin-left: auto;
	width: 30px;
	height: 30px;
}
</style>
