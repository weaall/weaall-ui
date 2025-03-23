import * as react_jsx_runtime from 'react/jsx-runtime';

interface DatePickerProps {
    startDate: string;
    endDate: string;
    onDateValueChange: (selectedDates: {
        startDate: string;
        endDate: string;
    }) => void;
}
declare function DatePicker({ startDate, endDate, onDateValueChange }: DatePickerProps): react_jsx_runtime.JSX.Element;

export { DatePicker };
