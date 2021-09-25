<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <img :src="src" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            src : "http://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png"
        }
    }
}
</script>

<style scoped>
.col{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

</style>