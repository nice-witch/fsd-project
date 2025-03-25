<script setup>
import {computed} from 'vue';
import MySelect from '@/shared/ui/MySelect.vue'
import {useCityStory} from "@/entities/SelectCity/model/cityStore.js";

const store = useCityStory();

const defaultValue = 'Выберите город';
const select = computed(() => store.selectCity);
const options = store.cities;

const changeSelect = (item) => store.changeCity(item);
</script>

<template>
  <MySelect
    :model-value="select"
    :default-value="defaultValue"
    :options="options"
    @update:model-value="changeSelect"
  />
</template>
