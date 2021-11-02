<template>
  <v-container>
    <v-row class="mt-3">
      <v-col cols="12" md="6">
        <v-card class="mx-auto" max-width="100%">
          <v-card-text>
            <div>Cadastro de</div>
            <p class="text-h4 text--primary">Perguntas</p>
            <div class="text--primary">
              Listagem das pergunras para novo módulo de pesquisas na plataforma
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="teal accent-4" block to="/questions">
              Ver Listagem
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">Origin</p>
                <p>
                  late 16th century (as a noun denoting a place where alms were
                  distributed): from medieval Latin eleemosynarius, from late
                  Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn text color="teal accent-4" @click="reveal = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="mx-auto" max-width="100%">
          <v-card-text>
            <div>Cadastro de</div>
            <p class="text-h4 text--primary">Dimensões</p>
            <div class="text--primary">
              Listagem das dimensões para novo módulo de pesquisas na plataforma
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="teal accent-4" block to="/questions">
              Ver Listagem
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import HelloWorld from '../components/HelloWorld'

export default {
  name: "Home",

  components: {
    //HelloWorld,
  },
};
</script>
