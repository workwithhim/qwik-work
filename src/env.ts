import z from 'zod';

const envVariables = z.object({
  VITE_SAMSARA_CREATE_ROUTE_PUBLIC_URL: z.string(),
  VITE_SAMSARA_LIST_VEHICLES_PUBLIC_URL: z.string(),
  VITE_FOURKITES_BASE_URL: z.string(),
  VITE_SAMSARA_API_KEY: z.string(),
  VITE_FOURKITES_CLIENT_ID: z.string(),
  VITE_FOURKITES_CLIENT_SCRET: z.string(),
  VITE_FOURKITES_API_KEY: z.string(),
  VITE_DB_HOST: z.string(),
  VITE_DB_PORT: z.string(),
  VITE_DB_USER: z.string(),
  VITE_DB_NAME: z.string(),
  VITE_DB_PWD: z.string(),
});

// VITE_SAMSARA_CREATE_ROUTE_PUBLIC_URL = https://developers.samsara.com/reference/createroute
// VITE_SAMSARA_LIST_VEHICLES_PUBLIC_URL = https://api.samsara.com/fleet/vehicles
// VITE_FOURKITES_BASE_URL = https://api-staging.fourkites.com
// VITE_FOURKITES_API_KEY = Alexandru
// VITE_SAMSARA_API_KEY = samsara_api_iAQ8CxRla6yNNWpjbIocdB40uo1cqE
// VITE_FOURKITES_CLIENT_ID = 5522484d02544c9498a500393b530c0a
// VITE_FOURKITES_CLIENT_SCRET = rfrkr2lyy3rxqxnrq1bmqkevtxpjuxvytk9kvww4ujrnzhfpslpvtddxa1fxmvbkutertstsadzyv1dds1mrcmo1vt0=
// VITE_DB_HOST = localhost
// VITE_DB_PORT = 3306
// VITE_DB_USER = 95fohpsy27ktk41b9dt2
// VITE_DB_NAME = TEST
// VITE_DB_PWD = pscale_pw_tVKrv38kMoENOiPCqCpDtiqMIInp6tGViCgAn5tyfJi

export const ENV_VARIABLES = envVariables.parse(import.meta.env);