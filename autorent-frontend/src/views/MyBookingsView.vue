<template>
  <div class="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
    
    <div class="max-w-4xl mx-auto">
      
      <h1 class="text-3xl font-extrabold text-gray-900 mb-8">
        Мои бронирования
      </h1>

      <div v-if="bookings.length > 0" class="space-y-4">
        
        <div 
          v-for="b in bookings" 
          :key="b.id" 
          class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border-l-4 border-blue-500"
        >
          <div class="p-6 sm:flex sm:justify-between sm:items-center">
            
            <div class="mb-4 sm:mb-0">
              <h3 class="text-xl font-bold text-gray-800">
                {{ b.carBrand }} {{ b.carModel }}
              </h3>
              
              <div class="mt-2 text-sm text-gray-600 flex flex-col sm:flex-row gap-1 sm:gap-4">
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span>C: <strong>{{ formatDate(b.startDate) }}</strong></span>
                </div>

                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>По: <strong>{{ formatDate(b.endDate) }}</strong></span>
                </div>
              </div>
            </div>

            <div class="flex items-center">
              <span 
                :class="getStatusClass(b.status)"
                class="px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide"
              >
                {{ b.status }}
              </span>
            </div>

          </div>
        </div>

      </div>

      <div v-else class="text-center bg-white rounded-lg shadow p-10">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900">Нет бронирований</h3>
        <p class="mt-1 text-sm text-gray-500">Вы еще не арендовали ни одного автомобиля.</p>
        <div class="mt-6">
          <router-link
            to="/cars"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Выбрать автомобиль
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getMyBookings } from "../api/booking";
import type { Booking } from "../types/Booking";

const bookings = ref<Booking[]>([]);

onMounted(async () => {
  try {
    bookings.value = await getMyBookings();
  } catch (error) {
    console.error("Failed to load bookings", error);
  }
});

function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getStatusClass(status: string) {
  const normalized = status.toLowerCase();
  switch (normalized) {
    case "confirmed":
      return "bg-green-100 text-green-800"; 
    case "pending":
      return "bg-yellow-100 text-yellow-800"; 
    case "canceled":
      return "bg-red-100 text-red-800"; 
    case "completed":
      return "bg-gray-100 text-gray-800"; 
    default:
      return "bg-blue-100 text-blue-800"; 
  }
}
</script>