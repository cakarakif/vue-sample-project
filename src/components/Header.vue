<template>
    <ul class="nav nav-pills">
        <router-link 
                active-class="active"
                exact
                tag="li"
                to="/">
            <a href="">Home</a>
        </router-link>
        <router-link 
                active-class="active"
                exact
                tag="li"
                to="/user/1">
            <a href="">User 1</a>
        </router-link>
        <router-link 
                active-class="active"
                exact
                tag="li"
                to="/user/2">
            <a href="">User 2</a>
        </router-link>
    </ul>
</template>