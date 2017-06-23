<template>
  <form @submit.prevent="signin">
    <input type="email" v-model="data.email" placeholder="put your email"/> <br>
    <input type="password" v-model="data.password" placeholder="password"/><br>
    <button type="submit" name="button">Login</button>
    <button type="submit" name="button" @click.prevent="signout">LogOut</button>
  </form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UsersIndexComp',

  props: [],

  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },

  components: {},

  computed: {
    ...mapGetters(['users'])
  },

  methods: {
    ...mapActions(['siginUser', 'signoutUser']),

    signin () {
      this.siginUser(this.data)
    },

    signout () {
      this.signoutUser()
    }
  },

  watch: {},

  mounted () {
    this.$store.dispatch('getUsers')
  }
}
</script>
