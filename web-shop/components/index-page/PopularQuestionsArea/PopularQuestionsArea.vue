<template>
	<section class="popular-questions-area">
		<DefaultSectionHeader class="popular-questions-header_desktop"
		text="<span style='color: #FF3D00;'>Популярные вопросы</span>, которыми часто задаются наши клиенты"/>
		<DefaultSectionHeader style="height: 40px;" class="popular-questions-header_phone"
		text="<span style='color: #FF3D00;'>Популярные вопросы</span>, которыми <br/> часто задаются наши клиенты"/>
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
					title: {
						ipad: 'Имеется ли доставка?',
						desktop: 'Имеется ли доставка?',
						phone: 'Имеется ли доставка?'
					}, 
					description: {
						desktop: [
							`Да, имеется.`,

							`Доставка осуществляется всеми доступными логистическими компаниями.`,
						],
						phone: [
							`Да, имеется.`,

							`Доставка осуществляется доступными 
							логистическими компаниями.`
						],
						ipad: [
							`Да, имеется.`,

							`Доставка осуществляется всеми доступными логистическими компаниями.`,
						]
					}	
				},
				{
					title: {
						ipad: 'Имеется ли партнерская скидка?',
						desktop: 'Имеется ли партнерская скидка?',
						phone: 'Имеется ли партнерская скидка?',
					},
					description: {
						desktop: [
							`Да, имеется.`,

							`Партнерская скидка предоставляется гибкими условиями, которые определяются индивидуально.`
						],
						phone: [
							`Да, имеется.`,

							`Партнерская скидка предоставляется 
							гибкими условиями, которые 
							определяются индивидуально.`
						],
						ipad: [
							`Да, имеется.`,

							`Партнерская скидка предоставляется гибкими условиями.`
						]
					}
				},
				{
					title: {
						ipad: 'Какое количество удлинителей необходимо для приобретения?',
						desktop: 'Какое количество удлинителей необходимо для приобретения?',
						phone: `Какое количество удлинителей 
								необходимо для приобретения?`
					},
					description: {
						desktop: [
							`Индивидуально.`,

							`Минимальное количество удлинителей для заказа, составляет от одного удлинителя.`
						],
						phone: [
							`Индивидуально.`,

							`Минимальное количество удлинителей 
							для осуществления полного заказа, 
							составляет один удлинитель.`
						],
						ipad: [
							`Индивидуально.`,

							`Минимальное количество удлинителей для заказа, от одного удлинителя.`
						]
					}	
				},
				{
					title: {
						ipad: 'Какое количество дней необходимо для изготовления?',
						desktop: 'Какое количество дней необходимо для изготовления?',
						phone: `Какое количество дней 
								необходимо для изготовления?`
					},
					description: {
						desktop: [
							`Индивидуально.`,

							`Минимальное количество дней для осуществления заказа, составляет от одного рабочего дня.`,

							`Но, благодаря складским программам снабжения, имеется возможность отгрузки заказа в день обращения.`
						],
						phone: [
							`Индивидуально.`,

							`Минимальное количество дней 
							для осуществления полного заказа, 
							составляет один день.`
						],
						ipad: [
							`Индивидуально.`,

							`Минимальное количество дней для осуществления заказа, от одного дня.`,
							
							`Благодаря складским программам, имеется отгрузка заказа в день обращения.`
						]
					}
					
				},
			]
		}
	}
}
</script>

<style scoped lang="scss">
.popular-questions-area {
	width: 100%;
	margin-top: 100px;

	display: inline-flex;
	flex-direction: column;
	gap: 20px;
}

.popular-questions-header_phone {
	display: none;
}
.popular-questions-header_desktop {
	margin-top: 40px;
}

@media screen and (width < $ipad) {
	.popular-questions-header_phone {
		display: inline-flex;
		margin-top: 40px;
	}
	.popular-questions-header_desktop {
		display: none;
	}
}
</style>