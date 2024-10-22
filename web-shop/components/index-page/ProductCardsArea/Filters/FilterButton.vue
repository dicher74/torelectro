<template>
	<div :class="['filter-button', selected ? 'filter-button_selected' : '']">
		{{ text }}
	</div>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: ''
		},
		selected: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style scoped lang="scss">
.filter-button {
	cursor: pointer;
	width: 200px;
	height: 50px;

	display: inline-flex;
	align-items: center;
	justify-content: center;

	font-size: 18px;
	font-family: Evolventa;
	font-weight: 400;

	background: #FFFFFF;
	border: none;
	border-radius: 5px;

	transition: background-color 1s;

	&_selected {
		background: #FF3D00; 
		color: #FFFFFF;
	}
}
</style>

