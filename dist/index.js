// src/components/date-picker/DatePicker.tsx
import { useState } from "react";
import dayjs from "dayjs";

// src/components/date-picker/DatePicker.styles.tsx
import tw from "tailwind-styled-components";
var Container = tw.div`absolute w-full px-4 mt-2 mobile:pt-0 text-black`;
var ModalWrap = tw.div`w-full flex rounded-xl h-auto bg-white shadow-md border p-4`;
var ContentsWrap = tw.div`w-full flex flex-col space-y-2 px-6 py-6 border-b`;
var ContentsFlex = tw.div`w-full flex items-center justify-between`;
var HalfCol = tw.div`w-[50%] flex flex-col`;
var HalfFlex = tw.div`w-[50%] flex justify-end`;
var FlexWrap = tw.div`flex w-full justify-center`;
var CalendarWrap = tw.div`h-[80%] px-6 mobile:px-2 flex flex-col`;
var CalTitleWrap = tw.div`w-full flex items-center justify-between mb-3`;
var YearWrap = tw.div`flex gap-4 items-center`;
var YearMonth = tw.h2`text-base font-semibold
mobile:text-base`;
var NavBtn = tw.button`p-1 rounded-full hover:bg-gray-50`;
var NavSvg = tw.img`w-6`;
var DaysWrap = tw.div`h-4 flex justify-center`;
var DayWrap = tw.div`w-[14%] text-center`;
var DayLabel = tw.p`font-semibold
${(p) => p.$day === 0 ? "text-red-500" : p.$day === 6 ? "text-blue-500" : ""}`;
var DatesWrap = tw.div`flex flex-wrap w-full justify-center my-2`;
var DateWrap = tw.div`h-10 w-[14%] p-2 text-center flex flex-col justify-center
hover:bg-gray-100 cursor-pointer mobile:hover:bg-main/[.25] hover:rounded-xl
${(p) => p.$date === "startDate" ? "bg-main/[.25] rounded-l-xl" : p.$date === "endDate" ? "bg-main/[.25] rounded-r-xl" : p.$date === "betweenDate" ? "bg-main/[.13]" : p.$date === "today" ? "bg-main" : ""}`;
var PastWrap = tw.div`h-10 w-[14%] p-2 text-center flex flex-col justify-center rounded-lg text-gray-300 cursor-default`;
var DateLabel = tw.p`
${(p) => p.$date === "today" ? "text-main font-bold" : p.$date === "other" ? "hidden" : ""}`;
var SelectWrap = tw.div`h-[60px] flex border-t mx-4 mobile:mx-2 flex-shrink-0`;
var UpperTag = tw.p`text-xs`;
var SelectLabel = tw.p`text-center text-lg font-bold
mobile:text-base`;
var StartWrap = tw.div`w-1/2 p-2 border-r`;
var EndWrap = tw.div`w-1/2 p-2`;
var PickWrap = tw.div`flex text-sm gap-20`;
var MonthWrap = tw.div`flex flex-col w-[50%]`;

