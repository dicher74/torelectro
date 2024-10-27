<template>
	<div class="presentation-dialog">
		<div class="presentation-dialog__title"><p v-html="text"></p></div>
		<div class="presentation-dialog__input-area input-area">
			<div class="input-area__placeholder">номер сотового телефона</div>
			<div class="input-area__input-wrapper">
				<p class="input-area__placeholder-number">+7</p>
				<input class="input-area__input" :value="phoneNumber" @keydown="phoneFormat($event)"/>
			</div>
		</div>
		<div class="presentation-dialog__button-area button-area">
			<OrangeButton :text="buttonText" :width="380" :height="60" class="presentation-dialog__button_desktop" />
			<OrangeButton :text="buttonText" :width="320" :height="60" class="presentation-dialog__button_phone" />
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
	data() {
		return {
			phoneNumber: "",
		}
	},
	methods: {
		phoneFormat(event) {
			const key = event.key
			if (key === 'Backspace') {
				if ([4, 8, 11, 14].includes(this.phoneNumber.length)) {
					this.phoneNumber = this.phoneNumber.slice(0, -2)
				}
				else {
					this.phoneNumber = this.phoneNumber.slice(0, -1)
				}
			}
			if (!['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(key) || this.phoneNumber.length >= 13) {
				event.preventDefault()
				return;
			}
			if ([3, 7, 10, 13].includes(this.phoneNumber.length)) {
				this.phoneNumber += ` ${key}`
				event.preventDefault()
			}
			else {
				this.phoneNumber += `${key}`
				event.preventDefault()
			}
		}
	}
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
		display: inline-flex;
		align-items: center;
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
	&__button_phone {
		display: none;
	}
}

.input-area {
	&__input-wrapper {
		display: inline-flex;
		font-size: 18px;
		gap: 0.5em;
		padding-left: 10px;
		background-color: #F0F0F0;
		border-radius: 5px;
		width: 380px;
		height: 50px;
		box-sizing: border-box;
		align-items: center;
	}
	&__input {
		height: 50px;
		width: 100%;
		outline: none;
		border: none;
		background-color: #F0F0F0;
		font-size: 18px;
		line-height: 19.8px;
		font-family: Evolventa;
		padding-top: 3px;
		box-sizing: border-box;
	}
	&__placeholder-number {
		font-size: 18px;
		line-height: 19.8px;
		color: #101010;
		margin-top: 3.9px;
	}
	&__placeholder {
		color: rgba(144, 144, 144, 1);
		font-size: 14px;
		line-height: 15.4px;
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

@media screen and (width >= $ipad) and (width < $desktop) {
	.presentation-dialog {
		width: 100%;
	}
	.policy-text {
		width: 380px;
	}
}

@media screen and (width < $ipad) {
	.presentation-dialog{
		width: 100%;

		&__title {
			font-size: 16px;
			line-height: 17.6px;
			width: 320px;
			height: 60px;
		}
		&__button_desktop {
			display: none;
		}
		&__button_phone {
			display: flex;
		}
		&__button-area {
			gap: 15px;
		}
	}
	.policy-text {
		width: 320px;
		margin-bottom: 5px;
	}
	.input-area {
		&__input-wrapper {
			width: 320px;
			overflow: hidden;
		}
		&__placeholder {
			font-size: 12px;
			line-height: 13.2px;
		}
	}
}
</style>