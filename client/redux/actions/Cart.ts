export const set = (productId: Record<any, any>, count: number): any => ({
  type: "SET",
  productId,
  count,
});

export const remove = (productId: Record<any, any>): any => ({
  type: "REMOVE",
  productId,
});
