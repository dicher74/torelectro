<template>
	<button class="orange-button" :style="`height: ${height}px; width: ${width}px`">
		{{ text }}
	</button>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: '',
		},
		width: {
			type: Number,
			default: 0,
		},
		height: {
			type: Number,
			deafult: 0,
		},
	}
}
</script>

<style scoped>
.orange-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;

	color: #FFFFFF;
	font-size: 18px;
	font-family: Evolventa;
	font-weight: 400;

	background: #FF3D00;
	border: none;
	border-radius: 5px;
}
</style>