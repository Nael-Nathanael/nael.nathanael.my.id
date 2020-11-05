<script>
    import { Row, Col, Card } from "sveltestrap";

    export let icon, organization, descriptions, start, end;
</script>

<style>
    .paddingRightNormal {
        padding-right: 1.25rem;
    }

    .description {
        text-align: justify;
    }
</style>

<div class="mb-2 w-100">
    <Card body>
        <div class="d-flex">
            <div
                class="d-flex justify-content-center align-items-center flex-column paddingRightNormal">
                <div class="w-100">
                    <img
                        src={icon}
                        alt={organization}
                        width="100px"
                        style={{ width: '100%' }} />
                </div>
            </div>
            <div>
                {organization}

                <p class="m-0">
                    <span class="font-weight-bold">{start}</span>
                    -
                    <span class="font-weight-bold">{end}</span>
                </p>
                <p class="description">{descriptions}</p>
            </div>
        </div>
    </Card>
</div>
