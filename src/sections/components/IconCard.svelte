<script>
    export let icon, organization;
    export let iconWithIdentifier = false;
    export let small = false;
</script>

<style>
    .icon_card {
        height: 150px;
        width: 150px;
        margin: 10px 1.25rem 1.25rem 1.25rem;
    }

    .insideImage {
        max-width: 100%;
        height: auto;
    }
</style>

<div
    class="icon_card d-flex flex-column align-items-center justify-content-center bg-white rounded p-1">
    {#if icon}
        <div
            class="d-flex justify-content-center align-items-center flex-grow-1">
            <img
                src={icon}
                alt={organization}
                class="insideImage"
                width="100px" />
        </div>
        {#if !iconWithIdentifier}
            <p class="text-center m-0 {small ? 'small' : ''}">{organization}</p>
        {/if}
    {:else}
        <span class="h3 m-0 {small ? 'small' : ''}"> {organization} </span>
    {/if}
</div>
