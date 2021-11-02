<template>
  <v-container>
    <v-row class="mt-3">
      <v-col cols="12" md="6">
        <h2><v-icon> mdi-plus </v-icon>&nbsp;Cadastrar Dimensão</h2>
      </v-col>
    </v-row>

    <v-form v-model="valid">
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
            <v-btn
              dark
              small
              class="mr-4"
              color="success"
              @click="create()"
              :disabled="dataForm == ''"
              >Salvar</v-btn
            >
            <v-btn dark small color="red darken-1" @click="cancel()"
              >Cancelar</v-btn
            >
          </v-col>
        </v-row>
      </v-flex>
    </v-form>
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
    create: async function () {
      try {
        let serviceDimensions = new dimensionsService();
        await serviceDimensions.create(this.dataForm);
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
  mounted() {},
};
</script>