<template>
  <div class = "border mx-10 my-20 p-10">
    <h1 class = "text-[30px]">Employee's Information</h1>
    <div class = "icon "> </div>
    
    <p class = "border-b-10 mt-2 font-semibold"><span>Full Name</span> {{params.fullName}}</p>
    <p class = "border-b-10 mt-2 font-semibold"><span>Departament</span> {{params.departament}}</p>
    <p class = "border-b-10 mt-2 font-semibold"><span>Position</span> {{params.position}}</p>
    <p class = "border-b-10 mt-2 font-semibold"><span>Gender</span> {{params.gender}}</p>
    <p class = "border-b-10 mt-2 font-semibold"><span>Age</span> {{params.age}}</p>

    <div class = "flex gap-2 ">
      <button class="btn btn-primary">Edit</button>
      <button class="btn btn-danger">Delete</button>
    </div>
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