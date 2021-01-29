<template>
  <div class="locale-changer">
    <v-select id="locale-selector" v-model="$i18n.locale" :items="langs">
    </v-select>
  </div>
</template>

<script>
import { i18n } from "@/config.json";

export default {
  name: "locale-changer",
  computed: {
    langs() {
      return Object.keys(i18n.locales).map((l) => ({
        value: l,
        text: i18n.locales[l],
      }));
    },
  },
};
</script>
