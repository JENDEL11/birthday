<script setup>
import { ref } from 'vue'
import { createConfetti, launchFireworks, makeItRain } from '../utils/animations'

const showMessage1 = ref(false)
const showMessage2 = ref(false)
const showEndMessage = ref(false) // ✅ NEW

const toggleMessage = (num) => {
  if (num === 1) {
    showMessage1.value = !showMessage1.value
    if (showMessage1.value) createConfetti(50)
  } else if (num === 2) {
    showMessage2.value = !showMessage2.value
    if (showMessage2.value) createConfetti(50)
  } else if (num === 3) {
    showEndMessage.value = !showEndMessage.value      // ✅ NEW
    if (showEndMessage.value) launchFireworks()       // dapat WOW!
  }
}
</script>


<template>
  <div class="message-box">
    <h1>More Surprises!</h1>
    <button class="surprise-btn" @click="toggleMessage(1)">🎁 Surprise #1</button>
    <button class="surprise-btn" @click="toggleMessage(2)">✨ Surprise #2</button>
      <!-- ✅ NEW END MESSAGE BUTTON -->
    <button class="surprise-btn" @click="toggleMessage(3)">💖 Final Message</button>
    <button class="surprise-btn" @click="launchFireworks">🎆 Launch Fireworks!</button>
    <button class="surprise-btn" @click="makeItRain">🎊 Confetti Rain!</button>

    <div class="hidden-message" :class="{ show: showMessage1 }">
       <div class="card-face card-back">
  <div class="typewriter-container">
    <h2 class="typewriter-title">🌟 You're Amazing! 🌟</h2>

    <p class="typewriter-text">
      Huwag na huwag mong kakalimutan kung gaano ka ka–special. Hindi lang dahil sa mga
      nagagawa mo, kundi dahil sa kung sino ka bilang tao — mabait, maalaga, at totoo.
    </p>

    <p class="typewriter-text delay-2">
      Sobra akong nagpapasalamat na nandiyan ka sa buhay ko. Yung presence mo palang,
      sapat na para gumaan ang araw ko. Salamat sa tawanan, sa kwentuhan, at sa lahat
      ng moment na hindi ko malilimutan.
    </p>

    <p class="typewriter-text delay-3">
      Sana sa mga susunod pang taon, manatili kang masaya, fulfilled, at surrounded
      ng mga taong tunay na nagmamahal at nag–appreciate sa’yo — kasama na ako doon.
      Cheers to more memories, more adventures, and more birthdays together! 🥂✨
    </p>
  </div>
</div>
    </div>

<div class="hidden-message sparkle" :class="{ show: showMessage2 }">
  <h2>🎈 Fun Fact! 🎈</h2>

  <p>
    Congratulations! Level up ka na ulit! 🎮✨<br>
    +1 Charisma<br>
    +1 Happiness<br>
    +1 Cuteness (pero tbh, max stats ka na talaga doon 😎)<br>
    +999 sa <strong>"Making People Smile"</strong><br>
    +∞ sa <strong>"Being Unforgettable"</strong>
  </p>

  <p style="margin-top: 14px;">
    Alam mo ba? Hindi lahat ng tao may ganitong effect.  
    Yung presence mo palang, parang <em>cheat code</em> sa good vibes.  
    You bring warmth, comfort, and light effortlessly —  
    and that’s something rare.
  </p>

  <p style="margin-top: 14px;">
    Today isn’t just about celebrating another year...  
    <strong>it's about celebrating YOU.</strong>  
    Your kindness. Your softness.  
    The way you make people feel seen and valued — kahit simpleng gesture lang.
  </p>

  <p style="margin-top: 14px;">
    Promise, kung may leaderboard sa pagiging amazing?  
    Top 1 ka. Always. 🏆✨
  </p>
</div>

<!-- ✅ NEW FINAL MESSAGE -->
    <div class="hidden-message" :class="{ show: showEndMessage }" style="text-align:center;">
      <h2>💞 Final Surprise 💞</h2>

      <p style="font-size: 1.3rem; margin-top: 15px;">
        Thank you for letting me be a part of your day.<br>
        You deserve all the love, joy, and happiness in this world.
      </p>

      <p style="margin-top: 12px;">
        No matter what happens next —<br>
        <strong>you are loved, you are appreciated, and you are enough.</strong>
      </p>

      <p style="margin-top: 20px; font-size: 1.2rem;">
        🌟 <em>May this year be the most magical chapter of your story.</em> 🌟
      </p>

      <h3 style="margin-top: 25px;">— end of surprises... for now 😉✨</h3>
    </div>

  </div>
</template>

<style scoped>
/* Sparkle glow + floating sparkles around the message */
.sparkle {
  position: relative;
  animation: glow 2.5s ease-in-out infinite alternate;
}

/* Heading glow */
.sparkle h2 {
  text-shadow: 0 0 10px #ffdf88, 0 0 20px #ffb94a;
}

/* Sparkle particles */
.sparkle::before,
.sparkle::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  opacity: 0;
  animation: sparkleFloat 2.5s infinite ease-in-out;
}

.sparkle::before {
  background: #ffdf88;
  top: -10px;
  left: 20px;
}

.sparkle::after {
  background: #fff1c9;
  bottom: -10px;
  right: 15px;
  animation-delay: 1.2s;
}

/* Glow breathing animation */
@keyframes glow {
  0% {
    box-shadow: 0 0 8px rgba(255, 230, 150, 0.3);
  }
  100% {
    box-shadow: 0 0 25px rgba(255, 204, 100, 0.7);
  }
}

/* Sparkle floating animation */
@keyframes sparkleFloat {
  0% {
    transform: scale(0.4) translateY(0);
    opacity: 0;
  }
  50% {
    transform: scale(1) translateY(-12px);
    opacity: 1;
  }
  100% {
    transform: scale(0.4) translateY(0);
    opacity: 0;
  }
}

/* Typewriter animation */
.typewriter-container {
  text-align: center;
  padding: 20px;
}

.typewriter-title {
  font-size: 2rem;
  margin-bottom: 15px;
  animation: fadeIn 1s ease-in-out forwards;
  opacity: 0;
}

.typewriter-text {
  width: 100%;
  margin: 15px auto;
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3s steps(40, end), fadeIn 0.5s ease-in forwards;
}

.delay-2 {
  animation-delay: 3.5s;
}

.delay-3 {
  animation-delay: 7s;
}

@keyframes typing {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

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
