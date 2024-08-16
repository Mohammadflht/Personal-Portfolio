<template>
    <v-btn
        rounded
        outlined
        color="buttonTextColor"
        :href="buttonLink"
        target="_blank"
        style="
            background-color: #2E2E2E;
            text-transform: none;
            border-color: #717171;">
        <v-icon
        class="mr-1">
            {{ buttonIcon }}
        </v-icon>
    {{ buttonText }}
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