<template>
	<section class="black-banner">
		<div class="black-banner__background"></div>
		<div class="black-banner__content">
			<p class="black-banner__description" v-html="description"></p>
			<OrangeButton 
				:width="380" :height="60" 
				:text="buttonText"
				class="black-banner__button black-banner__button_desktop" 
				@click="activated" />
			<OrangeButton 
				:width="350" :height="60" 
				:text="buttonText"
				class="black-banner__button black-banner__button_phone" 
				@click="activated" />
			<div class="black-banner__disclaimer">
				{{`подробная презентация предоставляется 
				исключительно на основании запроса`}}
			</div>
		</div>
	</section>
</template>

<script>
import OrangeButton from '../Buttons/OrangeButton.vue';

export default {
	components: {
		OrangeButton,
	},
	props: {
		description: {
			type: String,
			default: "",
		},
		buttonText: {
			type: String,
			default: "",
		}
	},
	methods: {
		activated() {
			this.$emit('activated')
		}
	}
}
</script>

<style scoped lang="scss">
.black-banner {
	box-sizing: border-box;
	display: flex;

	&__background {
		background-color: #101010;
		width: 100vw;
		height: 310px;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
		position: relative;
		top: -2px;
	}
	&__content {
		position: absolute;
		align-self: center;
		padding-left: 0;
		display: inline-flex;
		flex-direction: column;
		gap: 20px;
	}

	&__description {
		font-size: 24px;
		line-height: 26.4px;
		color: #FFFFFF;
		white-space: pre-line;
	}

	&__button_phone {
		display: none;
	}

	&__disclaimer {
		display: none;
	}
}

@media screen and (width < $ipad) {
	.black-banner {
		&__description {
			font-size: 18px;
			line-height: 19.8px;
		}
		&__button_desktop {
			display: none;
		}
		&__button_phone {
			display: block;
		}

		&__disclaimer {
			display: flex;
			height: 30px;
			width: 350px;
			font-size: 14px;
			line-height: 15.4px;
			text-align: center;
			color: rgba(80, 80, 80, 1);
		}
	}
}
</style>