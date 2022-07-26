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
      <button class="btn btn-primary"><router-link :to="{name:'editEmployee',params:{id:this.params.id,fullName:this.params.fullName,departament:this.params.departament,position:this.params.position,gender:this.params.gender,age:this.params.age}}"  class="hover:text-white">Edit</router-link></button>
      <button class="btn btn-danger hover:text-white" @click.prevent = "deleteUser"> <router-link to="/" class="hover:text-white">Delete</router-link> </button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      params : this.$route.params

    }
  },
  methods: {
   
    showAlert(){
      alert(`Rostdan ham ${this.params.fullName} ro'yxatdan o'chirmoqchimis!`)
    },
     async deleteUser(){
      console.log(this.params.id);
      alert(`Rostdan ham ${this.params.fullName} ro'yxatdan o'chirmoqchimis!`)
      await  axios.delete("http://localhost:3000/users/"+ this.params.id);
    },
    async editUserInfo(){
    
    }
  },
}
</script>