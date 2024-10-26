<template>
	<ClientOnly>
		<DefaultFooterIpad class="default-footer_ipad" />
		<DefaultFooterDestop class="default-footer_desktop" />
		<DefaultFooterPhone class="default-footer_phone"/>
	</ClientOnly>
</template>


<script>
import { store } from '~/store';
import DefaultFooterDestop from './DefaultFooterDestop.vue';
import DefaultFooterPhone from './DefaultFooterPhone.vue';
import DefaultFooterIpad from './DefaultFooterIpad.vue';

export default {
	components: {
		DefaultFooterDestop,
		DefaultFooterPhone,
		DefaultFooterIpad,
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
.default-footer_ipad {
	display: none
}

@media screen and (width < $ipad) {
	.default-footer_phone {
		display: inline-flex;
	}
	.default-footer_desktop {
		display: none;
	}
}

@media screen and (width >= $ipad) and (width < $desktop) {
	.default-footer_ipad {
		display: inline-flex;
	}
	.default-footer_desktop {
		display: none;
	}
}
</style>