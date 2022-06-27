<template>
  <button class="button" :class="[getColor]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
  /**
   * 色
   */
  color?: "basic" | "primary" | "error";
}
const props = withDefaults(defineProps<Props>(), {
  color: "basic",
});

interface Emits {
  /**
   * クリックイベント
   */
  (e: "click"): void;
}
const emit = defineEmits<Emits>();
const handleClick = () => {
  emit("click");
};

const getColor = computed<string>(() => `button__color--${props.color}`);
</script>

<style lang="scss" scoped>
.button {
  height: 30px;
  padding: 0 16px;
  cursor: pointer;

  &__color {
    &--basic {
      background-color: $color__primary-light;
      border-color: $color__primary-light;
      color: $color__primary;
    }
    &--primary {
      background-color: $color__primary;
      border-color: $color__primary;
      color: $color__white;
    }
    &--error {
      background-color: $color__error;
      border-color: $color__error;
      color: $color__white;
    }
  }
}
</style>
