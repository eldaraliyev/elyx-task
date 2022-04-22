<template>
  <div class="form">
    <header>
      <p class="welcome">Welcome to <span>LOREM</span></p>
      <div class="account-switcher">
        <p>
          {{ signUp ? "Have an Account?" : "No Account?" }}
        </p>
        <span @click="changeMethod">{{ signUp ? "Sign In" : "Sign Up" }}</span>
      </div>
    </header>
    <p class="title">{{ signUp ? "Sign up" : "Sign in" }}</p>
    <div class="socials" v-if="!signUp">
      <app-button className="google">
        <img src="@/assets/img/google.png" alt="google" /> Sign in with Google
      </app-button>
      <app-button
        ><img src="@/assets/img/facebook.png" alt="facebook"
      /></app-button>
      <app-button><img src="@/assets/img/apple.png" alt="apple" /></app-button>
    </div>
    <input-field
      class="login"
      label="Enter your username or email address"
      type="email"
      placeholder="Username or email address"
      v-model="loginData"
    ></input-field>
    <div class="new-user" v-if="signUp">
      <input-field
        label="User name"
        placeholder="User Name"
        v-model="username"
      ></input-field>
      <input-field
        label="Contact Number"
        placeholder="Contact Number"
        v-model="phoneNumber"
      ></input-field>
    </div>
    <input-field
      class="password"
      label="Enter your Password"
      type="password"
      placeholder="Password"
      v-model="passData"
    >
    </input-field>

    <p class="pass" v-show="!signUp">Forgot Password</p>
    <app-button
      class="sign-btn"
      v-if="!signUp"
      className="sign-in"
      @click="loginUser"
      >Sign In
    </app-button>
    <app-button
      class="sign-btn"
      v-else
      className="sign-in"
      @click="registerUser"
    >
      Sign Up
    </app-button>
  </div>
</template>

<script>
import AppButton from "../UI/AppButton.vue";
import InputField from "../UI/InputField.vue";
import { ref } from "vue";
import { register, login, signUp, changeMethod } from "../../api";
export default {
  components: { InputField, AppButton },
  setup() {
    const loginData = ref("");
    const passData = ref("");
    const phoneNumber = ref("");
    const username = ref("");

    const loginUser = () => {
      if (loginData.value && passData.value) {
        login();
      } else {
        alert("Please enter required fields");
      }
    };

    const registerUser = () => {
      if (
        loginData.value &&
        passData.value &&
        username.value &&
        phoneNumber.value
      ) {
        register();
      } else {
        alert("Please enter required fields");
      }
    };

    return {
      signUp,
      loginData,
      passData,
      username,
      phoneNumber,
      changeMethod,
      loginUser,
      registerUser,
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  min-width: 320px;
  width: 539px;
  height: 741px;
  height: 80%;
  box-shadow: $form-shadow;
  position: absolute;
  top: 79px;
  right: 118px;
  background: white;
  border-radius: 40px;
  padding: 44px 44px 79px;
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .welcome {
      font-size: 21px;
      font-weight: 600;
      line-height: 32px;
      gap: 150px;
      span {
        color: $main-color;
      }
    }
    .account-switcher {
      display: flex;
      flex-direction: column;
      justify-content: right;
      margin-top: 6px;

      font-size: 13px;
      font-weight: 400;
      line-height: 20px;

      span {
        color: $main-color;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
  .title {
    font-size: 55px;
    font-weight: 500;
    line-height: 83px;
    margin-top: -10px;
    margin-bottom: 44px;
  }
  .socials {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 13px;
    margin-bottom: 52px;
  }
  .new-user {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 20ppx;
    gap: 20px;
    margin-bottom: 33px;
  }
  .login {
    margin-bottom: 33px;
  }
  .pass {
    float: right;
    position: absolute;
    right: 44px;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    color: $main-color;
    margin-top: 12px;
  }
}
@media screen and (max-width: 768px) {
  .form {
    left: 0;
    right: 0;
    width: 90%;
    margin: auto;
    padding: 44px 26px 79px;
    header {
      .welcome {
        font-size: 16px;
      }
    }
    .title {
      font-size: 40px;
    }
    .pass {
      font-size: 11px;
    }
  }
}
</style>