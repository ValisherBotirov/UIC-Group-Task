<template>
  <div class = "border  p-10 h-full bg-neutral-400">
    <h2 class = "center-text ">Kompaniya malumotlari</h2>
     <p>Umumiy xodimlar soni : {{allCount}}</p>
     <p>Erkak xodimlar soni : {{maleCount}}</p>
     <p>Ayol xodimlar soni : {{famaleCount}}</p>
     <p>IT departamentdagi xodimlar soni : {{itCount}}</p>
     <p>Marketing departamentdagi xodimlar soni : {{marketingCount}}</p>
     <p>Acounting departamentdagi xodimlar soni  : {{acountingCount}}</p>
     <p>Xodimlarning o'rtacha yoshi : {{middleAge}}</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name : "RightMenu.vue",
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