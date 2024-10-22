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
				`Если вы заинтересованы нашим производством,
				но остались важные вопросы —
				просто оставляйте контакты для связи`,
			buttonText: "Бесплатная консультация",
		}
	}
}
</script>