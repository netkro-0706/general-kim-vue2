<template>
  <div>
    News Page
    <input type="text" v-model="user" placeholder="user" />
    <input type="text" v-model="title" placeholder="title" />
    <button type="button" @click="add">추가</button>
    <ul v-if="news.length > 0">
      <li v-for="item in news" :key="item.id">
        <span class="bold">
          <router-link :to="`item/${item.id}`">
            {{ item.title }}
          </router-link>
        </span>
        -> {{ item.user }}
      </li>
    </ul>
    <div v-else class="red">Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      title: null,
    }
  },
  computed: {
    news() {
      return this.$store.state.news
    },
  },
  methods: {
    add() {
      if (this.user === null || this.title === null) return
      const data = {
        user: this.user,
        title: this.title,
      }
      this.$store.commit("ADD_NEWS", data)
      console.log(this.user)
      console.log(this.title)
    },
  },
  created() {
    this.$store.dispatch("FETCH_NEWS")
  },
}
</script>
<style scoped>
input {
  display: block;
}
button {
  display: block;
  width: 50px;
  height: 50px;
}
.red {
  font-size: 50px;
  background-color: red;
  color: white;
}
.bold {
  font-weight: 700;
  font-size: larger;
}
</style>
