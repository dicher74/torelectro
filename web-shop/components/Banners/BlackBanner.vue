<template>
	<section class="black-banner">
		<div class="black-banner__background"></div>
		<div class="black-banner__content">
			<p class="black-banner__description" v-html="description"></p>
			<OrangeButton :width="380" :height="60" :text="buttonText" @click="ativated" />
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
		color: #FFFFFF;
		white-space: pre-line;
	}
}
</style>