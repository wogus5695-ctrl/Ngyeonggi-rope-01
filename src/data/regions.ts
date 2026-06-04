export interface Province {
  slug: string;
  name: string;
  cities: City[];
}

export interface City {
  slug: string;
  name: string;
}

export const regions: Province[] = [
  {
    slug: "gyeonggi",
    name: "경기도",
    cities: [
      { slug: "goyang", name: "고양시" },
      { slug: "paju", name: "파주시" },
      { slug: "yangju", name: "양주시" }
    ],
  }
];

export function getRegionInfo(provinceSlug: string, citySlug: string) {
  const province = regions.find((p) => p.slug === provinceSlug);
  if (!province) return null;
  
  const city = province.cities.find((c) => c.slug === citySlug);
  if (!city) return null;
  
  return { province, city };
}

export function getRegionByLocationName(name: string) {
  for (const province of regions) {
    const city = province.cities.find(c => c.name.includes(name) || name.includes(c.name));
    if (city) {
      return {
        provinceSlug: province.slug,
        citySlug: city.slug,
        provinceName: province.name,
        cityName: city.name
      };
    }
  }
  return null;
}
