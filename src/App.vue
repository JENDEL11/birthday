<script setup>
import { ref, onMounted } from 'vue'
import EntranceScreen from './components/EntranceScreen.vue'
import BirthdayCard from './components/BirthdayCard.vue'
import Balloons from './components/Balloons.vue'
import BirthdayCake from './components/BirthdayCake.vue'
import MessageBox from './components/MessageBox.vue'
import BirthdayModal from './components/BirthdayModal.vue'
import { makeItRain } from './utils/animations'

// Controls showing modal
const showBirthdayModal = ref(true)

// Controls Entrance screen
const showEntrance = ref(false)

// Store birthday data
const birthday = ref(null)

// ✅ On mount: auto skip modal if user previously entered valid birthday
onMounted(() => {
  const savedBirthday = localStorage.getItem("birthday")
  if (savedBirthday === "2025-11-05") {
    birthday.value = savedBirthday
    showBirthdayModal.value = false
    showEntrance.value = true
  }
})

// Called when user submits birthday
const handleBirthdaySubmit = (date) => {
  birthday.value = date
  showBirthdayModal.value = false
  showEntrance.value = true
}

// Start animation from EntranceScreen
const startExperience = () => {
  showEntrance.value = false
  makeItRain()
}
</script>

<template>
  <div class="app">
    <!-- Birthday Input Modal -->
    <BirthdayModal
      :show="showBirthdayModal"
      @birthday-submitted="handleBirthdaySubmit"
    />

    <!-- Entrance Screen shown AFTER modal -->
    <EntranceScreen
      v-if="showEntrance"
      @start="startExperience"
    />

    <!-- EXPERIENCE CONTENT -->
    <div v-if="!showEntrance && !showBirthdayModal" class="container">
      <!-- Intro Message Box -->
     <div class="message-box intro">
        <h1>🎉 HAPPY BIRTHDAY, John Doe! 🎉</h1>
        <p>
          Of all the days in the year, today stands out — because the world became a 
          little brighter the moment you came into it.
        </p>
        <p>
          You deserve joy, magic, and beautiful memories. Your surprise begins below. ✨
        </p>
      </div>


      <BirthdayCard />
      <Balloons />
      <BirthdayCake />
      <MessageBox />
    </div>
  </div>
</template>
<style scoped>
.app {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  position: relative;
}

.message-box.intro {
  background: white;
  border-radius: 20px;
  padding: 50px;
  margin: 50px auto;
  max-width: 700px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.message-box.intro h1 {
  font-size: 3em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
}

.message-box.intro p {
  font-size: 1.2em;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .message-box.intro {
    padding: 30px;
  }

  .message-box.intro h1 {
    font-size: 2em;
  }
}
</style>