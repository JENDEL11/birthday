<script setup>
import { ref, onMounted } from 'vue'
import EntranceScreen from './components/EntranceScreen.vue'
import BirthdayCard from './components/BirthdayCard.vue'
import Balloons from './components/Balloons.vue'
import BirthdayCake from './components/BirthdayCake.vue'
import MessageBox from './components/MessageBox.vue'
import { makeItRain } from './utils/animations'

const showEntrance = ref(true)

const startExperience = () => {
  showEntrance.value = false
  makeItRain()
}
</script>

<template>
  <div class="app">
    <EntranceScreen v-if="showEntrance" @start="startExperience" />

    <div v-if="!showEntrance" class="container">
      <!-- Intro Message Box -->
      <div class="message-box intro">
        <h1>🎉 HAPPY BIRTHDAY! 🎉</h1>
        <p>Today is YOUR special day, and I wanted to create something extraordinary to celebrate YOU!</p>
        <p>Get ready for some interactive surprises below...</p>
      </div>

      <!-- 3D Card -->
      <BirthdayCard />

      <!-- Interactive Balloons -->
      <Balloons />

      <!-- Birthday Cake -->
      <BirthdayCake />

      <!-- Surprise Buttons -->
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
