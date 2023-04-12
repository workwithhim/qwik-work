import { onGetFourkitesTracking, onGetSamsara } from "~/utils/api";
import { ENV_VARIABLES } from "~/env";

export const getVehicleInfoes = async () => onGetSamsara(ENV_VARIABLES.VITE_SAMSARA_LIST_VEHICLES_PUBLIC_URL)

export const getFourkitesInfoes = async (page:number) => onGetFourkitesTracking(page)

export const getAllDrivers = async () => onGetSamsara("https://api.samsara.com/fleet/drivers");

export const getDriverInfo = async (driverId: number) => onGetSamsara(`https://api.samsara.com/fleet/drivers/${driverId}`) 