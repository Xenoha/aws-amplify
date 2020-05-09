<template>
  <v-app>
    <v-content>
      <Header />
      <router-view></router-view>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>
