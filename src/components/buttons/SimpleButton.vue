<template>
    <v-btn
        rounded
        outlined
        color="buttonTextColor"
        :href="buttonLink"
        style="
            background-color: #2E2E2E;
            text-transform: none;
            border-color: #717171;">
        {{ buttonText }}
        <v-icon
            class="mr-1">
            {{ buttonIcon }}
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'SimpleButton',
    data() {
        return {
            
        }
    },
    props: [
        'buttonText',
        'buttonIcon',
        'buttonLink',
    ]
}
</script>