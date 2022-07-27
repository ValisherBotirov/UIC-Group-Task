<template>
  <div>
    <form class = "form-control container pt-2 pb-10 px-6">
      <h1 class = "text-center text-[30px] font-semibold">Add Employee</h1>
      <label class = "py-2 font-medium">Full Name</label>
      <input type="text" class = "placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
      placeholder = "Enter Full Name" v-model = "fullName"/>
      <label class = "py-2 font-medium">Departament</label>
       <input
          type="text"
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Enter Departament" v-model = "departament"
        />
        <label class = "py-2 font-medium">Position</label>
        <input type="text" class = "placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder = "Enter Position " v-model = "position"
        />
        <label class = "block py-2 font-medium">Choose gender : </label>
        <div class = "flex gap-4">
           <div class = "flex gap-2 items-center ml-5">
             <label for="male" class = "font-medium">Male</label>
             <input type="radio" name = "gender" id = "male" v-on:input = "getRadioAnsver" value="male" :checked="isChecked">
           </div>
           <div class = "flex gap-2 items-center ">
             <label for="famale" class = "font-medium">Famale</label>
             <input type="radio" name = "gender" id = "famale" v-on:input = "getRadioAnsver" value="famale" :checked="isChecked">
           </div>
         </div>
         <label class = "py-2 font-medium">Age</label>
         <input type="number" class = "placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
         placeholder = "Enter Age" v-model = "age"
         />
         <button type="submit" class = "bg-sky-500 rounded-md py-2 px-4 text-[white] mt-4" @click.prevent = "getUserInfo" >Save</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name : "AddView",
  data() {
    return {
      fullName : "",
      departament : "",
      position : "",
      gender : "",
      age : "",
      newUser : null,
      isChecked : null
    }
  },

  methods: {
   
    getUserInfo(){
      const newUser = {
        fullName : this.fullName,
        departament : this.departament,
        position : this.position,
        gender : this.gender,
        age : +this.age
      }
      this.newUser = newUser;
        console.log(newUser);
        this.getServer()
    },
    async  getServer(){
    console.log("Serverga jo'natdi");
    await axios.post("http://localhost:3000/users",this.newUser,{})
    //  await  axios.delete("http://localhost:3000/users/"+ this.id) 
    // await axios.patch("http://localhost:3000/users/9",this.newUser)
    this.clearInputValue()
   },

    clearInputValue(){
      this.fullName = "",
      this.departament = "",
      this.position = "",
      this.gender = "",
      this.age = "",
      this.isChecked = false
    },

   getRadioAnsver(result){
    this.gender = result.target.value
   }
  },

   
 


}
</script>