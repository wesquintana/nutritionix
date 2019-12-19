<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link :to="{name: 'logs'}">Logs</router-link>
    <router-view />
  </div>
</template>
