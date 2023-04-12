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

export const ENV_VARIABLES = envVariables.parse(import.meta.env);