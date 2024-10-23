<template>
	<DefaultHeader id="header" />
	<PageMainInformation />
	<ProductCardsArea id="catalog" />
	<PresentationBanner id="presentation" />
	<CompanyInformation id="information" />
	<ConsultationBanner />
	<PopularQuestionsArea id="questions" />
	<InterestingNuansionsArea />
	<DefaultFooter />

	<Dialog v-if="dialogMode" />
</template>

<script>
import Dialog from '~/components/Dialogs/Dialog.vue';
import DefaultFooter from '~/components/Footers/DefaultFooter/DefaultFooter.vue';
import DefaultHeader from '~/components/Headers/DefaultHeader/DefaultHeader.vue';
import CompanyInformation from '~/components/index-page/CompanyInformation/CompanyInformation.vue';
import ConsultationBanner from '~/components/index-page/ConsultationBanner/ConsultationBanner.vue';
import InterestingNuansionsArea from '~/components/index-page/InterestingNuansionsArea/InterestingNuansionsArea.vue';
import PageMainInformation from '~/components/index-page/PageMainInformation/PageMainInformation.vue';
import PopularQuestionsArea from '~/components/index-page/PopularQuestionsArea/PopularQuestionsArea.vue';
import PresentationBanner from '~/components/index-page/PresentationBanner/PresentationBanner.vue';
import ProductCardsArea from '~/components/index-page/ProductCardsArea/ProductCardsArea.vue';
import { store } from '~/store';

export default {
	components: {
		DefaultHeader,
		PageMainInformation,
		ProductCardsArea,
		PresentationBanner,
		CompanyInformation,
		ConsultationBanner,
		PopularQuestionsArea,
		InterestingNuansionsArea,
		DefaultFooter,
		Dialog,
	},

	layout: "default",

	computed: {
		dialogMode() {
			return store.state.dialogMode
		}
	}
}
</script>