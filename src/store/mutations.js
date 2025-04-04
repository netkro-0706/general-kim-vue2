export default {
  SET_NEWS(state, news) {
    state.news = news
  },
  ADD_NEWS(state, news) {
    state.news.push(news) // 뒤에 추가
    // state.news.unshift(news) // 앞에 추가
  },
  SET_NEWS_DETAIL(state, payload) {
    state.newsDetail = payload
  },
  SET_ASK(state, ask) {
    state.ask = ask
  },
  DELETE_ASK(state, id) {
    let index = state.ask.findIndex((v) => v.id === id)
    console.log("target", index)
    state.ask.splice(index, 1)
  },
}
