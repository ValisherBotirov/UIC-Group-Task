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
