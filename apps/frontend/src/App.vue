<template>
  <div id="app">
    <router-view v-if="!$store.state.app.waitingForConnection" />
    <offline v-else />
    <v-snackbar v-model="offlineToast" bottom right :timeout="-1">
      {{ $t("offline.title") }}
      {{ $t("offline.message") }}
    </v-snackbar>
  </div>
</template>

<script>
import Offline from "@/views/Offline";

export default {
  name: "App",
  components: {
    Offline,
  },
  data() {
    return {
      offlineToast: false,
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    online() {
      return this.$store.state.app.online;
    },
  },
  methods: {
    checkConnection() {
      if (this.online === false) {
        this.offlineToast = true;
      } else {
        this.offlineToast = false;
      }
    },
    async logout() {
      await this.$store.dispatch("auth/LOG_OUT", this.$kuzzle);
      this.$router.go("/");
    },
  },
  watch: {
    locale(newValue) {
      if (newValue) {
        localStorage.setItem("locale", this.locale);
      }
    },
    online: {
      immediate: false,
      handler() {
        this.checkConnection();
      },
    },
  },
  async mounted() {
    /**
     * APPLICATION BOOTSTRAP -- refactor this in a service if necessary.
     */
    this.$kuzzle.addListener("connected", () => {
      this.$store.commit("app/SET_ONLINE");
    });
    this.$kuzzle.addListener("reconnected", () => {
      this.$store.commit("app/SET_ONLINE");
    });
    this.$kuzzle.addListener("disconnected", () => {
      this.$store.commit("app/SET_OFFLINE");
    });
    this.$kuzzle.addListener("tokenExpired", () => {
      this.$store.dispatch("auth/LOG_OUT");
      this.$router.push({ name: "login" });
    });
    const persistedLocale = localStorage.getItem("locale");
    if (persistedLocale) {
      this.$i18n.locale = persistedLocale;
    }
    await this.$kuzzle.connect();
    // Avoids showing the toast as soon as the app loads
    setTimeout(() => {
      this.checkConnection();
    }, 1000);
  },
};
</script>

<style lang="scss">
// CoreUI Icons Set
/* Import Font Awesome Icons Set */
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome.scss";
@import "assets/style";
@import "~@fortawesome/fontawesome-free/css/all.min.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.sidebar-nav {
  text-align: left;
}
</style>
