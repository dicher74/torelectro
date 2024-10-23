<template>
	<div class="navigation-menu-with-select">
		<div :class="`navigation-menu navigation-menu_activation-${activated}`">
			<img class="navigation-menu__image" src="~assets/images/Menu.svg" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		activated: {
			type: Boolean,
			default:false
		}
	}
}
</script>

<style scoped lang="scss">
.navigation-menu {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	background-color: #FF3D00;
	border-radius: 6px;
	width: 40px;
	height: 40px;
	cursor: pointer;
	transition: background-color 0.3s;

	&_activation-true {
		background-color: rgba(255, 61, 0, 0.75);
	}
}
</style>