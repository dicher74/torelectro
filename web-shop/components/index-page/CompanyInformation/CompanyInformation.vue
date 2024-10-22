<template>
	<section class="company-information">
		<DefaultSectionHeader text="Информация о компании и преимуществах" />
		<div class="information-cards">
			<InformationCard 
				v-for="card, cardNum in cards" 
				:key="`information-card_num-${cardNum}`"
				:title="card.title"
				:description="card.description" />
		</div>
	</section>
</template>

<script>
import DefaultSectionHeader from '~/components/SectionHeaders/DefaultSectionHeader.vue';
import InformationCard from './InformationCard.vue';

export default {
	components: {
		InformationCard,
		DefaultSectionHeader,
	},
	data() {
		return {
			cards: [
				{
					title: 'Рациональность',
					description: 
						`использования нашего производства определена 
						нашими высокими стандартами качества, 
						квалифицированными специалистами,
						многолетним опытом на настоящем рынке`
				},
				{
					title: 'Надёжность',
					description: 
						`всех наших электрических удлинителей, 
						подтверждена, как отзывами наших партнеров, 
						так и документами сертификации,
						выданные и заверенные специализированными государственными учреждениями`
				},
				{
					title: 'Производительность',
					description: 
						`всех наших электрических удлинителей, 
						определена силовыми характеристиками, 
						способными «выдерживать»
						большинство видов инструментов`
				},
			]
		}
	}
}
</script>

<style scoped>
.company-information {
	width: 100%;
	margin-top: 100px;
	display: inline-flex;
	flex-direction: column;
	gap: 20px;
}

.information-cards {
	width: 100%;
	display: inline-flex;
	flex-direction: column;
	gap: 10px;
}
</style>

