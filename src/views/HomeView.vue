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
            <tr v-for = "user in users[0]" :key="user">
              <td>{{user.id}}</td>
              <td>{{user.fullName}}</td>
              <td>{{user.departament}}</td>
              <td>{{user.position}}</td>
              <td>{{user.gender}}</td>
              <td>{{user.age}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>


import axios from "axios"

export default {
  name: 'HomeView',
 
  data() {
    return {
      users : []
    }
  },
  methods: {
    
  },
  async mounted() {
    const res = await axios.get("http://localhost:3000/users");
    console.log(res.data);
    this.users.push(res.data)
    console.log(this.users);
  },
}
</script>
