<template>
  <div>
      <custem-header/>
      <slot></slot>
  </div>
</template>

<script>
import CustemHeader from './auth/CustemHeader.vue'
  export default {
  components: { CustemHeader },

  }
</script>

<style>

</style>
