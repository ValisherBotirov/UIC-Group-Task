<template>
  <div class="home">
  </div>
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
            <tr v-for = "(user,index) in users[0]" :key="user">
              <td class = "font-medium"><router-link :to="{name:'emplyee',params:{id:user.id,fullName:user.fullName,departament:user.departament,position:user.position,gender:user.gender,age:user.age}}">{{index+1}}</router-link></td>
              <td class="text-dark font-medium"><router-link :to="{name:'emplyee',params:{id:user.id,fullName:user.fullName,departament:user.departament,position:user.position,gender:user.gender,age:user.age}}">{{user.fullName}}</router-link></td>              
              <td class = "text-black"><router-link :to="{name:'emplyee',params:{id:user.id,fullName:user.fullName,departament:user.departament,position:user.position,gender:user.gender,age:user.age}}">{{user.departament}}</router-link></td>
              <td class = "text-black"><router-link :to="{name:'emplyee',params:{id:user.id,fullName:user.fullName,departament:user.departament,position:user.position,gender:user.gender,age:user.age}}">{{user.position}}</router-link></td>
              <td class="text-black"><router-link :to="{name:'emplyee',params:{id:user.id,fullName:user.fullName,departament:user.departament,position:user.position,gender:user.gender,age:user.age}}">{{user.gender}}</router-link></td>
              <td class="text-black"><router-link :to="{name:'emplyee',params:{id:user.id,fullName:user.fullName,departament:user.departament,position:user.position,gender:user.gender,age:user.age}}">{{user.age}} </router-link></td>      
            </tr>
          </tbody>
        </table>
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
      index : 1
    }
  },
  
  methods: {
  
  },

  async mounted() {
    const res = await axios.get("http://localhost:3000/users");
    // console.log(res.data);
    this.users.push(res.data)
    // console.log(this.users);
  },
}
</script>
