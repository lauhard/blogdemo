<script lang="ts">
    import type { PageData } from "./$types";

    export let data:PageData
    const files= data.files
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