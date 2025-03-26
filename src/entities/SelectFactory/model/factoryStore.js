import {defineStore} from 'pinia';
import {ref} from 'vue'

export const useFactoryStores = defineStore('factory', () => {
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
      cityId: 2,
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

  function availableFactories(cityId) {
    if(!cityId) return [];
    return factories.value.filter((f) => f.cityId === cityId);
  }

  function changeFactory(factory) {
    selectFactory.value = factory;
  }

  return {selectFactory, changeFactory, availableFactories}
})
