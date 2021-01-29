<template>
  <div class="app">
    <v-container fluid fill-height>
      <v-row align="center" class="justify-center">
        <v-col md="6">
          <h1 class="OfflinePage-icon float-left display-3 mr-4">
            <i class="fa fa-chain-broken fa-2x"></i>
          </h1>
          <h4 class="pt-3">{{ $t("offline.pageTitle") }}</h4>
          <br />
          <p class="text-muted">{{ $t("offline.pageSubtitle") }}</p>
          <!-- <v-progress-circular indeterminate color="primary"></v-progress-circular> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="sass" scoped>
.OfflinePage-icon
  padding-bottom: 0.6em
  color: rgb(115, 129, 143)

.justify-center
  justify-content: center
</style>
