
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(({ data }: any) => {
  console.log(data)
  if (data.totalPages > 5) {
    return (
      <nav>
        {
          Array(5).map((ele, ind) => {
            console.log(ele)
            return (
              <li key={ind}>
                <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">{ele}</a>
              </li>
            )
          })
        }
      </nav>
    )
  }

  return (
    <nav>
      <ul class="flex">
        <li>
          <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Previous">
            <span class="material-icons text-sm">&lt;</span>
          </a>
        </li>

        <li>
          <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">2</a>
        </li>
        <li>
          <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#">3</a>
        </li>
        <li>
          <a class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" href="#" aria-label="Next">
            <span class="material-icons text-sm">&gt;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
});