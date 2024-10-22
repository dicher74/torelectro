<template>
	<header class="default-header">
		<div class="default-header__body"> </div>
		<div class="default-header__navigation">
			<HeaderCallButton />
			<HeaderMenu />
		</div>
	</header>
</template>

<script lang="ts">
import HeaderCallButton from './components/HeaderCallButton.vue';
import HeaderMenu from './components/HeaderMenu.vue';

export default {
	components: {
		HeaderCallButton,
		HeaderMenu,
	}
}
</script>

<style scoped lang="scss">
.default-header{
	width: 100%;
	box-sizing: border-box;
	display: inline-flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
	padding: 10px;
	border-radius: 5px;
	background: #FFFFFF;

	&__navigation {
		display: inline-flex;
		flex-direction: row;
		gap: 5px;
		align-items: stretch;
	}

	&__body {
		width: 370px;
		background-color: #F0F0F0;
		border-radius: 5px;
	}
}
</style>