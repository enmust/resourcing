<template>
  <v-card flat tile color="transparent" dark class="contact">
    <v-card-title class="justify-center text-center text-h2"
      >Get in touch with us!</v-card-title
    >

    <div class="text-center">
      <p class="text-uppercase text-h4">Coordinator contact</p>
      <p class="text-uppercase text-h6">
        Vienna University of Economics and Business
      </p>
      <p class="text-h6">Institute for Managing Sustainability</p>
      <p class="text-h6">Welthandelsplatz 1A, 1020 Vienna, Austria</p>
    </div>

    <div class="d-flex flex-wrap justify-center">
      <v-card class="d-flex ma-2 pa-3" width="250" color="primary5" light>
        <v-btn
          fab
          class="align-self-center"
          href="mailto:info@re-sourcing.eu"
          color="accent3"
          dark
          aria-label="mail us"
          title="Mail us"
          ><v-icon>far fa-envelope</v-icon></v-btn
        >
        <v-card-text class="align-self-center">
          <p class="font-weight-bold mb-0">E-mail:</p>
          <p class="mb-0">info@re-sourcing.eu</p>
        </v-card-text>
      </v-card>

      <v-card class="d-flex ma-2 pa-3" width="250" color="primary5" light>
        <v-btn
          fab
          class="align-self-center"
          href="tel:+431313365452"
          color="accent3"
          dark
          aria-label="call us"
          title="Call us"
          ><v-icon>fas fa-mobile-alt</v-icon></v-btn
        >
        <v-card-text>
          <p class="font-weight-bold mb-0">Phone:</p>
          <p class="mb-0">+43-1-31336-5452</p>
        </v-card-text>
      </v-card>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped></style>
