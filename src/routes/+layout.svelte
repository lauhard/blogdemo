
<script lang="ts">
    import Navigation from "$lib/components/Navigation.svelte";
    import ThemeToggler from "$lib/components/ThemeToggler.svelte";
    import "../app.css";
    import type { LayoutServerData } from "./$types";
    export let data:LayoutServerData
    let themeState = data.currentTheme;
</script>
<div class="app">
    <Navigation>
        <li><ThemeToggler {themeState} ></ThemeToggler></li>
    </Navigation>
    <slot></slot>
</div>

<style lang="scss">
    .app {
        width:100%
    }
</style>