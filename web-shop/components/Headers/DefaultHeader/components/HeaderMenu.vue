<template>
	<div class="navigation-menu-with-select">
		<div class="navigation-menu">
			<img class="navigation-menu__image" src="~assets/images/Menu.svg" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		showList: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style scoped>
.navigation-menu {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	background-color: #FF3D00;
	border-radius: 6px;
	width: 40px;
	height: 40px;
	cursor: pointer;
}
</style>