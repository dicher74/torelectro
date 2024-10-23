<template>
	<div class="scroll-hint">
		<img class="scroll-hint__image" src="~assets/images/question.svg" />
		<div class="scroll-hint__body">
			<p class="scroll-hint__body-par scroll-hint__body-par_main">
				следующая категория 
				электрических удлинителей
			</p>
			<p class="scroll-hint__body-par scroll-hint__body-par_extra">
				нажмите, чтобы перейти
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.scroll-hint {
	display: inline-flex;
	gap: 10px;
	height: 80px;
	width: 285px;

	padding: 0px 10px 0px 15px;
	background: rgba(255, 61, 0, 0.75);
	backdrop-filter: blur(10px);
	position: absolute;
	transform: translate(0, calc(-100% - 7.81px));
	border-radius: 5px;

	animation-name: appear;
	animation-duration: 0.4s;

	&__image {
		width: 15.94px;
		height: 15.94px;
		margin-top: 27.03px;
	}
	&__body {
		display: inline-flex;
		flex-direction: column;
		gap: 5px;
		margin-top: 15px;
	}
	&__body-par {
		color: #FFFFFF;
		white-space: pre-line;
	}
	&__body-par_main {
		line-height: 17.6px;
		font-size: 16px;
	}
	&__body-par_extra {
		line-height: 13.2px;
		font-size: 12px;
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