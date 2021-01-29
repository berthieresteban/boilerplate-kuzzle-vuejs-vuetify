<template>
  <div>
    <v-app-bar dark>
      <router-link class="navbar-brand" to="/">
        <img
          class="navbar-brand-full"
          height="40"
          alt="logo"
          src="../assets/logo.png"
        />
      </router-link>
      <v-btn type="button" class="btn btn-secondary" @click="drawer = true">
        <i class="fa fa-bars"></i>
        <span class="sr-only">Toggle Menu</span>
      </v-btn>
      <v-spacer></v-spacer>
      <locale-changer />

      <div class="d-md-down-none navbar-text-color">{{ currentUsername }}</div>
      <v-btn
        class="d-md-down-none"
        data-cy="logout"
        name="logout"
        @click="logout"
      >
        <i class="fas fa-sign-out-alt navbar-text-color"></i>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      id="sidebar"
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list dense nav>
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.url"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LocaleChanger from "../components/LocaleChanger";

export default {
  name: "DefaultContainer",
  components: {
    LocaleChanger,
  },
  computed: {
    ...mapGetters("auth", ["currentUsername"]),
    navItems() {
      return [
        {
          name: this.$t("sidebar.home"),
          url: "/",
          icon: "fas fa-home",
        },
      ];
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/LOG_OUT", this.$kuzzle).then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>
