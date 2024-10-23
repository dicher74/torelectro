<template>
	<InputDialog :text="title" :buttonText="buttonText" />
</template>


<script>
import InputDialog from '../InputDialog/InputDialog.vue';

export default {
	components: {
		InputDialog,
	},
	data() {
		return {
			title: `<span style='color: #FF3D00'>Пожалуйста</span>, оставьте ваши контакты,
					чтобы мы перезвонили вам`,
			buttonText: 'Анкета для заполнения',
		}
	}
}
</script>