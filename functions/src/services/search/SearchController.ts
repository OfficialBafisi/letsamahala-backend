import { getPlaces } from "./providers/OpenCageDataProvider"

export const getPlacesByName = async (name: string) => {
	if (name.length < 3) {
		return {
			type: "FeatureCollection",
			features: []
		}
	}

	return await getPlaces(name);
}