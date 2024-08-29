export interface IPicture {
  url: string;
  type: "mobile" | "desktop";
}

let dimensions = {
  mobile: [473, 1024],
  desktop: [1920, 1080],
} as const;

let lp_get = (type: "mobile" | "desktop") =>
  ({
    url: `https://picsum.photos/${dimensions[type][0]}/${
      dimensions[type][1]
    }?random=${Date.now() + Math.floor(Math.random() * 1000)}`,
    type: type,
  } as IPicture);

export const random_pic = () =>
  Math.floor(Math.random() * 10) > 5 ? lp_get("mobile") : lp_get("desktop");

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex: number;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
