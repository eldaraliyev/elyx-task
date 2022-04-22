<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>

<script>
import { toRef } from "@vue/reactivity";
export default {
  props: {
    class: {
      type: String,
      required: false,
      default: "main",
    },
  },
  setup(props) {
    const className = toRef(props, "class");
    return {
      className,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  flex: 2 1 auto;
  align-items: center;
  border: none;
  padding: 12px 15px;
  width: max-content;
  border-radius: 10px;
  height: 55px;
  cursor: pointer;
}
.google {
  background: #e9f1ff;
  color: #4285f4;
  display: flex;
  gap: 21px;
  padding: 32px auto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
    gap: 12px;
   }

}

.main {
  background: $btn-color;
  width: 15%;
  max-width: 60px;
}
.sign-in {
  width: 100%;
  background: $main-color;
  color: white;
  margin-top: 50px;

  box-shadow: $button-shadow;
}
</style>