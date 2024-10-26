<template>
	<div :class="`information-drop-item information-drop-item_show-${showMode} information-drop-item_theme-${theme}`">
		<div class="click-area" @click="choose"></div>
		<div class="information-drop-item__content">
			<p :class="`information-drop-item__title information-drop-item__title_theme-${theme}`"> {{ title }} </p>
			<hr :class="`information-drop-item__content-separator_theme-${theme}`"/>
			<div :class="`information-drop-item__description information-drop-item__description_theme-${theme}`">
				<p :class="`information-drop-item__description-par information-drop-item__description-par_theme-${theme}`"
					v-for="descriptionPar, descriptionParNum in description"
					:key="`description-par_num-${descriptionParNum}`">
					{{ descriptionPar }}
				</p>
				<a v-if="theme === 'black'" href="https://t.me/humanfromthefuture" target="_blank" >
					<p class="information-drop-item__message">
						Написать нам в мессенджер «Telegram»
					</p>
				</a>
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
		},
		showMode: {
			type: Boolean,
			default: false,
		}
	},
	methods: {
		choose() {
			this.$emit('choose')
		}
	}
}
</script>

<style lang="scss" scoped>
.click-area {
	cursor: pointer;
	height: 60px;
	width: 1180px;
	margin-top: -20px;
	margin-left: -20px;
	position: absolute;
}
.information-drop-item {
	height: 60px;
	box-sizing: border-box;
	display: inline-flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	border-radius: 5px;
	font-size: 18px;
	line-height: 19.8px;
	overflow: hidden;
	transition: height 1s;

	&_show-true {
		height: auto;
		animation-name: down;
		animation-duration: 1s;
	}
	&_show-false {
		height: auto;
		max-height: 60px;
		animation-name: up;
		animation-duration: 0.5s;
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
		width: 1160px;
		border: 1px solid #F0F0F0;
	}
	&__content-separator_theme-black {
		width: 1160px;
		border: 1px solid #505050;
	}
	&__show-button {
		position: absolute;
		align-self: end;
		width: 30px;
		height: 30px;
		margin-top: -5px;
		cursor: pointer;
	}
	&__show-button_show-true {
		transform: rotate(45deg);
		animation-name: rotate-right;
		animation-duration: 0.3s;
	}
	&__show-button_show-false {
		transform: rotate(0deg);
		animation-name: rotate-left;
		animation-duration: 0.3s;
	}
	&__message {
		font-size: 16px;
		color: #FF3D00;
		line-height: 17.6px;
	}
}

.information-drop-item__title {
	white-space: nowrap;
	height: 20px;
	padding-top: 2px;
	user-select: none;
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
	white-space: pre-line;
}
.information-drop-item__description-par {
	line-height: 19.8px;
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
		max-height: 450px;
	}
}
@keyframes up {
	from {
		max-height: 300px;
	}
	to {
		max-height: 60px;
	}
}
@keyframes rotate-right {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(45deg);
	}
}

@keyframes rotate-left {
	from {
		transform: rotate(45deg);
	}
	to {
		transform: rotate(0deg);
	}
}
@media screen and (width >= $ipad) and (width < $desktop) {
	.click-area {
		width: 780px;
	}
}
@media screen and (width < $ipad) {
	.click-area {
		width: 350px;
		margin-top: -15px;
		margin-left: -15px;
	}
	.information-drop-item {
		font-size: 16px;
		line-height: 16px;
		padding: 15px;
		&__description {
			margin-top: 20px;
			gap: 10px;
		}
		&__content {
			gap: 0px;	
		}
		&__show-button {
			margin-top: 0;
		}
		&__content-separator_theme-white {
			width: 335px;
		}
		&__content-separator_theme-black {
			width: 335px;
		}
	}
	.information-drop-item {
		&__title {
			white-space: pre-line;
			height: 60px;
			display: inline-flex;
			align-items: center;
			box-sizing: border-box;
			margin-top: -15px;
		}
		&__description {
			white-space: pre-line;
		}
	}
}
</style>