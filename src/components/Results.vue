<template>
	<p>Reaction time: {{score}} ms</p>
	<p class="rank">{{rank}}</p>
</template>

<script>
export default {
	name:'Results',
	props: ['score'],
	data() {
		return {
			rank: null
		}
	},
	mounted() {
		if (this.score < 250 && this.score >= 0) {
			this.rank = 'Молниеносная Реакция'
		}
		if (this.score < 450 && this.score >= 250) {
			this.rank = 'Шустрые пальцы, качаешься?'
		}
		if (this.score < 650 && this.score >= 450) {
			this.rank = 'Неплохо, но, можно лучше'
		}
	}
}
</script>

<style>

.rank {
	font-size: 1.4em;
	color: #0faf87;
	font-weight: 700;
}

</style>