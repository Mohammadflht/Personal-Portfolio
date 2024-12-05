<template>
    <v-container fluid class="full-container">
        <section id="about" ref="about" style="margin-bottom: 240px;">
            <v-row>
                <v-col col="12" style="">
                    <v-avatar size="90px" class="bioImageBox">
                        <img src="../assets/My Personal PIC.jpg" alt="Mohammad Falahati Pics" draggable="false"
                            title="Mohammad Falahati">
                    </v-avatar>
                </v-col>
            </v-row>
            <v-row class="bioTitleBox">
                <v-col col="12" style="color: #ffffff; font-size: 52px; font-weight: 700;" class="bioTitle">
                    Hey, I am Mohammad
                </v-col>
            </v-row>
            <v-row>
                <v-col col="12">
                    <p style="font-size: 24px; text-align: left;" class="bioTextBox">
                        <span style="color: #FFEA9F;">
                            Motivated and adaptable eager to contribute and learn.
                        </span>
                        <span style="color: #FFBBC3;">
                            Passionate Web Developer.
                        </span>
                        <span style="color: #B6FBFF;">
                            Dedicated of Pixel Perfect web.
                        </span>
                    </p>
                </v-col>
            </v-row>
            <v-row class="bioButtonsBox">
                <v-col col="12" style="display: flex; gap: 28px; flex-wrap: wrap;">
                    <div v-for="button in buttons" :key="button">
                        <simple-button :buttonLink="button.link" :buttonIcon="button.icon"
                            :buttonText="button.text"></simple-button>
                    </div>
                </v-col>
            </v-row>
        </section>



        <section id="education" ref="education">
            <h2 class="title-color">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="28" height="28" fill="url(#pattern0_2090_139)" />
                    <defs>
                        <pattern id="pattern0_2090_139" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_2090_139" transform="scale(0.0111111)" />
                        </pattern>
                        <image id="image0_2090_139" width="90" height="90"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADuklEQVR4nO2cO2sVQRSAr5DcKNilsRAjmCpgYUR8dgoq2FhY+ADBF4L6Q8T4aoKijZZCQCWVIWgRtRQs1DSiTVBIJEpE70bzycCs5nHvdXdnZndm7vlgm/uYc86Xw+7Z3eyt1QRBEARBEARBEAQzgI3ALWBGb8NAn+GyQgqwAbgJ/GQlCXAf2PT3C4JVwSK8ZMHLkQ53LFiElyy4VYf31zoV3AoW4ZQruPOEU63g+IV7Jjg+4Z4LDl94YILDEx64YP+FRybYP+GRC65eeIcJLl94hwt2L1wEOxYugh0LF8GOhYtgx8KBHuCGflOwS6Ld1pXoa5YXF1YyVNO37gW3TIvoEkVfLSlYJ3NFia4D1+Vg6ISGPgbWZbxzg8zTjpEzRMfINQ/HyFU8x8h16ZjvtPwgfhIf7h32Abf1zBgbDV1bricLgC3AQ1fCY+rwpEgHA5uBB8CCWsSJ6EiEJzYEp7izHO4upVFkF7Go1iWCU+xbDbfDExsHuVaL27MYrvDE5hTRKoiNtUMVnrgY01oFsxljcbBBj/fhjYJj2qCPohVjwDaPOjwxnSJ8FY0nwhNbY5rvoqsSnticg0MSXZbwxLbgUEW7Eu5McIpJ7XlyypN8VhaAx8DWAlPKsMnPSKgpAniURXAMoo06vGBumTt4OSa1uyrGhDEXwk0E55Fl8t0iRdlgzIZwG4JTTGo3rSNXsDKFY1FwiknthUQWDVaGcBwITjGp3YrYrMEs8Qy4AAwAa/U2oF976kKwz6LniI9vPop+R3y88VG0ugwZG8M+it5DfOzyTrQOOE48PMlRd+mi+4HvhM9cnl+HLF20DnoI+EW4/AYO56y5Ke4s/wt8EpgnPBLgRIF6m+LG7srgBwN7tG4a2F+w1qbYt9r+ov04/qNO9dcXrLG7zbrd9q22T+Y48AH/UDkdM6hrHfC8zfoT6jN2bf4/qTpw3pMzyLfAuSWPpRWr52WGWC9M4hQGWAXs0/f6vlIes8A9YK/KwUId6g+VlbN27BVPdjVwQD+9+8rypDKv1xzSMXos5646NSsTNZ8A1gA7VQcAl4ERvZ+bBL7orkyZ1VPNpP7MiP7OGWCHWstxriqfrMy4zCVqgM85RH+qOt9gAUZziB6tOt9gUWNhDtFHq843WPTxZCqD5CnXx4voAS5lEH2x6jyDR5+0vG8j+aPtsbJjAU63EX2q6vyiAegCXjeRrF7rqjq/qAC26xsGKer/THZXnVeUAHcXib5TdT7RAvTqs0W19VadTy1mgCNqa/bmH/uilwAmnrHYAAAAAElFTkSuQmCC" />
                    </defs>
                </svg>

                Education
            </h2>

            <div class="timeline-base">

                <hr class="timeline-line">
                <div class="master">
                    <p class="time-period">Aug 2024 - Present</p>
                    <p class="education-title">Master's degree, Computer Software Engineering</p>
                    <p class="education-info">
                        Islamic Azad University - Science and Research Branch, Tehran, Iran.
                        <a href="https://srb.iau.ir/" target="_blank">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Interface / External_Link">
                                    <path id="Vector"
                                        d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                        stroke="#FFFCFC" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg>
                        </a>
                    </p>
                </div>
                <div class="timeline-toggle-0"></div>

                <div class="bachelor">
                    <p class="time-period">Sep 2020 - Jul 2024</p>
                    <p class="education-title">Bachelor of Engineering - BE, Computer Engineering</p>
                    <p class="education-info">
                        Shahrood University of Technology, Semnan, Iran.
                        <a href="https://www.shahroodut.ac.ir/" target="_blank">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Interface / External_Link">
                                    <path id="Vector"
                                        d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                        stroke="#FFFCFC" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg>
                        </a>
                    </p>
                </div>
                <div class="timeline-toggle-1"></div>

                <div class="Diploma">
                    <p class="time-period">Sep 2017 - May 2020</p>
                    <p class="education-title">High School Diploma, Mathematics and Physics</p>
                    <p class="education-info">
                        Fahmide High School, Qom, Iran.
                        <a href="https://fahmideqom.ir/" target="_blank">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Interface / External_Link">
                                    <path id="Vector"
                                        d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                        stroke="#FFFCFC" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg>
                        </a>
                    </p>
                </div>
                <div class="timeline-toggle-2"></div>
            </div>

            <h2 class="title-color lang">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2090_103)">
                        <path d="M5 6.25H13.75" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M11.25 3.75V6.25C11.25 11.7725 8.45125 16.25 5 16.25" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.25 11.25C6.25 13.93 9.94 16.135 14.625 16.25" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 25L20 13.75L25 25" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M23.875 22.5H16.125" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2090_103">
                            <rect width="30" height="30" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                Languages
            </h2>
            <div class="languageBox">
                <p class="language-name">Persian - Navite</p>
                <hr style="width: 100%;" class="language-progress">

                <p class="language-name">English - Professional Proficiency (B2)</p>
                <hr style="width: 70%;" class="language-progress">
            </div>


            <h2 class="title-color" style="margin-top: 80px;">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2090_91)">
                        <path d="M6.66667 12H25.3333" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M6.66667 20H25.3333" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M14.6667 5.3335L9.33333 26.6668" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M22.6667 5.3335L17.3333 26.6668" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2090_91">
                            <rect width="32" height="32" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                Skills
            </h2>
            <div class="skillsMainBox">
                <div>
                    <p class="skill-title">Web Development:</p>
                    <p>
                        <simple-button buttonText="HTML" style="margin-right: 12px; margin-top: 6px;">
                        </simple-button>
                        <simple-button buttonText="CSS" style="margin-right: 12px; margin-top: 6px;">
                        </simple-button>
                        <simple-button buttonText="JavaScript" style="margin-right: 12px; margin-top: 6px;">
                        </simple-button>
                        <simple-button buttonText="Bootstrap" style="margin-right: 12px; margin-top: 6px;">
                        </simple-button>
                    </p>
                </div>
                <div>
                    <p class="skill-title">Frameworks:</p>
                    <p>
                        <simple-button buttonText="Vue" style="margin-right: 12px; margin-top: 6px;">
                        </simple-button>
                    </p>
                </div>
                <div>
                    <p class="skill-title">Design Programs:</p>
                    <p>
                        <simple-button buttonText="Figma" style="margin-right: 12px; margin-top: 6px;">
                        </simple-button>
                    </p>
                </div>
                <div>
                    <p class="skill-title">Database Management:</p>
                    <p>
                        <simple-button buttonText="MySQL" style="margin-right: 12px; margin-top: 6px;">
                        </simple-button>
                    </p>
                </div>
                <div>
                    <p class="skill-title">Version Control:</p>
                    <p>
                        <simple-button buttonText="Git" style="margin-right: 12px; margin-top: 6px;">
                        </simple-button>
                        <simple-button buttonText="GitHub" style="margin-right: 12px; margin-top: 6px;">
                        </simple-button>
                    </p>
                </div>
                <div>
                    <p class="skill-title">Package Managers:</p>
                    <p>
                        <simple-button buttonText="NPM" style="margin-right: 12px; margin-top: 6px;">
                        </simple-button>
                    </p>
                </div>
            </div>






            <!-- Add your Education content here -->
        </section>



        <section id="experience" ref="experience" style="margin-top: 140px;">
            <h2 class="title-color">
                <svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="31" height="37" fill="url(#pattern0_2090_56)" />
                    <defs>
                        <pattern id="pattern0_2090_56" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_2090_56"
                                transform="matrix(0.0111111 0 0 0.00930931 0 0.0810811)" />
                        </pattern>
                        <image id="image0_2090_56" width="90" height="90"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABz0lEQVR4nO3cQU4CMQCFYVYqNxAw8UgeRNGd4zn0TqIr4RruDGxYPdPYBZox0FLeUOb/Ejcah/rTTJt0cDAAAAAAAKSRdCHpQdK7pJX+F372Jule0nniy/SbpCtJC6Wbh9/tevw1zeRFRuTN2MzsbeLtYl/TrS/Ud/q5J+9r1vXfcfQkLQuEXg5OePXvm1Wx3c4eq3/fzLN3OwVW/76ZZ83sQqt/30y7Wv37ZtbV6t83y5zQyEBoE0KbENqE0CaENiG0CaFNCG1CaBNCmxDahNAmhDYhtAmhTQhtQugTCr2W9ChpHL+a+L1aFBm/I3TTco0w2FoUGb8j9KjlGpeqx6jE+A8euuAb1olDdyB0RGiTakKHlbrlGhPVY1xi/I7Qbav2k+rRlBi/I/Q6bodq3kc3XeyjefYu3VdOaJ4mNT1NGj4ygDR3OaHP41Ps2M2HpLPk0BufYSH2bpEnWZH/zOxpuP+wQP4SNguv4XaRPZMBAMdN0i3/jiF505C1jw4+JT1LupF0LWmYfKETJWkYm4Q2L7EVp+AuOe8YMhDahNAmhDYhtAmhTQhtQugjDs3hbDoOZ004nDXhcNaAw1kDDmcPiMNZAAAAAAAAABjs7BuZpsqApcZtfAAAAABJRU5ErkJggg==" />
                    </defs>
                </svg>

                Experience
            </h2>

            <div class="timeline-base">
                <hr class="work-timeline-line">

                <div class="work-timeline-1">
                    <p class="time-period">Jul 2024 - Present</p>
                    <p class="education-title">Frontend Developer</p>
                    <p class="education-info">
                        Iranguereh
                        <a href="https://guereh.com/" target="_blank">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Interface / External_Link">
                                    <path id="Vector"
                                        d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                        stroke="#FFFCFC" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg>
                        </a>
                    </p>
                </div>
                <div class="work-timeline-toggle-1"></div>

                <div class="work-timeline-2">
                    <p class="time-period">Oct 2023 - Jun 2024</p>
                    <p class="education-title">Teaching Assistant</p>
                    <p class="education-info">
                        Shahrood University of Technology
                        <a href="https://shahroodut.ac.ir/en/" target="_blank">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Interface / External_Link">
                                    <path id="Vector"
                                        d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                        stroke="#FFFCFC" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg>
                        </a>
                    </p>
                </div>
                <div class="work-timeline-toggle-2"></div>

                <div class="work-timeline-3">
                    <p class="time-period">Jun 2023 - Oct 2023</p>
                    <p class="education-title">Frontend Developer</p>
                    <p class="education-info">
                        Fidar
                        <a href="https://fdni.ir/" target="_blank">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Interface / External_Link">
                                    <path id="Vector"
                                        d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                        stroke="#FFFCFC" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg>
                        </a>
                    </p>
                </div>
                <div class="work-timeline-toggle-3"></div>
            </div>


        </section>




        <section id="projects" ref="projects" style="margin-top: 140px;">
            <h2 class="title-color">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="27" height="27" fill="url(#pattern0_2105_33)" />
                    <defs>
                        <pattern id="pattern0_2105_33" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_2105_33" transform="scale(0.0111111)" />
                        </pattern>
                        <image id="image0_2105_33" width="90" height="90"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADjUlEQVR4nO2bu2sVQRSHNxEjPhArFStt9FrZWGshgg+w0EojWNgq+BdYWKgg5oIoEWMCEUUQxMJOG0NawUrFRrAQHyjG+ETUT5a7hVx3586uO3PObs4HaQJ7zsxh7/xmzm82SQzDMAzDMAzDMAzDMPwBhoGhEo8YZQCWAOPAJ+AbcBVYWiqIMRigy7+MezxqlFwuPuQU+qN3EGMwQId85jweN3wBDhcUesY7iFF5fU457/G44QswW1DoQ95BDC8hnC8o9KYBjxu+AJsLipzup4e9AxluTAgjgQlhtELPFCwdo/8ZV3+/BFgP3Ad+Aa+A4wJC2KkYczkwCXzN/i4CI4k2soE+yZn4gYgnwvmqQghM5MSbSLQBXC6Y/O0AuUbrPhECXwpi7k+0AOyjmFsB8o0V5BqrGG/IsRS9A9bVPYcqg1wLvHUUem8ThBC44JjDPVGRzN6Eu44BTjflREhPY5455nKi3pmUG9wxx8CeAyubdCIEtgI/CuJ/B7bUN5NyE063QXmk27vtTWyNAicdL8/jqDZZ5tM9cgzoVFNbo/SWpgeOuXXryOM7mHOOgTwEFje5NQpsSO2wgjy/gT115XINYhvws2AQn4GNbWiNAkccL9NrYHWd+fqTrwJeOAZwtE2tUeCmY6536s4nn1ioNSryYon+lARbo1GXShXikMh5hFHEX8t2B0GPMMp2VssGHmGPMOgBTdORFAWXZYK0HLQ1WVDgEQZpojkmJtI2JJBHGKAtvLtswLThraIRTgCPMKDRcaPJhe7U7RFqKrSapYMAHmHApWNXY8UQBUIY1FHSsr1Dya3RoI6S9IEFJbdGgztK0kdwFNwajeYoSTaV0HEijOcoSbVJERZCEUdJovGPoBCKOUqxEyMshKKOUsyfEoJCqMFRiiYOCAmhFkcp2nYHGY9QhaMU9UoYAkIofUCLfiRFQAi1tByiXtsl/mUZNU20qm3DnU1ojQ4QeNmL6J6N8GkNn0945Huj+tMKj4+FrjXBI3QUWs/HQn+tcakq9+8+djTBIwTO5uS6kmgEWJN+7ga8B54CB5viEQKLgDPZh6gvgdPp/5I2g4LW6IIAJR5h60GJR9hqUOIRth4UeIQLAkwIoxW6a0IYp9CzJoRxCj2n5dZoq6HnO/aTFt+EsOZCT+YU+lKtSYwkLfQK4HrmdKR/U8Ayq01YA3jECmwYhmEYhmEYhmEYRuLPH/XzzBLwlsCcAAAAAElFTkSuQmCC" />
                    </defs>
                </svg>
                Projects
            </h2>

            <div class="project-item">
                <p class="project-title">Personal Portfolio</p>
                <p class="project-desc">
                    Developed  a personal portfolio website using the Vue framework and vuetify library.
                    Designed to be a reflective space for personal and professional growth,
                    with a focus on simplicity and minimalism.
                </p>
                <div class="project-buttons">
                    <simple-button buttonLink="https://github.com/Mohammadflht/portfolio-website"
                        buttonIcon="mdi-github" buttonText="GitHub"></simple-button>
                </div>
                <div class="project-preview">
                    <img draggable="false" src="../assets/Projects/Project-portfolio.png" alt="Portfolio">
                </div>
            </div>

            <div class="project-item">
                <p class="project-title">Interactive Card</p>
                <p class="project-desc">
                    Interactive card details form.
                </p>
                <div class="project-buttons">
                    <simple-button buttonLink="https://github.com/Mohammadflht/Interactive-Card" buttonIcon="mdi-github"
                        buttonText="GitHub"></simple-button>
                </div>
                <div class="project-preview">
                    <img draggable="false" src="../assets/Projects/Project-interactive card.png" alt="Interactive Card">
                </div>
            </div>

            <div class="project-item">
                <p class="project-title">Calculator</p>
                <p class="project-desc">
                    Developed a calculator using Pure JavaScript to execute a series of commands as follows:Addition,
                    Subtraction, Multiplication, Division, Delete, All clear.
                </p>
                <div class="project-buttons">
                    <simple-button buttonLink="https://github.com/Mohammadflht/Calculator-js" buttonIcon="mdi-github"
                        buttonText="GitHub"></simple-button>
                </div>
                <div class="project-preview">
                    <img draggable="false" src="../assets/Projects/Project-calculator.png" alt="Calculator">
                </div>
            </div>

            <div class="project-item">
                <p class="project-title">Advice Generator</p>
                <p class="project-desc">
                    A project to randomly display quotes of advice using the Advice Slip API.
                </p>
                <div class="project-buttons">
                    <simple-button buttonLink="https://github.com/Mohammadflht/Advice-Generator-App"
                        buttonIcon="mdi-github" buttonText="GitHub"></simple-button>
                </div>
                <div class="project-preview">
                    <img draggable="false" src="../assets/Projects/Project-advice generator.png" alt="Advice Generator">
                </div>
            </div>



        </section>

        <div class="credit-box">
            <p class="credit-text">© Created by Mohammad Falahati - <span id="currentyear">as</span></p>
        </div>

        <v-btn v-if="showButton" class="md-5 elevation-21 goUpButton" dark fab fixed bottom right @click="scrollToTop">
            <v-icon>mdi-arrow-up</v-icon>
        </v-btn>

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
                { text: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://linkedin.com/in/mohammad-flht' },
                { text: 'GitHub', icon: 'mdi-github', link: 'https://github.com/Mohammadflht' },
                { text: 'mfalahat2002@gmail.com', icon: 'mdi-email', link: 'mailto:mfalahat2002@gmail.com' },
                { text: 'CV', icon: 'mdi-file-account', link: 'https://drive.google.com/file/d/1M4dbRp4Y8nqU7dwPtJF7bE5y3WcTU0Gi/view' },
            ],
            showButton: false,


        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);

        // year in credit
        let currentYear = document.getElementById("currentyear")
        let fullyear = new Date().getFullYear();
        currentYear.textContent = fullyear;
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scroll to top
            });
        },
        handleScroll() {
            const currentScrollPosition = window.pageYOffset;
            let currentSection = '';

            this.sections.forEach(section => {
                const element = this.$refs[section];
                if (element.offsetTop <= currentScrollPosition + 20) {
                    currentSection = section;
                }
            });

            if (currentSection && this.$route.path !== `/${currentSection}`) {
                this.$router.push({ path: `/${currentSection}` }, () => { }, () => { });
            }
            this.showButton = window.scrollY > 20;
        },
    }
}

