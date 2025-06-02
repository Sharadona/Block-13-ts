<template>
  <div class="card">
    <h1>Как Vue работает с TypeScript?</h1>



    <button class="btn" @click="count++">Открыть пользователей {{count}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  }
}
</script>
