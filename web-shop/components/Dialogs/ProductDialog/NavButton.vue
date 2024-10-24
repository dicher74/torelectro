<template>
	<button :class="`nav-button nav-button_active-${active}`">
		<p class="nav-button__value"> {{ text }}  </p>
		<p class="nav-button__description"> С мощностью </p>
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
	cursor: pointer;

	&_active-true {
		animation: activate 1s;
		opacity: 1;
	}
	&__value {
		font-size: 16px;
		color: #FFFFFF;
	}
	&__description {
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
</style>