<template>
  <div class = "border mx-10 my-20 p-10">
    <h1 class = "text-[30px]">Employee's Information</h1>
    <div class = "icon "> </div>
    
    <p class = "border-b-10 mt-2 font-semibold"><span>Full Name</span> {{fullName}}</p>
    <p class = "border-b-10 mt-2 font-semibold"><span>Departament</span> {{departament}}</p>
    <p class = "border-b-10 mt-2 font-semibold"><span>Position</span> {{position}}</p>
    <p class = "border-b-10 mt-2 font-semibold"><span>Gender</span> {{gender}}</p>
    <p class = "border-b-10 mt-2 font-semibold"><span>Age</span> {{age}}</p>

    <div class = "flex gap-2 ">
      <button class="btn btn-primary"><router-link :to="{name:'editEmployee',params:{id:this.id,fullName:this.fullName,departament:this.departament,position:this.position,gender:this.gender,age:this.age}}"  class="hover:text-white">Edit</router-link></button>
      <button class="btn btn-danger hover:text-white" @click = "deleteUser"> <router-link to="/" class="hover:text-white">Delete</router-link> </button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      id : this.$route.params.id,
      fullName : "",
      departament : "",
      position : "",
      gender : "",
      age : ""

    }
  },
  methods: {
     async deleteUser(){
      console.log(this.id);
      alert(`Rostdan ham ${this.fullName} ro'yxatdan o'chirmoqchimis!`)
      await  axios.delete("http://localhost:3000/users/"+ this.id);
      console.log("User o'chirildi");
    }
  },

 async mounted() {
    const respons = await axios.get("http://localhost:3000/users/"+this.$route.params.id);
    console.log(respons.data);
    const res = respons.data;
    this.fullName = res.fullName;
    this.departament = res.departament;
    this.position = res.position;
    this.gender = res.gender;
    this.age = res.age
   },

}
</script>