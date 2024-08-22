<template>
    <v-container
        fluid
        class="full-container">
        <section
            id="about"
            ref="about"
            style="margin-bottom: 240px;">
            <v-row>
                <v-col
                    col="12"
                    style="">
                    <v-avatar
                        size="90px">
                        <img src="../assets/My Personal PIC.jpg" alt="Personal Image">
                    </v-avatar>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    col="12"
                    style="color: #ffffff; font-size: 52px; font-weight: 700;">
                    Hey, I am Mohammad
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    col="12">
                    <p
                        style="font-size: 24px; text-align: left;">
                        <span
                            style="color: #FFEA9F;">
                            Motivated and adaptable eager to contribute and learn.
                        </span>
                        <span
                            style="color: #FFBBC3;">
                            Passionate Web Developer and UX/UI designer.
                        </span>
                        <span
                            style="color: #B6FBFF;">
                            Dedicated of Pixel Perfect web.
                        </span>
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    col="12"
                    style="display: flex; gap: 28px;">
                    <div
                        v-for="button in buttons"
                        :key="button">
                    <simple-button :buttonLink="button.link" :buttonIcon="button.icon" :buttonText="button.text"></simple-button>
                    </div>
                </v-col>
            </v-row>
        </section>
        <section
            id="education"
            ref="education">
            <h2
                class="title-color"
                style="font-size: 33px; display: flex; align-items: center; gap: 8px;">
                <v-icon
                    class="title-color"
                    style="font-size: 33px;"
                    >mdi-school
                </v-icon>
                Education
            </h2>

<div class="timeline-base">

    <hr class="timeline-line">
    <div class="bachelor">
        <p class="time-period">Sep 2020 - Jul 2024</p>
        <p class="education-title">Bachelor of Engineering - BE, Computer Engineering</p>
        <p class="education-info">The final project on the topic of recommender system design.</p>
    </div>

    <div class="timeline-toggle-1"></div>
    <div class="Diploma">
        <p class="time-period">Sep 2017 - May 2020</p>
        <p class="education-title">High School Diploma, Mathematics and Physics</p>
        <p class="education-info">Focusing on subjects such as physics, chemistry, mathematics, geometry and discrete mathematics.</p>
    </div>
    <div class="timeline-toggle-2"></div>
</div>



            <!-- Add your Education content here -->
        </section>
        <section id="experience" ref="experience">
            <h2>Experience</h2>
            <!-- Add your Experience content here -->
        </section>
        <section id="projects" ref="projects">
            <h2>Projects</h2>

            <!-- Add your Projects content here -->
        </section>
    </v-container>
</template>

<script>
import SimpleButton from '../components/buttons/SimpleButton.vue'

export default {
    name: 'MainPage',
    components: {
        SimpleButton,
    },
    data() {
        return {
            sections: ['about', 'education', 'experience', 'projects'],
            buttons: [
                {text: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://linkedin.com/in/mohammad-flht'},
                {text: 'GitHub', icon: 'mdi-github', link: 'https://github.com/Mohammadflht'},
                {text: 'mfalahat2002@gmail.com', icon: 'mdi-email', link: 'mailto:mfalahat2002@gmail.com'},
                {text: 'CV', icon: 'mdi-file-account', link: 'https://drive.google.com/file/d/1M4dbRp4Y8nqU7dwPtJF7bE5y3WcTU0Gi/view'},
            ],

        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScrollPosition = window.pageYOffset;
            let currentSection = '';

        this.sections.forEach(section => {
            const element = this.$refs[section];
            if (element.offsetTop <= currentScrollPosition + 100) {
            currentSection = section;
            }
        });

        if (currentSection && this.$route.path !== `/${currentSection}`) {
            this.$router.push({ path: `/${currentSection}` }, () => {}, () => {});
        }
        }
    }
}
</script>

<style scoped>
section{
    width: 100%;
    padding: 2rem 16rem;
    &:first-child {
        padding-top: 177px;
    }
}
.title-color {
    color: #ffffff !important;
}
.timeline-base {
    width: 400px;
    /* background-color: chocolate; */
    height: 400px;
    position: relative;
    transform: rotate(90deg);
    /* background-color: darkslategrey !important; */
}
.timeline-line {
    position: absolute;
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%);
    width: 80%;
    display: block;
}
.timeline-toggle-1 {
    left: 60px;
    bottom: 11px;
    /* transform: translateX(-50%); */
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFFCFC;
    border-radius: 50%;
}
.timeline-toggle-2 {
    left: 200px;
    bottom: 11px;
    /* transform: translateX(-50%); */
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFFCFC;
    border-radius: 50%;
}
.bachelor {
    width: 100%;
    height: 300px;
    /* background-color: cadetblue; */
    transform: rotate(-90deg);
    position: absolute;
    bottom: 100px;
    left: 5px;
}
.Diploma {
    width: 100%;
    height: 300px;
    /* background-color: cadetblue; */
    transform: rotate(-90deg);
    position: absolute;
    bottom: 100px;
    left: 144px;
}
.time-period {
    text-wrap: nowrap;
    color: #FFBBC3 !important;
    font-size: 15px;
    margin-bottom: 2.5px;
}
.education-title {
    text-wrap: nowrap;
    color: #FFEA9F !important;
    font-size: 22px;
    margin-bottom: 13px;
}
.education-info {
    text-wrap: nowrap;
    color: #FFFFFF !important;
    font-size: 19px;
}
</style>