</script>

<style scoped>
a {
    text-decoration: none;
}

section {
    width: 100%;
    padding: 2rem 16rem;

    &:first-child {
        padding-top: 177px;
    }
}

.title-color {
    color: #ffffff !important;
    font-size: 33px;
    display: flex;
    align-items: center;
    gap: 8px;
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
    width: 100%;
    display: block;
    margin-left: 48px;
}

.timeline-toggle-0 {
    left: 60px;
    bottom: 11px;
    /* transform: translateX(-50%); */
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFFCFC;
    border-radius: 50%;
}

.timeline-toggle-1 {
    left: 200px;
    bottom: 11px;
    /* transform: translateX(-50%); */
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFFCFC;
    border-radius: 50%;
}

.timeline-toggle-2 {
    left: 346px;
    bottom: 11px;
    /* transform: translateX(-50%); */
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFFCFC;
    border-radius: 50%;
}

.master {
    width: 100%;
    height: 300px;
    /* background-color: cadetblue; */
    transform: rotate(-90deg);
    position: absolute;
    bottom: 100px;
    left: 5px;
}

.bachelor {
    width: 100%;
    height: 300px;
    /* background-color: cadetblue; */
    transform: rotate(-90deg);
    position: absolute;
    bottom: 100px;
    left: 144px;

}

