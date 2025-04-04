<template>
  <div>
    Ask 페이지
    <button @click="fetchAsk">ASK load</button>
    <ul v-if="ask.length > 0">
      <li v-for="item in ask" :key="item.id">
        <update-form :item="item" />
      </li>
    </ul>
    <div v-else class="loading">Please click ASK load button</div>
  </div>
</template>

<script>
import UpdateForm from "../components/UpdateForm.vue"

export default {
  components: { UpdateForm: UpdateForm },
  data() {
    return {
      isUpdate: false,
      updateValue: null,
    }
  },
  computed: {
    ask() {
      return this.$store.state.ask
    },
  },
  methods: {
    fetchAsk() {
      this.$store.dispatch("FETCH_ASK")
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
