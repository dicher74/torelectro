<template>
	<div class="vacansion-description">
		<div 
			v-for="(block, blockNum) in blockList" :key="`block_num-${blockNum}`" 
			v-html="block"
			@click="check(block)"
			class="vacansion-description__block"> 
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			blockList: [
				`<span style='color: #FF3D00;'>Профессиональная команда</span>,
				обеспечивающая цикл производства,
				сначала и до самого конца`,

				`<span style='color: #FF3D00;'>Грамотная подготовка</span>, предоставляющая
				понятное введение в должность `,

				`<span style='color: #FF3D00;'>Понятная работа</span>, с официальным
				трудоустройством и всеми социальными, 
				корпоративными гарантиями`,

				`<span style='color: #FF3D00;'>Карьерная лестница</span>, c понятным ростом 
				и необходимыми корпоративными, 
				производственными обязанностями`
			]
		}
	},
	methods: {
		check(block) {
			console.log(block)
		}
	}
}
</script>

<style lang="scss" scoped>
.vacansion-description {
	display: inline-flex;
	flex-direction: column;
	gap: 10px;
	width: 360px;
	align-items: stretch;

	&__block {
		white-space: pre-line;
		background-color: rgba(245, 245, 245, 1);
		border-radius: 5px;
		padding: 10px;
		font-size: 16px;
		line-height: 17.6px;
	} 
}
</style>