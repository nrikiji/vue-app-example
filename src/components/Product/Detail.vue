<template>
  <div>
    <h1>詳細ページ</h1>
    <a v-on:click="$router.go(-1)">戻る</a>
    <table>
      <tr>
        <th>id</th><td>{{ item.id }}</td>
      </tr>
      <tr>
        <th>name</th><td>{{ item.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
 import api from '@/api'

 export default {
   data: function () {
     return {
       item: {}
     }
   },
   beforeCreate: function () {
     var self = this
     api.get('/product_detail.php', {
       id: self.$route.params.id
     })
        .then(function (response) {
          self.item = response.data.item
        })
   }
 }
</script>
