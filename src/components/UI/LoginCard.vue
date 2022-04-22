<template>
  <div class="login-card">
    <p class="title" v-if="card1 || card2">Login as</p>
    <div class="user-profiles">
      <div class="profile" v-if="card1">
        <button class="close" @click="removeCard(card1)">
          <img src="@/assets/img/close.svg" alt="" />
        </button>
        <img src="@/assets/img/profile1.svg" alt="" />
        <p class="username">John Peter</p>
        <p class="last-activity">Active 1 days ago</p>
      </div>
      <div class="profile" v-if="card2">
        <button class="close" @click="removeCard(card2)">
          <img src="@/assets/img/close.svg" alt="" />
        </button>
        <img src="@/assets/img/profile2.svg" alt="" />
        <p class="username">Alina shmen</p>
        <p class="last-activity">Active 4 days ago</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const card1 = ref(true);
    const card2 = ref(true);

    const removeCard = (target) => {
      if (target == card1.value) {
        card1.value = false
      }
      else {
        card2.value = false
      }
    };

    return {
      card1,
      card2,
      removeCard,
    };
  },
};
</script>

<style lang="scss" scoped>
.login-card {
  width: 321px;
  height: 214px;
  margin-top: 95px;
  .title {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 26px;
  }
  .user-profiles {
    display: flex;
    flex-direction: row;
    gap: 31px;
    .profile {
      padding: 10px auto;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 145px;
      height: 164px;
      background: #eff8ff;
      border-radius: 9px; 
      cursor: pointer;
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
        background: none;
        border: none;
        cursor: pointer;
      }
      .username {
        margin-top: 7px;
        font-size: 15px;
        font-weight: 500;
        line-height: 23px;
      }
      .last-activity {
        font-size: 13px;
        font-weight: 300;
        line-height: 20px;
        color: #adadad;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .login-card {
    display: none;
    .user-profiles {
    }
  }
}
@media screen and (max-width: 768px) {
  .login-card {
    display: none;
  }
}
</style>