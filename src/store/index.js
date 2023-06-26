import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roles: []
  },
  getters: {
    allRoles: state => state.roles
  },
  actions: {
    addRole({ commit }, role) {
      commit("add_role", role);
    },
    deleteRole({ commit }, id) {
      commit("delete_role", id);
    },
    updateRole({ commit }, role) {
      commit("update_role", role);
    }
  },
  mutations: {
    add_role(state, role) {
      state.roles.push(role);
      localStorage.setItem("roles", JSON.stringify(state.roles));
    },
    delete_role(state, id) {
      state.roles = state.roles.filter(role => role.id !== id);
      localStorage.setItem("roles", JSON.stringify(state.roles));
    },
    update_role(state, updatedRole) {
      const index = state.roles.findIndex(role => role.id === updatedRole.id);
      if (index !== -1) {
        state.roles.splice(index, 1, updatedRole);
        localStorage.setItem("roles", JSON.stringify(state.roles));
      }
    }
  }
});
