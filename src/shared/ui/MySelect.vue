<script setup>
import {defineProps, ref} from 'vue';

const props = defineProps({
  modelValue: String,
  defaultValue: String,
  options: Array,
});
const emit = defineEmits(['update:modelValue']);

const selectItem = ref(props.modelValue ?? "" );
const setSelectItem = () => {
  const item = props.options.find((itm) => itm.name === selectItem.value);
  emit('update:modelValue', item);
}
</script>

<template>
  <select
    class="select"
    :value="selectItem"
    v-model="selectItem"
    @change="setSelectItem"
  >
    <option disabled value="">{{defaultValue}}</option>
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.name"
    >{{option.name}}</option>
  </select>
</template>

<style scoped>
.select {
  width: 100%;
  padding: 15px 8px;
}
</style>
