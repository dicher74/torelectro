<template>
	<button class="orange-button" :style="`height: ${height}px; width: ${width}px`">
		<p class="orange-button__text">{{ text }}</p>
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

<style scoped lang="scss">
.orange-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;

	background-color: #FF3D00;
	border: none;
	border-radius: 5px;
	box-sizing: border-box;
	padding-top: 0.15em;

	cursor: pointer;
	transition: background-color 0.6s;

	&__text {
		color: #FFFFFF;
		font-size: 18px;
		font-family: Evolventa;
		font-weight: 400;
	}
}

@media screen and (min-width: 1280px) {
	.orange-button:hover {
			background-color: rgba(255, 61, 0, 0.75);
		}
}
</style>