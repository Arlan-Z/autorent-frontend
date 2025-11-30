<template>
  <div>
    <h1>My Bookings</h1>

    <div v-for="b in bookings" :key="b.id" class="booking">
      <p>
        <strong>{{ b.carBrand }} {{ b.carModel }}</strong>
      </p>
      <p>{{ b.startDate }} → {{ b.endDate }}</p>
      <p>Status: {{ b.status }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getMyBookings } from "../api/booking";
import type { Booking } from "../types/Booking";

const bookings = ref<Booking[]>([]);

onMounted(async () => {
  bookings.value = await getMyBookings();
});
</script>