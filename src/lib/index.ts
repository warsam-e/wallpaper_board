export const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface IPicture {
  url: string;
  type: "mobile" | "desktop";
}

type Dimensions = [number, number];

let dimensions = {
  mobile: [473, 1024],
  desktop: [1920, 1080],
} as Record<"mobile" | "desktop", Dimensions>;

let lp_get = (type: "mobile" | "desktop") =>
  ({
    url: `https://picsum.photos/${dimensions[type][0]}/${
      dimensions[type][1]
    }?random=${Date.now() + Math.floor(Math.random() * 1000)}`,
    type: type,
  } as IPicture);

export const random_pic = () =>
  Math.random() > 0.5 ? lp_get("mobile") : lp_get("desktop");
