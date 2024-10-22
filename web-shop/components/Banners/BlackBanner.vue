<template>
	<section class="black-banner">
		<div class="black-banner__content">
			<p class="black-banner__description">
				{{ description }}
			</p>
			<OrangeButton :width="380" :height="60" :text="buttonText" />
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
}
</script>

<style scoped lang="scss">
.black-banner {
	background-color: #101010;
	margin: 0 -50px;
	box-sizing: border-box;
	padding: 50px;

	&__content {
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