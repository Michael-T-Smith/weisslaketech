import rawZipcodes from './zipcodes.json';
const zipcodes = rawZipcodes as unknown as Record<string, [number, number]>;
const BUSINESS_LOCATION= [34.268, -85.862]; 

function clientDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 3958.8;

  const rad = (deg: number) => deg * Math.PI / 180;

  const dLat = rad(lat2 - lat1);
  const dLon = rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(lat1)) *
      Math.cos(rad(lat2)) *
      Math.sin(dLon / 2) ** 2;

  return 2 * R * Math.asin(Math.sqrt(a));
}


export function isInServiceDistance(zip: string) {
    const [lat, long] = zipcodes[zip];

    let distance = clientDistance(lat, long, BUSINESS_LOCATION[0], BUSINESS_LOCATION[1]);
    
    return distance < 50.0;

}