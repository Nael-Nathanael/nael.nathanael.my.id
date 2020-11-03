<script>
    import { Container } from "sveltestrap";
    let title = ["WEB DEVELOPER", "SOFTWARE ENGINEER"];
    let index = 0;
    let currClass = " fade-in";
    let counter = 0;

    setInterval(() => {
        if (counter == 3) {
            currClass = " fade-out";
            counter++;
        } else if (counter == 4) {
            if (index >= title.length - 1) {
                index = 0;
            } else {
                index++;
            }

            currClass = " fade-in";

            counter = 0;
        } else {
            counter++;
        }
    }, 500);
</script>

<style>
    header {
        height: 100vh;
        display: flex;
        align-items: center;
    }

    .custom-animated {
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    .fade-in {
        animation-name: fadeInOpacity;
    }

    .fade-out {
        animation-name: fadeOutOpacity;
    }

    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeOutOpacity {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>

<header>
    <iframe
        src="./bg.html"
        class="w-100 h-100"
        frameborder="0"
        title="aesir cytus bg"
        style="position: absolute; z-index: -1" />
    <Container
        class="align-items-center d-flex justify-content-center flex-column">
        <img
            src="https://nael.nathanael.my.id/images/avatar.jpeg"
            alt=""
            srcset=""
            class="rounded-circle mb-4" />
        <div>
            <h1 class="text-center mb-0">NATHANAEL</h1>
            <h3 class={'text-center custom-animated' + currClass}>
                {title[index]}
            </h3>
        </div>
    </Container>
</header>
