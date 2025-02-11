<template>
  <div>
    <div class="welcome-container">
      <img src="@/assets/img/logo.png" alt="Logo" class="logo" />
      <h1>Wilkommen bei der Space University!</h1>
      <p>Deine Reise zu den Sternen beginnt hier. Bitte logge dich ein oder registriere dich, um fortzufahren.</p>
    </div>
    <div class="login-container">
      <h2>Login</h2>
      <br/>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">E-Mail:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Passwort:</label>
          <input type="password" v-model="password" required />
        </div>
        <div class="form-group">
            <a href="#" style="color: blue; font-size: 12px;">Passwort vergessen?</a>
        </div>
        <button type="submit" style="margin-right: 10px; margin-bottom: 10px;">Login</button>
        <button type="button" @click="showRegisterPopup = true">Registrieren</button>
      </form>
      <RegisterPopup v-if="showRegisterPopup" @close="showRegisterPopup = false" />
    </div>
  </div>
</template>

<script>
import RegisterPopup from './RegisterPopup.vue';

export default {
  name: 'Login',
  components: {
    RegisterPopup
  },
  data() {
    return {
      email: '',
      password: '',
      showRegisterPopup: false
    };
  },
  methods: {
    handleLogin() {
      // Handle login logic here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
};
</script>

<style scoped>
.welcome-container {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid grey;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
