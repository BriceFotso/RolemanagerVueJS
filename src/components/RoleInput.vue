<template>
  <div>
    <div class="row justify-content-end mb-3">
      <div class="col-auto">
        <button @click="openModal" class="btn btn-primary">New</button>
      </div>
    </div>

    <Modal v-if="showModal" @close="closeModal">
      <div class="modal-header">
        <h5 class="modal-title">New Role</h5>
        <button type="button" class="close" @click="showModal = false">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="roleNameInput">Role name: </label>
        <input v-model="roleText" class="form-control" type="text" />
        <label for="permissionInput">Permission: </label>
        <input v-model="permissionText" class="form-control" type="text" />
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" @click="addRoleI">Save</button>
        <button class="btn btn-secondary" @click="showModal = false">Cancel</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
import Modal from "@/components/Modal";

export default {
  components: {
    Modal
  },
  data() {
    return {
      roleText: "",
      permissionText: "",
      showModal: false
    };
  },
  methods: {
    ...mapActions(["addRole"]),
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    addRoleI() {
      this.addRole({
        id: v1(),
        title: this.roleText,
        permission: this.permissionText
      });

      this.roleText = "";
      this.permissionText = "";
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
</style>