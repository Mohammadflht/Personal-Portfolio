<template>
    <v-card
        class="overflow-hidden"
        color="secondary"
        flat>
        <v-app-bar
            height="100"
            color="secondary darken-4">
            <!-- Add a menu icon for small screens -->
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="hidden-md-and-up ml-2"
                color="primary"
                large>
                <v-icon>
                    mdi-menu
                </v-icon>
            </v-app-bar-nav-icon>

            <v-toolbar-item class="hidden-sm-and-down mx-auto">
                <v-btn
                    v-for="button in buttons" :key="button"
                    @click="navigateTo(button.route)"
                    class="mx-2 text-option underlined"
                    text
                    plain
                    rounded
                    :ripple="false"
                    color="primary">
                    {{ button.text }}
                </v-btn>
            </v-toolbar-item>
        </v-app-bar>

        <!-- Add the navigation drawer -->
        <v-navigation-drawer
            v-model="drawer"
            class="hidden-md-and-up color1 darken-2"
            temporary
            fixed>
            <v-list>
                <v-list-item
                    v-for="button in buttons"
                    @click="navigateTo(button.route)"
                    :key="button"
                    link>
                    <v-list-item-content>
                        <v-list-item-title>{{ button.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {
            drawer: false,
            buttons: [
                { text: 'About me', ref: '', route: 'Ab' },
                { text: 'Education', ref: '', route: 'ED' },
                { text: 'Experience', ref: '', route: 'EX' },
                { text: 'Projects', ref: '', route: 'PR' },
            ],
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
            this.drawer = false;
        }
    }
}
</script>

<style scoped>
* {
    text-transform: none;
}

.text-option {
    font-size: 20px;
}
.underlined {
    position: relative;
}
.underlined::after {
    content: "";
    position: absolute;
    bottom: -2px;
    right: 0;
    border-radius: 4px;
    background-color: #ffffff;
    width: 100%;
    height: 4px;
    transform: scaleX(0);
    transition: transform .4s ;
}
.underlined:hover::after {
    transform: scaleX(100%);
}
</style>