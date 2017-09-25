import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    mutations: {
        increment(state) {
            state.count += 1
        }
    },
    getters: {
        doneTodos1: state => {
            return state.todos[0].done
        },
        doneTodos2: state => {
            return state.todos[1].done
        }
    }
})