<template>
  <div id="app">
    <div id="app-header">HEADER</div>
    <router-view />
    <div class="text-bold">FOOTER</div>
  </div>
</template>

<style>
.text-bold {
  font-weight: 500;
}
</style>
