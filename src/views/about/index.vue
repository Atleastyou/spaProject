<template lang="pug">
.about
  keep-alive
    router-view(exclude="")
</template>

<script>
export default {
  name: 'about',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
