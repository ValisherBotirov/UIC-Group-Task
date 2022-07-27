<template>
  <div class="home grid grid-cols-[3fr_2fr] gap-10">
  <!-- Xodimlar ro'yxati -->
     <div class = "card">
      <div class="card-header">
      <h6 class="card-title">Employee Performance</h6>
        </div>
      <div class = "card-body">
      <div class = "table-responsive">
        <table class = "table table-hover align-middle">
          <thead>
            <tr>
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
  <!-- Kompaniya malumotlari  -->
  <div class = "border">
     <p>Umumiy xodimlar soni : </p>
     <p>Erkak xodimlar soni : </p>
     <p>Ayol xodimlar soni : </p>
     <p>IT departamentdagi xodimlar soni : </p>
     <p>Marketing departamentdagi xodimlar soni : </p>
     <p>Acounting departamentdagi xodimlar soni  : </p>
     <p>Xodimlarning o'rtacha yoshi : </p>
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
      maleCount : "",
      famaleCount : "",
      allCount : "",
      itCount : "",
      marketingCount : "",
      acountingCount : "",
      middleAge : ""
    }
  },
  
  methods: {
      // Path bo'yicha chaqirib olish
  toEmployee(id){
    this.$router.push({path: `/emplyee/${id}`})
  },
  
  },

  async mounted() {
    const res = await axios.get("http://localhost:3000/users");
    // console.log(res.data);
    this.users.push(res.data)
    // console.log(this.users);
  },
}
</script>
