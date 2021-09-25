<template>
<div class="container">
    <div class="row">
        <div class="col-md">
            <br>
            <app-header @loginChanged="login = $event"></app-header>
            <br>
            <div class="alert alert-success" role="alert" v-if="login">
                {{ "welcome" | localization }}
            </div>
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
    },
    data() {
        return {
            login: false
        }
    }
}
</script>

<style>

</style>
