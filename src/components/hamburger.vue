<template lang="pug">
  .hamburger(
    @click="hamburgerActive"
  )
   .hamburger-link
    .hamburger-stripe
    .hamburger-stripe
    .hamburger-stripe
</template>

<script>
import hamburgerWrapVue from './hamburgerWrap.vue';
import { bus } from '../../main'
  
export default {
  methods: {
    hamburgerActive: function() {
      bus.$emit('search-value', this.value);
    }
  }
}
</script>

<style src="../assets/styles/common/main.scss" lang="scss" scoped>

</style>