.Diploma {
    width: 100%;
    height: 300px;
    /* background-color: cadetblue; */
    transform: rotate(-90deg);
    position: absolute;
    bottom: 100px;
    left: 290px;
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
    display: inline-block;
}
.education-info a {
    vertical-align: middle;
}

.language-name {
    color: #FFFFFF;
    font-size: 22px;
    margin-top: 20px;
}

.language-progress {
    background-color: #FFEA9F;
    /* width: 100%; */
    height: 6px;
}

.skill-title {
    color: #FFFFFF;
    font-size: 22px;
    margin-top: 12px;
    margin-bottom: 8px;
}

.work-timeline {
    width: 100%;
    height: 300px;
    /* background-color: cadetblue; */
    transform: rotate(-90deg);
    position: absolute;
    bottom: 100px;
    left: 5px;
}

.work-timeline-toggle-1 {
    left: 60px;
    bottom: 11px;
    /* transform: translateX(-50%); */
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFFCFC;
    border-radius: 50%;
}

.work-timeline-toggle-2 {
    left: 200px;
    bottom: 11px;
    /* transform: translateX(-50%); */
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFFCFC;
    border-radius: 50%;
}

.work-timeline-toggle-3 {
    left: 340px;
    bottom: 11px;
    /* transform: translateX(-50%); */
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #FFFCFC;
    border-radius: 50%;
}

