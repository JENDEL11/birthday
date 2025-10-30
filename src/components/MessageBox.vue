<script setup>
import { ref } from 'vue'
import { createConfetti, launchFireworks, makeItRain } from '../utils/animations'

const showMessage1 = ref(false)
const showMessage2 = ref(false)

const toggleMessage = (num) => {
  if (num === 1) {
    showMessage1.value = !showMessage1.value
    if (showMessage1.value) createConfetti(50)
  } else if (num === 2) {
    showMessage2.value = !showMessage2.value
    if (showMessage2.value) createConfetti(50)
  }
}
</script>

<template>
  <div class="message-box">
    <h1>More Surprises!</h1>
    <button class="surprise-btn" @click="toggleMessage(1)">🎁 Surprise #1</button>
    <button class="surprise-btn" @click="toggleMessage(2)">✨ Surprise #2</button>
    <button class="surprise-btn" @click="launchFireworks">🎆 Launch Fireworks!</button>
    <button class="surprise-btn" @click="makeItRain">🎊 Confetti Rain!</button>

    <div class="hidden-message" :class="{ show: showMessage1 }">
      <h2>🌟 You're Amazing! 🌟</h2>
      <p>Never forget how special you are. Your friendship means the world to me, and I'm so grateful to have you in my life. Here's to many more birthdays together!</p>
    </div>

    <div class="hidden-message" :class="{ show: showMessage2 }">
      <h2>🎈 Fun Fact! 🎈</h2>
      <p>Did you know? You're officially one year more awesome today! That's scientifically proven* to be a big deal! (*not really, but we both know it's true 😄)</p>
    </div>
  </div>
</template>

<style scoped>
.message-box {
  background: white;
  border-radius: 20px;
  padding: 50px;
  margin: 50px auto;
  max-width: 700px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.message-box h1 {
  font-size: 3em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
}

.surprise-btn {
  padding: 15px 40px;
  font-size: 1.2em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  margin: 10px;
}

.surprise-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
}

.hidden-message {
  display: none;
  margin-top: 30px;
  padding: 30px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 15px;
  animation: slideDown 0.5s;
}

.hidden-message.show {
  display: block;
}

.hidden-message h2 {
  font-size: 1.8em;
  margin-bottom: 15px;
  color: #333;
}

.hidden-message p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .message-box {
    padding: 30px;
  }

  .message-box h1 {
    font-size: 2em;
  }
}
</style>
