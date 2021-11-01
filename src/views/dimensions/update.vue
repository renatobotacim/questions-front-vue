<template>
  <v-container>
    <div class="about">
      <h2 mb-2>Editar Dimensão</h2>
    </div>

      <v-flex>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="dataForm.question"
              :rules="questionRules"
              label="Pergunta"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              :items="dimensions"
              v-model="dataForm.dimension_id"
              item-text="name"
              item-value="id"
              label="Dimensão"
              required
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-btn dark small class="mr-4" color="success" @click="save()" :disabled="dataForm == ''">Salvar</v-btn>
            <v-btn dark small color="red darken-1" @click="cancel()">Cancelar</v-btn>
          </v-col>
        </v-row>
      </v-flex>


    {{this.dataForm}}
  </v-container>
</template>
<script>
export default {
  data: () => ({
    dataForm:{},
    dimensions: [{"id":'1', 'name':'Bem-estar'}, {"id":'2', 'name':'teste'}],
    valid: true,
    questionRules: [(v) => !!v || "Este campo é obrigatório!"],
  }),
  methods: {
    save () {
    },
    cancel(){
      this.$router.push("/questions");
    }
  },
};
</script>