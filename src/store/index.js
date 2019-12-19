import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from "axios";
import Food from "../models/Food.js";
Vue.use(Vuex);
const _api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "c219540de067a2599bf41acc3d7b6b85",
    "x-app-id": "0bcccd04"
  }
});
const _sandbox = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/wesquintana/logs",
  timeout: 3000
});

export default new Vuex.Store({
  state: {
    activeFoods: [],
    myFoods: [],
    activeLog: {},
    logs: []
  },
  mutations: {
    setFood(state, foods) {
      state.activeFoods = foods;
      console.log(state.activeFoods);
    },
    setLog(state, logs) {
      state.activeLog = logs;
      console.log(state.activeLog);
    },
    setLogs(state, logs) {
      state.logs = logs;
    }
  },
  actions: {
    async findFood({ commit, dispatch }, query) {
      let res = await _api.post("", { query: query });
      let newFoods = res.data.foods.map(f => new Food(f));
      commit("setFood", newFoods);
    },
    async createLog({ commit, dispatch }, date) {
      let res = await _sandbox.post("", { date: date });
      commit("setLog", res.data.data);
    },
    async getLogs({ commit, dispatch }) {
      let res = await _sandbox.get("");
      commit("setLogs", res.data.data);
    }
  },
  modules: {}
});