.work-timeline-1 {
    width: 100%;
    height: 300px;
    /* background-color: cadetblue; */
    transform: rotate(-90deg);
    position: absolute;
    bottom: 100px;
    left: 5px;
}

.work-timeline-2 {
    width: 100%;
    height: 300px;
    /* background-color: cadetblue; */
    transform: rotate(-90deg);
    position: absolute;
    bottom: 100px;
    left: 144px;
}

.work-timeline-3 {
    width: 100%;
    height: 300px;
    /* background-color: cadetblue; */
    transform: rotate(-90deg);
    position: absolute;
    bottom: 100px;
    left: 286px;
}

.work-timeline-line {
    position: absolute;
    left: 60%;
    bottom: 15px;
    transform: translateX(-50%);
    width: 100%;
    display: block;
}



.credit-box {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 6rem;

    & p {
        font-size: 16px;
        color: #FFFFFF;
    }
}



/* Project Section */
.project-item {
    margin-top: 3rem;
}

.project-title {
    font-size: 26px;
    color: #FFEA9F !important;
}

.project-desc {
    font-size: 20px;
    color: #FFFFFF !important;
}

.project-preview {
    width: auto;
    max-width: 1100px;
    height: auto;
    /* background-color: lightgray; */
    margin-top: 2rem;

    & img {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
        border-radius: 24px;
    }
}




