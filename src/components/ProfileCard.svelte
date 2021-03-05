<script>
  import { Card, Col, Row } from "sveltestrap";
  import { slide, fade } from "svelte/transition";
  import { onMount } from "svelte";
  export let simpleMode;
  let title = ["WEB DEVELOPER", "SOFTWARE ENGINEER"];
  let index = 0;

  setInterval(() => {
    index = index == title.length - 1 ? 0 : index + 1;
  }, 3000);

  let fetchPersonalData;
  onMount(async () => {
    fetchPersonalData = await fetch(
      "https://api.npoint.io/6f3008f88b623358a927"
    ).then((x) => x.json());
  });
</script>

{#if simpleMode || !fetchPersonalData}
  <div
    transition:slide
    class="align-items-center d-flex justify-content-center flex-column"
  >
    <img
      src="https://nael.nathanael.my.id/images/avatar.jpeg"
      alt=""
      srcset=""
      class="rounded-circle mb-4"
    />
    <div>
      <h1 class="text-center mb-0">NATHANAEL</h1>
      {#key index}
        <h3
          class={"text-center"}
          in:fade={{ duration: 500 }}
          out:fade={{ delay: -500 }}
        >
          {title[index]}
        </h3>
      {/key}
    </div>
  </div>
{:else}
  <div transition:slide>
    <Row>
      <Col
        lg={{ size: 8, offset: 2 }}
        md={{ size: 10, offset: 1 }}
        sm={{ size: 12 }}
      >
        <Card body>
          <div>
            <Row class="h-100">
              <Col xs="12" class="h-100">
                <div
                  class="align-items-center d-flex justify-content-center flex-column h-100"
                >
                  <img
                    src="https://nael.nathanael.my.id/images/avatar.jpeg"
                    alt=""
                    srcset=""
                    height="150px"
                    class="rounded-circle mb-2"
                  />
                  <div>
                    <h3 class="text-center mb-0 black">NATHANAEL</h3>
                    {#key index}
                      <h5
                        class={"black"}
                        in:fade={{ duration: 500 }}
                        out:fade={{ delay: -500 }}
                      >
                        {title[index]}
                      </h5>
                    {/key}
                  </div>
                </div>
              </Col>
              {#await fetchPersonalData}
                <!-- promise is pending -->
              {:then fetchPersonalData}
                <!-- promise was fulfilled -->
                <Col xs="12" class="h-100">
                  <h4 class="black">Personal Info</h4>
                  <hr />
                  <Row>
                    {#each fetchPersonalData.data as { title, value }}
                      <Col xs="12">
                        <span class="black font-weight-bold">
                          {title}
                        </span>
                      </Col>
                      <Col xs="12" class="mb-2">
                        <span class="black"> {value} </span>
                      </Col>
                    {/each}
                  </Row>
                </Col>
              {/await}
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
{/if}

<style>
  .black {
    color: black;
  }
</style>
