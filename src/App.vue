<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <br>
            <app-header></app-header>
            <br>
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    components:{
        appHeader : Header
    }
}
</script>

<style>

</style>
