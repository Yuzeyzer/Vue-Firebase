<template>
	<div class="backdrop">
		<div class="modal">
			<p>modal content</p>
		</div>
	</div>
</template>

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
</style>