<template>
	<InputDialog :text="title" :buttonText="buttonText" class="input-dialog-consultation_desktop" :id="`${id}_desktop`"/>
	<InputDialog :text="titlePhone" :buttonText="buttonText" class="input-dialog-consultation_phone" :id="`${id}_phone`"/>
</template>


<script>
import InputDialog from '../InputDialog/InputDialog.vue';

export default {
	components: {
		InputDialog,
	},
	props: {
		id: {
			type: String,
			default: 'consultation-dialog'
		}
	},
	data() {
		return {
			titlePhone: `<span style='color: #FF3D00'>Пожалуйста</span>, оставьте ваши контакты, 
						чтобы мы перезвонили и ответили 
						на все необходимые вопросы`,
			title: `<span style='color: #FF3D00'>Пожалуйста</span>, оставьте ваши контакты,
					чтобы мы перезвонили вам`,
			buttonText: 'Бесплатная консультация',
		}
	}
}
</script>

<style lang="scss" scoped>
.input-dialog-consultation_phone {
	display: none;
}

@media screen and (width < $ipad) {
	.input-dialog-consultation {
		&_phone {
			display: flex;
		}
		&_desktop {
			display: none;
		}
	}
}
</style>