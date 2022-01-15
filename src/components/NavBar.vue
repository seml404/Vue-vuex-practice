<template>
  <div class="header nav-bar">
    <div>counter: {{ $store.state.counter }}</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  height: 50px;
  background-color: cornsilk;
  color: blue;
}
</style>
