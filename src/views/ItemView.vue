<template>
  <div>
    ItemView Page
    <div v-if="!newsDetail">Loading...</div>
    <div v-else>
      <span v-html="`${newsDetail.title}`" />
      -> {{ newsDetail.user }}
      <br />
      {{ newsDetail.content }}
      <hr />
      <ul>
        <li v-for="item in newsDetail.comments" :key="item.id">
          <span v-html="`${item.content}`" /> ← {{ item.user }}
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    newsDetail() {
      console.log("detail", this.$store.state.newsDetail)
      return this.$store.state.newsDetail
    },
  },
  created() {
    this.$store.dispatch("FETCH_NEWS_DETAIL", this.$route.params.id)
  },
}
</script>
