<template>
	<DefaultHeader id="header" />
	<div class="page-image"></div>
	<PageMainInformation />
	<ProductCardsArea id="catalog" />
	<PresentationBanner id="presentation" />
	<CompanyInformation id="information" />
	<ConsultationBanner />
	<PopularQuestionsArea id="questions" />
	<InterestingNuansionsArea />
	<DefaultFooter />

	<DialogsArea v-if="dialogList.length" />
	<PolicyDisclaimer />
</template>

<script>
import DialogsArea from '~/components/Dialogs/DialogsArea.vue';
import DefaultFooter from '~/components/Footers/DefaultFooter/DefaultFooter.vue';
import DefaultHeader from '~/components/Headers/DefaultHeader/DefaultHeader.vue';
import CompanyInformation from '~/components/index-page/CompanyInformation/CompanyInformation.vue';
import ConsultationBanner from '~/components/index-page/ConsultationBanner/ConsultationBanner.vue';
import InterestingNuansionsArea from '~/components/index-page/InterestingNuansionsArea/InterestingNuansionsArea.vue';
import PageMainInformation from '~/components/index-page/PageMainInformation/PageMainInformation.vue';
import PopularQuestionsArea from '~/components/index-page/PopularQuestionsArea/PopularQuestionsArea.vue';
import PresentationBanner from '~/components/index-page/PresentationBanner/PresentationBanner.vue';
import ProductCardsArea from '~/components/index-page/ProductCardsArea/ProductCardsArea.vue';
import PolicyDisclaimer from '~/components/PolicyDisclaimer.vue';
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
		DialogsArea,
		PolicyDisclaimer,
	},

	layout: "default",

	computed: {
		dialogList() {
			return store.state.dialogList
		}
	},

	methods: {
		checkIfOutsideDialog(event) {
			if (!event.target.classList) {
				return;
			}
			console.log(event.target.classList)
			if (!this.dialogList.length) {
				return;
			}
			const dialogs = document.querySelectorAll('.dialog__window')
			for (const dialog of dialogs) {
				console.log('dialog!')
				const dialogRect = dialog.getBoundingClientRect()
				console.log(dialogRect)
				let out = false
				if (event.clientX < dialogRect.left || event.clientX > dialogRect.right) {
					out = true
				}
				if (event.clientY < dialogRect.top || event.clientY > dialogRect.bottom) {
					out = true
				}
				if (!out) {
					return;
				}
			}
			store.commit('closeDialog')
		}
	},

	mounted() {
		document.addEventListener('click', this.checkIfOutsideDialog)
	}
}
</script>

<style scoped lang="scss">
.page-image {
	display: none;
}
@media screen and (width < $ipad) {
	.page-image {
	display: block;
	width: 350px;
	height: 370px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 5px;
	margin-bottom: 20px;
	margin-top: 20px;
	}	
}
</style>