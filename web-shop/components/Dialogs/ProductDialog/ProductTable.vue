<template>
	<div class="product-table">
		<template v-for="rowNum of rowsNum" :key="`row_${rowNum}`">
			<div
				:class="`
					product-table__item
					product-table__item_id
					product-table__item_id_odd-${rowNum % 2}`">
					{{ ids[rowNum - 1] }}
			</div>
			<div 
				:class="`
					product-table__item
					product-table__item_usual
					product-table__item_usual_odd-${rowNum % 2}`">
					{{ radius }}
			</div>
			<div :class="`
					product-table__item
					product-table__item_red
					product-table__item_red_odd-${rowNum % 2}`">
					{{ length[rowNum - 1] }} м
			</div>
			<div :class="`
					product-table__item
					product-table__item_usual
					product-table__item_usual_odd-${rowNum % 2}`">
					{{ protection }}
			</div>
			<div :class="`
					product-table__item
					product-table__item_usual
					product-table__item_usual_odd-${rowNum % 2}`">
					{{ power }}
			</div>
			<div :class="`
					product-table__item
					product-table__item_usual
					product-table__item_usual_odd-${rowNum % 2}`">
					{{ amount }}
			</div>
			<div :class="`
					product-table__item
					product-table__item_usual
					product-table__item_usual_odd-${rowNum % 2}`">
					{{ grounding }}
			</div>
			<div :class="`
					product-table__item
					product-table__item_basket`">
				<img class="basket-image" src="~assets/images/basket.svg" />
			</div>
		</template>
	</div>
</template>

<script>
export default {
	props: {
		currentProduct: {
			type: Object,
			default: () => { }
		},
		currentVariety: {
			type: String,
			default: '',
		}
	},
	computed: {
		rowsNum() {
			const startId = this.currentProduct.varieties[this.currentVariety].id[0]
			const endId = this.currentProduct.varieties[this.currentVariety].id[1]
			return endId - startId + 1
		},
		ids() {
			const ids = []
			const startId = this.currentProduct.varieties[this.currentVariety].id[0]
			const endId = this.currentProduct.varieties[this.currentVariety].id[1]
			for (let id = startId; id <= endId; id++) {
				ids.push(id)
			}
			console.log(ids)
			return ids;
		},
		length() {
			const lengths = []
			const startLength = this.currentProduct.length[0]
			const endLength = this.currentProduct.length[1]
			for (let length = startLength; length <= endLength; length += 10) {
				lengths.push(length)
			}
			return lengths;
		},
		grounding() {
			return this.currentProduct.grounding ? 'с заземлением' : 'без заземления';
		},
		radius() {
			return this.currentProduct.varieties[this.currentVariety].radius;
		},
		protection() {
			return this.currentProduct.protection;
		},
		power() {
			return this.currentVariety;
		},
		amount() {
			const amount = this.currentProduct.amount
			return amount + ' ' + this.langForm(amount);
		}
	},
	methods: {
		langForm(amount) {
			if (amount % 100 >= 10 && amount % 100 <= 20) { return 'розеток' }
			if (amount % 10 === 1) { return 'розетка' }
			if (amount % 10 >= 5) { return 'розеток' }
			return 'розетки'
		}
	}
}
</script>

<style lang="scss" scoped>
.basket-image {
	width: 15px;
	height: 15px;
}
.product-table {
	display: grid;
	column-gap: 5px;
	row-gap: 10px;
	grid-template-columns: 45px 60px 60px 60px 80px 130px 130px 50px;

	&__item {
		height: 50px;
		width: 100%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;

		font-size: 14px;
	}
	&__item_usual {
		background-color: rgba(245, 245, 245, 1);
	}
	&__item_red {
		background-color: rgba(255, 236, 229, 1);
	}
	&__item_id {
		background-color: rgba(245, 245, 245, 1);
		color: rgba(144, 144, 144, 1);
	}
	&__item_basket {
		background-color: #FF3D00;
	}
	&__item_red_odd-1 {
		background-color: rgba(255, 236, 229, 0.5);
	}
	&__item_id_odd-1 {
		background-color: rgba(245, 245, 245, 0.5);
	}
	&__item_usual_odd-1 {
		background-color: rgba(245, 245, 245, 0.5);
	}
}
</style>