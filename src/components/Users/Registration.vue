<template>
  <form @submit.prevent="register">
    <input v-model="user.email" placeholder="put your email"/> <br>
    <input v-model="user.password" placeholder="password"/><br>
    <input v-model="user.first_name" placeholder="name"/><br>
    <input v-model="user.last_name" placeholder="last_name"/><br>
    <button type="submit" name="button">register</button>
    <button type="submit" name="button" @click.prevent="update">update</button>
  </form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UsersIndexComp',

  props: [],

  data () {
    return {
      user: {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
      }
    }
  },

  components: {},

  computed: {
    ...mapGetters(['users'])
  },

  methods: {
    ...mapActions(['registerUser', 'updateUser']),

    register () {
      this.registerUser(this.user)
    },
    update () {
      this.updateUser(this.user)
    }
  },

  watch: {},

  mounted () {
    this.$store.dispatch('getUsers')
  }
}
</script>
