import {defineStore} from 'pinia';
import {computed, ref} from 'vue'
import {useCityStory} from "@/entities/SelectCity/model/cityStore.js";

export const useFactoryStores = defineStore('factory', () => {
  // const cityStory = useCityStory();
  // const selectCity = computed(() => cityStory.selectCity);

  const selectFactory = ref();
  const factories = ref([
    {
      id: 1,
      name: 'кондитерский цех',
      cityId: 1,
    },
    {
      id: 2,
      name: 'сварочный цех',
      cityId: 1,
    },
    {
      id: 3,
      name: 'холодный цех',
      cityId: 3,
    },
    {
      id: 4,
      name: 'ремонтный цех',
      cityId: 3,
    },
    {
      id: 5,
      name: 'малярный цех',
      cityId: 3,
    },
    {
      id: 6,
      name: 'слесарный цех',
      cityId: 1,
    },
  ]);

  // const availableFactories = computed(() => {
  //   console.log(selectCity.value)
  //   if(!selectCity.value) return [];
  //   return factories.value.filter((f) => f.cityId === selectCity.value.id);
  // })

  function changeFactory(factory) {
    selectFactory.value = factory;
  }

  return {selectFactory, factories, changeFactory}
})
