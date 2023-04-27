<script lang="ts">
    import type { PageData } from "./$types";

    export let data:PageData
    console.log("data x",data.x)
    const p= data.x
</script>

<ul>
    {#each p as x}
        <li>
            <a href="/blog/{x.path}">{x.metadata.title}</a>
        </li>
    {/each}
</ul>


<style lang="ts">

</style>