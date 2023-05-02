<script lang="ts">
    import Form from "./Form.svelte";
    import Moon from "./svgs/Moon.svelte";

    export let themeState = "dark";
    $: fadeout = themeState == "dark" ? true : false;
    import sun from "$lib/svg/sun.svg";
    import moon from "$lib/svg/moon.svg";
    import Sun from "./svgs/Sun.svelte";

    const formActionResult = async (event: CustomEvent) => {
        const { formactionresult } = event.detail;
        const { form, data, action, cancel, submitter } = formactionresult;
        const theme: string | null = action.searchParams.get("theme");
        const html = document.getElementsByTagName("html")[0];
        html.dataset.theme = theme ?? "";
        console.log("formActionResult theme", theme);
        themeState = theme || "";
    };
</script>

<Form
    --form-height="2rem"
    on:formaction={formActionResult}
    action="/blog?/setTheme&theme={themeState}"
>
    <button
        type="submit"
        title="Toggles light & dark"
        aria-label="auto"
        aria-live="polite"
        class="toggler"
        on:click|capture={(e) => {
            fadeout = !fadeout;
            console.log("fadeout", fadeout);
            themeState = fadeout == true ? "dark" : "light";
            console.log("theme", themeState);
        }}
    >
        <div class="moon" class:fade-in="{fadeout==true}">
            <Moon width="1rem" height="1rem" iconStyle=""></Moon>
        </div>
        <div class="sun" class:fade-out="{fadeout==true}">
            <Sun width="1.1rem" height="1.1rem" iconStyle=""></Sun>
        </div>
    </button>
</Form>

<style lang="scss">
    .toggler {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: rgb(2, 2, 2);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        box-sizing: border-box;
        border-style: none;
        box-shadow: none;
    }
     .sun,
     .moon {
        width: 2rem;
        height: 2rem;
        transform: translate(0px, 0px) rotate(0deg);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all ease-in-out 0.2s;
        position: relative;
    }
    .sun
    {
        transform: translate(0px, 0px) rotate(0deg);
        transform-origin: center;
        color: #f0c714 !important;
    }
     .sun:hover {
        transform-origin: center;
        margin: 0;
        padding: 0;
        transition: transform ease-in-out 0.5s;
    }
    .moon {
        transform: translate(-50px,30px) rotate(-180deg);
        transform-origin: bottom center;
        width: 0px;
        transition: all ease-in-out .1s;
        color: #1567c5 !important;
        opacity: 1;
    }
    .fade-out {
        transform: translate(20px, -60px) rotate(180deg);
        transform-origin: bottom right;
        transition: all ease-in-out 0.1s;
        opacity: 0;
        width: 0px;
    }
    .fade-in {
        transform: translate(0px, 0px) rotate(0deg);
        transition: all ease-in-out 0.2s;
        opacity: 1;
        width: auto;
    }
</style>
