<template>
	<section class="page-main-information">
		<div class="main-information">
			<p class="main-information__title"> {{ title }} </p>
			<div class="main-information__body">
				<p class="body__text"> {{ body }} </p>
			</div>
			<OrangeButton @click="showConsultationDialog"
				:text="buttonText" 
				:width="380" 
				:height="60" />
			<div class="main-information__extra-information">
				{{ extraInfo }}
			</div>
		</div>
	</section>
</template>

<script>
import OrangeButton from '~/components/Buttons/OrangeButton.vue';
import { store } from '~/store';

export default {
	components: {
		OrangeButton,
	},
	data() {
		return {
			title: 
				`Российские удлинители
				собственного производства
				по международным стандартам
				`,

			body: 
				`Производство свыше 20+ видов
				современных электрических удлинителей,
				с отличительными силовыми и иными
				характеристиками и преимуществами`,

			buttonText: 'Бесплатная консультация',

			extraInfo: 
				`бесплатная доставка от 50000 рублей
				во все населённые пункты нашей стран`,
		}
	},
	methods: {
		showConsultationDialog() {
			store.commit('changeDialogMode', {mode: 'consultation'})
		}
	}
}
</script>

<style scoped lang="scss">
.main-information {
	margin-top: 100px;
	display: inline-flex;
	flex-direction: column;
	gap: 20px;
	white-space: pre-line;

	font-family: Evolventa;

	&__title{
		font-size: 36px;
		font-weight: 700;
	}
	&__body {
		display: inline-flex;
		font-size: 20px;
		font-weight: 400;
		height: 120px;
		align-items: center;
	}
	&__extra-information {
		width: 380px;
		font-weight: 400;
		font-size: 14px;
		color: #909090;
		display: inline-flex;
		justify-content: center;
		text-align: center;
	}
}
</style>