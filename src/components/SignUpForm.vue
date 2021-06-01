<template>
  <form action="">
    <label for="">Email</label>
    <input type="text" />
  </form>
</template>

<script>
export default {};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background-color: #fff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
	box-sizing: border-box;
	border:none;
	border-bottom: 1px solid #ddd;
	color: #555;
}
</style>