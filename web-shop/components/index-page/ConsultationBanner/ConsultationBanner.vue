<template>
	<BlackBanner 
		:buttonText="buttonText" 
		:description="description"
		class="consultation-black-banner consultation-black-banner_desktop" 
		@activated="showConsultationDialog"/>
	<BlackBanner 
		:buttonText="buttonText" 
		:description="descriptionMobile"
		class="consultation-black-banner consultation-black-banner_phone" 
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
			descriptionMobile: 
				`Если вы занимаетесь <span style='color: #FF3D00;'>продажами</span>,
				или <span style='color: #FF3D00;'>производственными проектами</span>, 
				или, просто хотите производить 
				под своим собственным брендом —
				<span style='color: #FF3D00;'>смело скачивайте презентацию</span>`,
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
	&_phone {
		display: none;
	}
}

@media screen and (width < $ipad) {
	.consultation-black-banner {
		margin-top: 100px;
		&_desktop {
			display: none;
		}
		&_phone {
			display: flex;
		}
	}
}
</style>