<script setup>
import {computed, defineProps} from 'vue';
import MySelect from '@/shared/ui/MySelect.vue'
import {useEmployeeStory} from "@/entities/SelectEmployee/model/employeeStore.js";

const props = defineProps({
  factoryId: Number,
});

const store = useEmployeeStory();

const defaultValue = 'Выберите сотрудника';
const select = computed(() => store.selectEmployee);
const options = computed(() => store.availableEmployee(props.factoryId));

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
