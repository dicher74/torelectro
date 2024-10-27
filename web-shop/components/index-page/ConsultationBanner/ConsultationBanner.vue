<template>
	<BlackBanner 
		:buttonText="buttonText" 
		:description="description"
		class="consultation-black-banner" 
		style=""
		@activated="showConsultationDialog"/>
</template>

<script>
import BlackBanner from '~/components/Banners/BlackBanner.vue';
import { store } from '~/store';

export default {
	components: {
		BlackBanner,
	},
	data() {
		return {
			description:
				`Если вы <span style='color: #FF3D00;'>заинтересованы</span> нашим производством,
				но остались важные вопросы —
				<span style='color: #FF3D00;'>просто оставляйте контакты для связи</span>`,
			buttonText: "Бесплатная консультация",
		}
	},
	methods: {
		showConsultationDialog() {
			window.event.stopImmediatePropagation()
			store.commit('changeDialogMode', {mode: ['consultation']})
		}
	}
}
</script>

<style lang="scss" scoped>
.consultation-black-banner {
	margin-top: 100px;
}

@media screen and (width < $ipad) {
	.consultation-black-banner {
		margin-top: 100px;
	}
}
</style>