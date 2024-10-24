<template>
	<div class="documentation-dialog">
		<p class="documentation-dialog__title"> Документация </p>
		<div class="documentation-dialog__load-area load-area">
			<div class="load-area__item_expluatation load-area__item load-area-item">
				<div class="load-area-item__block load-area-item__block_name"> Руководство по эксплуатации </div>
				<div class="load-area-item__block load-area-item__block_size"> 0.00 МБ </div>
				<div class="load-area-item__block load-area-item__block_format"> PDF </div>
				<div class="load-area-item__block load-area-item__block_loader">
					<img class="load-area-item__loader-image" src="~assets/images/file.svg" />
				</div>
			</div>
			<div class="load-area__item_production load-area__item load-area-item">
				<div class="load-area-item__block load-area-item__block_name"> Сертификат на продукци. </div>
				<div class="load-area-item__block load-area-item__block_size"> 0.00 МБ </div>
				<div class="load-area-item__block load-area-item__block_format"> PDF </div>
				<div class="load-area-item__block load-area-item__block_loader">
					<img class="load-area-item__loader-image" src="~assets/images/file.svg" />
				</div>
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
.documentation-dialog {
	display: inline-flex;
	flex-direction: column;
	gap: 20px;

	&__title {
		font-size: 24px;
		line-height: 26.4px;
		height: 50px;
		display: inline-flex;
		align-items: center;
	}

	&__load-area {
		display: inline-flex;
		flex-direction: column;
		gap: 10px;
	}
}

.load-area {
	&__item {
		display: inline-grid;
		height: 50px;
		justify-content: stretch;
		grid-template-columns: 815px 130px 130px 50px;
		column-gap: 5px;
	}
}

.load-area-item {
	&__block {
		background-color: rgba(245, 245, 245, 1);
		border-radius: 5px;
		display: inline-flex;
		align-items: center;
		color: rgba(80, 80, 80, 1);
		font-size: 16px;
		line-height: 17.6px;
		padding-top: 3px;
	}
	&__block_name {
		padding-left: 10px;
	}
	&__block_size {
		justify-content: center;
	}
	&__block_format {
		justify-content: center;
	}
	&__block_loader {
		background-color: rgba(16, 16, 16, 1);
		justify-content: center;
		cursor: pointer;
	}
}
</style>