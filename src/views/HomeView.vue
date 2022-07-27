<template>

<div class = "flex gap-4 justify-end bg-slate-100 pt-4 px-5">
  <div class ="flex gap-3 item-center">
    <div class = "flex flex-col">
      <p><i class="fa-solid fa-users"></i> &nbsp; {{allCount}}</p>
      <p class = "text-[11px]">All Employee</p>
    </div>
    <div class="">
      <i class="fa-solid fa-chart-column text-4xl text-orange-500"></i>
    </div>
  </div>
   <div class ="flex gap-3 item-center">
    <div class = "flex flex-col">
      <p><i class="fa-solid fa-user-tie"></i> &nbsp; {{maleCount}}</p>
      <p class = "text-[11px]">Male Employee</p>
    </div>
    <div class="">
      <i class="fa-solid fa-chart-column text-4xl text-orange-500"></i>
    </div>
  </div>
   <div class ="flex gap-3 item-center">
    <div class = "flex flex-col">
      <p><i class="fa-solid fa-user"></i> &nbsp; {{famaleCount}}</p>
      <p class = "text-[11px]">Famale Employee</p>
    </div>
    <div class="">
      <i class="fa-solid fa-chart-column text-4xl text-orange-500"></i>
    </div>
  </div>
</div>

  <div class="home grid grid-cols-[3fr_2fr] bg-slate-100 pt-4 px-5 gap-5">
  <!-- Xodimlar ro'yxati -->
     <div class = "card ">
      <div class="card-header bg-white border-b-none border-none">
        <div class = "flex justify-between items-center bg-white pt-2">
          <h6 class="card-title text-xl font-medium">Employee Information</h6>
          <button class= "btn btn-success"><router-link to="/addUser" class="hover:text-white">Add Employee &nbsp;<i class="fa-solid fa-user-plus"></i></router-link></button>
        </div>
      </div>
      <div class = "card-body ">
        <div class = "table-responsive">
          <table class = "table table-hover align-middle">
            <thead>
              <tr class = "border-b border-[#f68c1f] border-b-2">
                <th>#</th>
                <th>FullName</th>
                <th>Departament</th>
                <th>Position</th>
                <th>Gender</th>
                <th>Age</th>
             </tr>
           </thead>
          <tbody>
            <tr v-for = "(user,index) in users[0]" :key="user"  @click="toEmployee(user.id)">
              <td class = "font-medium">{{index+1}}</td>
              <td class="text-dark font-medium">{{user.fullName}}</td>              
              <td class = "text-black">{{user.departament}}</td>
              <td class = "text-black">{{user.position}}</td>
              <td class="text-black">{{user.gender}}</td>
              <td class="text-black">{{user.age}}</td>      
            </tr>
          </tbody>
        </table>
      </div>
     </div>
    </div>

    <!-- Kompaniya malumotlari -->

   <div class = "border  p-10 h-full bg-white">
    <h2 class = "center-text ">Kompaniya malumotlari</h2>
     <p>Umumiy xodimlar soni : {{allCount}}</p>
     <p>Erkak xodimlar soni : {{maleCount}}</p>
     <p>Ayol xodimlar soni : {{famaleCount}}</p>
     <p>IT departamentdagi xodimlar soni : {{itCount}}</p>
     <p>Marketing departamentdagi xodimlar soni : {{marketingCount}}</p>
     <p>Acounting departamentdagi xodimlar soni  : {{acountingCount}}</p>
     <p>Xodimlarning o'rtacha yoshi : {{middleAge}}</p>
   </div>
  
</div>

</template>

<script>
import axios from "axios"
import Employee from "../components/Employee.vue"




export default {
  name: 'HomeView',

  components : {
    Employee
  },
 
  data() {
    return {
      users : [],
       maleCount : 0,
      famaleCount : 0,
      allCount : null,
      itCount : 0,
      marketingCount : 0,
      acountingCount : 0,
      middleAge : 0,
      sumAge : 0  
    }
  },
  
  methods: {
      // Path bo'yicha chaqirib olish
  toEmployee(id){
    this.$router.push({path: `/emplyee/${id}`})
  },
    getOficeInfo(){
       this.allCount = this.users[0].length
       this.users[0].map(user => {
         if(user.gender === "male"){
          this.maleCount += 1
         }
    if(user.gender === "famale"){
      this.famaleCount += 1
    }
    if(user.departament === "IT"){
      this.itCount +=1
      }
    if(user.departament === "Marketing"){
      this.marketingCount +=1
    }
    this.acountingCount = this.allCount - (this.marketingCount + this.itCount);
    
    this.sumAge = this.sumAge +(+user.age);
    // console.log(this.sumAge);
    
    this.middleAge = Math.round(this.sumAge / this.allCount)
   })

  }
 

  },

  async mounted() {
    const res = await axios.get("http://localhost:3000/users");
    this.users.push(res.data);
    this.getOficeInfo()
  },
}
</script>

<style>
.icon{
/* color : orange; */

}
</style>