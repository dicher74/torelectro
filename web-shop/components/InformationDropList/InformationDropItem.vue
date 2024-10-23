<template>
	<div :class="`information-drop-item information-drop-item_show-${showMode} information-drop-item_theme-${theme}`"
	@click="changeShowMode">
		<div class="information-drop-item__content">
			<p :class="`information-drop-item__title information-drop-item__title_theme-${theme}`"> {{ title }} </p>
			<hr :class="`information-drop-item__content-separator_theme-${theme}`"/>
			<div :class="`information-drop-item__description information-drop-item__description_theme-${theme}`">
				<p :class="`information-drop-item__description-par information-drop-item__description-par_theme-${theme}`"
					v-for="descriptionPar, descriptionParNum in description"
					:key="`description-par_num-${descriptionParNum}`">
					{{ descriptionPar }}
				</p>
			</div>
		</div>
		<img :class="`information-drop-item__show-button information-drop-item__show-button_show-${showMode}`" 
			src="~assets/images/cross.svg" />
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		description: {
			type: Array,
			deault: [],
		},
		theme: {
			type: String,
			default: "white",
		}
	},
	data() {
		return {
			showMode: false,
		}
	},
	methods: {
		changeShowMode() {
			this.showMode = !this.showMode
		}
	}
}
</script>

<style lang="scss" scoped>
.information-drop-item {
	cursor: pointer;
	height: 60px;
	box-sizing: border-box;
	display: inline-flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px;
	border-radius: 5px;
	font-size: 18px;
	overflow: hidden;
	transition: height 1s;

	&_show-true {
		height: auto;
		animation-name: down;
		animation-duration: 1s;
	}
	&_theme-black {
		background-color: #101010;
	}
	&_theme-white {
		background-color: #FFFFFF;
	}

	&__content {
		display: inline-flex;
		flex-direction: column;
		gap: 20px;
	}
	&__content-separator_theme-white {
		color: #F0F0F0;
		width: 1100px;
	}
	&__show-button {
		width: 24.38px;
		height: 24.38px;
		cursor: pointer;
	}
	&__show-button_show-true {
		transform: rotate(45deg);
		animation-name: rotate;
		animation-duration: 0.3s;
	}
}

.information-drop-item__title {
	&_theme-black {
		color: #FFFFFF;
	}
	&_theme-white {
		color: #101010;
	}
}

.information-drop-item__description {
	display: inline-flex;
	flex-direction: column;
	gap: 20px; 
}
.information-drop-item__description-par {
	&_theme-black {
		color: #909090;
	}
	&_theme-white {
		color: #505050;
	}
}

@keyframes down {
	from {
		max-height: 60px;
	}
	to {
		max-height: 300px;
	}
}
@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(45deg);
	}
}
</style>