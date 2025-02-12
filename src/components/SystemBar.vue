<template>
  <v-system-bar app dark bottom color="primary" style="height: 28px; padding: 0">
    <span class="mx-4">Space University</span>

    <v-spacer />

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text tile small v-bind="attrs" v-on="on">
          <v-icon x-small>{{ state.role.icon }}</v-icon>
          {{ state.role.name }}
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item v-for="role in roles" :key="role.name" @click="iam(role)">
          <v-list-item-icon>
            <v-icon v-text="role.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="role.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-switch v-model="$vuetify.theme.dark" color="rgb(40,40,40)"></v-switch>
    <LanguageButton />

    <!-- <v-btn text tile small @click="close">
      <v-icon x-small>fa-times</v-icon>
      Close
    </v-btn> -->
  </v-system-bar>
</template>

<script>
import routes from '@/router/routes';
import { pochtaStore } from '@/store/localStorage/pochta-store';
import Navigation from '@/components/Navigation.vue';
import LanguageButton from '@/components/LanguageButton.vue';

export default {
  name: 'SystemBar',
  components: {
    Navigation,
    LanguageButton,
  },
  data: () => ({
    groups: ['campus', 'study' , 'about'],
    groupNames: [
      '$vuetify.campus.name',
      '$vuetify.study.name',
      '$vuetify.about.name',
    ],
    roles: [
      {
        name: 'student',
        icon: 'fa-user-graduate',
      },
      {
        name: 'tutor',
        icon: 'fa-user-tie',
      },
    ],
    routes,
  }),
  setup() {
    const close = () => window.close();
    const iam = role => pochtaStore.iam(role);
    const state = pochtaStore.state;

    return {
      state,
      iam,
      close,
    };
  },
};
</script>
<style scoped>
.v-input--checkbox >>> label {
  color: black;
  /* background-color: orange; */
}
</style>
