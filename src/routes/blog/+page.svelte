<script lang="ts">
    import { getItem, setItem } from "$lib/utils/localStorage";
    import type { PageData } from "./$types";

    export let data:PageData
    const files= data.files
    setItem("theme","dark");
    let theme = getItem("theme");
    console.log("theme",theme)
</script>

<ul>
    {#each files as file}
        <li>
            <a href="/blog/{file.path}">{file.metadata.title}</a>
        </li>
    {/each}
</ul>


<style lang="ts">

</style>