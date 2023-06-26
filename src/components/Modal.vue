<template>
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
  
  .modal-dialog {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-width: 500px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
  }
  
  .modal-content {
    display: flex;
    flex-direction: column;
  }
  </style>
  