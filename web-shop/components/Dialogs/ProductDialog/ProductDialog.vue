<template>
	<div class="dialog-window__content">
		<div class="dialog-window__navigation">
			<nav class="navigation__options">
				<NavButton 
					v-for="(_, key) in card.varieties" 
					:key="`nav-button_num-${key}`"
					:text="key"
					:active="key === currentVariety" />
			</nav>
			<img class="navigation__scroll" src="~assets/images/scroll-arrow.svg"/>
		</div>
		<div class="dialog-window__product">
			<div class="product__image"></div>
			<div class="product__description">
				<div class="product-description__title">
					<p class="product-description__title-header"> название товара </p>
					<p class="product-description__title-item"> {{ card.title }} </p>
				</div>
				<div class="product-description__short-description">
					<p class="product-description__short-description-header"> краткое описание категории товара </p>
					<p class="product-description__short-description-item"> {{ card.description }} </p>
				</div>
				<p class="disclaimer"> 
					вся информация о товарах и об услугах, носит исключительно информационный характер 
				</p>
			</div>
		</div>
	</div>
</template>


<script>
import NavButton from './NavButton.vue';
import { store } from '~/store';

export default {
	components: {
		NavButton,
	},
	computed: {
		card() {
			return store.state.currentProduct
		},
		currentVariety() {
			return store.state.currentProduct.currentVariety
		}
	}
}
</script>

<style scoped lang="scss">
.navigation__options {
	display: inline-flex;
	gap: 10px;
}
.navigation__scroll {
	width: 30px;
	height: 30px;
}
.dialog-window {
	&__content {
		display: inline-flex;
		flex-direction: column;
		gap: 20px;
	}
	&__navigation {
		display: inline-flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	&__product {
		display: inline-flex;
		gap: 20px;
	}

}

.product {
	&__image {
		width: 470px;
		height: 470px;
		border-radius: 5px;
		background-color: #F0F0F0;
	}
	&__description {
		display: inline-flex;
		flex-direction: column;
		gap: 10px;
	}
}

.product-description {
	&__title {
		display: inline-flex;
		flex-direction: column;
		gap: 5px;
	}
	&__short-description {
		display: inline-flex;
		flex-direction: column;
		gap: 5px;
	}
}

.product-description__title {
	&-heder {
		font-size: 14px;
		color: #909090;
	}
	&-item {
		font-size: 18px;
		white-space: pre-line;
	}
}

.product-description__short-description {
	&-heder {
		font-size: 14px;
		color: #909090;
	}
	&-item {
		font-size: 16px;
		color: #505050;
		white-space: pre-line;
	}
}
.disclaimer {
	margin-top: auto;
}
</style>