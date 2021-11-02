<template>
  <v-container>
    <v-row class="mt-3">
      <v-col cols="12" md="6">
        <h2><v-icon> mdi-comment-edit-outline </v-icon>&nbsp;Editar Pergunta</h2>
      </v-col>
    </v-row>

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
            <v-btn dark small class="mr-4" color="success" @click="update()" :disabled="dataForm == ''">Salvar</v-btn>
            <v-btn dark small color="red darken-1" @click="cancel()">Cancelar</v-btn>
          </v-col>
        </v-row>
      </v-flex>
  </v-container>
</template>
<script>
import questionsService from "@/services/questionsService";
import dimensionsService from "@/services/dimensionsService";
export default {
  data: () => ({
    dataForm: {},
    dimensions: [],
    valid: true,
    questionRules: [(v) => !!v || "Este campo é obrigatório!"],
  }),

  methods: {
    findAllDimensions: async function () {
      this.loading = true;
      let serviceDimension = new dimensionsService();
      try {
        let res = await serviceDimension.findAll();
        this.dimensions = res.data;
      } catch (e) {
        this.$router.push("../questions");
        console.error(e);
      }
    },

    readQuestions: async function () {
      this.loading = true;
      let serviceQuestions = new questionsService();
      try {
        let res = await serviceQuestions.findById(this.$route.params.id);
        this.dataForm = res.data;
      } catch (e) {
        this.$router.push("../questions");
        console.error(e);
      }
    },

    update: async function () {
      try {
        let serviceQuestions = new questionsService();
        await serviceQuestions.update(this.$route.params.id, this.dataForm);
        this.$router.push("/questions");
        this.$showAlert("Registro Cadastrado com sucesso", "success");
      } catch (error) {
        this.$showAlert(error.response.data.message, "error");
        console.log(error);
      }
    },

    cancel() {
      this.$router.push("/questions");
    },
  },
  mounted() {
    this.findAllDimensions();
    this.readQuestions();
  },
};
</script>