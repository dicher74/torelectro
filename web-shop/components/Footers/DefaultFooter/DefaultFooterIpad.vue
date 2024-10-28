<template>
	<footer class="default-footer default-footer_ipad">
		<div class="default-footer__background"></div>
		<div class="default-footer__container">
			<div class="default-footer__empty-zone"></div>
			<div class="default-footer__content">
				<div class="content-column content-column_num-1">
					<a class="content-column__item" href="#catalog"> Каталог всего ассортимента компании</a>
					<a class="content-column__item" @click="showDialog(['presentation'])">Презентация для сотрудничества</a>
					<a class="content-column__item" style="pointer-events: none;"></a>
				</div>
				<div class="content-column content-column_num-2">
					<a class="content-column__item" @click="showDialog(['vacansion', 'anket'])">Вакансия</a>
					<a class="content-column__item" @click="showDialog(['documentation'])">Документация</a>
					<a class="content-column__item" @click="showDialog(['contacts'])">Контактная информация</a>
				</div>
			</div>
			<p class="default-footer__disclaimer">
				{{`Настоящий интернет-сайт, а также вся информация о товарах и об услугах, предоставленная на нём, 
				носит исключительно информационный характер и ни при каких условиях не является офертой, 
				определяемой действующим российским законодательством`}}
			</p>
			<div class="default-footer__contacts-area">
				<div class="default-footer__map-area">
					<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A754a2e491871d03e955
					adbe14bfe277b69db029e6128f126b626fba6d034bcc4&amp;source=constructor" 
					width="380" height="240" frameborder="0"></iframe>
				</div>
				<div class="default-footer__contacts-column">
					
					<div class="contacts-column__group-1">
						<a class="content-column__item_last">+7 999 999 99 99</a>
						<a class="content-column__item_last">tor@torelektro.ru</a>
					</div>
					<div class="contacts-column__group-2">
						<a class="extra-information__item extra-information__item_num-1" @click="showDialog(['policy'])">
							Политика конфиденциальности</a>
						<a class="extra-information__item extra-information__item_num-2">ООО «ТОРЭЛЕКТРО» · 123456789012345</a>
					</div>
					<div class="contacts-column__empty"></div>
				</div>
				<a href="https://t.me/humanfromthefuture" target="_blank" class="telegram-icon">
					<img src="~assets/images/telegram-icon.svg" />
				</a>
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
@media screen and (width >= $ipad) and (width < $desktop) {
	.contacts-column {
		&__group-1 {
			display: inline-flex;
			flex-direction: column;
			gap: 5px;
		}
		&__group-2 {
			display: inline-flex;
			flex-direction: column;
			gap: 5px;
		}
		&__empty {
			margin-top: -2px;
			height: 30px;
			width: 180px;
			background-color: rgba(217, 217, 217, 1);
		}
	}
	.default-footer {
	width: 100%;
	box-sizing: border-box;
	background-color: #101010;
	margin-top: 150px;
	display: inline-flex;
	
	&__contacts-column {
		display: inline-flex;
		flex-direction: column;
		gap: 15px;
		padding-top: 2px;
	}
	&__contacts-area {
		display: inline-flex;
		gap: 20px;
		margin-top: -14px;
	}
	&__background {
		background-color: #101010;
		width: 100vw;
		height: 545px;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
	}
	&__container {
		width: 780px;
		box-sizing: border-box;
		position: absolute;
		display: inline-flex;
		flex-direction: column;
		gap: 33px;
		box-sizing: border-box;
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
		font-size: 14px;
		line-height: 15.4px;
		height: 45px;
		white-space: pre-line;
		margin-top: 46px;
	}
	&__extra-information {
		display: inline-flex;
	}
	&__map-area {
		height: 150px;
		width: 380px;
		background-color: #F0F0F0;
		border-radius: 5px;
		overflow: hidden;
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
			transition: all 0.3s;
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
		font-size: 16px;
		line-height: 17.6px;
		height: 20px;
		transition: all 0.3s;

		&_num-1 {
			cursor: pointer;
		}
		&_num-3 {
			position: absolute;
			margin-left: 800px;
			font-family: RAYDIS;
			font-weight: 700;
		}
	}

	.telegram-icon {
		width: 30px;
		height: 30px;
		margin-left: auto;
		margin-top: -5px;
		transition: all 0.3s;
	}
}


@media screen and (hover: hover) {
	.telegram-icon:hover {
		opacity: 0.5;
	};
	.content-column {
		&__item:hover {

			color: #FFFFFF;
		}
	}
	.extra-information__item_num-1:hover {
		color: #909090;
	}
}
</style>
