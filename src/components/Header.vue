<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link active-class="active" exact tag="li" to="/">
                    <a class="navbar-brand" href="">VueSampleProject</a>
                </router-link>
            </div>
            <ul class="nav navbar-nav">
                <router-link active-class="active" exact tag="li" to="/">
                    <a href="">Home</a>
                </router-link>
                <router-link active-class="active" exact tag="li" to="/user/1">
                    <a href="">User 1</a>
                </router-link>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
    </nav>
</template>
