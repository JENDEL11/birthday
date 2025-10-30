<script setup>
import { ref } from 'vue'
import { createConfetti } from '../utils/animations'

const balloons = ref([
  { id: 1, popped: false, gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', delay: '0s' },
  { id: 2, popped: false, gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', delay: '0.5s' },
  { id: 3, popped: false, gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', delay: '1s' },
  { id: 4, popped: false, gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', delay: '1.5s' }
])

const balloonsPopped = ref(0)

const popBalloon = (index) => {
  if (!balloons.value[index].popped) {
    balloons.value[index].popped = true
    balloonsPopped.value++
    createConfetti(20)

    if (balloonsPopped.value === 4) {
      setTimeout(() => {
        alert('🎉 You popped all the balloons! You\'re awesome!')
      }, 600)
    }
  }
}
</script>

<template>
  <div class="balloons-wrapper">
    <p class="instruction">👇 Pop the balloons by clicking them! 👇</p>
    <div class="balloons-container">
      <div
        v-for="(balloon, index) in balloons"
        :key="balloon.id"
        class="balloon"
        :class="{ popped: balloon.popped }"
        :style="{
          background: balloon.gradient,
          animationDelay: balloon.delay
        }"
        @click="popBalloon(index)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.balloons-wrapper {
  margin: 80px 0;
}

.instruction {
  color: white;
  text-align: center;
  font-size: 1.2em;
  margin: 20px 0;
  animation: pulse 2s infinite;
}

.balloons-container {
  text-align: center;
}

.balloon {
  display: inline-block;
  width: 80px;
  height: 100px;
  margin: 0 20px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  animation: float 3s ease-in-out infinite;
}

.balloon:hover {
  transform: translateY(-20px) scale(1.1);
}

.balloon::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: 50%;
  width: 2px;
  height: 50px;
  background: rgba(255, 255, 255, 0.5);
}

.balloon.popped {
  animation: pop 0.5s forwards;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes pop {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@media (max-width: 768px) {
  .balloon {
    width: 60px;
    height: 75px;
    margin: 0 10px;
  }
}
</style>
