import { component$, useResource$, useSignal, Resource, useStore, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import TruckTable from '~/components/starter/table/table';
import Pagination from '~/components/starter/pagination/pagination';
import { getFourkitesInfoes, getVehicleInfoes, getAllDrivers, getDriverInfo } from '~/providers';

export default component$(() => {
  const { url } = useLocation();
  const prNumber = useSignal('3576');
  const state = useStore<{
    showMenu: boolean;
    Infoes: [];
    pagination: {
      count: number,
      page: number,
      perPage: number,
      totalPages: number
    }
  }>({
    showMenu: false,
    Infoes: [],
    pagination: {
      count: 0,
      page: 0,
      perPage: 0,
      totalPages: 0
    }
  });

  useTask$(async ({track}) => {
    track(()=>state.pagination.page)
    const res = await getFourkitesInfoes(0);
    state.Infoes = res?.data;
    state.pagination = res?.pagination;
  });

  const handleChangePage = (page:number) => {
    state.pagination.page = page;
  }
  return (
    <div class="mt-4">
      <div class="flex justify-end">
        <div class="flex justify-center mx-2">
          <input type='text' id="phone" class="block w-full p-2.5 bg-transparent border border-gray-500 rounded-none outline-none focus-visible:border-black text-black" placeholder="Phone (+12345678901)" />
        </div>
        <div class="flex justify-center">
          <input type='text' id="phone" class="block w-full p-2.5 bg-transparent border border-gray-500 rounded-none outline-none focus-visible:border-black text-black " placeholder="Truck (12345678901)" />
        </div>
      </div>
      <Pagination data={state.pagination}/> 
      <div class="flex justify-center">
        {state.pagination.page}
        <table class="border w-full" onClick$={()=>state.pagination.page +1}>
          <thead>
            <th>No</th>
            <th>LoadNumber</th>
            <th>Reference Num</th>
            <th>Status</th>
            <th>Origin</th>
            <th>OriginAppointmentTime</th>
            <th>Destination</th>
            <th>DestinationAppointmentTime</th>
          </thead>
          <tbody>
            {state.Infoes.map((item, ind) => {
              if (!item) return null;
              const pageInfo = state.pagination;
              return (
                <tr key={ind} class="text-center">
                  <td>{(pageInfo.page -1)*pageInfo.perPage + 1 + ind}</td>
                  <td>{item.loadNumber}</td>
                  <td>{item.loadNumber}</td>
                  <td>{item.loadNumber}</td>
                  <td>{item.loadNumber}</td>
                  <td>{item.loadNumber}</td>
                  <td>{item.loadNumber}</td>
                  <td>{item.loadNumber}</td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'truck table',
      content: 'truck table',
    },
  ],
};