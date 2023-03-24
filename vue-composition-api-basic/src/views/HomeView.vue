<script setup>
</script>

<template>
  <div class="home">
    <!-- <component v-modal="showModal" :is="MyModal"> </component> -->

    <component
      v-model="showModal"
      :is="isDarkMode ? DarkModal : MyModal"
      title="My new Modal"
    >
    </component>

    <div>
      <p>Is dark mode : {{ isDarkMode }}</p>
      <button @click="toggleDarkMode">Toggle dark mode</button>
    </div>

    <h1>{{ counterData.title }}</h1>

    <button @click="decrease" class="btn">-</button>
    <span class="counter">{{ counterData.counter }}</span>
    <button @click="increase" class="btn">+</button>
    <div>
      <input type="text" v-autofocus />
    </div>
    <button class="btn" @click="handleClick">Show modal</button>
  </div>
</template>
<script setup>
import { inject, reactive, ref } from "vue";
import { vAutofocus } from "../derectives/vAutofocus.js";
import MyModal from "../components/MyModal.vue";
import DarkModal from "../components/DarkModal.vue";

// const counter = ref(0);

let showModal = ref(false);
let isDarkMode = ref(false);
const counterData = reactive({
  counter: 0,
  tittle: "My Counter",
});

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

const decrease = () => {
  counterData.counter--;
};
const increase = () => {
  counterData.counter++;
};

const handleClick = () => {
  showModal.value = !showModal.value;
};
</script>
<style scoped>
.home {
  /* text-align: center; */
  padding: 20px;
}
.btn {
  padding: 15px;
  font-size: 20px;
}
.counter {
  margin: 0 20px;
}
</style>