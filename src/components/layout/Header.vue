<template>
  <v-toolbar color="#424242" dark>
    <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>
    <v-toolbar-title class="headline">Serverless Experience</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/" text>
        Home
      </v-btn>
      <v-btn to="/profile" text>
        Profile
      </v-btn>
      <v-btn to="/protected" text>
        Protected
      </v-btn>
      <v-btn to="/auth" text>
        Sign Up / Sign In
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
