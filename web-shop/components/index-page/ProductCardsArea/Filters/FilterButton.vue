<template>
	<div class="filter-button-with-hint">
		<FilterHint v-if="hintMode" :text="hint" />
		<div @mouseover="showHint" @mouseout="hideHint" :class="['filter-button', selected ? 'filter-button_selected' : '']">
			{{ text }}
		</div>
	</div>
</template>

<script>
import FilterHint from './FilterHint.vue';

export default {
	components: {
		FilterHint,
	},
	props: {
		text: {
			type: String,
			default: ''
		},
		selected: {
			type: Boolean,
			default: false,
		},
		hint: {
			type: String,
			default: '',
		},
	},

	data() {
		return {
			hintMode: false,
		}
	},

	methods: {
		showHint() {
			console.log('show')
			this.hintMode = true;
		},
		hideHint() {
			this.hintMode = false;
		}
	},
}
</script>

<style scoped lang="scss">
.filter-button-with-hint {
	display: inline-flex;
	flex-direction: column;
}
.filter-button {
	cursor: pointer;
	width: 200px;
	height: 50px;
	box-sizing: border-box;

	display: inline-flex;
	align-items: center;
	justify-content: center;

	font-size: 18px;
	font-family: Evolventa;
	font-weight: 400;

	background: #FFFFFF;
	border: none;
	border-radius: 5px;
	padding-top: 4px;

	transition: background-color 0.5s;

	&_selected {
		background: #FF3D00; 
		color: #FFFFFF;
	}
}

@media screen and (width < $ipad) {
	.filter-button {
		width: 170px;
		font-size: 14px;
		line-height: 16.1px;
	}
}
</style>

