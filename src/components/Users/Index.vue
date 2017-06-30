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
          <button type="submit" name="button" v-show="user.email !== cuser.email" @click.prevent="dUser" >Delete</button>
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
    ...mapGetters(['users', 'cuser'])
  },

  methods: {
    ...mapActions(['destroyUser']),
    dUser () {
      this.destroyUser(this.data)
    }
  },

  watch: {},

  mounted () {
    this.$store.dispatch('getUsers')
  }
}
</script>
