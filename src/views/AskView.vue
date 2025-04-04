<template>
  <div>
    Ask 페이지
    <input type="text" v-model="id" placeholder="user" />
    <input type="text" v-model="title" placeholder="title" />
    <ul v-if="ask.length > 0">
      <li v-for="item in ask" :key="item.id">
        {{ item.title }} -> {{ item.user }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    ask() {
      return this.$store.state.ask
    },
  },
  created() {
    this.$store.dispatch("FETCH_ASK")
  },
}
</script>
