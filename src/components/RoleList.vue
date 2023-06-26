<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>ROLE NAME</th>
          <th>PERMISSIONS</th>
          <th class="text-center">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="allRoles.length === 0">
          <td colspan="3">No roles found.</td>
        </tr>
        <tr v-else v-for="role in allRoles" :key="role.id">
          <td>{{ role.title }}</td>
          <td>{{ role.permission }}</td>
          <td>
            <RoleItem :role="role" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import RoleItem from "@/components/RoleItem";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    RoleItem
  },
  computed: {
    ...mapGetters(["allRoles"])
  },
  created() {
    this.retrieveRolesFromLocalStorage();
  },
  methods: {
    ...mapActions(["addRole"]),
    retrieveRolesFromLocalStorage() {
      const storedRoles = JSON.parse(localStorage.getItem("roles")) || [];
      storedRoles.forEach(role => {
        this.addRole(role);
      });
    }
  }
};
</script>

<style scoped>
</style>
