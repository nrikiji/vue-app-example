<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
 import Header from '@/components/Element/Header.vue'
 import Footer from '@/components/Element/Footer.vue'

 export default {
   name: 'root',
   components: {
     'app-header': Header,
     'app-footer': Footer
   }
 }
</script>
