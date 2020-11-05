<script>
    export let icon, organization, iconWithIdentifier;
</script>

<style>
    .icon_card {
        height: 150px;
        width: 150px;
        margin: 10px;
    }
</style>

<div
    class="icon_card d-flex flex-column align-items-center justify-content-center bg-white rounded">
    {#if icon}
        <img src={icon} alt={organization} width="100px" />
        {#if !iconWithIdentifier}{organization}{/if}
    {:else}<span class="h3 m-0"> {organization} </span>{/if}
</div>
