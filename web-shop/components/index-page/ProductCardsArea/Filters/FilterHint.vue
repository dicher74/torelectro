<template>
	<div class="filter-hint">
		<img class="filter-hint__image" src="~assets/images/question.svg" />
		<p class="filter-hint__description">
			{{ text }}
		</p>
	</div>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: ''
		}
	}
}
</script>

<style scoped lang="scss">
.filter-hint {
	display: inline-flex;
	align-items: center;
	gap: 10px;

	padding: 10px 15px 10px 10px;
	background: rgba(255, 61, 0, 0.75);
	backdrop-filter: blur(3px);
	position: absolute;
	transform: translate(0, calc(-100% - 5px));
	border-radius: 5px;

	animation-name: appear;
	animation-duration: 0.4s;

	&__image {
		width: 15.94px;
		height: 15.94px;
	}
	&__description {
		color: #FFFFFF;
		line-height: 17.6px;
		font-size: 16px;
		white-space: pre-line;
	}
}

@keyframes appear {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>