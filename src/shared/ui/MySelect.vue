<script setup>
import {defineProps} from 'vue';

defineProps({
  value: String,
  defaultValue: String,
  options: Array,
});
</script>

<template>
  <select :value="value">
    <option disabled value="">{{defaultValue}}</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >{{option.name}}</option>
  </select>
</template>
