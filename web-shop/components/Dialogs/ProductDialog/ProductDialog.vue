<template>
	<div class="dialog-window__content">
		<div class="dialog-window__navigation">
			<nav class="navigation__options">
				<NavButton 
					v-for="(_, key) in card.varieties" 
					@click="changeVariety(key)"
					:key="`nav-button_num-${key}`"
					:text="key"
					:active="key === currentVariety" />
			</nav>
			<div class="navigation-scroll">
				<ScrollHint v-if="hintMode"/>
				<img class="navigation-scroll__image" src="~assets/images/scroll-arrow.svg" 
					@mouseover="showHint"
					@mouseout="hideHint"
					@click="showNextCard"/>
			</div>
		</div>
		<div class="dialog-window__product_phone">
			<ProductDialogPhone :card="card" :variety="currentVariety" />
		</div>
		<div class="dialog-window__product_desktop">
			<div class="product__image"></div>
			<div class="product__description">
				<div class="product-description__title-with-tags"> 
					<div class="product-description__title">
						<p class="product-description__title-header"> название товара </p>
						<p class="product-description__title-item"> {{ card.fullTitle }} </p>
					</div>
					<div class="product-description__tags">
						<div 
							v-for="tag, tagNum in tags" 
							:key="`tag_num-${tagNum}`"
							class="product-description__tag_usual product-description__tag"> 
							{{ tag }} 
						</div>
					</div>
				</div>
				<div class="product-description__short-description">
					<p class="product-description__short-description-header"> краткое описание категории товара </p>
					<p class="product-description__short-description-item"> {{ card.description }} </p>
				</div>
				<div v-if="qualityTag" class="product-description__tag_quality product-description__tag">
					{{ qualityTag }}
				</div>
				<ProductTable style="margin-top: 10px;" :current-variety="currentVariety" :current-product="card"/>
				<p class="disclaimer"> 
					вся информация о товарах и об услугах, носит исключительно информационный характер 
				</p>
			</div>
		</div>
	</div>
</template>


<script>
import NavButton from './NavButton.vue';
import ProductTable from './ProductTable.vue';
import ScrollHint from './ScrollHint.vue';
import ProductDialogPhone from './ProductDialogPhone.vue';
import { store } from '~/store';

export default {
	components: {
		ProductTable,
		NavButton,
		ScrollHint,
		ProductDialogPhone,
	},
	data() {
		return {
			hintMode: false,
		}
	},
	computed: {
		card() {
			return store.state.currentProduct;
		},
		currentVariety() {
			return store.state.currentVariety;
		},
		qualityTag() {
			return this.card.qualityTag;
		},
		tags() {
			return this.card.tags
		}
	},
	methods: {
		changeVariety(key) {
			store.commit('changeVariety', key)
		},
		showNextCard() {
			store.commit('showNextCard')
		},
		showHint() {
			this.hintMode = true
		},
		hideHint() {
			this.hintMode = false
		}
	}
}
</script>

<style scoped lang="scss">
.navigation__options {
	display: inline-flex;
	gap: 10px;
}
.navigation-scroll {
	display: inline-flex;
	flex-direction: column;
	align-items: flex-end;

	&__image {
		width: 30px;
		height: 30px;
		cursor: pointer;
	}
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
	&__product_desktop {
		display: inline-flex;
		gap: 20px;
	}
	&__product_phone {
		display: none;
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
	&__title-with-tags {
		width: 100%;
		display: inline-flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	&__tags {
		display: inline-flex;
		gap: 5px;
	}
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
	&__tag {
		background-color: #FF3D00;
		border-radius: 5px;
		padding: 0px 10px;
		height: 30px;
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		color: #FFFFFF;
		font-size: 14px;
		user-select: none;
	}
	&__tag_quality {
		width: 325px;
	}
}

.product-description__title {
	&-header {
		white-space: nowrap;
		font-size: 14px;
		line-height: 15.4px;
		color: #909090;
	}
	&-item {
		white-space: nowrap;
		font-size: 18px;
		line-height: 19.8px;
		white-space: pre-line;
	}
}

.product-description__short-description {
	&-header {
		font-size: 14px;
		color: #909090;
		line-height: 15.4px;
	}
	&-item {
		font-size: 16px;
		color: #505050;
		white-space: pre-line;
		line-height: 17.6px;
	}
}
.disclaimer {
	margin-top: auto;
	white-space: nowrap;
	font-size: 14px;
	line-height: 15.4px;
	color: #909090
}

@media screen and (width >= $ipad) and (width < $desktop) {
	.product {
		&__image {
			display: none;
		}
	}
}

@media  screen and (width < $ipad) {
	.dialog-window {
		&__product_desktop {
			display: none;
		}
		&__product_phone {
			display: flex;
		}
	}
	.navigation-scroll {
		display: none;
	}
}
</style>