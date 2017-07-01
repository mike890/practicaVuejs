<template>
  <div>
    <h1>Bienvenido {{ cuser.first_name }}</h1>
    <table>
      <thead>
        <th>Name</th>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user.email }}, {{user.id}}</td>
          <button type="submit" name="button" v-show="user.email !== cuser.email"
          @click.prevent="dUser(user)">Delete</button>
        </tr> <br>
      </tbody>
    </table>
  </div>
  </template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UsersIndexComp',

  props: [],

  data () {
    return {
      data: {
        id: 0
      }
    }
  },

  components: {},

  computed: {
    ...mapGetters(['users', 'cuser', 'iduser'])
  },
  methods: {
    ...mapActions(['destroyUser', 'findUser']),
    dUser (user) {
      this.destroyUser(user)
    }
  },

  watch: {},

  mounted () {
    this.$store.dispatch('getUsers')
  }
}
</script>
