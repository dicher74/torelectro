<template>
	<BlackBanner 
		:buttonText="buttonText" 
		:description="description" 
		style="margin-top: 100px;"/>
</template>

<script>
import BlackBanner from '~/components/Banners/BlackBanner.vue';

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
	}
}
</script>