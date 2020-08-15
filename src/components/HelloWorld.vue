<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <in-ButtonGroup>

    <in-Button round v-on:click='fn'>11111</in-Button>
     </in-ButtonGroup>
     <in-Checkbox label='1111' :value='true' v-on:input="onchen"></in-Checkbox>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '组件库'
    }
  },
  
  methods:{
    fn(e){
      console.log(e)
    },
    onchen(e){
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
