<template>
  <transition name="fade">
    <div class="overlay" v-if="show">
      <transition name="slide">
        <!-- Birthday Input -->
        <div class="modal" v-if="!isCountdown">
          <h2>🎉 Before we start...</h2>
          <p>Enter your birthday:</p>

          <input type="date" v-model="birthday" />

          <button @click="submitBirthday">Continue</button>
        </div>

        <!-- Countdown Screen -->
        <div class="modal" v-else>
          <h2>🎂 Surprise unlocks on<br> <strong>November 5, 2025</strong></h2>
          <p>⏳ Not yet! Your day is coming...</p>
          <h1 class="countdown">{{ countdown }}</h1>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BirthdayModal",
  props: {
    show: Boolean,
  },
  data() {
    return {
      birthday: "",
      isCountdown: false,
      countdown: "",
      countdownTimer: null,
    };
  },
  methods: {
    submitBirthday() {
      if (!this.birthday) {
        alert("Please enter your birthday!");
        return;
      }

      const validDate = "2025-11-05"; // ✅ required date (YYYY-MM-DD)

      if (this.birthday !== validDate) {
        this.startCountdown();
        return;
      }

      localStorage.setItem("birthday", this.birthday);
      this.$emit("birthday-submitted", this.birthday);
    },

    startCountdown() {
      this.isCountdown = true;
      this.updateCountdown();
      this.countdownTimer = setInterval(this.updateCountdown, 1000);
    },

    updateCountdown() {
      const target = new Date("2025-11-05T00:00:00").getTime();
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) {
        clearInterval(this.countdownTimer);
        location.reload();
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdown = `${days}d ${hours}h ${mins}m ${secs}s`;
    }
  },

  beforeUnmount() {
    clearInterval(this.countdownTimer);
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 35px;
  border-radius: 15px;
  text-align: center;
  width: 330px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.modal input {
  width: 100%;
  margin-top: 10px;
  padding: 8px;
  border: 2px solid #4facfe;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  margin-top: 15px;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  width: 100%;
  font-size: 1rem;
  transition: transform 0.2s ease;
}
button:hover {
  transform: scale(1.05);
}

.countdown {
  font-size: 2.6rem;
  font-weight: bold;
  margin-top: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.4s ease-out;
}
.slide-leave-active {
  animation: slide-out 0.3s ease-in;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
