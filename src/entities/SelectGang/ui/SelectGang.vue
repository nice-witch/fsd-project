<script setup>
import {computed} from 'vue';
import MySelect from '@/shared/ui/MySelect.vue'
import {useGangStory} from "@/entities/SelectGang/model/gangStore.js";

const store = useGangStory();

const defaultValue = 'Выберите бригаду';
const select = computed(() => store.selectGang);
const options = store.gangs;

const changeSelect = (item) => store.changeGang(item);
</script>

<template>
  <MySelect
    :model-value="select"
    :default-value="defaultValue"
    :options="options"
    @update:model-value="changeSelect"
  />
</template>
