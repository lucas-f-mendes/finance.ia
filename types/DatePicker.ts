import { SelectSingleEventHandler } from "react-day-picker";

export interface DatePickerInterface {
  value?: Date;
  onChange?: SelectSingleEventHandler;
}