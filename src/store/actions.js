import axios from "axios"

export default {
  FETCH_NEWS({ commit }) {
    axios.get("https://api.hnpwa.com/v0/news/1.json").then((res) => {
      console.log(res.data)
      commit("SET_NEWS", res.data)
    })
  },
  FETCH_ASK({ commit }) {
    axios.get("https://api.hnpwa.com/v0/ask/1.json").then((res) => {
      console.log(res.data)
      commit("SET_ASK", res.data)
    })
  },
}
