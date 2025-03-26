<script setup>
import {defineProps} from 'vue';

defineProps({
  title: String,
  disabled: Boolean,
})
</script>

<template>
  <button
    :class="['button', {'disabled' : disabled}]"
    :disabled="disabled"
  >{{title}}</button>
</template>

<style scoped>
.button {
  padding: 10px;
  background-color: brown;
  color: white;
  border: none;
  cursor: pointer;
}

.disabled {
  background-color: grey;
  cursor: auto;
}
</style>
