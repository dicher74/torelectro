<template>
	<div class="presentation-dialog">
		<div class="presentation-dialog__title" v-html="text"></div>
		<div class="presentation-dialog__input-area input-area">
			<div class="input-area__placeholder">номер сотового телефона</div>
			<div class="input-area__input-wrapper">
				<input class="input-area__input" value="+7"/>
			</div>
		</div>
		<div class="presentation-dialog__button-area button-area">
			<OrangeButton :text="buttonText" :width="380" :height="58" />
			<div class="button-area__policy-text policy-text">
				<p class="policy-text__par_top"> нажимая, вы соглашаетесь </p>
				<a class="policy-text__policy-link"> с условиями политики конфиденциальности </a>
			</div>
		</div>
	</div>
</template>

<script>
import OrangeButton from '~/components/Buttons/OrangeButton.vue';

export default {
	components: {
		OrangeButton,
	},
	props: {
		text: {
			type: String,
			default: ''
		},
		buttonText: {
			type: String,
			default: ''
		}
	},
}
</script>

<style lang="scss" scoped>
.presentation-dialog {
	display: inline-flex;
	flex-direction: column;
	gap: 20px;

	&__title {
		width: 390px;
		white-space: pre-line;
		height: 60px;
		line-height: 22px;
		font-size: 20px;
	}

	&__input-area {
		display: inline-flex;
		flex-direction: column;
		gap: 5px;
	}

	&__button-area {
		display: inline-flex;
		flex-direction: column;
		gap: 10px;
	}
}

.input-area {
	&__placeholder {
		font-size: 14px;
		color: #909090;
		line-height: 15.4px;
	}
	&__input-wrapper {
		display: inline-flex;
		padding-left: 10px;
		background-color: #F0F0F0;
		border-radius: 5px;
		width: 380px;
		height: 50px;
		box-sizing: border-box;
		align-items: center;
	}
	&__input {
		outline: none;
		border: none;
		background-color: #F0F0F0;
		font-size: 18px;
		line-height: 19.8px;
	}
}

.policy-text {
	display: inline-flex;
	flex-direction: column;
	text-align: center;

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