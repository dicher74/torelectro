<template>
	<BlackBanner 
		:buttonText="buttonText" 
		:description="description" 
		@activated="showPresentationDialog"
		style="margin-top: 100px;"/>
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
				`Если вы занимаетесь <span style='color: #FF3D00;'>продажами</span>,
				или <span style='color: #FF3D00;'>производственными проектами</span>, 
				или, просто хотите производить 
				под своим собственным брендом —
				<span style='color: #FF3D00;'>смело скачивайте презентацию</span>`,
			buttonText: "Подробная презентация",
		}
	},
	methods: {
		showPresentationDialog() {
			store.commit('changeDialogMode', { mode: ['presentation'] })
		},
	},
}
</script>