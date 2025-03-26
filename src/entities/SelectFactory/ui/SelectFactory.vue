<script setup>
import {computed, defineProps} from 'vue';
import MySelect from '@/shared/ui/MySelect.vue'
import {useFactoryStores} from "@/entities/SelectFactory/model/factoryStore.js";

const props = defineProps({
  cityId: Number,
});

const store = useFactoryStores();

const defaultValue = 'Выберите цех';
const select = computed(() => store.selectFactory);
const options = computed(() => store.availableFactories(props.cityId));

const changeSelect = (item) => store.changeFactory(item);
</script>

<template>
  <MySelect
    :model-value="select"
    :default-value="defaultValue"
    :options="options"
    @update:model-value="changeSelect"
  />
</template>
