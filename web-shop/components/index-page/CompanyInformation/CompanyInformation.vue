<template>
	<section class="company-information">
		<DefaultSectionHeader text="Информация о компании и преимуществах" class="company-information-header"  />
		<div class="information-cards">
			<InformationCard 
				v-for="card, cardNum in cards" 
				:key="`information-card_num-${cardNum}`"
				:title="card.title"
				:description="card.description.desktop"
				class="information-card_desktop" />
			<InformationCard 
				v-for="card, cardNum in cards" 
				:key="`information-card_num-${cardNum}`"
				:title="card.title"
				:description="card.description.phone"
				class="information-card_phone" />
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
					{
						desktop:
							`использования нашего производства определена 
							нашими высокими стандартами качества, 
							квалифицированными специалистами,
							многолетним опытом на настоящем рынке`,
						phone: 
							`использования нашего производства 
							определена нашими высокими 
							стандартами качества, 
							квалифицированными специалистами,
							многолетним опытом на рынке`
					}
				},
				{
					title: 'Надёжность',
					description: 
					{
						desktop: 
							`всех наших электрических удлинителей, 
							подтверждена, как отзывами наших партнеров, 
							так и документами сертификации,
							выданные и заверенные специализированными 
							государственными учреждениями`,
						phone: 
							`всех наших электрических 
							удлинителей, подтверждена, 
							документами сертификации,
							заверенные специализированными 
							государственными учреждениями`
					}
						
				},
				{
					title: 'Производительность',
					description: {
						desktop:
							`всех наших электрических удлинителей, 
							определена силовыми характеристиками, 
							способными «выдерживать»
							большинство видов инструментов`,
						phone: 
							`всех наших электрических 
							удлинителей, определена силовыми 
							характеристиками, 
							способными «выдерживать» 
							большинство видов инструментов`
					}
						
				},
			]
		}
	}
}
</script>

<style scoped lang="scss">
.company-information {
	width: 100%;
	margin-top: 100px;
	display: inline-flex;
	flex-direction: column;
	gap: 20px;
}

.company-information-header {
	top: 11px;
}

.information-cards {
	width: 100%;
	display: inline-flex;
	flex-direction: column;
	gap: 10px;
}

.information-card_phone {
	display: none;
}

@media screen and (width < $ipad) {
	.information-card_phone {
		display: flex;
	}
	.information-card_desktop {
		display: none;
	}
	.information-cards {
		gap: 20px;
	}
	.company-information-header {
		top: 0px;
	}
}
</style>

