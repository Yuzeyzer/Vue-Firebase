const app = Vue.createApp({
	data() {
		return {
			title: 'Баястан сегодня устала',
			reason: 'Дети, зубы и муж'
		}
	},
	methods: {
		nigara() {
			alert('Привет Всем')
		}
	}
})


app.mount('#root')