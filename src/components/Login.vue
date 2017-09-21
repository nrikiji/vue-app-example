<template>
  <div>
    <h1>ログインページ</h1>
    id:<input type="text" v-model="id" /><br />
    password:<input type="password" v-model="password" /><br />
    <input type="button" value="LOGIN" @click="onLogin" />
  </div>
</template>

<script>
 import { mapActions } from 'vuex'

 export default {
   data: function () {
     return {
       id: null,
       password: null
     }
   },

   methods: {
     ...mapActions('auth', [
       'login'
     ]),

     onLogin: function () {
       var self = this
       self.login({
         mail: this.$data.id,
         pass: this.$data.password,
         router: self.$router
       })
     }
   }
}
</script>
