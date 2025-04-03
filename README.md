# weaall-ui

Date Picker

## Installation

To install `weaall-ui`, run the following command:

```bash
npm install weaall-ui
```
## Usage

```js
module.exports = {
    theme: {
        colors: {
            primary: "#ff0000",
            hoverPrimary: "#cc0000",
        },
    },
};
```

## Key Features

- Date Picker: Provides a UI for selecting a date range.
- Styling: Based on Tailwind CSS, making it easy to customize.
- TypeScript Support: Full TypeScript type definitions are included.


| Prop               | Type                                                      | Description                                       |
|--------------------|-----------------------------------------------------------|---------------------------------------------------|
| `startDate`        | `string`                                                  | Start date (format: YYYY-MM-DD)                   |
| `endDate`          | `string`                                                  | End date (format: YYYY-MM-DD)                     |
| `onDateValueChange`| `(selectedDates: { startDate: string; endDate: string }) => void` | Callback function triggered when dates change |
