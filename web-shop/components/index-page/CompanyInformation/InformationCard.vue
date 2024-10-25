<template>
	<div class="information-card">
		<div class="information-card__image"></div>
		<div>
			<p class="information-card__title"> {{ title }} </p>
			<p class="information-card__description"> {{ description }} </p>
		</div>
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
			type: String,
			default: '',
		},
	}
}
</script>

<style scoped lang="scss">
.information-card {
	background-color: #FFFFFF;
	display: inline-flex;
	flex-direction: column;
	height: 210px;
	box-sizing: border-box;

	padding: 50px 20px;
	border-radius: 5px;
	justify-content: center;

	&__description {
		white-space: pre-line;
		font-size: 18px;
		line-height: 19.8px;
	}

	&__title {
		color: #FF3D00;
		font-weight: 700;
		font-size: 24px;
	}
}

@media screen and (width < $ipad) {
	.information-card {
		padding: 15px;
		height: 310px;
		justify-content: space-between;
		&__description {
			font-size: 16px;
			line-height: 17.6px;
			white-space: wrap;
		}
		&__title {
			height: 30px;
			display: inline-flex;
			align-items: center;
			font-size: 18px;
			line-height: 19.8px;
		}
		&__image {
			width: 320px;
			height: 140px;
			border-radius: 5px;
			background-color: #F0F0F0;
		}
	}
}
</style>