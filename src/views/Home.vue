<template>
  <HelloWorld />
  <!-- <div class="sign-out">
        <amplify-sign-out v-if="signedIn"></amplify-sign-out>
      </div> -->
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth } from "aws-amplify";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      signedIn: false
    };
  },
  beforeCreate() {
    AmplifyEventBus.$on("authState", info => {
      if (info === "signedIn") {
        this.signedIn = true;
        this.$router.push("/profile");
      }
      if (info === "signedOut") {
        this.$router.push("/auth");
        this.signedIn = false;
      }
    });

    Auth.currentAuthenticatedUser()
      .then(() => {
        this.signedIn = true;
      })
      .catch(() => (this.signedIn = false));
  }
};
</script>
