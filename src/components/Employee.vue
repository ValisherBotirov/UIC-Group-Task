<template>
  <div>
    <h1>One Employee info page</h1>
    
    <button class = "btn btn-danger" @click = "getParams">Paramsni ol</button>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      params : this.$route.params

    }
  },
  methods: {
    getParams(){
      console.log(this.params)
    }
  },
}
</script>