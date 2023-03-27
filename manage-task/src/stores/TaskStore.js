import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        task: [
            // { id: 1, title: "Read a book", isFav: true },
            // { id: 2, title: "Go home", isFav: false }
        ],
        name: "Jonsu"
    }),
    getters: {
        favs() {
            return this.task.filter(v => v.isFav);
        },
    },
    actions: {
        addTask(title) {
            let id = this.task.length > 0 ? this.task[0].id + 1 : 1;
            this.task.unshift({ id: id, isFav: false, title: title });
        },
        remove(id) {
            this.task = this.task.filter(v => v.id != id);
        },
        updateFavs(id) {
            let i = this.task.findIndex(v => v.id == id);
            this.task[i].isFav = !this.task[i].isFav;
        }
    }
})