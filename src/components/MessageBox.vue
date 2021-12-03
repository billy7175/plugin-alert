<template>
  <div class="modal-layout">
    <div class="modal">
      <p class="modal__message">{{ message }}</p>
      <div class="modal__wrapper">
        <ch-button
          @click="cancalAlert"
          v-show="type === 'confirm'"
          class="modal__button -cancel"
          >{{ cancelText }}</ch-button
        >
        <ch-button
          type="is-primary"
          class="modal__button -confirm"
          @click="confirmAlert"
          >{{ confirmText }}</ch-button
        >
      </div>
    </div>
  </div>
</template>
<script>
// import ChButton from "./ChButton.vue";

export default {
  name: "MessageBox",
  // components: {
  //   "ch-button": ChButton,
  // },
  props: {
    message: {
      type: String,
      default: "메시지명을 입력해주세요.",
    },
    confirmText: {
      type: String,
      default: "확인",
    },
    cancelText: {
      type: String,
      default: "취소",
    },
    type: {
      type: String,
      default: "success",
      validator(value) {
        const validation = ["success", "confirm", "warning"];
        return validation.includes(value);
      },
    },
  },
  data() {
    return {
      selected: true,
      isConfirmed: true
    };
  },
  methods: {
    cancalAlert() {},
    confirmAlert() { },
  },
};
</script>

<style scoped>
.modal-layout {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #161930;
  /* padding: 10px; */
  /* border: 1px solid red; */
  min-width: 100px;
  min-height: 50px;
  border-radius: 6px;
}

.modal__message {
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  margin: 20px;
}

.modal__wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}
.modal__button {
}

.modal__button.-confirm {
}
.modal__button.-cancel {
  color: #161930;
}
</style>  