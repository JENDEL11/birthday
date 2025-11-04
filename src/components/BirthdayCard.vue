<script setup>
import { ref } from 'vue'
import { createConfetti } from '../utils/animations'

const cardFlipped = ref(false)

const flipCard = () => {
  cardFlipped.value = !cardFlipped.value
  if (cardFlipped.value) {
    createConfetti(100)
  }
}
</script>

<template>
  <div class="card-wrapper">
    <p class="instruction">👇 Click the card to flip it! 👇</p>
    <div class="card-scene">
      <div
        class="card-3d"
        :class="{ flipped: cardFlipped }"
        @click="flipCard"
      >
        <div class="card-face card-front">
          <div>
            <div style="font-size: 3em;">🎂</div>
            <div>Click to Open!</div>
          </div>
        </div>
        <div class="card-face card-back">
          <div>
  <h2>Wishing You...</h2>
  <p>
    A year filled with gentle mornings, peaceful nights, and days that overflow with
    happiness. May you continue to grow into the person you're meant to be — confident,
    inspired, and surrounded by love in every season of life.
  </p>
  <p>
    May you find joy in the little things, strength during challenges, and courage to
    chase every dream that makes your heart beat a little faster. The world is brighter
    because you're in it — and this year is ready to show you just how loved you truly are. ✨💖
  </p>
</div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  margin: 50px 0;
}

.instruction {
  color: white;
  text-align: center;
  font-size: 1.2em;
  margin: 20px 0;
  animation: pulse 2s infinite;
}

.card-scene {
  perspective: 1500px;
  margin: 50px auto;
  width: 600px;
  height: 400px;
}

.card-3d {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
  cursor: pointer;
}

.card-3d.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.card-front {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  color: #333;
}

.card-back {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #333;
  transform: rotateY(180deg);
  padding: 40px;
  text-align: center;
}

.card-back h2 {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.card-back p {
  font-size: 0.5em;
  line-height: 1.6;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@media (max-width: 768px) {
  .card-scene {
    width: 90%;
    height: 300px;
  }
}
</style>
