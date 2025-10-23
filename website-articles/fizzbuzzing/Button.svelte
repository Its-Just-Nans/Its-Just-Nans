<script>
    import { isOn } from "./storage";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    role="button"
    tabindex="0"
    on:click={() => {
        $isOn = !$isOn;
    }}
>
    <input type="checkbox" checked={$isOn} />
    <slot name="button" />

    {#if $isOn}
        <slot name="on" />
    {:else}
        <slot name="off" />
    {/if}
</div>
<br />
