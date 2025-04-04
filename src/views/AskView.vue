<template>
  <div>
    Ask 페이지
    <button @click="fetchAsk">ASK load</button>
    <ul v-if="ask.length > 0">
      <li v-for="item in ask" :key="item.id">
        {{ item.title }} -> {{ item.user }}
        <button @click="deleteAsk(item.id)">Delete</button>
      </li>
    </ul>
    <div v-else class="loading">Please click ASK load button</div>
  </div>
</template>

<script>
export default {
  computed: {
    ask() {
      return this.$store.state.ask
    },
  },
  methods: {
    fetchAsk() {
      this.$store.dispatch("FETCH_ASK")
    },
    deleteAsk(id) {
      console.log(id)
      this.$store.commit("DELETE_ASK", id)
    },
  },
}
</script>

<style scoped>
.loading {
  font-size: 24px;
  font-weight: 800;
  color: red;
}
</style>
