<script setup>
</script>

<template>
  <div class="home">
    <h1>{{ counterData.title }}</h1>

    <button @click="decrease" class="btn">-</button>
    <span class="counter">{{ counterData.counter }}</span>
    <button @click="increase" class="btn">+</button>
    <div>
      <input type="text" v-autofocus />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { vAutofocus } from "../derectives/vAutofocus.js";
// const counter = ref(0);

const counterData = reactive({
  counter: 0,
  tittle: "My Counter",
});

const decrease = () => {
  counterData.counter--;
};
const increase = () => {
  counterData.counter++;
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