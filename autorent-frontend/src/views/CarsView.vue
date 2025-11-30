<template>
  <div>
    <h1>Cars</h1>

    <div class="cars">
      <div v-for="car in cars" :key="car.id" class="car">
        <img :src="car.imageUrl ?? ''" width="200" />
        <h3>{{ car.brand }} {{ car.model }}</h3>
        <p>{{ car.year }}</p>
        <p>{{ car.priceHour }}$ / hour</p>

        <button @click="book(car.id)">Book</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getCars } from "../api/cars";
import { createBooking } from "../api/booking";
import type { Car } from "../types/Car";

const cars = ref<Car[]>([]);

onMounted(async () => {
  cars.value = await getCars();
});

async function book(id: number) {
  const start = new Date().toISOString();
  const end = new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString();

  await createBooking(id, start, end);
  alert("Car booked!");
}
</script>

<style scoped>
.cars {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.car {
  padding: 16px;
  background: #f4f4f4;
  border-radius: 8px;
  width: 250px;
}
</style>
