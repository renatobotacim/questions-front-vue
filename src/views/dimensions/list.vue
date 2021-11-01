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
  </v-container>
</template>
