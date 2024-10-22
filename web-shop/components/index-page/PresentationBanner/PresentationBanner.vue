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
				`Если вы занимаетесь продажами,
				или производственными проектами, 
				или, просто хотите производить 
				под своим собственным брендом —
				смело скачивайте презентацию`,
			buttonText: "Подробная презентация",
		}
	}
}
</script>