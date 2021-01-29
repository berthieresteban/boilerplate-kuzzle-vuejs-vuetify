<template>
  <div class="app">
    <v-container fill-height>
      <v-row align="center" class="justify-center">
        <v-col cols="4">
          <v-card no-body class="p-4">
            <loginForm />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "loginPage",
  components: {
    LoginForm,
  },
};
</script>

<style lang="sass" scoped>
.justify-center
  justify-content: center
</style>