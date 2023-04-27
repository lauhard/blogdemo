<script lang="ts">
	import { enhance } from '$app/forms';
    import { formAction } from '$lib/forms/enhance';
    import { createEventDispatcher } from 'svelte';
    export let action="";
    const dispatch = createEventDispatcher();
//    console.log("action:", action)
</script>
<div class="form-wrapper">

<form method="POST" use:enhance={(e)=>formAction(e, dispatch)} action="{action}">
    <slot></slot>
</form>
   
</div>
<style lang="scss">
    .form-wrapper {
        display: flex;
        justify-content: center;
        width: var(--form-width, 80%);
        height: var(--form-height, auto);
        margin: 0 auto;
        form{
            width: 100%;
            height: 100%;
        }
    }
</style>
