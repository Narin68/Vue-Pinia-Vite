<script setup>
import { useTaskStore } from "./stores/TaskStore";
import TaskDetail from "./components/TaskDetail.vue";
import { ref } from "vue";

const store = useTaskStore();
const taskStore = store;
const filter = ref("all");
const title = ref("");
// taskStore.task.push({ id: 3, title: "Playing game", isFav: false });
const onSubmit = () => {
  if (title.value != "") {
    taskStore.addTask(title.value);
    title.value = "";
  }
};
const removeTask = (id) => {
  taskStore.remove(id);
};

const toggleTask = (id) => {
  taskStore.updateFavs(id);
};
</script>

<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia tasks</h1>
    </header>
    <div class="body">
      <form @click.prevent="onSubmit">
        <input type="text" placeholder="Title" v-model="title" />
        <button type="submit">Add</button>
      </form>

      <nav class="filter">
        <button @click="filter = 'all'">All tasks</button>
        <button @click="filter = 'favs'">Fav tasks</button>
      </nav>

      <div class="total-fav">
        <p></p>
      </div>

      <div class="task-content" v-if="filter == 'all'">
        <div class="task-list" v-for="t in taskStore.task" :key="t.id">
          <TaskDetail
            :task="t"
            @removeTask="removeTask"
            @toggleFav="toggleTask"
          />
        </div>
      </div>
      <div class="task-content" v-if="filter == 'favs'">
        <div class="task-list" v-for="t in taskStore.favs" :key="t.id">
          <TaskDetail
            :task="t"
            @removeTask="removeTask"
            @toggleFav="toggleTask"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.list {
  padding: 5px;
  border-radius: 5px;
  background: #e5e5e5;
  margin-bottom: 10px;
}
.body {
  display: flex;
  padding: 20px;
  justify-content: center;
  flex-direction: column;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