// src/components/date-picker/DatePicker.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var RightIcon = () => /* @__PURE__ */ jsx("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
  "path",
  {
    d: "M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) });
var LeftIcon = () => /* @__PURE__ */ jsx("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
  "path",
  {
    d: "M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) });
function DatePicker({ startDate, endDate, onDateValueChange }) {
  const [date, setDate] = useState(dayjs());
  const [dateValue, setDateValue] = useState({
    startDate: startDate || dayjs().format("YYYY-MM-DD"),
    endDate: endDate || dayjs().add(1, "day").format("YYYY-MM-DD")
  });
  const selectDate = (selectedDate) => {
    const isBothDatesSet = dateValue.startDate !== "" && dateValue.endDate !== "";
    if (isBothDatesSet) {
      const newDateValue = { startDate: selectedDate, endDate: "" };
      setDateValue(newDateValue);
    } else {
      const isAfterStartDate = dayjs(selectedDate).isAfter(dateValue.startDate, "day");
      const dateDiff = dayjs(selectedDate).diff(dayjs(dateValue.startDate), "day");
      if (isAfterStartDate && dateDiff <= 8) {
        const newDateValue = { ...dateValue, endDate: selectedDate };
        setDateValue(newDateValue);
        if (newDateValue.endDate) {
          onDateValueChange(newDateValue);
        }
      } else if (!isAfterStartDate) {
        const newDateValue = { ...dateValue, startDate: selectedDate };
        setDateValue(newDateValue);
        onDateValueChange(newDateValue);
      }
    }
  };
  const viewYear = date.year();
  const viewMonth = date.month();
  const nextViewYear = date.add(1, "month").year();
  const nextViewMonth = date.add(1, "month").month();
  const prevLast = date.subtract(1, "month").endOf("month");
  const thisLast = date.endOf("month");
  const PLDate = prevLast.date();
  const PLDay = prevLast.day();
  const TLDate = thisLast.date();
  const TLDay = thisLast.day();
  const prevDates = [];
  const thisDates = Array.from({ length: TLDate }, (_, i) => i + 1);
  const nextDates = Array.from({ length: 6 - TLDay }, (_, i) => i + 1);
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }
  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);
  const nextMonth = date.endOf("month");
  const nextLast = nextMonth.add(1, "month").endOf("month");
  const NPLDate = nextMonth.date();
  const NPLDay = nextMonth.day();
  const NLDate = nextLast.date();
  const NLDay = nextLast.day();
  const nextPrevDates = [];
  const nextThisDates = Array.from({ length: NLDate }, (_, i) => i + 1);
  const nextNextDates = Array.from({ length: 6 - NLDay }, (_, i) => i + 1);
  if (NPLDay !== 6) {
    for (let i = 0; i < NPLDay + 1; i++) {
      nextPrevDates.unshift(NPLDate - i);
    }
  }
  const nextMonthDates = nextPrevDates.concat(nextThisDates, nextNextDates);
  const nextFirstDateIndex = nextMonthDates.indexOf(1);
  const nextLastDateIndex = nextMonthDates.lastIndexOf(NLDate);
  const prevMonthClick = () => {
    if (date.isAfter(dayjs(), "month")) {
      setDate(date.subtract(1, "month"));
    }
  };
  const nextMonthClick = () => {
    const nextThreeMonths = dayjs().add(3, "month");
    if (date.isBefore(nextThreeMonths, "month")) {
      setDate(date.add(1, "month"));
    }
  };
  return /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(ModalWrap, { children: /* @__PURE__ */ jsxs(CalendarWrap, { children: [
    /* @__PURE__ */ jsxs(CalTitleWrap, { children: [
      /* @__PURE__ */ jsxs(YearWrap, { children: [
        /* @__PURE__ */ jsx(NavBtn, { onClick: prevMonthClick, children: /* @__PURE__ */ jsx(LeftIcon, {}) }),
        /* @__PURE__ */ jsxs(YearMonth, { children: [
          date.year(),
          ". ",
          date.month() + 1
        ] })
      ] }),
      /* @__PURE__ */ jsxs(YearWrap, { children: [
        /* @__PURE__ */ jsxs(YearMonth, { children: [
          date.add(1, "month").year(),
          ". ",
          date.add(1, "month").month() + 1
        ] }),
        /* @__PURE__ */ jsx(NavBtn, { onClick: nextMonthClick, children: /* @__PURE__ */ jsx(RightIcon, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(PickWrap, { children: [
      /* @__PURE__ */ jsxs(MonthWrap, { children: [
        /* @__PURE__ */ jsx(DaysWrap, { children: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"].map((day, index) => /* @__PURE__ */ jsx(DayWrap, { children: /* @__PURE__ */ jsx(DayLabel, { $day: index, children: day }) }, index)) }),
        /* @__PURE__ */ jsx(DatesWrap, { children: dates.map((date2, i) => {
          const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
          const formattedDate = dayjs(`${viewYear}-${viewMonth + 1}-${date2}`).format("YYYY-MM-DD");
          const today = dayjs().format("YYYY-MM-DD");
          const isPastDate = dayjs(formattedDate).isBefore(today, "day");
          const getDateStyle = () => {
            if (formattedDate === dateValue.startDate) return "startDate";
            if (formattedDate === dateValue.endDate) return "endDate";
            if (dayjs(dateValue.startDate) && dayjs(dateValue.endDate) && dayjs(formattedDate).isAfter(dayjs(dateValue.startDate)) && dayjs(formattedDate).isBefore(dayjs(dateValue.endDate)))
              return "betweenDate";
            return "other";
          };
          const isDisabled = dateValue.startDate && dayjs(formattedDate).diff(dayjs(dateValue.startDate), "day") > 8;
          if (condition === "other") {
            return /* @__PURE__ */ jsx(DateWrap, { $date: "other", children: /* @__PURE__ */ jsx(DateLabel, { $date: condition, children: date2 }) }, i);
          } else if (formattedDate === today) {
            return /* @__PURE__ */ jsx(
              DateWrap,
              {
                $date: getDateStyle(),
                onClick: () => {
                  selectDate(formattedDate);
                },
                children: /* @__PURE__ */ jsx(DateLabel, { $date: "today", children: date2 })
              },
              i
            );
          } else if (isPastDate) {
            return /* @__PURE__ */ jsx(PastWrap, { children: /* @__PURE__ */ jsx(DateLabel, { $date: condition, children: date2 }) }, i);
          } else {
            return /* @__PURE__ */ jsx(
              DateWrap,
              {
                $date: getDateStyle(),
                onClick: () => {
                  if (!isDisabled || dateValue.endDate) selectDate(formattedDate);
                },
                style: isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {},
                children: /* @__PURE__ */ jsx(DateLabel, { $date: condition, children: date2 })
              },
              i
            );
          }
        }) })
      ] }),
      /* @__PURE__ */ jsxs(MonthWrap, { children: [
        /* @__PURE__ */ jsx(DaysWrap, { children: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"].map((day, index) => /* @__PURE__ */ jsx(DayWrap, { children: /* @__PURE__ */ jsx(DayLabel, { $day: index, children: day }) }, index)) }),
        /* @__PURE__ */ jsx(DatesWrap, { children: nextMonthDates.map((date2, i) => {
          const condition = i >= nextFirstDateIndex && i < nextLastDateIndex + 1 ? "this" : "other";
          const formattedDate = dayjs(`${viewYear}-${viewMonth + 2}-${date2}`).format("YYYY-MM-DD");
          const today = dayjs().format("YYYY-MM-DD");
          const isPastDate = dayjs(formattedDate).isBefore(today, "day");
          const getDateStyle = () => {
            if (formattedDate === dateValue.startDate) return "startDate";
            if (formattedDate === dateValue.endDate) return "endDate";
            if (dayjs(dateValue.startDate) && dayjs(dateValue.endDate) && dayjs(formattedDate).isAfter(dayjs(dateValue.startDate)) && dayjs(formattedDate).isBefore(dayjs(dateValue.endDate)))
              return "betweenDate";
            return "other";
          };
          const isDisabled = dateValue.startDate && dayjs(formattedDate).diff(dayjs(dateValue.startDate), "day") > 8;
          if (condition === "other") {
            return /* @__PURE__ */ jsx(DateWrap, { $date: "other", children: /* @__PURE__ */ jsx(DateLabel, { $date: "other", children: date2 }) }, i);
          } else if (formattedDate === today) {
            return /* @__PURE__ */ jsx(
              DateWrap,
              {
                $date: getDateStyle(),
                onClick: () => {
                  selectDate(formattedDate);
                },
                children: /* @__PURE__ */ jsx(DateLabel, { $date: "today", children: date2 })
              },
              i
            );
          } else if (isPastDate) {
            return /* @__PURE__ */ jsx(PastWrap, { children: /* @__PURE__ */ jsx(DateLabel, { $date: condition, children: date2 }) }, i);
          } else {
            return /* @__PURE__ */ jsx(
              DateWrap,
              {
                $date: getDateStyle(),
                onClick: () => {
                  if (!isDisabled || dateValue.endDate) selectDate(formattedDate);
                },
                style: isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {},
                children: /* @__PURE__ */ jsx(DateLabel, { $date: condition, children: date2 })
              },
              i
            );
          }
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(SelectWrap, { children: [
      /* @__PURE__ */ jsxs(StartWrap, { children: [
        /* @__PURE__ */ jsx(UpperTag, { children: "\uCCB4\uD06C\uC778" }),
        /* @__PURE__ */ jsx(SelectLabel, { children: dateValue.startDate })
      ] }),
      /* @__PURE__ */ jsxs(EndWrap, { children: [
        /* @__PURE__ */ jsx(UpperTag, { children: "\uCCB4\uD06C\uC544\uC6C3" }),
        /* @__PURE__ */ jsx(SelectLabel, { children: dateValue.endDate })
      ] })
    ] })
  ] }) }) });
}
export {
  DatePicker
};
