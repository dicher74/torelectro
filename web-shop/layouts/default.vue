<template>
	<div class="content-wrapper-global">
		<div class="content-wrapper">
			<NuxtPage  />
		</div>
	</div>
</template>

<style scoped>
.content-wrapper {
	width: 1280px;
	padding: 20px 50px 0;
	height: max(100%, 100vh);
	box-sizing: border-box;
	align-self: stretch;
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