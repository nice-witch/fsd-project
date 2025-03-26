<script setup>
import {computed} from "vue";
import { useRouter } from 'vue-router';
import {SelectCity} from "@/entities/SelectCity/index.js";
import {SelectFactory} from "@/entities/SelectFactory/index.js";
import {SelectEmployee} from "@/entities/SelectEmployee/index.js";
import {SelectGang} from "@/entities/SelectGang/index.js";
import {SelectTeam} from "@/entities/SelectTeam/index.js";
import MyButton from "@/shared/ui/MyButton.vue";

import { useCityStory } from "@/entities/SelectCity/model/cityStore.js";
import {useFactoryStores} from "@/entities/SelectFactory/model/factoryStore.js";
import {useEmployeeStory} from "@/entities/SelectEmployee/model/employeeStore.js";
import {useGangStory} from "@/entities/SelectGang/model/gangStore.js";
import {useTeamStory} from "@/entities/SelectTeam/model/teamStore.js";

const cityStore = useCityStory();
const selectedCity = computed(() => cityStore.selectCity);
const factoryStore = useFactoryStores();
const selectedFactory = computed(() => factoryStore.selectFactory);
const employeeStore = useEmployeeStory();
const selectedEmployee = computed(() => employeeStore.selectEmployee);
const gangStore = useGangStory();
const selectedGang = computed(() => gangStore.selectGang);
const teamStore = useTeamStory();
const selectedTeam = computed(() => teamStore.selectTeam);
const router = useRouter()

const handleSubmitButton = (e) => {
  e.preventDefault();
  const formData = [
    {...selectedCity.value},
    {...selectedFactory.value},
    {...selectedEmployee.value},
    {...selectedGang.value},
    {...selectedTeam.value},
  ];

  localStorage.setItem('formData', JSON.stringify(formData));
  router.push("/result")
}

const isDisabledButton = computed(() => !selectedCity.value || !selectedFactory.value || !selectedEmployee.value || !selectedGang.value || !selectedTeam.value);
</script>

<template>
  <form class="form">
    <SelectCity />
    <SelectFactory :cityId="selectedCity?.id"/>
    <SelectEmployee :factoryId="selectedFactory?.id"/>
    <SelectGang />
    <SelectTeam />
    <MyButton
      title="Сохранить "
      :disabled="isDisabledButton"
      @click="handleSubmitButton"
    />
  </form>
</template>

<style scoped>
.form {
  margin-top: 50px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
