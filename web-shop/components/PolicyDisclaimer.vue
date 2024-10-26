<template>
	<section v-if="showMode" class="disclaimer-section">
		<div class="disclaimer-section__body disclaimer-section__body_desktop">
			<p class="disclaimer-section__par">
				Если вы продолжаете использовать наш интернет-сайт,</p>
			<p class="disclaimer-section__par">
				<span class="blue-link" @click="showPolicyDialog">вы соглашаетесь с условиями политики конфиденциальности</span>, 
				тем самым, </p>
			<p class="disclaimer-section__par">
				помогаете нам сделать наш интернет-сайт комфортнее и полезнее для каждого человека</p>
		</div>
		<div class="disclaimer-section__body disclaimer-section__body_ipad">
			<p class="disclaimer-section__par">
				Если вы продолжаете использовать наш интернет-сайт,</p>
			<p class="disclaimer-section__par">
				<span class="blue-link" @click="showPolicyDialog">вы соглашаетесь с условиями политики конфиденциальности</span>, </p>
			<p class="disclaimer-section__par">
				тем самым, помогаете нам сделать наш интернет-сайт </p>
			<p> комфортнее и полезнее для каждого человека</p>
		</div>
		<div class="disclaimer-section__button-area disclaimer-section__button-area_desktop">
			<OrangeButton :width="320" :height="60" text="Подтвердить" @click="closeDisclaimer"/>
			<img class="disclaimer-section__close-button" src="~assets/images/close-disclaimer.svg" @click="closeDisclaimer"/>
		</div>
		<div class="disclaimer-section__button-area disclaimer-section__button-area_ipad">
			<OrangeButton :width="220" :height="60" text="Подтвердить" @click="closeDisclaimer"/>
			<img class="disclaimer-section__close-button" src="~assets/images/close-disclaimer.svg" @click="closeDisclaimer"/>
		</div>
	</section>
</template>

<script>
import { store } from '~/store';
import OrangeButton from './Buttons/OrangeButton.vue';

export default {
	components: {
		OrangeButton,
	},
	data() {
		return {
			showMode: true,
		}
	},
	methods: {
		showPolicyDialog() {
			store.commit('changeDialogMode', { mode: ['policy'] })
		},
		closeDisclaimer() {
			this.showMode = false
		}
	}
}
</script>

<style lang="scss" scoped>
.disclaimer-section {
	display: inline-flex;
	justify-content: space-between;
	height: 80px;
	padding: 10px 24px 10px 20px;
	box-sizing: border-box;
	position: fixed;
	top: calc(100% - 20px);
	left: calc(50% - 1px);
	transform: translate(-50%, -100%);
	background-color: #FFFFFF;
	border-radius: 5px;
	z-index: 5;

	&__body {
		font-size: 16px;
		line-height: 16px;
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
	}
	&__body_ipad {
		display: none;
	}
	&__button-area {
		display: inline-flex;
		align-items: center;
		gap: 23.92px;
	}
	&__button-area_ipad {
		display: none;
	}
	&__close-button {
		width: 12.19px;
		height: 12.19px;
		cursor: pointer;
	}
}

.blue-link {
	color: #3366BB;
	text-decoration: underline;
	cursor: pointer;
}

@media screen and (width >= $desktop) {
	.disclaimer-section {
		width: 1180px;
	}
}

@media screen and (width < $desktop) and (width >= $ipad) {
	.disclaimer-section {
		width: 780px;
		&__body_ipad {
			white-space: nowrap;
			display: flex;
			font-size: 14px;
			line-height: 14px;
		}
		&__body_desktop {
			display: none;
		}
		&__button-area_ipad {
			display: inline-flex;
		}
		&__button-area_desktop {
			display: none;
		}
	}
}

@media screen and (width < $ipad) {
	.disclaimer-section {
		display: none;
	}
}
</style>