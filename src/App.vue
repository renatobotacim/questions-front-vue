<template>
  <v-app>
    <v-app-bar app color="white text--grey darken-4">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div class="d-flex align-center">
              <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="./assets/logo.png"
                transition="scale-transition"
                width="100"
              />
            </div>
          </v-col>
          <v-col cols="12" class="text-right pt-5" md="6">
            <v-btn to="/questions" text color="">
              <span>Perguntas</span>
            </v-btn>
            <v-btn to="/dimensions" text>
              <span>Dimensões</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer dark padless class="mt-7">
      <v-col cols="12 " class="white--text text-center">
        <v-card-text class="white--text pt-2">
          Vamos construir juntos uma cultura de transparência, confiança e
          colaboração!<br />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <strong>
            © {{ new Date().getFullYear() }} Pulses Serviços Digitais Ltda -
            Todos os direitos reservados
          </strong>
        </v-card-text>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
  }),
};
</script>
