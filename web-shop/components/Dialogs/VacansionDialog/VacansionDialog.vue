<template>
	<div class="vacansion-dialog">
		<div class="vacansion-dialog__title">Вакансия для амбициозных, сильных и коммуникабельных</div>
		<div class="vacansion-dialog__body">
			<div class="dialog-body__right">
				<VacansionDescription />
				<ButtonsOrangeButton :width="360" :height="60" text="Анкета для заполнения" @click="scrollToAnket"/>
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

	&__body {
		display: inline-flex;
		justify-content: flex-end;
	}
}

.dialog-body__right {
	display: inline-flex;
	flex-direction: column;
	gap: 20px;
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
</style>