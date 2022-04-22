<template>
  <main>
    <div class="background"></div>
    <p class="logo">Your Logo</p>
    <main-title></main-title>
    <login-card></login-card>
    <login-form></login-form>
  </main>
</template>
<script>
import LoginForm from "./components/Form/LoginForm.vue";
import MainTitle from "./components/MainTitle.vue";
import LoginCard from "./components/UI/LoginCard.vue";
export default {
  components: { LoginForm, MainTitle, LoginCard },
  name: "App",
};
</script>
<style lang="scss">
body {
  width: 100%;
}
main {
  width: 90%;
  margin: auto;

  .logo {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    position: absolute;
    top: 30px;
    left: 42px;
    color: white;
  }
  .background {
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    height: 458px;
    background: $main-color;
  }
}
@media screen and (max-width: 768px) {
  main {
   
    .background {
      height: 100vh;
    }
  }
}
</style>

