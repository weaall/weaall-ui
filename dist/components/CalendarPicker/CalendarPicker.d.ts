interface CalendarPickerProps {
    startDate: string;
    endDate: string;
    onDateValueChange: (selectedDates: {
        startDate: string;
        endDate: string;
    }) => void;
    lang?: "en" | "en-long" | "ko";
    maxMonth?: number;
    maxDate?: number;
}
export default function CalendarPicker({ startDate, endDate, onDateValueChange, lang, maxMonth, maxDate }: CalendarPickerProps): import("react/jsx-runtime").JSX.Element;
export {};
