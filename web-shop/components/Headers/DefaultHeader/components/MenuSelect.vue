<template>
	<nav class="select-list">
		<div class="select-list__section">
			<a class="select-list__tip"> Каталог всего ассортимента компании </a>
			<a class="select-list__tip"> Презентация для сотрудничества</a>
			<a class="select-list__tip"> Информация о компании </a>
			<a class="select-list__tip"> Популярные вопросы </a>
		</div>
		<hr />
		<div class="select-list__section">
			<a class="select-list__tip"> Необходимая документация </a>
			<a class="select-list__tip"> Контактная информация </a>
		</div>
	</nav>
</template>

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

	&__section {
		display: inline-flex;
		flex-direction: column;
		gap: 10px;
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
