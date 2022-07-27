<template>
  <div class="home ">
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
    this.users.push(res.data);
    
  },
}
</script>