.scroll-to-top-btn {
    transition: opacity 0.5s ease, transform 0.5s ease;
    opacity: 0;
    /* Start hidden */
    transform: translateY(20px);
    /* Start slightly below */
}

.scroll-to-top-btn.v-enter-active,
.scroll-to-top-btn.v-leave-active {
    opacity: 1;
    /* Fade in */
    transform: translateY(0);
    /* Move to original position */
}

.scroll-to-top-btn.v-leave-to {
    opacity: 0;
    /* Fade out */
    transform: translateY(20px);
    /* Move down */
}

.lang {
    margin-top: 8rem;
}





@media only screen and (max-width: 1200px) {

    .time-period,
    .education-title,
    .education-info {
        text-wrap: wrap;
    }

    .bachelor {
        left: 200px;
    }

    .Diploma {
        left: 400px;
    }

    .timeline-toggle-1 {
        left: 255px;
    }

    .timeline-toggle-2 {
        left: 454px;
    }

    .timeline-line {
        margin-left: 146px;
        width: 600px;
    }

    .lang {
        margin-top: 30rem;
    }

    .time-period {
        font-size: 13px;
    }

    .education-title {
        font-size: 20px;
    }

    .education-info {
        font-size: 17px;
    }
}

@media only screen and (max-width: 768px) {
    section {
        padding-left: 10rem;
        padding-right: 10rem;
    }
}

