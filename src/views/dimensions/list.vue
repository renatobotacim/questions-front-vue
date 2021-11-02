<template>
  <v-container>
    <v-row class="mt-3">
      <v-col cols="12" md="6">
        <h2>Lista de Dimensões</h2>
      </v-col>
      <v-col cols="12" class="text-right" md="6">
        <v-btn
          color="secondary"
          elevation="6"
          class="mr-2"
          small
          to="/dimensions/create"
        >
          <v-icon small> mdi-plus </v-icon>&nbsp;Dimensões
        </v-btn>
      </v-col>
    </v-row>


    <div class="about mb-3"></div>
    <v-data-table :headers="headers" :items="dataQuestions" class="elevation-3">
      <template v-slot:item.actions="{ item }">
        <v-btn
          color="primary"
          elevation="6"
          class="mr-2"
          small
          :to="'/dimensions/edit/' + item.id"
        >
          <v-icon small> mdi-pencil </v-icon>&nbsp;Editar
        </v-btn>
        <v-btn color="red" elevation="6" small @click="deleteItem(item.id)">
          <v-icon small> mdi-delete </v-icon>&nbsp;Deletar
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >Deseja realmente apagar este registro?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="deleteCloseMessage"
            >Cancel</v-btn
          >
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import dimensionsService from "@/services/dimensionsService";
export default {
  name: "Questions",
  components: {},

  data() {
    return {
      dialogDelete: false,
      ex4: "success",
      selected: [],
      headers: [
        { text: "ID", value: "id" },
        { text: "Nome", value: "name" },
        { text: "Ação", value: "actions" },
      ],
      dataQuestions: [],
      idDelete: "",
    };
  },

  methods: {

    deleteItem(item) {
      this.dialogDelete = true;
      this.idDelete = item;
    },

    deleteCloseMessage() {
      this.dialogDelete = false;
    },
    
    deleteItemConfirm: async function () {
      try {
        let data = { deleted: 1 };
        let serviceDimensions = new dimensionsService();
        await serviceDimensions.update(this.idDelete, data);
        this.dialogDelete = false;
        this.findAll();
        //this.$showAlert("Registro apagado com sucesso", "success");
      } catch (error) {
        //this.$showAlert(error.response.data.message, "error");
        console.log(error);
      }
    },

    // list all questions
    findAll: async function () {
      this.loading = true;
      let serviceDimensions = new dimensionsService();
      try {
        let res = await serviceDimensions.findAll();
        this.dataQuestions = res.data;
      } catch (e) {
        this.$router.push("../questions");
        console.error(e);
      }
    },
  },

  mounted() {
    this.findAll();
    this.$tt("success", "brocou");
  },
};
</script>
