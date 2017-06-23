<template>
  <form @submit.prevent="create">
    <input type="email" v-model="user.email" placeholder="put your email"/> <br>
    <input type="password" v-model="user.password" placeholder="password"/><br>
    <input type="password" v-model="user.confirm_password" placeholder="confirm password"/><br>
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
        confirm_password: '',
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
    ...mapActions(['createUser', 'updateUser']),

    create () {
      this.createUser(this.user)
    },
    update () {
      this.updateUser(this.user)
    }
  },

  watch: {},

  mounted () {
    this.$store.dispatch('createUser')
  }
}
</script>
