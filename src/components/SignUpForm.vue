<template>
  <form action="">
    <label for="">Email:</label>
    <input type="email" required v-model="email" />
    <label for="">Password:</label>
    <input type="password" required v-model="password" />
    <label for="">Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
		<div class="terms">
			<input type="checkbox" required v-model="terms">
			<label for="">Accept terms and conditions</label>
		</div>
		<div>
			<input type="checkbox" value="Сейтек" v-model="names">
			<label for="">Сейтек</label>
		</div>
			<div>
			<input type="checkbox" value="Бекжан" v-model="names">
			<label for="">Бекжан</label>
		</div>
			<div>
			<input type="checkbox" value="Аки" v-model="names">
			<label for="">Аки</label>
		</div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
	<p>Terms: {{ terms }}</p>
	<p>Names: {{ names }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
			terms: false,
			names: []
    };
  },
};
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
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
	position: relative;
	top: 2px;
	display: inline-block;
	width: 16px;
	margin: 0 10px 0 0;
}
</style>