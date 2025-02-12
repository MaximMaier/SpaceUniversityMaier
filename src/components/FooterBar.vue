<template>
    <v-footer color="#090091" app height="80px">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <div class="logo-container">
                        <img src="@/assets/img/logo-white-background.png" alt="Logo" class="logo" />
                        <span class="title">Space University</span>
                    </div>
                </v-col>
                <v-col cols="12" md="8">
                    <div class="footer-controls">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn text tile small v-bind="attrs" v-on="on" class="role-picker">
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
                        <v-switch v-model="$vuetify.theme.dark" color="rgb(40,40,40)">Dark Mode</v-switch>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
import { pochtaStore } from '@/store/localStorage/pochta-store';

export default {
    name: 'FooterBar',
    data: () => ({
        roles: [
            {
                name: 'STUDENT',
                icon: 'fa-user-graduate',
            },
            {
                name: 'TUTOR',
                icon: 'fa-user-tie',
            },
        ],
    }),
    setup() {
        const iam = role => pochtaStore.iam(role);
        const state = pochtaStore.state;

        return {
            state,
            iam,
        };
    },
};
</script>

<style scoped>
.logo {
    height: 40px;
    vertical-align: middle;
}
.title {
    color: white;
    font-size: 20px;
    margin-left: 10px;
    vertical-align: middle;
}
.footer-controls {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.role-picker {
    color: white !important;
}
.logo-container {
    position: absolute;
    left: 10px;
    top: 20px;
    display: flex;
    align-items: center;
}
</style>
