<template>
  <div class="flex gap-4 justify-end bg-slate-100 pt-4 px-5">
    <div class="flex gap-3 item-center">
      <div class="flex flex-col">
        <p><i class="fa-solid fa-users"></i> &nbsp; {{ allCount }}</p>
        <p class="text-[11px]">All Employee</p>
      </div>
      <div class="">
        <i class="fa-solid fa-chart-column text-4xl text-orange-500"></i>
      </div>
    </div>
    <div class="flex gap-3 item-center">
      <div class="flex flex-col">
        <p><i class="fa-solid fa-user-tie"></i> &nbsp; {{ maleCount }}</p>
        <p class="text-[11px]">Male Employee</p>
      </div>
      <div class="">
        <i class="fa-solid fa-chart-column text-4xl text-orange-500"></i>
      </div>
    </div>
    <div class="flex gap-3 item-center">
      <div class="flex flex-col">
        <p><i class="fa-solid fa-user"></i> &nbsp; {{ famaleCount }}</p>
        <p class="text-[11px]">Famale Employee</p>
      </div>
      <div class="">
        <i class="fa-solid fa-chart-column text-4xl text-orange-500"></i>
      </div>
    </div>
  </div>

  <div
    class="home flex flex-col-reverse xl:grid xl:grid-cols-[3fr_2fr] bg-slate-100 pt-4 px-5 gap-5"
  >
    <!-- Xodimlar ro'yxati -->
    <div>
      <div class="card">
        <div class="card-header bg-white border-b-none border-none">
          <div class="flex justify-between items-center bg-white pt-3">
            <h6 class="card-title text-xl font-medium">Employee Information</h6>
            <button class="btn btn-success">
              <router-link to="/addUser" class="hover:text-white"
                >Add Employee &nbsp;<i class="fa-solid fa-user-plus"></i
              ></router-link>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead>
                <tr class="border-[#f68c1f] border-b-2">
                  <th>#</th>
                  <th>FullName</th>
                  <th>
                    Departament
                    <i class="fa-solid fa-sort" @click="sortDepartament"></i>
                  </th>
                  <th>Position</th>
                  <th>
                    Gender <i class="fa-solid fa-sort" @click="sortFunc"></i>
                  </th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(user, index) in paginationUser"
                  :key="user"
                  @click="toEmployee(user.id)"
                >
                  <td class="font-medium">{{ index + 1 }}</td>
                  <td class="text-dark font-medium">{{ user.fullName }}</td>
                  <td class="text-black">{{ user.departament }}</td>
                  <td class="text-black">{{ user.position }}</td>
                  <td class="text-black">{{ user.gender }}</td>
                  <td class="text-black">{{ user.age }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- pagination -->
        <div
          v-if="totalUser"
          class="bg-white px-4 pb-4 flex items-center justify-between sm:px-6"
        >
          <div class="flex-1 flex justify-between sm:hidden">
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div
            class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
          >
            <div>
              <p class="text-sm text-gray-700">
                Showing

                <span class="font-medium">{{ page }}</span>

                to

                <span class="font-medium">{{ totalPage }}</span>

                of

                <span class="font-medium">{{ totalUser }}</span>

                results
              </p>
            </div>
            <div>
              <nav
                class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <div
                  @click="prevPage"
                  class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </div>
                <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                <div
                  v-for="page in totalPage"
                  :key="page"
                  class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
                  @click="changePage(page)"
                >
                  {{ page }}
                </div>

                <div
                  @click="nextPage"
                  class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Kompaniya malumotlari -->

    <div class="border p-3 h-full bg-white">
      <h2 class="text-center text-xl font-medium pb-2">Employee Statistics</h2>
      <div class="flex gap-10 text-center pt-4 pb-10">
        <div>
          <p><i class="fa-solid fa-circle-info text-[30px] w-[100px]"></i></p>
          <div>
            <p class="">O'rtacha yosh</p>
            <p class="text-[18px] font-medium">{{ middleAge }}</p>
          </div>
        </div>
        <div>
          <p><i class="fa-solid fa-users text-[30px]"></i></p>
          <div>
            <p>Total Employee</p>
            <p class="text-[18px] font-medium">{{ allCount }}</p>
          </div>
        </div>
        <div>
          <p><i class="fa-solid fa-user-tie text-[30px]"></i></p>
          <div>
            <p>Male Employee</p>
            <p class="text-[18px] font-medium">{{ maleCount }}</p>
          </div>
        </div>
        <div>
          <p><i class="fa-solid fa-user text-[30px]"></i></p>
          <div>
            <p>Famale Employee</p>
            <p class="text-[18px] font-medium">{{ famaleCount }}</p>
          </div>
        </div>
      </div>
      <Diagrams
        v-if="allCount"
        :counts="[itCount, marketingCount, acountingCount, allCount]"
      />
      <!-- <p>Umumiy xodimlar soni : {{ allCount }}</p>
      <p>Erkak xodimlar soni : {{ maleCount }}</p>
      <p>Ayol xodimlar soni : {{ famaleCount }}</p>
      <p>IT departamentdagi xodimlar soni : {{ itCount }}</p>
      <p>Marketing departamentdagi xodimlar soni : {{ marketingCount }}</p>
      <p>Acounting departamentdagi xodimlar soni : {{ acountingCount }}</p>
      <p>Xodimlarning o'rtacha yoshi : {{ middleAge }}</p> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Employee from "../components/Employee.vue";
import Diagrams from "../components/Diagrams.vue";

export default {
  name: "HomeView",

  components: {
    Employee,
    Diagrams,
  },

  data() {
    return {
      users: [],
      maleCount: 0,
      famaleCount: 0,
      allCount: null,
      itCount: 0,
      marketingCount: 0,
      acountingCount: 0,
      middleAge: 0,
      sumAge: 0,
      paginationUser: [],
      paginationUser2: [],
      limit: 10,
      page: 1,
      totalPage: "",
      totalUser: "",
      loopNum: 0,
      sortNumber: 0,
      sortNumberDepartament: 0,
    };
  },

  methods: {
    // Path bo'yicha chaqirib olish
    toEmployee(id) {
      this.$router.push({ path: `/emplyee/${id}` });
    },

    changePage(page) {
      console.log(page);
      this.page = page;
      // console.log(this.page);
      this.loopNum = page - 1;
      this.getPaginationUser();
      // console.log(this.paginationUser);
    },
    nextPage() {
      if (this.totalPage > this.page) {
        this.page += 1;
        this.loopNum = this.page - 1;
        this.getPaginationUser();
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page -= 1;
        this.loopNum = this.page - 1;
        this.getPaginationUser();
      }
    },
    sortFunc() {
      this.sortNumber += 1;
      this.paginationUser = this.paginationUser2;
      if (this.sortNumber > 2) {
        this.sortNumber = 0;
        this.paginationUser = this.paginationUser2;
        console.log(this.sortNumber);
      }
      if (this.sortNumber === 1) {
        this.paginationUser = this.paginationUser.filter(
          (user) => user.gender === "male"
        );
      } else if (this.sortNumber === 2) {
        this.paginationUser = this.paginationUser.filter(
          (user) => user.gender === "famale"
        );
      } else {
        return this.paginationUser;
      }
    },

    sortDepartament() {
      this.sortNumberDepartament += 1;
      this.paginationUser = this.paginationUser2;
      if (this.sortNumberDepartament > 3) {
        this.sortNumberDepartament = 0;
        this.paginationUser = this.paginationUser2;
      }
      if (this.sortNumberDepartament === 1) {
        this.paginationUser = this.paginationUser.filter(
          (user) => user.departament === "IT"
        );
      } else if (this.sortNumberDepartament === 2) {
        this.paginationUser = this.paginationUser.filter(
          (user) => user.departament === "Marketing"
        );
      } else if (this.sortNumberDepartament === 3) {
        this.paginationUser = this.paginationUser.filter(
          (user) => user.departament === "Acounting"
        );
      } else {
        return this.paginationUser;
      }
    },

    getOficeInfo() {
      this.allCount = this.users[0].length;
      this.users[0].map((user) => {
        if (user.gender === "male") {
          this.maleCount += 1;
        }
        if (user.gender === "famale") {
          this.famaleCount += 1;
        }
        if (user.departament === "IT") {
          this.itCount += 1;
        }
        if (user.departament === "Marketing") {
          this.marketingCount += 1;
        }
        this.acountingCount =
          this.allCount - (this.marketingCount + this.itCount);

        this.sumAge = this.sumAge + +user.age;
        // console.log(this.sumAge);

        this.middleAge = Math.round(this.sumAge / this.allCount);
      });
    },
    async getPaginationUser() {
      const res = await axios.get("http://localhost:3000/users", {
        params: {
          _limit: this.limit,
          _page: this.page,
        },
      });
      this.paginationUser = res.data;
      this.paginationUser2 = res.data;
      this.totalUser = res.headers["x-total-count"];
      this.totalPage = Math.ceil(res.headers["x-total-count"] / this.limit);
    },
  },

  async mounted() {
    const res = await axios.get("http://localhost:3000/users");
    this.users.push(res.data);
    this.getOficeInfo();
    this.getPaginationUser();
  },
};
</script>

<style></style>
