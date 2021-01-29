<template>
  <v-form @submit.prevent="login">
    <v-card-title>
      <h1>{{ $t("login.title") }}</h1>
    </v-card-title>
    <v-card-text>
      <p class="text-muted">{{ $t("login.subtitle") }}</p>
      <v-text-field
        prepend-icon="icon-user"
        v-model="username"
        type="text"
        name="username"
        data-cy="username"
        class="form-control"
        :placeholder="$t('login.usernamePlaceholder')"
        autocomplete="username email"
      />
      <v-text-field
        v-model="password"
        prepend-icon="icon-lock"
        type="password"
        name="password"
        data-cy="password"
        class="form-control"
        :placeholder="$t('login.passwordPlaceholder')"
        autocomplete="current-password"
      />
      <v-row>
        <v-col cols="12">
          <div v-if="this.errorMessage" class="alert alert-danger" role="alert">
            {{ translatedError }}
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="primary" class="px-4" data-cy="Login-btn" type="submit">{{
        $t("login.submitLabel")
      }}</v-btn>
      <v-spacer />
      <locale-changer />
    </v-card-actions>
  </v-form>
</template>

<script>
import LocaleChanger from "@/components/LocaleChanger";

export default {
  name: "LoginForm",
  components: {
    LocaleChanger,
  },
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  mounted() {},
  methods: {
    async login() {
      const credentials = { username: this.username, password: this.password };
      this.setErrorMessage("");

      this.$store
        .dispatch("auth/LOGIN", { credentials, kuzzle: this.$kuzzle })
        .then(() => {
          if (this.$route.query.to) {
            this.$router.push({ name: this.$route.query.to });
            return;
          }
          this.$router.push("/");
        })
        .catch((error) => {
          this.setErrorMessage(error.message);
        });
    },
    setErrorMessage(errorMessage) {
      this.errorMessage = errorMessage;
    },
  },
  computed: {
    translatedError() {
      if (this.errorMessage.match(/wrong.*username.*password/)) {
        return this.$t("login.errors.badCredentials");
      }
      if (this.errorMessage.match(/Missing.*credentials/)) {
        return this.$t("login.errors.missingCredentials");
      }
      if (this.errorMessage.match(/.*not connected to.*/)) {
        return this.$t("login.errors.notConnected");
      }
      console.error(this.errorMessage);
      return this.$t("login.errors.generic");
    },
  },
};
</script>

<style scoped lang="scss">
.alert {
  margin-top: 2em;
}
</style>
