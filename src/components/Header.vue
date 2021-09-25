<template>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <router-link active-class="active" exact tag="li" to="/startpage">
                <a class="navbar-brand" href="">{{"project_name" | localization}}</a>
            </router-link>
        </div>
        <ul class="nav navbar-nav">
            <router-link active-class="active" exact tag="li" to="/">
                <a href="">{{ "home" | localization}}</a>
            </router-link>
            <router-link active-class="active" exact tag="li" to="/contactus">
                <a href="">{{ "contact_us" | localization}}</a>
            </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a @click="changeLang">{{language}}</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> {{ "login" | localization}}</a></li>
        </ul>
    </div>
</nav>
</template>

<script>
import {
    eventBus
} from "../main"
export default {
    data() {
        return {
            language: "TR"
        }
    },
    methods: {
        changeLang() {
            eventBus.$emit("languageChanged", this.language)

            if (this.language == "TR") {
                this.language = "EN"
            } else {
                this.language = "TR"
            }

            this.$router.push("/startpage")
        }
    }
}
</script>
