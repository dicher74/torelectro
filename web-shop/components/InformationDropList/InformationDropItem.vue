<template>
	<div :class="`information-drop-item information-drop-item_theme-${theme}`">
		<div class="information-drop-item__content">
			<p :class="`information-drop-item__title information-drop-item__title_theme-${theme}`"> {{ title }} </p>
			<hr />
			<div :class="`information-drop-item__description information-drop-item__description_theme-${theme}`">
				<p 
					v-for="descriptionPar, descriptionParNum in description"
					:key="`description-par_num-${descriptionParNum}`">
					{{ descriptionPar }}
				</p>
			</div>
		</div>
		<img class="information-drop-item__show-button" src="~assets/images/cross.svg" />
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
	}
}
</script>

<style lang="scss" scoped>
.information-drop-item {
	height: 60px;
	box-sizing: border-box;
	display: inline-flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px;
	border-radius: 5px;
	font-size: 18px;
	overflow: hidden;


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
	&__show-button {
		width: 24.38px;
		height: 24.38px;
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

	&_theme-black {
		color: #909090;
	}
	&_theme-white {
		color: #505050;
	}
}
</style>