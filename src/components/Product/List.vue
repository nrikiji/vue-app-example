<template>
  <div>
    <h1>一覧ページ</h1>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
      </tr>
      <tr v-for="item in items">
        <td>{{ item.id }}</td>
        <td><router-link :to="{ name: 'product/detail', params: {id: item.id} }">{{ item.name }}</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
 import api from '@/api'

 export default {
   data: function () {
     return {
       items: []
     }
   },
   beforeCreate: function () {
     var self = this
     api.get('/product.php')
        .then(function (response) {
          self.items = response.data.items
        })
   }
}
</script>
