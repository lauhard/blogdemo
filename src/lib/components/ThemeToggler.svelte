<script lang="ts">
    import Form from "./Form.svelte";

    export let themeState="dark";
    $:fadeout= themeState=="dark" ? true : false;

    const formActionResult = async (event: CustomEvent) => {
        const { formactionresult } = event.detail;
        const {form, data, action, cancel, submitter } = formactionresult;
        const theme:string | null = action.searchParams.get('theme');
        const html = document.getElementsByTagName('html')[0];
        html.dataset.theme = theme ?? "";
        console.log("formActionResult theme",theme)
        themeState = theme || "";
    }
</script>
<Form  
    --form-height="2rem"
    on:formaction={formActionResult}
    action="/blog?/setTheme&theme={themeState}"
>
    <button  type="submit" class="toggler" on:click|capture={(e)=>{
        fadeout=!fadeout; 
        console.log("fadeout",fadeout)
        themeState=fadeout==true ? "dark" : "light"
        console.log("theme",themeState)
    }}>
        <i class="fa-solid fa-sun"  class:fade-out="{fadeout==true}"></i>
        <i class="fa-solid fa-moon"  class:fade-in="{fadeout==true}"></i>
    </button>
</Form>

<style lang="scss">
    .toggler{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden; 
        box-sizing: border-box;
        border: none;
        border-style: none;
        box-shadow: none;
    }
    .fa-sun, .fa-moon {
        transform: translate(0px,0px) rotate(0deg);
        transform-origin: center;
        transition: all ease-in-out .2s;
    }
    .fa-sun{
        color: #f0c714
    }
    .fa-sun:hover {
        transform: rotate(180deg);
        transform-origin: center;
        margin: 0;
        padding: 0;
        transition: transform ease-in-out .5s;
    }
    .fa-moon {
        transform: translate(-50px,30px) rotate(-180deg);
        transform-origin: bottom center;
        width: 0px;
        transition: all ease-in-out .1s;
        color: #1567c5;
        opacity: 1;
    }
    .fade-out{
        transform: translate(10px,-30px) rotate(180deg);
        transform-origin: bottom right;
        transition: all ease-in-out .1s;
        opacity: 0;
        width: 0px;
    }
    .fade-in {
        transform: translate(0px,0px) rotate(0deg);
        transition: all ease-in-out .2s;
        opacity: 1;
        width: auto;
    }
</style>