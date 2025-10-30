<script setup>
import { ref } from 'vue'

const emit = defineEmits(['start'])

const startExperience = () => {
  emit('start')
}
</script>

<template>
  <div class="entrance">
    <div class="entrance-content">
      <h1>🎁 You're Invited! 🎁</h1>
      <button class="start-btn" @click="startExperience">Click to Start the Surprise!</button>
    </div>
  </div>
</template>

<style scoped>
.entrance {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 1s, transform 1s;
}

.entrance-content {
  text-align: center;
  color: white;
}

.entrance-content h1 {
  font-size: 4em;
  margin-bottom: 30px;
  animation: pulse 1.5s infinite;
}

.start-btn {
  padding: 20px 50px;
  font-size: 1.5em;
  background: white;
  color: #f5576c;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.start-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@media (max-width: 768px) {
  .entrance-content h1 {
    font-size: 2.5em;
  }
}
</style>
