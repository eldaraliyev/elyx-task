<template>
  <div class="input-field">
    <label for="data"
      ><p>{{ label }}</p></label
    >
    <input
      :type="inputType"
      id="data"
      :placeholder="text"
      @input="updateValue"
    />
  </div>
</template>

<script>
import { toRef } from "vue";

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
  },
  setup(props, context) {
    const text = toRef(props, "placeholder");
    const inputType = toRef(props, "type");

    const updateValue = (event) => {
      context.emit("update:modelValue", event.target.value);
    };

    return { text, inputType, updateValue };
  },
};
</script>

<style lang="scss" scoped>
.input-field {
  width: 100%;
  label p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 13px;
  }
  input {
    width: 100%;
    height: 57px;
    border: 1px solid $input-border;
    border-radius: 9px;
    padding-left: 25px;

    &:focus {
      outline: none;
      border: 1px solid $main-color;
    }
  }
}
@media screen and (max-width: 768px) {
  .input-field {
    label p {
      font-size: 14px;
      line-height: 21px;
    }
    input {
      padding-left: 8px;
    }
  }
}
</style>