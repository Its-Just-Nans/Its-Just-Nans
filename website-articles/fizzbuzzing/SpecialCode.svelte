<script>
    import { isOn } from "./storage";
</script>

{#if $isOn}
    <slot name="on" />
{:else}
    <slot name="off" />
{/if}
