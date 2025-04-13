<script setup lang="ts">
    const curYear = () => {
        return new Date().getFullYear()
    }
</script>
<template>
    <footer class="bg-gray-800 text-white text-center w-screen ">
        <slot></slot> - {{ curYear() }}
    </footer>
</template>