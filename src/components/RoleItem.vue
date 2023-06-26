<template>
  <div>
    <div class="row my-3 justify-content-between align-items-center">
      <div class="row align-items-center">
        <div class="text-center">
          <!-- <feather-icon-edit size="16" class="btn btn-link mx-2" @click="openModal" />
          <feather-icon-trash-2 size="16" class="btn btn-link" @click="deleteRole(role.id)" /> -->
          <button @click="openModal" class="btn btn-link mx-2">
            <i class="bi bi-pencil text-primary align-middle"></i>
          </button>
          <button @click="deleteRole(role.id)" class="btn btn-link">
            <i class="bi bi-trash text-danger align-middle"></i>
          </button>
        </div>
      </div>
    </div>

    <Modal v-if="showModal" @close="closeModal">
      <div class="modal-header">
        <h5 class="modal-title">Edit Role</h5>
        <button type="button" class="close" @click="closeModal">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="updateRoleI">
          <div class="form-group">
            <label for="roleText">Role Name</label>
            <input v-model="roleText" type="text" class="form-control" id="roleText">
          </div>
          <div class="form-group">
            <label for="permissionText">Permission</label>
            <input v-model="permissionText" type="text" class="form-control" id="permissionText">
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import { FeatherIconEdit, FeatherIconTrash2 } from "vue-feather-icons";
import Modal from "@/components/Modal";

export default {
  props: {
    role: {}
  },
  components: {
    // FeatherIconEdit,
    // FeatherIconTrash2,
    Modal
  },
  data() {
    return {
      roleText: this.role.title,
      permissionText: this.role.permission,
      showModal: false
    };
  },
  methods: {
    ...mapActions(["deleteRole", "updateRole"]),
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    updateRoleI() {
      const updatedRole = {
        ...this.role,
        title: this.roleText,
        permission: this.permissionText
      };
      this.updateRole(updatedRole);
      this.closeModal();
    }
  }
};
</script>

<style scoped>
</style>
