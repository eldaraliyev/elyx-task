<template>
  <div class="main-title">
    <div class="left-section">
      <p class="title">{{signUp ?'Sign up' : 'Sign in'}} to</p>
      <p class="subtitle">Lorem Ipsum is simply</p>
      <p class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
    </div>
    <div class="right-section">
      <img src="../assets/img/main.png" alt="" />
    </div>
  </div>
</template>
<script>
import {signUp} from '../api'
export default {
  setup() {
    return {signUp};
  },
};
</script>

<style lang="scss" scoped>
.main-title {
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  position: relative;
  .left-section {
    padding-top: 150px;
    margin-right: -40px;
  }
  .right-section img {
    margin-top: 25px;
    margin-right: -12px;
  }
  .title {
    font-size: 34px;
    font-weight: 600;
    line-height: 51px;
  }
  .subtitle {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
  }
  .description {
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;
    margin-top: 22px;
  }
}
@media screen and (max-width: 1024px) {
  .left-section {
    padding-right: 30vw;

  }
  .right-section img {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .main-title {
    display: none;
  }
}
</style>