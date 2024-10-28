<template>
	<div class="product-body">
		<div class="product-body__card product-card">
			<img class="product-card__image" src="~assets/images/product-image.png"/>
			<div class="product-card__options card-options">
				<div 
					v-for="option, parNum in options"
					:key="`option-par_num-${parNum}`"
					class="card-options__option"> {{ option }} </div>
				<div class="product-card__tags">
					<div
						v-for="tag, tagNum in tags"
						:key="`tag_num-${tagNum}`"
						class="card-tag"> {{ tag }} </div>
				</div>
			</div>
		</div>
		<div class="product-body__description">
			<div class="product-body__title"> {{ title }} </div>
			<div class="product-body__content"> {{ description }} </div>
		</div>
		<OrangeButton :width="320" :height="60" text="Бесплатная консультация" 
			@click="scrollToConsultation"/>
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
		card: {
			type: Object,
			default: () => {}
		},
		variety: {
			type: String,
			default: '',
		}
	},
	computed: {
		title() {
			return this.card.fullTitle
		},
		description() {
			return this.card.description
		},
		options() {
			return {
				radius: this.card.varieties[this.variety].radius,
				amount: this.card.amount + ' ' + this.langForm(this.card.amount),
				length: 'от ' + this.card.length[0] + ' до ' + this.card.length[1] + ' м',
				grounding: this.card.grounding ? 'с заземлением' : 'без заземления'
			}
		},
		tags() {
			return this.card.tags
		}
	},
	methods: {
		langForm(amount) {
			if (amount % 100 >= 10 && amount % 100 <= 20) { return 'розеток' }
			if (amount % 10 === 1) { return 'розетка' }
			if (amount % 10 >= 5) { return 'розеток' }
			return 'розетки'
		},
		scrollToConsultation() {
			store.commit('scrollToElem', "consultation-dialog_phone")
		}
	}
}
</script>

<style lang="scss" scoped>
.product-body {
	display: inline-flex;
	flex-direction: column;
	gap: 15px;

	&__card {
		width: 320px;
		height: 320px;
		border-radius: 5px;
		display: inline-flex;
	}
	&__title {
		font-size: 16px;
		line-height: 17.6px;
		height: 20px;
	}
	&__content {
		color: rgba(144, 144, 144, 1);
		font-size: 14px;
		line-height: 15.4px;
	}
	&__description {
		display: inline-flex;
		flex-direction: column;
		gap: 5px;
		margin-bottom: -2px;
	}
}

.product-card__tags {
	display: inline-flex;
	gap: 5px;
}

.card-tag {
	display: inline-flex;
	justify-content: center;
	padding: 9px 11px 0px 11px;
	height: 30px;
	box-sizing: border-box;
	border-radius: 5px;
	background-color: rgba(255, 61, 0, 0.5);
	font-size: 14px;
	line-height: 15.4px;
	color: rgba(255, 255, 255, 1);
	backdrop-filter: blur(5px);
}

.card-options {
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	position: absolute;
	align-self: flex-end;
	margin-bottom: 10px;
	margin-left: 10px;
	gap: 5px;
	&__option {
		display: inline-flex;
		justify-content: center;
		padding: 8px 11px 0px 11px;
		height: 30px;
		box-sizing: border-box;
		border-radius: 5px;
		background-color: rgba(16, 16, 16, 0.25);
		font-size: 14px;
		line-height: 15.4px;
		color: rgba(255, 255, 255, 1);
		backdrop-filter: blur(5px);
	} 
}
</style>