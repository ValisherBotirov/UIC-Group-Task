<template>
  <div class="mt-5 container bg-slate-100 pb-10">
    <form class="addForm form-control container pt-4 pb-10 px-6">
      <div class="flex justify-between pb-4">
        <h1 class="text-[30px] font-semibold">Edit Employee's Info</h1>
        <button class="btn btn-primary" @click.prevent="exitHome">
          Exit &nbsp; <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
      <label class="py-2 font-medium">Full Name</label>
      <input
        type="text"
        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Enter Full Name"
        v-model="fullName"
      />
      <label class="py-2 font-medium">Departament</label>
      <input
        type="text"
        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Enter Departament"
        v-model="departament"
      />
      <label class="py-2 font-medium">Position</label>
      <input
        type="text"
        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Enter Position "
        v-model="position"
      />
      <label class="block py-2 font-medium">Choose gender : </label>
      <div class="flex gap-4">
        <div class="flex gap-2 items-center ml-5">
          <label for="male" class="font-medium">Male</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            v-on:input="getRadioBtn"
            :checked="isCheckedMale"
          />
        </div>
        <div class="flex gap-2 items-center">
          <label for="famale" class="font-medium">Famale</label>
          <input
            type="radio"
            name="gender"
            id="famale"
            value="famale"
            v-on:input="getRadioBtn"
            :checked="isCheckedFamale"
          />
        </div>
      </div>
      <label class="py-2 font-medium">Age</label>
      <input
        type="number"
        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Enter Age"
        v-model="age"
      />
      <button
        type="submit"
        class="bg-sky-500 rounded-md py-2 px-4 text-[white] mt-4"
        @click.prevent="editUserInfo"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddView",
  data() {
    return {
      fullName: this.$route.params.fullName,
      departament: this.$route.params.departament,
      position: this.$route.params.position,
      gender: this.$route.params.gender,
      age: this.$route.params.age,
      editUser: null,
      newGender: null,
      editUser: null,
      isCheckedFamale: null,
      isCheckedMale: null,
    };
  },

  methods: {
    changeGender() {
      if (this.$route.params.gender === "male") {
        this.isCheckedMale = true;
        this.newGender = "male";
      } else if (this.$route.params.gender === "famale") {
        this.isCheckedFamale = true;
        this.newGender = "famale";
      }
    },

    editUserInfo() {
      const editUser = {
        fullName: this.fullName,
        departament: this.departament,
        position: this.position,
        gender: this.newGender,
        age: +this.age,
      };
      this.editUser = editUser;
      console.log(this.editUser);
      this.getEditUserServer();
    },

    getRadioBtn(result) {
      this.newGender = result.target.value;
      console.log(this.newGender);
    },

    async getEditUserServer() {
      await axios.patch(
        "http://localhost:3000/users/" + this.$route.params.id,
        this.editUser
      );
      this.toHomePage();
    },
    toHomePage() {
      // this.$router.push({path: `/emplyee/${id}`})
      this.$router.push({ path: "/" });
      // console.log(this.$router.replase({path : "/"}));
    },
    exitHome() {
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    this.changeGender();
  },
};
</script>
