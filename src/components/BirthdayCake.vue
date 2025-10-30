<script setup>
import { ref } from 'vue'
import { launchFireworks } from '../utils/animations'

const candlesBlown = ref(false)

const blowCandles = () => {
  if (!candlesBlown.value) {
    candlesBlown.value = true
    launchFireworks()
    setTimeout(() => {
      alert('🎂 Make a wish! May all your dreams come true!')
    }, 500)
  }
}
</script>

<template>
  <div class="cake-wrapper">
    <p class="instruction">👇 Click the cake for a surprise! 👇</p>
    <div class="cake-container">
      <div class="cake" @click="blowCandles">
        <div class="cake-layer">
          <div class="candle">
            <div v-if="!candlesBlown" class="flame"></div>
          </div>
        </div>
        <div class="cake-layer"></div>
        <div class="cake-layer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cake-wrapper {
  margin: 80px 0;
}

.instruction {
  color: white;
  text-align: center;
  font-size: 1.2em;
  margin: 20px 0;
  animation: pulse 2s infinite;
}

.cake-container {
  text-align: center;
}

.cake {
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s;
}

.cake:hover {
  transform: scale(1.1);
}

.cake-layer {
  width: 200px;
  height: 60px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 10px;
  margin: 5px auto;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.cake-layer:nth-child(2) {
  width: 250px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.cake-layer:nth-child(3) {
  width: 300px;
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.candle {
  width: 10px;
  height: 40px;
  background: #fff;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px 5px 0 0;
}

.flame {
  width: 20px;
  height: 25px;
  background: radial-gradient(circle, #ff6b6b, #feca57);
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: flicker 0.3s infinite alternate;
}

@keyframes flicker {
  0% { transform: translateX(-50%) scale(1); }
  100% { transform: translateX(-50%) scale(1.1); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
</style>
