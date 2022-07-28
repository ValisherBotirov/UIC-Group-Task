const styleScript=()=>{ }

<template>
  <div class="py-3 pt-6 mt-6">
    <h2 class="text-xl font-medium text-center pt-6 pb-4">
      Departament Statistics <i class="fa-regular fa-chart-user"></i>
    </h2>
  </div>
  <div class="container pl-[10px] text-center">
    <div id="time">
      <div class="circle" style="--color: #ff2972">
        <div class="dots h_dot" ref="departamentIT"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="hh"></circle>
        </svg>
        <div id="hours" class="text-black">
          {{ itProsent }} % <br /><span class="text-[16px]">IT</span>
        </div>
      </div>
      <div class="circle" style="--color: #fee800">
        <div class="dots m_dot" ref="departamentM"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="mm"></circle>
        </svg>
        <div id="minutes" class="text-black">
          {{ marketingProsent }} % <br /><span>Marketing</span>
        </div>
      </div>
      <div class="circle" style="--color: #04fc43">
        <div class="dots s_dot" ref="departamentA"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="ss"></circle>
        </svg>
        <div id="seconds" class="text-black">
          {{ acountingProsent }} % <br /><span>Acounting</span>
        </div>
      </div>
      <div class="ap">
        <div id="ampm">AM</div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-3 -">
    <div class="mb-3 mt-4 flex flex-col gap-2 justify-center items-center">
      <p class="text-muted small text-slate-800 text-[17px] font-semibold">
        IT
      </p>
      <h4 class="mb-0 text-[30px]">{{ counts[0] }}</h4>
    </div>
    <div class="mb-3 mt-4 flex flex-col gap-2 justify-center items-center">
      <p class="text-muted small text-slate-800 text-[17px] font-semibold">
        Marketing
      </p>
      <h4 class="mb-0 text-[30px]">{{ counts[1] }}</h4>
    </div>
    <div class="mb-3 mt-4 flex flex-col gap-2 justify-center items-center">
      <p class="text-muted small text-slate-800 text-[17px] font-semibold">
        Acounting
      </p>
      <h4 class="mb-0 text-[30px]">{{ counts[2] }}</h4>
    </div>
  </div>
</template>

<script>
const styleScript = (count1, count2, count3) => {
  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let dotH = document.querySelector(".h_dot");
  let dotM = document.querySelector(".m_dot");
  let dotS = document.querySelector(".s_dot");

  hh.style.strokeDashoffset = 440 - (440 * +count1 * 4) / 60;
  mm.style.strokeDashoffset = 440 - (440 * +count2 * 4) / 60;
  ss.style.strokeDashoffset = 440 - (440 * +count3 * 4) / 60;

  dotH.style.transform = `rotate(${+count1 * 4 * 6}deg)`;
  dotM.style.transform = `rotate(${+count2 * 4 * 6}deg)`;
  dotS.style.transform = `rotate(${+count3 * 4 * 6}deg)`;
};

export default {
  props: ["counts"],
  data() {
    return {
      itProsent: "",
      marketingProsent: "",
      acountingProsent: "",
    };
  },
  methods: {
    addStyle() {
      console.log(this.counts);
      this.itProsent = Math.round((this.counts[0] * 100) / this.counts[3]);
      this.marketingProsent = Math.round(
        (this.counts[1] * 100) / this.counts[3]
      );
      this.acountingProsent = Math.round(
        (this.counts[2] * 100) / this.counts[3]
      );
    },
  },

  mounted() {
    styleScript(this.counts[0], this.counts[1], this.counts[2]);
    this.addStyle();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  width: 100%;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #2f363e; */
}

#time {
  display: flex;
  gap: 40px;
  color: #fff;
}

#time .circle {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#time .circle svg {
  position: relative;
  width: 150px;
  height: 150px;
  transform: rotate(270deg);
}

#time .circle svg circle {
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke: #191919;
  stroke-width: 4px;
  transform: translate(5px, 5px);
}

#time .circle svg circle:nth-child(2) {
  stroke: var(--color);
  stroke-dasharray: 440;
}

#time div {
  position: absolute;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
}

#time div span {
  position: absolute;
  transform: translate(-50%, 0px);
  font-size: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

#time .ap {
  position: relative;
  font-size: 1rem;
  transform: translate(-20px);
}

.dots {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
}

.dots::before {
  content: "";
  position: absolute;
  top: -3px;
  width: 15px;
  height: 15px;
  background: var(--color);
  border-radius: 50%;
  box-shadow: 0 0 20px var(--color), 0 0 60px var(--color);
}
span {
  font-size: 16px;
  font-weight: 800;
}
</style>
