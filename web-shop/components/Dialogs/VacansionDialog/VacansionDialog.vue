<template>
	<div class="vacansion-dialog">
		<div class="vacansion-dialog__title vacansion-dialog__title_desktop">
			Вакансия для амбициозных, сильных и коммуникабельных</div>
		<div class="vacansion-dialog__title vacansion-dialog__title_phone">Вакансия </div>
		<div class="vacansion-dialog__body">
			<div class="dialog-body__right">
				<VacansionDescription />
				<ButtonsOrangeButton class="button_desktop" :width="360" :height="60" text="Анкета для заполнения" @click="scrollToAnket"/>
				<ButtonsOrangeButton class="button_ipad" :width="410" :height="60" text="Анкета для заполнения" @click="scrollToAnket"/>
				<ButtonsOrangeButton class="button_phone" :width="320" :height="60" text="Анкета для заполнения" @click="scrollToAnket"/>
				<div class="button-area__policy-text policy-text">
					<p class="policy-text__par_top"> нажимая, вы соглашаетесь </p>
					<a class="policy-text__policy-link"> с условиями политики конфиденциальности </a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { store } from '~/store';
import VacansionDescription from './VacansionDescription.vue';

export default {
	components: {
		VacansionDescription,
	},
	methods: {
		scrollToAnket() {
			store.commit('scrollToElem', 'anket')
		}
	}
}
</script>

<style lang="scss" scoped>
.vacansion-dialog {
	width: 100%;
	display: inline-flex;
	flex-direction: column;
	gap: 20px;

	&__title {
		height: 50px;
		white-space: nowrap;
		font-size: 24px;
		line-height: 26.4px;
		display: inline-flex;
		align-items: center;
	}

	&__title_phone {
		display: none;
	}

	&__body {
		display: inline-flex;
		justify-content: flex-end;
	}
}

.dialog-body {
	&__right {
		display: inline-flex;
		flex-direction: column;
		gap: 20px;
	}
	&__empty {
		display: none;
	}
}

.policy-text {
	display: inline-flex;
	flex-direction: column;
	text-align: center;
	font-size: 14px;

	&__par_top {
		color: #909090;
		line-height: 15.4px;
	}
	&__policy-link {
		color: #3366BB;
		text-decoration: underline;
		line-height: 15.4px;
	}
}

.button_ipad {
	display: none;
}
.button_phone {
	display: none;
}

@media screen and (width >= $ipad) and (width < $desktop) {
	.button_ipad {
		margin-top: 5px;
		display: flex;
	}
	.policy-text {
		margin-top: -3px;
		margin-bottom: 6px;
	}
	.button_desktop {
		display: none;
	}
}

@media screen and (width < $ipad) {
	.button_desktop {
		display: none;
	}
	.button_phone {
		display: flex;
		margin-top: 5px;
	}
	.vacansion-dialog {
		&__title {
			padding-top: 4px;
			box-sizing: border-box;
			font-size: 18px;
			line-height: 19.8px;
			height: 30px;
		}
		&__title_phone {
			display: flex;
		}
		&__title_desktop {
			display: none;
		}
	}
	.dialog-body {
		&__empty {
			margin-top: -5px;
			display: block;
			width: 320px;
			height: 75px;
			border-radius: 5px;
			background-color: rgba(255, 61, 0, 0.25);
		}
		&__right {
			gap: 15px;
		}
	}
	.policy-text {
		margin-bottom: 5px;
	}
}
</style>