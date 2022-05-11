<template>
    <h1>Home Page</h1>
</template>

<script>
export default {
    unmounted() {
        console.log("Home componenet unmounted")
    },
    activated(){
        console.log("Home componenet activated")
    },
    deactivated(){
        console.log("Home componenet deactivated")
    }
}
</script>