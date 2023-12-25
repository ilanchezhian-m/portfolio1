import { component$ } from "@builder.io/qwik";

// import { LearnMoreBtn } from "~/components/button/LearnMoreBtn";


// import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    // Hero Wrapper
    <div class="mt-64 flex w-screen flex-col justify-center gap-64 sm:gap-32 md:mt-0 md:gap-64 lg:gap-96 xl:w-1280 ">
      {/* //Hero Heading */}
      <section class="container min-w-full">
        <div class="flex w-full flex-col items-center justify-center gap-24 md:min-h-screen md:gap-32 xl:gap-48">
          <div class="mt-64 flex w-full flex-col items-center justify-center gap-24 md:gap-32 lg:mt-48 xl:gap-48">
            <h1 class="text-center text-48 tracking-low text-black sm:text-69 md:text-80 lg:text-105 xl:text-138">
             Download Resume
            </h1>

          </div>
        </div>
      </section>
    </div>
  );
});

