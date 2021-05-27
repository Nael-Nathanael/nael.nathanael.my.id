<script>
  export let icon, organization, href;
  export let small = false;
</script>

<a href="{href}" style="min-height: 200px" class="mt-5" target="_blank">
  <div>
    <div class="rounded-circle bg-white p-1 mb-1">
      <img alt={organization} class="insideImage" src={icon} />
    </div>
  </div>
  <div class="d-flex justify-content-center align-items-center mt-2" style="height: 40px">
    <p class="text-center text-white m-0 {small ? 'small' : ''}">{organization}</p>
  </div>
</a>

<style>
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        text-decoration: none;
    }

    .insideImage {
        max-width: 100%;
        height: auto;
        border-radius: 50%;
    }
</style>
