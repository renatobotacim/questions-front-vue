<template>
  <v-container>
    <v-row class="mt-3">
      <v-col cols="12" md="6">
        <h2>Lista de Perguntas</h2>
      </v-col>
      <v-col cols="12" class="text-right" md="6">
        <v-btn
          color="secondary"
          elevation="6"
          class="mr-2"
          small
          to="/dimensions/"
        >
          <v-icon small> mdi-plus </v-icon>&nbsp;Dimensões
        </v-btn>
        <v-btn
          color="primary"
          elevation="6"
          class="mr-2"
          small
          to="/questions/create"
        >
          <v-icon small> mdi-plus </v-icon>&nbsp;Criar Pergunta
        </v-btn>
      </v-col>
    </v-row>
    <div class="about mb-3"></div>
    <v-data-table :headers="headers" :items="dataQuestions" class="elevation-3">
      <template v-slot:item.status="{ item }">
        <v-simple-checkbox
          v-model="item.status"
          color="success"
          @click="editStatusQuestion(item.status)"
        >
        </v-simple-checkbox>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn
          color="primary"
          elevation="6"
          class="mr-2"
          small
          @click="editItem(item.id)"
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
import questionsService from "@/services/questionsService";
export default {
  name: "Questions",
  components: {},

  methods: {
    editStatusQuestion(status) {
      console.log(status);
    },

    editItem(item) {
      this.$router.push("/questions/edit/" + item);
    },

    deleteItem(item) {
      this.dialogDelete = true;
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    deleteCloseMessage() {
      this.dialogDelete = false;
    },
    deleteItemConfirm() {
      //faz um update do registro.
      this.dialogDelete = false;
    },

    findAll: async function () {
      this.loading = true;
      let serviceQuestions = new questionsService();
      try {
        let res = await serviceQuestions.findAll();
        this.dataQuestions = res.data;
      } catch (e) {
        this.$router.push("../questions");
        console.error(e);
      }
    },
  },

  data() {
    return {
      dialogDelete: false,
      ex4: "success",
      selected: [],
      headers: [
        { text: "status", value: "status" },
        { text: "Dimenssão", value: "dimension_id" },
        {
          text: "Pergunta",
          align: "start",
          sortable: false,
          value: "question",
        },
        { text: "Ação", value: "actions" },
      ],
      dataQuestions: [
        // {
        //   status: 1,
        //   dimension_id: "Estrutura",
        //   question:
        //     "Quantos dias na semana você prefere trabalhar em home-office?",
        //   actions: 24,
        //   id: 11,
        // },
      ],
    };
  },

  deleteItemConfirm() {
    alert("t");
    // this.desserts.splice(this.editedIndex, 1);
    // this.closeDelete();
  },

  mounted() {
    this.findAll();
  },
};
</script>
