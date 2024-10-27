<template>
	<InputDialog :text="title" :buttonText="buttonText" class="input-dialog-presentation_desktop"/>
	<InputDialog :text="titlePhone" :buttonText="buttonText" class="input-dialog-presentation_phone"/>
</template>


<script>
import InputDialog from '../InputDialog/InputDialog.vue';

export default {
	components: {
		InputDialog,
	},
	data() {
		return {
			titlePhone: `<span style='color: #FF3D00'>Пожалуйста</span>, оставьте ваши контакты,
						чтобы мы отправили презентацию, 
						также ответили на все вопросы`,
			title: `<span style='color: #FF3D00'>Пожалуйста</span>, оставьте ваши контакты,
					чтобы мы отправили вам презентацию`,
			buttonText: 'Подробная презентация',
		}
	}
}
</script>

<style lang="scss" scoped>
.input-dialog-presentation {
	&_phone {
		display: none;
	}
}

@media screen and (width < $ipad) {
	.input-dialog-presentation {
		&_phone {
			display: flex;
		}
		&_desktop {
			display: none;
		}
	}
}
</style>