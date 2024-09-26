<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col">
                <div class="card border-0">

                    <div class="card-header deer-header">
                        <h1 class="card-title" style="font-weight:bold; ">Card Template 1</h1>
                    </div>

                    <div class="card-body deer-body">
                        <div class="row">
                            <div class="col d-flex align-items-center justify-content-center">
                                <img src="../assets/LucasPFP.jpg" alt="..." width="400px">
                            </div>
                            <div class="col">
                                <h4 class="card-text d-flex align-items-center justify-content-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in ornare libero, eu
                                    sollicitudin urna. Vivamus eu lorem congue, tincidunt sapien porttitor, tincidunt
                                    ligula. Nam magna enim, maximus ut tincidunt in, consequat nec velit. Suspendisse at
                                    metus id nisi volutpat lobortis ut ac orci. Sed dignissim nibh eget ante
                                    pellentesque
                                    feugiat. Vestibulum ut nunc eu neque sagittis vestibulum sed at nulla. Nunc congue
                                    turpis ligula, vitae tempus dolor varius ac. Ut sit amet mi et mauris lobortis
                                    pharetra
                                    non at nisi. Mauris in felis porta metus semper lacinia nec sit amet tortor.
                                    Curabitur
                                    ut sapien vel metus pharetra pellentesque. Cras fermentum lorem et diam consequat,
                                    aliquet varius sem eleifend. Proin euismod risus sit amet lorem convallis, non
                                    feugiat
                                    elit tincidunt. Donec nec dictum justo, non scelerisque eros.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div class="row justify-content-md-center">
            <div class="card-group col-sm-10">
                <div class="card border-0">
                    <img src="../assets/LucasPFP.jpg" class="card-img rounded-start" alt="...">
                </div>
                <div class="card border-0">
                    <div class="card-header deer-header">
                        <h1 class="card-title" style="font-weight:bold;">
                            Card Template 2
                        </h1>
                    </div>
                    <div class="card-body deer-body d-flex align-items-center justify-content-center">
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in ornare libero, eu
                            sollicitudin urna. Vivamus eu lorem congue, tincidunt sapien porttitor, tincidunt
                            ligula. Nam magna enim, maximus ut tincidunt in, consequat nec velit. Suspendisse at
                            metus id nisi volutpat lobortis ut ac orci. Sed dignissim nibh eget ante pellentesque
                            feugiat. Vestibulum ut nunc eu neque sagittis vestibulum sed at nulla. Nunc congue
                            turpis ligula, vitae tempus dolor varius ac. Ut sit amet mi et mauris lobortis pharetra
                            non at nisi. Mauris in felis porta metus semper lacinia nec sit amet tortor. Curabitur
                            ut sapien vel metus pharetra pellentesque. Cras fermentum lorem et diam consequat,
                            aliquet varius sem eleifend. Proin euismod risus sit amet lorem convallis, non feugiat
                            elit tincidunt. Donec nec dictum justo, non scelerisque eros.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div class="row justify-content-md-center">

            <div class="card-group col-sm-9">
                <div class="card border-0">
                    <img src="../assets/LucasPFP.jpg" class="card-img rounded-start" alt="...">
                </div>
                <div class="card border-0">
                    <h1 class="card-header card-title deer-header" style="font-weight:bold;">
                        Card Template 3
                    </h1>
                    <div class="card-body deer-body d-flex align-items-center justify-content-center">
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in ornare libero, eu
                            sollicitudin urna. Vivamus eu lorem congue, tincidunt sapien porttitor, tincidunt
                            ligula. Nam magna enim, maximus ut tincidunt in, consequat nec velit. Suspendisse at
                            metus id nisi volutpat lobortis ut ac orci. Sed dignissim nibh eget ante pellentesque
                            feugiat. Vestibulum ut nunc eu neque sagittis vestibulum sed at nulla. Nunc congue
                            turpis ligula, vitae tempus dolor varius ac. Ut sit amet mi et mauris lobortis pharetra
                            non at nisi. Mauris in felis porta metus semper lacinia nec sit amet tortor. Curabitur
                            ut sapien vel metus pharetra pellentesque. Cras fermentum lorem et diam consequat,
                            aliquet varius sem eleifend. Proin euismod risus sit amet lorem convallis, non feugiat
                            elit tincidunt. Donec nec dictum justo, non scelerisque eros.
                        </p>
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
