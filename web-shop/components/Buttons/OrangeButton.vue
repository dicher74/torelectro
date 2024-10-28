<template>
	<div class="button-container" :style="`height: ${height}px; width: ${width}px`">
		<div v-if="background" class="button-container__background" :style="`height: ${height}px; width: ${width}px`"></div>
		<button class="orange-button" :style="`height: ${height}px; width: ${width}px`">
		<p class="orange-button__text">{{ text }}</p>
	</button>
	</div>
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
		background: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style scoped lang="scss">
.button-container {
	display: inline-flex;
	flex-direction: column;
	&__background {
		background-color: white;
		position: absolute;
		border-radius: 5px;
	}
}

.orange-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: absolute;

	background-color: #FF3D00;
	border: none;
	border-radius: 5px;
	box-sizing: border-box;
	padding-top: 0.15em;

	cursor: pointer;
	transition: opacity 0.6s;

	&__text {
		color: #FFFFFF;
		font-size: 18px;
		font-family: Evolventa;
		font-weight: 400;
	}
}

@media screen and (min-width: $desktop) {
	.orange-button:hover {
			opacity: 0.75;
		}
}

@media screen and (width >= $ipad) and (width < $desktop) {
	.orange-button{
			&__text {
				font-size: 18px;
				line-height: 19.8px;
			}
		}
}

@media screen and (width < $ipad) {
	.orange-button {
		&__text {
			font-size: 16px;
			line-height: 17.6px;
		}
	}
}
</style>