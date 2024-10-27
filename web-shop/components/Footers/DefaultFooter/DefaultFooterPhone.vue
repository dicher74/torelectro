<template>
	<footer class="default-footer">
		<div class="default-footer__background"></div>
		<div class="default-footer__container">
			<div class="default-footer__empty-zone"></div>
			<div class="default-footer__content">
				<div class="content-column content-column_num-3">
					<a href="https://t.me/humanfromthefuture" target="_blank" class="telegram-icon">
						<img src="~assets/images/telegram-icon.svg" />
					</a>
					<div class="content-column__item_last-group">
						<a class="content-column__item_last">+7 999 999 99 99</a>
						<a class="content-column__item_last">tor@torelektro.ru</a>
					</div>
				</div>
				<div class="content-column content-column_num-1">
					<a class="content-column__item" href="#catalog"> Каталог всего ассортимента компании</a>
					<a class="content-column__item" @click="showDialog(['presentation'])">Презентация для сотрудничества</a>
					<a class="content-column__item" href="#questions">Популярные вопросы</a>
				</div>
				<div class="content-column content-column_num-2">
					<a class="content-column__item" @click="showDialog(['vacansion', 'anket'])">Вакансия</a>
					<a class="content-column__item" @click="showDialog(['documentation'])">Документация</a>
					<a class="content-column__item" @click="showDialog(['contacts'])">Контактная информация</a>
				</div>
			</div>
			<p class="default-footer__disclaimer">
				{{`Настоящий интернет-сайт, а также вся информация о товарах и об услугах, предоставленная на нём, носит исключительно
				информационный характер и ни при каких условиях не является офертой, определяемой действующим российским законодательством`}}
			</p>
			<div class="default-footer__extra-information">
				<div class="extra-information__item_group">
				<a class="extra-information__item extra-information__item_num-1" @click="showDialog(['policy'])">
					Политика конфиденциальности</a>
				<a class="extra-information__item extra-information__item_num-2">ООО «ТОРЭЛЕКТРО» · 123456789012345</a>
				</div>
				<div class="default-footer__map-area">
					<iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A661e153e04753d31ef2b01
								4289eb737fe3a0e4375abb8b37cce2fd79c9429410&amp;source=constructor" 
								width="350" height="240" frameborder="0"></iframe>
				</div>
				<a class="extra-information__item extra-information__item_num-3">by FFTF</a>
			</div>
		</div>
	</footer>
</template>

<script>
import { store } from '~/store';

export default {
	methods: {
		showDialog(mode) {
			window.event.stopPropagation()
			store.commit("changeDialogMode", { mode: mode })
		}
	}
}
</script>

<style lang="scss" scoped>
@media screen and (width < $ipad) {
	.default-footer {
		width: 100%;
		box-sizing: border-box;
		background-color: #101010;
		margin-top: 150px;
		display: inline-flex;
		&__container {
			position: absolute;
			display: inline-flex;
			flex-direction: column;
			gap: 40px;
			padding: 40px 0px;
			width: 350px;
		}
		&__content {
			box-sizing: border-box;
			display: inline-flex;
			z-index: 1;
			display: inline-flex;
			flex-direction: column;
			gap: 40px;
		}
		&__empty-zone {
			background-color: #F0F0F0;
			border-radius: 5px;
			width: 350px;
			height: 40px;
		}
		&__background {
			background-color: #101010;
			width: 100vw;
			margin-left: calc(50% - 50vw);
			margin-right: calc(50% - 50vw);
			height: 900px;
		}
		&__disclaimer {
			color: #505050;
			font-size: 14px;
			line-height: 15.4px;
			white-space: wrap;
			height: 90px;
		}
		&__extra-information {
			display: inline-flex;
			flex-direction: column;
			gap: 20px;
		}
		&__map-area {
			height: 150px;
			background-color: #F0F0F0;
			border-radius: 5px;
			overflow: hidden;
		}
	}
	.extra-information__item {
		color: #505050;
		font-size: 14px;
		line-height: 15.4px;
		height: 20px;
		&_group {
			display: inline-flex;
			flex-direction: column;
			gap: 5px;
		}
		&_num-2 {
			position: static;
			margin-left: 0;
		}
		&_num-3 {
			position: static;
			margin-left: 0;
		}
	}
	.content-column {
		display: inline-flex;
		flex-direction: column;
		gap: 5px;
		&__item {
			color: #909090;
			height: 20px;
			cursor: pointer;
			text-decoration: none;
			white-space: nowrap;
			font-size: 14px;
			line-height: 15.4px;
		}
		&__item_last-group {
			display: inline-flex;
			flex-direction: column;
			gap: 5px;
		}
		&__item_last {
			font-size: 18px;
			color: #FFFFFF;
			line-height: 19.8px;
		}
		&_num-2 {
			margin-left: 0;
			position: static;
		}
		&_num-3 {
			margin-left: 0;
			position: static;
			display: inline-flex;
			flex-direction: column;
			gap: 20px;
		}
	}
	.telegram-icon {
		width: 30px;
		height: 30px;
	}
}
</style>