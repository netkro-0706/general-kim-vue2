<template>
  <div>
    <img src="../assets/logo.png" />
    <router-link to="/news">News</router-link> ||
    <router-link to="/ask">Ask</router-link>
  </div>
</template>

// scoped는 여기에서만 작동시키게 하는 조건을 거는것. // 이렇지 않으면 글로벌로
전부 style이 적용이 된다.
<style scoped>
img {
  width: 40px;
}
</style>
