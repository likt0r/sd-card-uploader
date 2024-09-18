<script setup lang="tsx">
import { Drive } from 'drivelist'
import { ref, onMounted, onUnmounted } from 'vue'
import { getDriveList } from '../utils'
const drives = ref<Drive[]>([])
const scanInterval = ref<any>(0)
onMounted(async () => {
  drives.value = await getDriveList()
  scanInterval.value = setInterval(async () => {
    console.log('scan drives')
    drives.value = await getDriveList()
  }, 2000)
})
onUnmounted(() => {
  console.log('unmounted')
  clearInterval(scanInterval.value)
})
</script>
<template>
  <v-container>
    <v-row no-gutters align="center" class="text-center">
      <v-col cols="12">
        <div v-for="drive in drives.filter((item) => item.isUSB && item.size)" :key="drive.device">
          {{ drive.device }} - {{ drive.description }} - {{ drive.size }} - {{ drive.mountpoints }}
        </div>
      </v-col>
      <v-col cols="12" class="my-4">{{ $t('desc.second-desc') }}</v-col>
    </v-row>
  </v-container>
</template>
