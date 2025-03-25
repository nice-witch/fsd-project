import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useCityStory = defineStore('city', () => {
  const selectCity = ref(null);
  const cities = [
    {id: 1, name: 'Москва'},
    {id: 2, name: 'Омск'},
    {id: 3, name: 'Тюмень'},
  ];

  function changeCity(city) {
    selectCity.value = city;
  }

  return {selectCity, cities, changeCity}
})
