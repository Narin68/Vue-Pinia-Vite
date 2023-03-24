<template>
  <div v-if="modelValue" class="modal">
    <div class="modal-content">
      <h1>{{ userData.name }} @ {{ userData.email }}</h1>
      <h1 class="title">{{ title }}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, velit,
        facilis molestiae enim ad necessitatibus optio fugit voluptatibus
        aperiam distinctio nihil, officiis animi molestias placeat vero et
        expedita dolorem alias.
      </p>
      <button class="btn" @click="handleClick">Hide modal</button>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "My Modal",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const userData = inject("userData");

const title = props.title;
const emit = defineEmits(["hideModal", "update:modelValue"]);

const handleClick = () => {
  emit("update:modelValue", false);
};
</script>
  
<style>
.modal {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  width: 400px;
  height: auto;
  border-radius: 10px;
  background: white;
  color: black;
  padding: 20px;
}
</style>