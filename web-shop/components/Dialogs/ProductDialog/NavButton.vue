<template>
	<button :class="`nav-button nav-button_active-${active}`">
		<p class="nav-button__value"> {{ text }}  </p>
		<p class="nav-button__description"> c мощностью </p>
	</button>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: '',
		},
		active: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style lang="scss" scoped>
.nav-button {
	width: 150px;
	height: 50px;

	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border: none;
	border-radius: 5px;

	background-color: #FF3D00;
	opacity: 0.5;
	font-family: Evolventa;
	cursor: pointer;

	&_active-true {
		animation: activate 1s;
		opacity: 1;
	}
	&__value {
		margin-top: 3px;
		font-size: 16px;
		color: #FFFFFF;
	}
	&__description {
		margin-top: -2px;
		font-size: 14px;
		color: rgba(255, 255, 255, 0.5);
	}
}
@keyframes activate {
	from {
		opacity: 0.5;
	}
	to {
		opacity: 1;
	}
}

@media screen and (width < $ipad) {
	.nav-button {
		width: 100px;

		&__value {
			margin-top: 5px;
			font-size: 14px;
			line-height: 15.4px;
		}

		&__description {
			font-size: 12px;
			line-height: 13.2px;
			margin-top: 3px;
		}
	}
}
</style>