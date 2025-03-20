# weaall-ui

Date Picker

## Installation

To install `weaall-ui`, run the following command:

```bash
npm install weaall-ui
```
## Usage

import React, { useState } from 'react';
import DatePicker from 'weaall-ui';

const MyComponent = () => {
  const [selectedDates, setSelectedDates] = useState({ startDate: '', endDate: '' });

  const handleDateChange = (dates: { startDate: string; endDate: string }) => {
    setSelectedDates(dates);
  };

  return (
    <div>
      <DatePicker
        startDate={selectedDates.startDate}
        endDate={selectedDates.endDate}
        onDateValueChange={handleDateChange}
      />
    </div>
  );
};

export default MyComponent;

## Key Features

- Date Picker: Provides a UI for selecting a date range.
- Styling: Based on Tailwind CSS, making it easy to customize.
- TypeScript Support: Full TypeScript type definitions are included.

## Key Features

| Prop               | Type                                                      | Description                                       |
|--------------------|-----------------------------------------------------------|---------------------------------------------------|
| `startDate`        | `string`                                                  | Start date (format: YYYY-MM-DD)                   |
| `endDate`          | `string`                                                  | End date (format: YYYY-MM-DD)                     |
| `onDateValueChange`| `(selectedDates: { startDate: string; endDate: string }) => void` | Callback function triggered when dates change |
