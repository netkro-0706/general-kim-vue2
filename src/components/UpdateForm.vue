<template>
  <div>
    {{ item.title }} -> {{ item.user }}
    <button @click="onUpdate(item.title)">Update</button>
    <div v-if="isUpdate">
      title:
      <input type="text" v-model="updateValue" />
      <button @click="updateAsk(item.id)">send</button>
    </div>
    <button @click="deleteAsk(item.id)">Delete</button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      isUpdate: false,
      updateValue: null,
      titleValue: null,
    }
  },
  methods: {
    onUpdate(title) {
      this.isUpdate = !this.isUpdate
      this.updateValue = title
    },
    updateAsk(id) {
      console.log("up", id)
      const data = {
        id: id,
        title: this.updateValue,
      }
      this.$store.commit("UPDATE_ASK", data)
    },
    deleteAsk(id) {
      console.log(id)
      this.$store.commit("DELETE_ASK", id)
    },
  },
}
</script>
<style scoped></style>
