<template>
  <div class="hello">
    <ch-button @click="fetchData">데이터 호출</ch-button>
    <ch-button @click="deleteData">데이터 삭제</ch-button>
    <ch-button @click="updateData">데이터 수정</ch-button>
    <ch-button type="is-primary" @click="addData">데이터 추가</ch-button>
  </div>
</template>

<script>
import ChButton from "./ChButton.vue";

export default {
  name: "HelloWorld",
  components: {
    "ch-button": ChButton,
  },
  methods: {
    fetchData() {
      this.$alert("데이터를 호출하시겠습니까 ?", "confirm")
        .then(() => {
          this.$emit("getUserData", [
            {
              id: (Math.random() * 100000).toFixed(2),
              name: "charlie",
              job: "police",
            },
            {
              id: (Math.random() * 100000).toFixed(2),
              name: "billy",
              job: "developer",
            },
            {
              id: (Math.random() * 100000).toFixed(2),
              name: "charlie",
              job: "police",
            },
          ]);
        })
        .catch(() => this.$alert("데이터 호출을 취소합니다."));
    },
    addData() {
      this.$alert("데이터를 추가하시겠습니까?.", "confirm", {
        confirmButtonText: "confirmButtonText",
        cancelButtonText: "cancelButtonText",
      })
        .then(() => {
          this.$alert("성공적으로 데이터를 추가했습니다.", "success", {
            confirmButtonText: "confirmButtonText",
            cancelButtonText: "cancelButtonText",
          });
        })
        .catch(() => {
          this.$alert("데이터 추가를 취소합니다.");
        });
    },
    deleteData() {
      this.$alert("정말 삭제하시겠습니까?.", "confirm", {
        confirmButtonText: "confirmButtonText",
        cancelButtonText: "cancelButtonText",
      })
        .then(() => {
          console.log("콜백 호출울");
          this.$emit('deleteUserData')
          // this.$alert("성공적으로 데이터를 삭제했습니다.", "success", {
          //   confirmButtonText: "confirmButtonText",
          //   cancelButtonText: "cancelButtonText",
          // });
        })
        .catch(() => {
          this.$alert("데이터 삭제를 취소합니다.");
        });
    },
    updateData() {
      this.$alert("데이터를 수정하시겠습니까?", "confirm")
        .then(() => {
          this.$alert("데이터를 성공적으로 수정했습니다.");
        })
        .catch(() => {
          this.$alert("데이터 수정을 취소합니다.");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
