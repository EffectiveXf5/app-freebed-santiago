import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotels : []
  },
  mutations: {
    setHotels(state, payload){
      state.hotels = payload
    }
  },
  actions: {
    async getHotels({commit}){
      try{
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
        commit('setHotels', data)
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
