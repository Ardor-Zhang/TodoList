import Vue from 'vue'
import Vuex from 'vuex'
import { List } from '../dto'

Vue.use(Vuex)

const list: Array<List> = []

export default new Vuex.Store({
  state: {
    list
  },
  mutations: {
    ADD_LIST: (state, content) => state.list = [{ id:Date.now(), isDone: false, content }, ...state.list],
    CHANGE_STATE: (state, id) => state.list.forEach( item => item.id === id && (item.isDone = !item.isDone)),
    DELETE_ITEM: (state, id) => state.list = state.list.filter(item => item.id !== id)
  },
  actions: {
  },
  modules: {
  }
})
