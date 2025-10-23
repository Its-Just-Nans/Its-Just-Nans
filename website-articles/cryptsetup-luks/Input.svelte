<script lang="ts">
    import { onMount } from "svelte";
    export let values;

    let defaultCode = "";

    const updateCode = () => {
        let copy = defaultCode;
        Object.keys(values).forEach((key) => {
            console.log(key, values[key]);
            copy = copy.replaceAll(key, values[key].value);
        });
        document.querySelector(".dynamic-code-slot .astro-code")!.innerHTML = copy;
    };
    onMount(() => {
        defaultCode = document.querySelector(".dynamic-code-slot .astro-code")!.innerHTML;
        updateCode();
    });
</script>

<div>
    <p>Enter the values for the following fields:</p>
</div>
{#each Object.keys(values) as onePart}
    <div class="input-container">
        <label for={values[onePart].text}>{values[onePart].text}</label>
        <input
            type="text"
            bind:value={values[onePart].value}
            on:input={() => {
                updateCode();
            }}
        />
    </div>
{/each}

<br />

<div class="dynamic-code-slot">
    <slot />
</div>

<style>
    .input-container {
        display: flex;
        justify-content: center;
    }
    .input-container label {
        flex: 0.5;
    }
</style>
