<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i
        class="material-icons"
        @click="emit('toggleFav', task.id)"
        :class="{ fav: task.isFav }"
        >favorite</i
      >
      <i class="material-icons" @click="emit('removeTask', task.id)">delete</i>
    </div>
  </div>
</template>
  
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps(["task"]);
const emit = defineEmits(["removeTask", "toggleFav"]);
const task = props.task;
</script>