<template>
  <div class="popup-overlay" @click.self="$emit('close')">
    <div class="popup-container">
      <h2>Registrieren</h2>
      <br/>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="registerEmail">E-Mail:</label>
          <input type="email" v-model="registerEmail" required />
        </div>
        <div class="form-group">
          <label for="registerPassword">Passwort:</label>
          <input type="password" v-model="registerPassword" required />
        </div>
        <div class="form-group">
          <label for="registerPassword">Passwort wiederholen:</label>
          <input type="password" v-model="registerPassword" required />
        </div>
        <button type="submit" style="background-color: #090091;">Registrieren</button>
        <button type="button" style="background-color: #090091;" @click="$emit('close')">Schließen</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPopup',
  data() {
    return {
      registerEmail: '',
      registerPassword: ''
    };
  },
  methods: {
    handleRegister() {
      // Handle registration logic here
      console.log('Register Email:', this.registerEmail);
      console.log('Register Password:', this.registerPassword);
    }
  }
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-container {
  background: white;
  padding: 20px;
  border-radius: 4px;
  max-width: 400px;
  width: 100%;
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
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>
