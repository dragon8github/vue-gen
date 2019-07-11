<template>
    <div class="<%= name %>">
        <%= name %>
    </div>
</template>

<script>
export default {
  name: '<%= name %>',
  data () {
    return {
        items: [],
        title: 'HelloWorld'
    }
  },
  methods: {
      go () {
          console.log('go');
      }
  },
  components: {

  },
  computed: {

  },
  watch: {

  },
  beforeMount () {
      console.log('<%= name %>');
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/functions.scss";
.<%= name %> {

}
</style>