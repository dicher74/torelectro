<template>
	<section class="popular-questions-area">
		<DefaultSectionHeader text="Популярные вопросы, которыми часто задаются наши клиенты"/>
		<InformationDropList :items="items" theme="white" />
	</section>
</template>

<script>
import DefaultSectionHeader from '~/components/SectionHeaders/DefaultSectionHeader.vue';

export default {
	components: {
		DefaultSectionHeader,
	},
	data() {
		return {
			items: [
				{
					title: 'Имеется ли доставка?', 
					description: [
						`Да, имеется.`,

						`Доставка осуществляется всеми доступными логистическими компаниями.`,
					]
				},
				{
					title: 'Имеется ли партнерская скидка?',
					description: [
						`Да, имеется.`,

						`Партнерская скидка предоставляется гибкими условиями, которые определяются индивидуально.`
					]
				},
				{
					title: 'Какое количество удлинителей необходимо для приобретения?',
					description: [
						`Индивидуально.`,

						`Минимальное количество удлинителей для заказа, составляет от одного удлинителя.`
					]
				},
				{
					title: 'Какое количество дней необходимо для изготовления?',
					description: [
						`Индивидуально.`,

						`Минимальное количество дней для осуществления заказа, составляет от одного рабочего дня.`,

						`Но, благодаря складским программам снабжения, имеется возможность отгрузки заказа в день обращения.`
					]
				},
			]
		}
	}
}
</script>

<style scoped>
.popular-questions-area {
	width: 100%;
	margin-top: 100px;

	display: inline-flex;
	flex-direction: column;
	gap: 20px;
}
</style>