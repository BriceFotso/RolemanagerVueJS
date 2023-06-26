<template>
  <div id="app" class="container">
    <RoleInput />
    <RoleList />
  </div>
</template>

<script>
import RoleInput from "@/components/RoleInput";
import RoleList from "@/components/RoleList";

export default {
  name: "App",
  components: {
    RoleInput,
    RoleList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
