<template>
	<section class="page-main-information">
		<div class="main-information">
			<p class="main-information__title main-information__title_desktop"> {{ title }} </p>
			<p class="main-information__title main-information__title_phone"> {{ titleMobile }} </p>
			<div class="main-information__body">
				<p class="body__text"> {{ body }} </p>
			</div>
			<OrangeButton 
				class="main-information__button_desktop"
				:text="buttonText" 
				:width="380" 
				:height="60"
				:background="true"
				@click="showConsultationDialog" />
			<OrangeButton 
				class="main-information__button_phone"
				:text="buttonText" 
				:width="350" 
				:height="60"
				:background="true"
				@click="showConsultationDialog" />
			<OrangeButton 
				class="main-information__button_ipad"
				:text="buttonText" 
				:width="340" 
				:height="58"
				:background="true"
				@click="showConsultationDialog" />
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
			titleMobile: 
				`Российские удлинители
				собственного производства
				по всем стандартам`,
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
				во все населённые пункты нашей страны`,
		}
	},
	methods: {
		showConsultationDialog() {
			window.event.stopPropagation()
			store.commit('changeDialogMode', {mode: ['consultation']})
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
		line-height: 39.6px;
		margin-top: 3px;
	}
	&__title_phone {
		display: none;
	}
	&__body {
		display: inline-flex;
		font-size: 20px;
		font-weight: 400;
		height: 120px;
		line-height: 22px;
		align-items: center;
	}
	&__extra-information {
		width: 380px;
		height: 30px;
		font-weight: 400;
		font-size: 14px;
		color: #909090;
		display: inline-flex;
		justify-content: center;
		text-align: center;
		line-height: 15.4px;
	}
	&__button_phone {
		display: none;
	}
	&__button_ipad {
		display: none;
	}
}


@media screen and (width >= $ipad) and (width < $desktop) {
	.main-information {
		&__title {
			font-size: 30px;
			line-height: 33px;
		}
		&__body {
			font-size: 18px;
			line-height: 19.8px;
		}
		&__extra-information {
			font-size: 12px;
			line-height: 13.2px;
			width: 340px;
		}
		&__button_desktop {
			display: none;
		}
		&__button_ipad {
			display: flex;
		}
	}
}

@media screen and (width < $ipad) {
	.main-information {
		margin-top: 0px;
		&__title {
			font-size: 24px;
			line-height: 26.4px;
		}
		&__title_desktop {
			display: none;
		}
		&__title_phone {
			display: block;
		}
		&__body {
			font-size: 16px;
			line-height: 17.6px;
			height: 80px;
		}
		&__extra-information {
			width: 350px;
		}
		&__button_desktop {
			display: none;
		}
		&__button_phone {
			display: block;
		}
	}
}
</style>