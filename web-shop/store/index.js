import { createStore } from 'vuex'

export const store = createStore({
	mutations: {
		changeDialogMode(state, payload) {
			state.dialogList = payload.mode
			console.log(state.dialogMode)
			if (payload.mode.includes('product')) {
				state.currentProduct = payload.card
				console.log(state.currentProduct.id)
				state.currentVariety = Object.keys(payload.card.varieties)[0]
			}
		},
		closeDialog(state) {
			state.dialogList = []
		},
		showNextCard(state) {
			const cards = state.productCards.filter((elem) => elem.category === state.filter)
			const currentId = state.currentProduct.id
			console.log(currentId)
			let index = 0
			for (const product of cards) {
				index++;
				if (product.id == currentId) {
					break;
				}
			}
			if (index >= cards.length) {
				index = 0
			}
			console.log(index)
			state.currentProduct = cards[index]
			state.currentVariety = Object.keys(state.currentProduct.varieties)[0]
		},
		changeVariety(state, key) {
			state.currentVariety = key
		},
		setFilter(state, payload) {
			if (!payload.select) {
				state.filter = null
			}
			else {
				state.filter = payload.filterName
			}
		},
		scrollToTop() {
			const animation = setInterval(() => {
				if (window.scrollY <= 0) {
					console.log('clear animation')
					clearInterval(animation)
				}
				window.scrollTo(0, window.scrollY - 60)
			}, 15)
		},
		scrollToElem(state, id) {
			console.log('scroll start', id)
			const scrollAnimation = setInterval(
				() => {
					const diff = document.getElementById(id).getBoundingClientRect().top
					console.log(document.getElementById(id))
					console.log(document.getElementById(id).getBoundingClientRect())
					console.log('diff: ', diff)
					if (Math.abs(diff) < 200) {
						console.log('clear animation!')
						clearInterval(scrollAnimation)
					}
					let scrollDiff
					if (diff < 0) {
						scrollDiff = -60
					}
					else {
						scrollDiff = 60
					}
					window.scrollTo(0, window.scrollY + scrollDiff)
				}
			)
		}
	},
	actions: {
	},
	state() {
		return {
			dialogList: [],
			currentProduct: null,
			currentVariety: null,
			filter: 'У-ПВС',
			productCards: [
				{
					id: 1,
					category: 'У-ПВС',
					grounding: false,
					protection: 'IP44',
					amount: 1,
					length: [10, 50],
					title: 'Удлинители в бухте · без заземлен.',
					fullTitle: 'Удлинители в бухте · без заземления',
					options: [
						{name: 'сечение кабеля', value: '2х1,0 · 2х1,5 · 2х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 50 метров'},
						{name: 'защита кабеля', value: 'IP44 · крышка на розетке'}
					],
					description: 
						`Удлинители с кабелем медным (проводом) и виниловым изолированием,
						без заземления, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'2200 Вт': {id: [101, 105], radius: '2х1,0'},
						'3500 Вт': {id: [106, 110], radius: '2х1,5'},
						'4000 Вт': {id: [111, 115], radius: '2х1,0'},
					},
				},
				{
					id: 2,
					category: 'У-ПВС',
					grounding: true,
					length: [10, 50],
					protection: 'IP44',
					amount: 1,
					title: 'Удлинители в бухте · с заземлен.',
					fullTitle: 'Удлинители в бухте · с заземлением',
					options: [
						{name: 'сечение кабеля', value: '3х1,0 · 3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 50 метров'},
						{name: 'защита кабеля', value: 'IP44 · крышка в розетке'}
					],
					description: 
						`Удлинители с кабелем медным (проводом) и виниловым изолированием,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'2200 Вт': {id: [116, 120], radius: '3х1,0'},
						'3500 Вт': {id: [121, 125], radius: '3х1,5'},
						'4000 Вт': {id: [126, 130], radius: '3х2,5'},
					},
				},
				{
					id: 3,
					category: 'У-ПВС',
					grounding: false,
					length: [10, 50],
					protection: 'IP44',
					amount: 1,
					title: 'Удлинители на раме · без заземлен.',
					fullTitle: 'Удлинители на рамке · без заземления',
					options: [
						{name: 'сечение кабеля', value: '2х1,0 · 2х1,5 · 2х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 50 метров'},
						{name: 'защита кабеля', value: 'IP44 · крышка на розетке'}
					],
					description: 
						`Удлинители с изолированным кабелем медным на рамке для его намотки, 
						без заземления, со степенью защиты «IP44» (каучуковая розетка и крышка), 
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'2200 Вт': {id: [201, 205], radius: '2х1,0'},
						'3500 Вт': {id: [206, 210], radius: '2х1,5'},
						'4000 Вт': {id: [211, 215], radius: '2х2,5'},
					},
				},
				{
					id: 4,
					category: 'У-ПВС',
					grounding: true,
					length: [10, 50],
					protection: 'IP44',
					amount: 1,
					title: 'Удлинители на рамке · с заземлен.',
					fullTitle: 'Удлинители на рамке · с заземлением',
					options: [
						{name: 'сечение кабеля', value: '3х1,0 · 3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 50 метров'},
						{name: 'защита кабеля', value: 'IP44 · крышка в розетке'}
					],
					description: 
						`Удлинители с изолированным кабелем медным на рамке для его намотки,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'2200 Вт': {id: [116, 120], radius: '3х1,0'},
						'3500 Вт': {id: [121, 125], radius: '3х1,5'},
						'4000 Вт': {id: [126, 130], radius: '3х2,5'},
					},
				},
				{
					id: 5,
					category: 'У-ПВС',
					grounding: false,
					title: 'Удлинители на катушке · без заземл.',
					fullTitle: 'Удлинители на катушке · без заземления',
					length: [20, 50],
					protection: 'IP44',
					amount: 1,
					options: [
						{name: 'сечение кабеля', value: '2х1,0 · 2х1,5 · 2х2,5'},
						{name: 'длина кабеля', value: 'от 20 до 50 метров'},
						{name: 'защита кабеля', value: 'IP44 · крышка на розетке'}
					],
					description: 
						`Удлинители с кабелем медным (проводом) и виниловым изолированием, 
						на садовой пластиковой катушке и удобным местом наматывания, 
						без заземления, со степенью защиты «IP44» (каучуковая розетка и крышка), 
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'2200 Вт': {id: [301, 304], radius: '2х1,0'},
						'3500 Вт': {id: [305, 308], radius: '2х1,5'},
						'4000 Вт': {id: [309, 312], radius: '2х2,5'},
					},
					qualityTag: 'выбор настоящих профессионалов',
				},
				{
					id: 6,
					category: 'У-ПВС',
					grounding: true,
					length: [20, 50],
					protection: 'IP44',
					amount: 1,
					title: 'Удлинители на катушке · с заземлен.',
					fullTitle: 'Удлинители на катушке · с заземлением',
					options: [
						{name: 'сечение кабеля', value: '3х1,0 · 3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 20 до 50 метров'},
						{name: 'защита кабеля', value: 'IP44 · крышка на розетке'}
					],
					description: 
						`Удлинители с кабелем медным (проводом) и виниловым изолированием, 
						на садовой пластиковой катушке и удобным местом наматывания, 
						без заземления, со степенью защиты «IP44» (каучуковая розетка и крышка), 
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'2200 Вт': {id: [313, 316], radius: '3х1,0'},
						'3500 Вт': {id: [317, 320], radius: '3х1,5'},
						'4000 Вт': {id: [321, 324], radius: '3х2,5'},
					},
					qualityTag: 'выбор настоящих профессионалов'
				},
				{
					id: 7,
					category: 'У-ПВС',
					grounding: false,
					length: [20, 50],
					protection: 'IP20',
					amount: 4,
					title: 'Удлинители на катушке · без заземл.',
					fullTitle: 'Удлинители на катушке · без заземления',
					options: [
						{name: 'сечение кабеля', value: '2х1,0 · 2х1,5 · 2х2,5'},
						{name: 'длина кабеля', value: 'от 20 до 50 метров'},
						{name: 'защита кабеля', value: 'P20 · твердая защита'}
					],
					description: 
						`Удлинители с кабелем медным (проводом) и виниловым изолированием, 
						на садовой пластиковой катушке и удобным местом наматывания, 
						без заземления, со степенью стандартной защиты «IP20» (не менее 12.5 мм), 
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'2200 Вт': {id: [401, 404], radius: '2х1,0'},
						'3500 Вт': {id: [405, 408], radius: '2х1,5'},
						'4000 Вт': {id: [409, 412], radius: '2х2,5'},
					},
					qualityTag: 'выбор настоящих профессионалов'
				},
				{
					id: 8,
					category: 'У-ПВС',
					grounding: true,
					length: [20, 50],
					protection: 'IP20',
					amount: 4,
					title: 'Удлинители на катушке · с заземлен.',
					fullTitle: 'Удлинители на катушке · с заземлением',
					options: [
						{name: 'сечение кабеля', value: '3х1,0 · 3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 20 до 50 метров'},
						{name: 'защита кабеля', value: 'IP20 · защита от мусора'}
					],
					description: 
						`Удлинители с кабелем медным (проводом) и виниловым изолированием, 
						на садовой пластиковой катушке и удобным местом наматывания, 
						с заземлением, со степенью стандартной защиты «IP20» (не менее 12.5 мм), 
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'2200 Вт': {id: [413, 416], radius: '3х1,0'},
						'3500 Вт': {id: [417, 420], radius: '3х1,5'},
						'4000 Вт': {id: [421, 424], radius: '3х2,5'},
					},
					qualityTag: 'выбор настоящих профессионалов'
				},
				{
					id: 9,
					category: 'У-ПВС',
					grounding: false,
					length: [20, 50],
					protection: 'IP20',
					amount: 4,
					title: 'Удлинители на катушке · без заземл.',
					fullTitle: 'Удлинители на катушке · без заземления',
					options: [
						{name: 'сечение кабеля', value: '2х1,0 · 2х1,5 · 2х2,5'},
						{name: 'длина кабеля', value: 'от 20 до 50 метров'},
						{name: 'защита кабеля', value: 'IP44 · крышка на розетке'}
					],
					description: 
						`Удлинители с кабелем медным (проводом) и виниловым изолированием,
						на садовой пластиковой катушке и удобным местом наматывания,
						с заземлением, со степенью стандартной защиты «IP20» (защита от мусора),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'2200 Вт': {id: [401, 404], radius: '2х1,0'},
						'3500 Вт': {id: [405, 408], radius: '2х1,5'},
						'4000 Вт': {id: [409, 412], radius: '2х2,5'},
					},
					qualityTag: 'выбор настоящих профессионалов'
				},
				{
					id: 10,
					category: 'У-ПВС',
					grounding: true,
					length: [20, 50],
					protection: 'IP44',
					amount: 4,
					title: 'Удлинители на катушке · с заземлен.',
					fullTitle: 'Удлинители на катушке · с заземлением',
					options: [
						{name: 'сечение кабеля', value: '3х1,0 · 3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 20 до 50 метров'},
						{name: 'защита кабеля', value: 'IP44 · крышка на розетке'}
					],
					description: 
						`Удлинители с кабелем медным (проводом) и виниловым изолированием,
						на металлической катушке с держателями и удобным местом наматывания,
						с заземлением, со степенью защиты «IP44» (защита от влаги и пыли),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'2200 Вт': {id: [401, 404], radius: '3х1,0'},
						'3500 Вт': {id: [401, 404], radius: '3х1,5'},
						'4000 Вт': {id: [401, 404], radius: '3х2,5'},
					},
					qualityTag: 'выбор настоящих профессионалов'
				},
				{
					id: 11,
					category: 'У-КГ',
					grounding: true,
					protection: 'IP44',
					length: [10, 50],
					amount: 1,
					title: 'Удлинители силовые в бухте',
					fullTitle: 'Удлинители силовые в бухте',
					options: [
						{name: 'сечение кабеля', value: '3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 50 метров'},
						{name: 'защита кабеля', value: 'с заземлением'}
					],
					description: 
						`Удлинители силовые с кабелем гибким и холодостойким, в бухте,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'3500 Вт': {id: [501, 505], radius: '3х1,5'},
						'4000 Вт': {id: [506, 510], radius: '3х2,5'},
					},
					tags: ['от +40°C до -60°C'],
				},
				{
					id: 12,
					category: 'У-КГ',
					grounding: true,
					protection: 'IP44',
					length: [10, 50],
					amount: 3,
					title: 'Удлинители силовые на колодке',
					fullTitle: 'Удлинители силовые на колодке',
					options: [
						{name: 'сечение кабеля', value: '3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 50 метров'},
						{name: 'защита кабеля', value: 'с заземлением'}
					],
					description: 
						`Удлинители силовые с кабелем гибким и холодостойким, на колодке,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'3500 Вт': {id: [511, 515], radius: '3х1,5'},
						'4000 Вт': {id: [516, 520], radius: '3х2,5'},
					},
					tags: ['от +40°C до -60°C'],
				},
				{
					id: 13,
					category: 'У-КГ',
					title: 'Удлинители силовые на колодке',
					fullTitle: 'Удлинители силовые на колодке',
					grounding: true,
					protection: "IP44",
					length: [10, 20],
					amount: 1,
					options: [
						{name: 'сечение кабеля', value: '3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 20 метров'},
						{name: 'защита кабеля', value: 'с заземлением'}
					],
					description: 
						`Удлинители силовые с кабелем гибким и холодостойким, по «ЭКО»,
						на пластиковой рамке и удобным местом и функционалом намотки,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'3500 Вт': {id: [531, 534], radius: '3х1,5'}
					},
					tags: ['от +40°C до -60°C'],
					qualityTag: 'выбор сильных специалистов',
				},
				{
					id: 14,
					category: 'У-КГ',
					grounding: true,
					protection: "IP44",
					length: [20, 50],
					amount: 4,
					title: 'Удлинители силовые на катушке',
					fullTitle: 'Удлинители силовые на катушке',
					options: [
						{name: 'сечение кабеля', value: '3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 20 до 50 метров'},
						{name: 'защита кабеля', value: 'с заземлением'}
					],
					description: 
						`Удлинители силовые с кабелем гибким и холодостойким, по «ЭКО»,
						на пластиковой катушке с держателями и удобным местом наматывания,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'3500 Вт': {id: [535, 538], radius: '3х1,5'},
						'4000 Вт': {id: [539, 542], radius: '3х2,5'},
					},
					tags: ['от +40°C до -60°C'],
					qualityTag: 'выбор сильных специалистов',
				},
				{
					id: 15,
					category: 'У-КГ',
					grounding: true,
					protection: "IP44",
					length: [20, 50],
					amount: 4,
					title: 'Удлинители силовые на катушке',
					fullTitle: 'Удлинители силовые на металлической катушке',
					options: [
						{name: 'сечение кабеля', value: '3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 20 до 50 метров'},
						{name: 'защита кабеля', value: 'с заземлением'}
					],
					description: 
						`Удлинители силовые с кабелем гибким и холодостойким, по «ЭКО»,
						на пластиковой катушке с держателями и удобным местом наматывания,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'3500 Вт': {id: [535, 538], radius: "3х1,5"},
						'4000 Вт': {id: [539, 542], radius: "3х2,5"},
					},
					tags: ['от +40°C до -60°C'],
					qualityTag: 'выбор сильных специалистов',
				},
				{
					id: 16,
					category: 'У-КГ',
					grounding: true,
					protection: "IP44",
					length: [10, 50],
					amount: 1,
					title: 'Удлинители силовые в бухте',
					fullTitle: 'Удлинители силовые в бухте',
					options: [
						{name: 'сечение кабеля', value: '3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 50 метров'},
						{name: 'защита кабеля', value: 'с заземлением'}
					],
					description: 
						`Удлинители силовые с кабелем гибким и холодостойким, в бухте,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'3500 Вт': {id: [601, 605], radius: '3х1,5'},
						'4000 Вт': {id: [606, 610], radius: '3х2,5'},
					},
					tags: ['ГОСТ', 'от +40°C до -60°C'],
				},
				{
					id: 17,
					category: 'У-КГ',
					grounding: true,
					protection: "IP44",
					length: [10, 50],
					amount: 3,
					title: 'Удлинители силовые на колодке',
					fullTitle: 'Удлинители силовые на колодке',
					options: [
						{name: 'сечение кабеля', value: '3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 50 метров'},
						{name: 'защита кабеля', value: 'с заземлением'}
					],
					description: 
						`Удлинители силовые с кабелем гибким и холодостойким, на колодке,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'3500 Вт': {id: [611, 615], radius: '3х1,5'},
						'4000 Вт': {id: [616, 620], radius: '3х2,5'},
					},
					tags: ['ГОСТ', 'от +40°C до -60°C'],
				},
				{
					id: 18,
					category: 'У-КГ',
					grounding: true,
					protection: "IP44",
					length: [10, 20],
					amount: 1,
					title: 'Удлинители силовые на колодке',
					fullTitle: 'Удлинители силовые на колодке',
					options: [
						{name: 'сечение кабеля', value: '3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 10 до 20 метров'},
						{name: 'защита кабеля', value: 'с заземлением'}
					],
					description: 
						`Удлинители силовые с кабелем гибким и холодостойким, по «ГОСТ»,
						на пластиковой рамке и удобным местом и функционалом намотки,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'3500 Вт': {id: [631, 632], radius: '3х1,5'},
						'4000 Вт': {id: [633, 634], radius: '3х2,5'},
					},
					tags: ['ГОСТ', 'от +40°C до -60°C'],
					qualityTag: 'выбор сильных специалистов',
				},
				{
					id: 19,
					category: 'У-КГ',
					grounding: true,
					protection: "IP44",
					length: [20, 50],
					amount: 4,
					title: 'Удлинители силовые на катушке',
					fullTitle: 'Удлинители силовые на пластиковой катушке',
					options: [
						{name: 'сечение кабеля', value: '3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 20 до 50 метров'},
						{name: 'защита кабеля', value: 'с заземлением'}
					],
					description: 
						`Удлинители силовые с кабелем гибким и холодостойким, по «ГОСТ»,
						на пластиковой катушке с держателями и удобным местом наматывания,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'3500 Вт': {id: [635, 638], radius: '3х1,5'},
						'4000 Вт': {id: [639, 642], radius: '3х2,5'},
					},
					tags: ['ГОСТ', 'от +40°C до -60°C'],
					qualityTag: 'выбор сильных специалистов',
				},
				{
					id: 20,
					category: 'У-КГ',
					grounding: true,
					protection: "IP44",
					length: [20, 50],
					amount: 4,
					title: 'Удлинители силовые на катушке',
					fullTitle: 'Удлинители силовые на металлической катушке',
					options: [
						{name: 'сечение кабеля', value: '3х1,5 · 3х2,5'},
						{name: 'длина кабеля', value: 'от 20 до 50 метров'},
						{name: 'защита кабеля', value: 'с заземлением'}
					],
					description: 
						`Удлинители силовые с кабелем гибким и холодостойким, по «ГОСТ»,
						на металлической катушке с держателями и удобным местом наматывания,
						с заземлением, со степенью защиты «IP44» (каучуковая розетка и крышка),
						с европейской вилкой «16А», с поддержанием напряжения сети в «220В»`,
					varieties: {
						'3500 Вт': {id: [635, 638], radius: '3х1,5'},
						'4000 Вт': {id: [639, 642], radius: '3х2,5'},
					},
					tags: ['ГОСТ', 'от +40°C до -60°C'],
					qualityTag: 'выбор сильных специалистов',
				},
			]
		}
	},
})
