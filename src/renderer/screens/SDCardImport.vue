<script setup lang="tsx"></script>
<template>
  <v-container>
    <v-row no-gutters align="center" class="text-center">
      <v-col cols="12">
        <v-button> {{ $t('s') }}</v-button>
        <v-button> {{ $t('') }}</v-button>
        <v-button> {{ $t('') }}</v-button>
      </v-col>
      <v-col cols="12" class="my-4">{{ $t('desc.second-desc') }}</v-col>
    </v-row>
  </v-container>
</template>
