import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/header/header';

export default component$(() => {
  return (
    <div class="w-[95%] sm:w-[90%] lg:w-[80%] p-[2%] m-auto">
      <Header/>
      <Slot />
    </div>
  );
});
