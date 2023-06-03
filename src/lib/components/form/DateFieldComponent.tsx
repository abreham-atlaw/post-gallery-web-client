import { ReactNode } from "react";
import { FieldComponent, FieldComponentProps } from "./FieldComponent";

export default class DateFieldComponent extends FieldComponent<Date, FieldComponentProps<Date>> {
  protected constructInputNode(value: Date | null, callback: Function): ReactNode {
    const dateString = value ? value.toISOString().substr(0, 10) : "";

    return (
      <input
        type="date"
        value={dateString}
        onChange={(event) => {
          const dateValue = event.target.value;
          const date = new Date(dateValue);
          callback(date);
        }}
      />
    );
  }
}