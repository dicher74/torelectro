<template>
	<button class="call-button">
		<img class="call-button__image" src="~assets/images/Phone.svg" />
		<div class="call-button__separator"></div>
		<p class="call-button__phone-number"> {{phoneHumber}} </p>
	</button>
</template>

<script>
export default {
	data() {
		return {
			phoneHumber: '+7 999 999 99 99'
		}
	}
}
</script>

<style scoped lang="scss">
.call-button {
	height: 40px;
	width: 205px;
	box-sizing: border-box;
	display: inline-flex;
	padding: 0px 15px;
	gap: 15px;
	align-items: center;
	background: #FF3D00;
	border: none;
	border-radius: 6px;

	&__image {
		width: 20px;
		height: 20px;
	}
	&__separator {
		height: 10px;
		border: 1px rgba(240, 240, 240, 0.5) solid;
		border-radius: 1px;
	}
	&__phone-number {
		color: #F0F0F0;
		font-family: Evolventa;
		font-weight: 400;
		font-size: 16px;
		line-height: 17.6px;
		margin-top: 4px;
		white-space: nowrap;
	}
}
</style>