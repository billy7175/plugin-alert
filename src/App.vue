<template>
  <div id="app">
    <HelloWorld @deleteUserData="deleteUserData" @getUserData="getUserData" />
    <section v-if="users.length > 0" style="margin-top:30px;">
      <table>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.job }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <br>
    <hr>
    <br>
    <div contenteditable="true">contentEditable test</div>
    <p>
      <abbr title="Node Package Manager">NPM</abbr> was founded in 1948.
    </p>
    <p title="Free Web tutorials">W3Schools</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      isShowMessageBox: true,
      users: [],
    };
  },
  methods: {
    getUserData(data) {
      // 이미 데이터를 불러왔을 경우
      if(this.users.length === data.length) {
        this.$alert('이미 데이터를 불러왔습니다.')
        return 
      }
      this.users = data;
    },
    deleteUserData() {
      // 데이터가 존재하면 => 삭제
      if (this.users.length > 0) {
        this.users = [];
        this.$alert("성공적으로 데이터를 삭제했습니다.");
      } else {
        this.$alert("삭제 가능한 데이터가 존재하지 않습니다.");
      }
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

table {
  width: 500px;
  margin: auto;
}

tr,
td {
  border: 1px solid #2c3e50;
}
</style>
