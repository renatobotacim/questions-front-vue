<template>
  <v-container>
    <v-row class="mt-3">
      <v-col cols="12" md="6">
        <h2><v-icon> mdi-comment-edit-outline </v-icon>&nbsp;Editar Dimensão</h2>
      </v-col>
    </v-row>

      <v-flex>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="dataForm.name"
              :rules="questionRules"
              label="Nome da Dimensão"
              required
            ></v-text-field>
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
import dimensionsService from "@/services/dimensionsService";
export default {
  data: () => ({
    dataForm: {},
    dimensions: [],
    valid: true,
    questionRules: [(v) => !!v || "Este campo é obrigatório!"],
  }),

  methods: {

    readDimension: async function () {
      this.loading = true;
      let serviceDimensions = new dimensionsService();
      try {
        let res = await serviceDimensions.findById(this.$route.params.id);
        this.dataForm = res.data;
      } catch (e) {
        this.$router.push("../dimensions");
        console.error(e);
      }
    },

    update: async function () {
      try {
        let serviceDimensions = new dimensionsService();
        await serviceDimensions.update(this.$route.params.id, this.dataForm);
        this.$router.push("/dimensions");
        this.$showAlert("Registro Cadastrado com sucesso", "success");
      } catch (error) {
        this.$showAlert(error.response.data.message, "error");
        console.log(error);
      }
    },

    cancel() {
      this.$router.push("/dimensions");
    },
  },
  mounted() {
    this.readDimension();
  },
};
</script>