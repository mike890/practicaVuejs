<template>
  <table>
    <thead>
      <th>Name</th>
    </thead>
    <tbody>
      <tr v-for="user in users">
        <td>{{ user.email }}</td>
        <button type="submit" name="button" v-show="user.email !== cuser.email">Delete</button>
      </tr> <br>
      <tr>
        <td>{{ cuser.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UsersIndexComp',

  props: [],

  data () {
    return {}
  },

  components: {},

  computed: {
    ...mapGetters(['users', 'cuser'])
  },

  methods: {},

  watch: {},

  mounted () {
    this.$store.dispatch('getUsers')
  }
}
</script>
