<template>
	<BlackBanner 
		:buttonText="buttonText" 
		:description="description" 
		style="margin-top: 100px;"
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
			store.commit('changeDialogMode', {mode: 'consultation'})
		}
	}
}
</script>