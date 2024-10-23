<template>
	<footer class="default-footer">
		<div class="default-footer__background"></div>
		<div class="default-footer__container">
			<div class="default-footer__empty-zone"></div>
			<div class="default-footer__content">
				<div class="content-column content-column_num-1">
					<a class="content-column__item"> Каталог всего ассортимента компании</a>
					<a class="content-column__item">Презентация для сотрудничества</a>
					<a class="content-column__item">Популярные вопросы</a>
				</div>
				<div class="content-column content-column_num-2">
					<a class="content-column__item">Вакансия</a>
					<a class="content-column__item">Документация</a>
					<a class="content-column__item">Контактная информация</a>
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
				<a class="extra-information__item extra-information__item_num-1">Политика конфиденциальности</a>
				<a class="extra-information__item extra-information__item_num-2">ООО «ТОРЭЛЕКТРО» · 123456789012345</a>
				<a class="extra-information__item extra-information__item_num-3">by FFTF</a>
			</div>
			<div class="default-footer__map-area"></div>
		</div>
	</footer>
</template>


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
		font-size: 16px;
		color: #909090;
	}

	&__item_last {
		font-size: 18px;
		color: #FFFFFF;
	}
}

.extra-information__item {
	color: #505050;

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
