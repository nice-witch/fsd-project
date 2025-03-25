<script setup>
import {computed} from 'vue';
import MySelect from '@/shared/ui/MySelect.vue'
import {useEmployeeStory} from "@/entities/SelectEmployee/model/employeeStore.js";

const store = useEmployeeStory();

const defaultValue = 'Выберите сотрудника';
const select = computed(() => store.selectEmployee);
const options = store.employee;

const changeSelect = (item) => store.changeEmployee(item);
</script>

<template>
  <MySelect
    :model-value="select"
    :default-value="defaultValue"
    :options="options"
    @update:model-value="changeSelect"
  />
</template>