@media only screen and (max-width: 480px) {
    section {
        padding-left: 2rem;
        padding-right: 2rem;
        margin-bottom: 0 !important;

        &:first-child {
            padding-top: 40px !important;
        }
    }

    .bioImageBox {
        width: 60px !important;
        height: 60px !important;
        min-width: 60px !important;
    }

    .bioTitleBox {
        width: 350px;
    }

    .bioTitle {
        font-size: 28px !important;
    }

    .bioTextBox {
        font-size: 12px !important;
        width: 350px;
        display: flex;
        flex-direction: column;
    }

    .bioButtonsBox {
        width: 400px !important;
    }

    .title-color {
        font-size: 22px !important;
        margin-top: 200px;
        width: 100%;
    }

    .time-period {
        font-size: 12px !important;
    }

    .timeline-base {
        margin-left: -13px;
    }

    .timeline-toggle-0 {
        left: 58px !important;
    }

    .timeline-toggle-1 {
        left: 253px !important;
    }

    .timeline-toggle-2 {
        left: 453px !important;
    }

    .education-title {
        font-size: 16px !important;
    }

    .education-info {
        font-size: 14px !important;
    }

    .Diploma p,
    .bachelor p {
        width: 90% !important;
    }

    .languageBox {
        & p {
            width: 100%;
        }

        & hr {
            &:nth-child(2) {
                width: 100% !important;
            }

            &:nth-child(4) {
                width: 70vw !important;
            }
        }
    }

    .language-name {
        font-size: 15px !important;
    }

    .skillsMainBox div {
        width: 100%;

        & p {
            & button {
                font-size: 12px !important;
            }
        }
    }

    .skill-title {
        font-size: 16px !important;
    }

    .work-timeline-toggle-1 {
        left: 58px;
    }

    .work-timeline-toggle-2 {
        left: 198px;
    }

    .work-timeline-toggle-3 {
        left: 338px;
    }

    .project-title {
        font-size: 20px !important;
        width: 100%;
    }

    .project-desc {
        font-size: 16px;
        width: 100%;
    }

    .project-item img {
        max-width: 100% !important;
    }

    .credit-text {
        text-wrap: nowrap;
        font-size: 12px !important;
    }

    .lang {
        margin-top: 24rem;
    }
    .master,
    .bachelor,
    .Diploma {
        padding-right: 5rem;
        margin-bottom: -12px;
    }
}
</style>