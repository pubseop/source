<template>
  <div class="product">
    <h1>{{detail.name}}</h1>
    <nav class="nav">
        <router-link :to="{name: 'product-home'}" exact>상품 상세</router-link>
        <router-link :to="{name: 'product-review'}">리뷰</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: {id:Number},
  computed: mapGetters('product', ['detail']),
  watch: {
    id: {
        handler() {
            this.$store.dispatch('product/load', this.id)
        }, immediate: true
    }               
  },
  beforeDestroy() {
    this.$store.dispatch('product/destroy')
  },
}
</script>

<style scoped>

</style>
