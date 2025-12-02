import { RootState, AppDispatch } from "./store";

export type { RootState, AppDispatch };

export interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}
