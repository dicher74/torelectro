<template>
	<div class="contact-info-dialog">
		<p class="contact-info-dialog__title">Контактная информация</p>
		<div class="contact-info-dialog__body">
			<div class="map-container"></div>
			<div class="info-blocks">
				<div class="info-blocks__block info-blocks__block_num-1">
					<p class="info-block__line"> +7 495 198 62 55 </p>
					<p class="info-block__line"> +7 916 083 39 30 </p>
					<p class="info-block__line"> tor@torelektro.ru </p>
				</div>
				<div class="info-blocks__block info-blocks__block_num-2">
					<p class="info-block__line"> ООО «ТОРЭЛЕКТРО» </p>
					<div>
						<p class="info-block__line info-block__line_grey"> 140016, Россия, Московская область,</p>
						<p class="info-block__line info-block__line_grey"> Люберецкий район, Торбеево, 48 </p>
					</div>
					<div class="info-block__group info-block-group">
						<div v-for="groupItem, itemNum in contactsInfo" 
							:key="`group_item_${itemNum}`" class="info-block-group__item">
							<p> {{groupItem[0]}} </p>
							<p style="color: rgba(144, 144, 144, 1);"> {{groupItem[1]}} </p>
						</div>
					</div>
				</div>
				<img class="telegram-icon" src="~assets/images/telegram-icon-black.svg" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			contactsInfo: [
				['1245000026600', 'ОГРН'],
				['5027326376', 'ИНН'],
				['502701001', 'КПП'],
				['75706083', 'ОКПО'],
				['46448000000', 'ОКАТО']
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.telegram-icon {
	margin-top: auto;
	align-self: center;
	width: 30px;
	height: 30px;
	cursor: pointer;
}
.map-container {
	width: 760px;
	height: 470px;
	background-color: rgba(245, 245, 245, 1);
	border-radius: 5px;
}
.contact-info-dialog {
	display: inline-flex;
	flex-direction: column;
	gap: 20px;

	&__title {
		height: 50px;
		font-size: 24px;
		line-height: 26.4px;
		display: inline-flex;
		align-items: center;
	}

	&__body {
		display: inline-flex;
		gap: 20px;
	}
}

.info-blocks {
	display: inline-flex;
	flex-direction: column;
	gap: 10px;

	&__block {
		width: 360px;
		box-sizing: border-box;
		background-color: rgba(245, 245, 245, 1);
		border-radius: 5px;
		padding: 10px;
		display: inline-flex;
		flex-direction: column;
	}
	&__block_num-1 {
		gap: 5px;
	}
	&__block_num-2 {
		gap: 10px;
	}
}

.info-block__line {
	height: 20px;
	display: inline-flex;
	align-items: center;
	font-size: 16px;
	line-height: 17.6px;
	color: rgba(16, 16, 16, 1);
	&_grey {
		color: rgba(144, 144, 144, 1);
	}
}

.info-block-group {
	display: inline-flex;
	flex-direction: column;
	gap: 5px;

	&__item {
		display: inline-flex;
		justify-content: space-between;
	}
}
</style>