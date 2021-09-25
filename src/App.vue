<template>
<div class="container">
    <div class="row">
        <div class="col-md">
            <br>
            <app-header></app-header>
            <br>
            <router-view></router-view>
            <footer class="bg-light text-center text-lg-start">
                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                    © 2021 Copyright:
                    <a class="text-dark" href="">Akif Cakar</a>
                </div>
            </footer>
        </div>
    </div>
</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    components: {
        appHeader: Header
    }
}
</script>

<style>

</style>
