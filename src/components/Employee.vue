<template>
  <div class="userInfo border mx-[auto] my-30 mb-30 p-3 bg-white pb-8">
    <!-- <h2 class="text-left text-[30px] pb-4">Employee Information</h2> -->
    <div class="grid grid-row-2 gap-4 pt-4">
      <div class="flex flex-col items-center gap-2">
        <h1 class="text-[30px] text-center">
          <i class="userIcon fa-solid fa-circle-user text-[50px]"></i>
        </h1>
        <div class="text-center">
          <h1 class="text-2xl">{{ fullName }}</h1>
          <p>{{ position }}</p>
        </div>
      </div>
      <div class="userInfoItems justify-items-center">
        <p class="border-b-2 border-b-black mt-2 py-1">
          Full Name : <span class="font-semibold">{{ fullName }}</span>
        </p>
        <p class="border-b-2 border-b-black mt-2 py-1">
          Departament : <span class="font-semibold">{{ departament }}</span>
        </p>
        <p class="border-b-2 border-b-black mt-2 py-1">
          Position : <span class="font-semibold">{{ position }}</span>
        </p>
        <p class="border-b-2 border-b-black mt-2 py-1">
          Gender : <span class="font-semibold">{{ gender }}</span>
        </p>
        <p class="border-b-2 border-b-black mt-2 py-1">
          Age : <span class="font-semibold">{{ age }}</span>
        </p>
      </div>
    </div>
    <div class="flex gap-2 justify-end">
      <button class="btn btn-primary">
        <router-link
          :to="{
            name: 'editEmployee',
            params: {
              id: this.id,
              fullName: this.fullName,
              departament: this.departament,
              position: this.position,
              gender: this.gender,
              age: this.age,
            },
          }"
          class="hover:text-white"
          >Edit &nbsp; <i class="fa-solid fa-user-pen"></i
        ></router-link>
      </button>
      <button class="btn btn-danger hover:text-white" @click="deleteUser">
        Delete &nbsp; <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div>
  <div class="qushimchaClass"></div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      fullName: "",
      departament: "",
      position: "",
      gender: "",
      age: "",
    };
  },
  methods: {
    async deleteUser() {
      console.log(this.id);
      alert(`Rostdan ham ${this.fullName} ro'yxatdan o'chirmoqchimis!`);
      await axios.delete("http://localhost:3000/users/" + this.id);
      console.log("User o'chirildi");
      this.toHomePage();
    },
    toHomePage() {
      // this.$router.push({path: `/emplyee/${id}`})
      this.$router.push({ path: "/" });
      // console.log(this.$router.replase({path : "/"}));
    },
  },

  async mounted() {
    const respons = await axios.get(
      "http://localhost:3000/users/" + this.$route.params.id
    );
    console.log(respons.data);
    const res = respons.data;
    this.fullName = res.fullName;
    this.departament = res.departament;
    this.position = res.position;
    this.gender = res.gender;
    this.age = res.age;
  },
};
</script>

<style scoped>
.userInfo {
  width: 50%;
  height: auto;
  margin: 100px auto;
  padding-bottom: 30px;
}
.qushimchaClass {
  height: 10vh;
  width: 100vw;
  background-color: transparent;
}
.userIcon {
  font-size: 120px;
}
.userInfoItems {
  width: 50%;
  margin: 10px auto;
  /* margin-top: 30px; */
}
</style>
