<template>
	<ClientOnly>
		<DefaultFooterDestop class="default-footer_desktop" />
		<DefaultFooterPhone class="default-footer_phone"/>
	</ClientOnly>
</template>


<script>
import { store } from '~/store';
import DefaultFooterDestop from './DefaultFooterDestop.vue';
import DefaultFooterPhone from './DefaultFooterPhone.vue';

export default {
	components: {
		DefaultFooterDestop,
		DefaultFooterPhone,
	},
	methods: {
		showDialog(mode) {
			store.commit("changeDialogMode", { mode: mode })
		}
	}
}
</script>

<style lang="scss" scoped>
.default-footer_phone {
	display: none;
}

@media screen and (width < $ipad) {
	.default-footer_phone {
		display: inline-flex;
	}
	.default-footer_desktop {
		display: none;
	}
}
</style>