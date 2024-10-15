<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="card-group col-sm-10">
                <div class="card border-0">
                    <img src="../assets/LucasPFP.jpg" class="card-img rounded-start" alt="...">
                </div>
                <div class="card border-0">
                    <div class="card-header deer-header">
                        <h1 class="card-title" style="font-weight:bold;">
                            Lucas Kearns
                        </h1>
                    </div>
                    <div class="card-body deer-body d-flex align-items-center justify-content-center">
                        <p class="card-text">
                            Hello! My name is Lucas Kearns, and I’m a new Software Engineer who’s searching
                            for opportunities to develop both myself and my career to the fullest.

                            With an educational background in physics and mathematics, as well as experience
                            in professional environments for electrochemistry, experimental analysis, and data
                            processing, I’m always looking to improve my skills and apply myself to new challenges.

                            I’ve had an interest in programming since I was in grade school writing tic-tac-toe
                            programs in python. Since then, my passion for creating software has become a passion
                            of mine, and I’ve continued to learn new skills and insights that keep my abilities
                            modern and efficient.

                            After receiving a formal education in software engineering through a programming
                            bootcamp, I now feel prepared and excited to take my first steps towards a professional
                            career as a developer.

                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div class="row justify-content-md-center">
            <div class="col-sm-5">
                <div class="card border-0">
                    <h2 class="card-header card-title deer-header">
                        About Me
                    </h2>
                    <div class="card-body deer-body">
                        <p class="card-text bullit-list">
                            • Highly motivated, creative, professional, and flexible individual with
                            expertise across a broad range of communication, natural science, and
                            technology.
                            <br>
                            • Quick to learn and apply new information with high attention to detail
                            and accuracy.
                            <br>
                            • Excellent collaborator able to communicate and coordinate
                            effectively as a project leader and team member.
                            <br>
                            • A talent for analyzing problems, simplifying procedures, and finding
                            innovative solutions.
                        </p>

                        <!--
                        <div class="d-flex justify-content-end">
                            <a href="/about" class="btn btn-page-link col-5">
                                More About Me
                            </a>
                        </div>
                        -->


                    </div>
                </div>
            </div>
            <div class="col-sm-5  ">
                <div class="card border-0">
                    <h2 class="card-header card-title deer-header">
                        My Projects
                    </h2>
                    <div class="card-body deer-body">
                        <p class="card-text bullit-list">
                            • Developed a full-stack application which logs and schedules exercise
                            routines for users using Python, FastAPI, Vite, and React with  a PostgreSQL
                            database capable of storing user information, health data, and
                            exercise routine information
                            <br>
                            • Constructed a full-stack application with the ability to present
                            myself professionally and formally to potential employers with cloud
                            infrastructure services to host my project in a organized, secure, and
                            maintainable manner
                            <br>
                            • Composed application features with a project team,
                            including the successful implementation of front and back end authentication

                        </p>

                        <!--
                        <div class="d-flex justify-content-end">
                            <a href="/projects" class="btn btn-page-link col-5">
                                Browse Projects
                            </a>
                        </div>
                        -->


                    </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <contact-form/>




</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  components: { ContactForm },
};
</script>

<style></style>
