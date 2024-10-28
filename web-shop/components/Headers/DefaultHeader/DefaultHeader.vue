<template>
	<div class="default-header-with-select">
		<header class="default-header">
			<div class="default-header__body"> </div>
			<div class="default-header__navigation">
				<HeaderCallButton />
				<HeaderMenu @click="changeMenuMode($event)" :show-list="menuMode"  :activated="menuMode"/>
			</div>
		</header>
		<MenuSelect v-if="menuMode" style="align-self: flex-end;" @choose="closeMenu"/>
	</div>
</template>

<script>
import HeaderCallButton from './components/HeaderCallButton.vue';
import HeaderMenu from './components/HeaderMenu.vue';
import MenuSelect from './components/MenuSelect.vue';

export default {
	components: {
		HeaderCallButton,
		HeaderMenu,
		MenuSelect,
	},

	data() {
		return {
			menuMode: false,
		}
	},

	methods: {
		changeMenuMode(event) {
			this.menuMode = !this.menuMode
			event.stopPropagation()
		},
		closeMenu() {
			this.menuMode = false
		}
	},

	mounted() {
		window.addEventListener('click', this.closeMenu)
	},

	destroyed() {
		window.removeEventListener('click', this.closeMenu)
	}
}
</script>

<style scoped lang="scss">
.default-header-with-select {
	width: 100%;
	display: inline-flex;
	flex-direction: column;
}
.default-header{
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

@media screen and (width < $ipad) {
	.default-header {
		&__body {
			width: 40px;
		}
	}
}
</style>