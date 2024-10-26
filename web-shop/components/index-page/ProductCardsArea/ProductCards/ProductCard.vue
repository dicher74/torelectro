<template>
	<div class="product-card">
		<div class="product-card__image"></div>
		<div class="product-card__description">
			<p class="description__title"> {{ description.title }} </p>
			<div class="description__options">
				<p class="description-option"
					v-for="option, optionNum in description.options" 
					:key="`description-option_num-${optionNum}`">
					<span class="description-option__name"> {{ option.name }}: </span>
					<span class="description-option__content"> {{ option.value }} </span>
				</p>
			</div>
		</div>
		<OrangeButton 
			text="Посмотреть" 
			:width="340" :height="60" 
			class="product-card__button product-card__button_desktop" 
			@click="showCard"/>
		<OrangeButton 
			text="Посмотреть" 
			:width="320" :height="60" 
			class="product-card__button product-card__button_phone" 
			@click="showCard"/>
	</div>
</template>

<script>
import OrangeButton from '~/components/Buttons/OrangeButton.vue';
import { store } from '~/store';

export default {
	components: {
		OrangeButton,
	},
	props: {
		description: {
			type: Object,
			default: () => {},
		}
	},
	methods: {
		showCard() {
			window.event.stopPropagation()
			store.commit('changeDialogMode', {mode: ['product', 'consultation'], card: this.description})
		}
	}
}
</script>

<style scoped lang="scss">
.product-card {
	display: inline-flex;
	flex-direction: column;
	padding: 20px;
	background-color: #FFFFFF;
	border-radius: 5px;
	height: 580px;
	width: 380px;
	box-sizing: border-box;

	&__image {
		width: 340px;
		min-height: 340px;
		background-color: #F0F0F0;
		border-radius: 5px;
	}
	&__description {
		margin-top: 15px;
		display: inline-flex;
		flex-direction: column;
		gap: 15px;
	}
	&__button {
		margin-top: 22px;
	}
	&__button_phone {
		display: none;
	}
}

.description {
	&__title {
		font-size: 18px;
		line-height: 19.8px;
		height: 20px;
		font-weight: 400;
	}
	&__options {
		display: inline-flex;
		flex-direction: column;
		gap: 7px;
	}
}

.description-option {
	height: 18px;
	font-size: 16px;
	line-height: 17.6px;

	&__name {
		color: #909090;
	}
}

@media screen and (width < $ipad) {
	.product-card {
		width: 350px;
		height: 530px;
		padding: 15px;
		&__image {
			min-height: 320px;
			height: 320px;
			width: 320px;
		}
		&__description {
			gap: 10px;
		}
		&__button {
			margin-top: 15px;
		}
		&__button_desktop {
			display: none;
		}
		&__button_phone {
			display: block;
		}
	}

	.description {
		&__title {
			font-size: 16px;
			line-height: 17.6px;
			text-align: left;
			height: 20px;
		}
		&__options {
			display: inline-flex;
			flex-direction: column;
			gap: 0px;
		}	
	}

	.description-option {
		height: 20px;
		font-size: 14px;
		line-height: 15.4px;
	}
}
</style>