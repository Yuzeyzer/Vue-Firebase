<template>
	<div class="backdrop">
		<div class="modal" :class="{sale: theme === 'sale'}">
			<h1>{{header}}</h1>
			<p>{{text}}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['header', 'text','theme']
}
</script>

<style>
	.modal {
		width: 400px;
		padding: 20px;
		margin: 100px auto;
		background-color: #fff;
		border-radius: 10px;
	}
	.backdrop {
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.5);
		width: 100%;
		height: 100%;
	}
	.modal h1 {
	  color: #03cfb4;
		border: none;
		padding: 0;
	}

	.modal.sale {
		background-color: crimson;
		color: white;
	}
	.modal.sale h1 {
		color: white;
	}
</style>