import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useEmployeeStory = defineStore('employee', () => {
  const selectEmployee = ref('');
  const employee = [
    {id: 1, name: 'Борисов Илья Маркович', factoryId: 1},
    {id: 2, name: 'Петрова Полина Артёмовна', factoryId: 2},
    {id: 3, name: 'Серова Алиса Кирилловна', factoryId: 3},
    {id: 4, name: 'Соловьева Валерия Владиславовна', factoryId: 4},
    {id: 5, name: 'Смирнов Иван Алексеевич', factoryId: 5},
    {id: 6, name: 'Тихонов Лев Львович', factoryId: 6},
    {id: 7, name: 'Воронин Герман Платонович', factoryId: 1},
    {id: 8, name: 'Кондратьева Валерия Михайловна', factoryId: 2},
    {id: 9, name: 'Орлов Кирилл Артёмович', factoryId: 3},
    {id: 10, name: 'Зотова Татьяна Савельевна', factoryId: 4},
  ]

  function changeEmployee(employee) {
    selectEmployee.value = employee;
  }

  return {selectEmployee, employee, changeEmployee}
})
