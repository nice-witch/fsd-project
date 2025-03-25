<script setup>
import {computed} from 'vue';
import MySelect from '@/shared/ui/MySelect.vue'
import {useTeamStory} from "@/entities/SelectTeam/model/teamStore.js";

const store = useTeamStory();

const defaultValue = 'Выберите смену';
const select = computed(() => store.selectTeam);
const options = store.teams;

const changeSelect = (item) => store.changeTeam(item);
</script>

<template>
  <MySelect
    :model-value="select"
    :default-value="defaultValue"
    :options="options"
    @update:model-value="changeSelect"
  />
</template>
