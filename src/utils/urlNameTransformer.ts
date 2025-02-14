export const transformToUrlName = (value: string) =>
  value.split("-").join("_").split(" ").join("-");

export const reTransformUrlName = (value: string) =>
  value.split("_").join("-").split("-").join(" ");
