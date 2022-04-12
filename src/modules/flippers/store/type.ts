export type FlipperType = {
  key: string;
  value: boolean;
};

export interface FlippersState {
  flippers: Record<string, FlipperType>;
  status: string;
}
