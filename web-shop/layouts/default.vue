<template>
	<div class="content-wrapper-global">
		<div class="content-wrapper">
			<NuxtPage  />
		</div>
	</div>
</template>

<style scoped lang="scss">
.content-wrapper {
		padding: 20px 50px 0;
		height: max(100%, 100vh);
		box-sizing: border-box;
		align-self: stretch;
	}
@media screen and (width >= $desktop) {
	.content-wrapper {
		width: $desktop;
	}
}

@media screen and (width >= $ipad) and (width < $desktop) {
	.content-wrapper {
		width: $ipad;
		padding: 20px 20px 0;
	}
}
.content-wrapper-global {
	display: inline-flex;
	width: 100%;
	box-sizing: border-box;
	justify-content: center;
	background: #F0F0F0;
	overflow: hidden;
}
</style>