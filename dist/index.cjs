"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  DatePicker: () => DatePicker
});
module.exports = __toCommonJS(index_exports);

// src/components/date-picker/DatePicker.tsx
var import_react = require("react");
var import_dayjs = __toESM(require("dayjs"), 1);

// src/components/date-picker/DatePicker.styles.tsx
var import_tailwind_styled_components = __toESM(require("tailwind-styled-components"), 1);
var Container = import_tailwind_styled_components.default.div`absolute w-full px-4 mt-2 mobile:pt-0 text-black`;
var ModalWrap = import_tailwind_styled_components.default.div`w-full flex rounded-xl h-auto bg-white shadow-md border p-4`;
var ContentsWrap = import_tailwind_styled_components.default.div`w-full flex flex-col space-y-2 px-6 py-6 border-b`;
var ContentsFlex = import_tailwind_styled_components.default.div`w-full flex items-center justify-between`;
var HalfCol = import_tailwind_styled_components.default.div`w-[50%] flex flex-col`;
var HalfFlex = import_tailwind_styled_components.default.div`w-[50%] flex justify-end`;
var FlexWrap = import_tailwind_styled_components.default.div`flex w-full justify-center`;
var CalendarWrap = import_tailwind_styled_components.default.div`h-[80%] px-6 mobile:px-2 flex flex-col`;
var CalTitleWrap = import_tailwind_styled_components.default.div`w-full flex items-center justify-between mb-3`;
var YearWrap = import_tailwind_styled_components.default.div`flex gap-4 items-center`;
var YearMonth = import_tailwind_styled_components.default.h2`text-base font-semibold
mobile:text-base`;
var NavBtn = import_tailwind_styled_components.default.button`p-1 rounded-full hover:bg-gray-50`;
var NavSvg = import_tailwind_styled_components.default.img`w-6`;
var DaysWrap = import_tailwind_styled_components.default.div`h-4 flex justify-center`;
var DayWrap = import_tailwind_styled_components.default.div`w-[14%] text-center`;
var DayLabel = import_tailwind_styled_components.default.p`font-semibold
${(p) => p.$day === 0 ? "text-red-500" : p.$day === 6 ? "text-blue-500" : ""}`;
var DatesWrap = import_tailwind_styled_components.default.div`flex flex-wrap w-full justify-center my-2`;
var DateWrap = import_tailwind_styled_components.default.div`h-10 w-[14%] p-2 text-center flex flex-col justify-center
hover:bg-gray-100 cursor-pointer mobile:hover:bg-main/[.25] hover:rounded-xl
${(p) => p.$date === "startDate" ? "bg-main/[.25] rounded-l-xl" : p.$date === "endDate" ? "bg-main/[.25] rounded-r-xl" : p.$date === "betweenDate" ? "bg-main/[.13]" : p.$date === "today" ? "bg-main" : ""}`;
var PastWrap = import_tailwind_styled_components.default.div`h-10 w-[14%] p-2 text-center flex flex-col justify-center rounded-lg text-gray-300 cursor-default`;
var DateLabel = import_tailwind_styled_components.default.p`
${(p) => p.$date === "today" ? "text-main font-bold" : p.$date === "other" ? "hidden" : ""}`;
var SelectWrap = import_tailwind_styled_components.default.div`h-[60px] flex border-t mx-4 mobile:mx-2 flex-shrink-0`;
var UpperTag = import_tailwind_styled_components.default.p`text-xs`;
var SelectLabel = import_tailwind_styled_components.default.p`text-center text-lg font-bold
mobile:text-base`;
var StartWrap = import_tailwind_styled_components.default.div`w-1/2 p-2 border-r`;
var EndWrap = import_tailwind_styled_components.default.div`w-1/2 p-2`;
var PickWrap = import_tailwind_styled_components.default.div`flex text-sm gap-20`;
var MonthWrap = import_tailwind_styled_components.default.div`flex flex-col w-[50%]`;

// src/components/date-picker/DatePicker.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var RightIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "path",
  {
    d: "M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) });
var LeftIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  const [date, setDate] = (0, import_react.useState)((0, import_dayjs.default)());
  const [dateValue, setDateValue] = (0, import_react.useState)({
    startDate: startDate || (0, import_dayjs.default)().format("YYYY-MM-DD"),
    endDate: endDate || (0, import_dayjs.default)().add(1, "day").format("YYYY-MM-DD")
  });
  const selectDate = (selectedDate) => {
    const isBothDatesSet = dateValue.startDate !== "" && dateValue.endDate !== "";
    if (isBothDatesSet) {
      const newDateValue = { startDate: selectedDate, endDate: "" };
      setDateValue(newDateValue);
    } else {
      const isAfterStartDate = (0, import_dayjs.default)(selectedDate).isAfter(dateValue.startDate, "day");
      const dateDiff = (0, import_dayjs.default)(selectedDate).diff((0, import_dayjs.default)(dateValue.startDate), "day");
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
    if (date.isAfter((0, import_dayjs.default)(), "month")) {
      setDate(date.subtract(1, "month"));
    }
  };
  const nextMonthClick = () => {
    const nextThreeMonths = (0, import_dayjs.default)().add(3, "month");
    if (date.isBefore(nextThreeMonths, "month")) {
      setDate(date.add(1, "month"));
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalWrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalendarWrap, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CalTitleWrap, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(YearWrap, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, { onClick: prevMonthClick, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeftIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(YearMonth, { children: [
          date.year(),
          ". ",
          date.month() + 1
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(YearWrap, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(YearMonth, { children: [
          date.add(1, "month").year(),
          ". ",
          date.add(1, "month").month() + 1
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, { onClick: nextMonthClick, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightIcon, {}) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PickWrap, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MonthWrap, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DaysWrap, { children: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"].map((day, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayWrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayLabel, { $day: index, children: day }) }, index)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DatesWrap, { children: dates.map((date2, i) => {
          const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
          const formattedDate = (0, import_dayjs.default)(`${viewYear}-${viewMonth + 1}-${date2}`).format("YYYY-MM-DD");
          const today = (0, import_dayjs.default)().format("YYYY-MM-DD");
          const isPastDate = (0, import_dayjs.default)(formattedDate).isBefore(today, "day");
          const getDateStyle = () => {
            if (formattedDate === dateValue.startDate) return "startDate";
            if (formattedDate === dateValue.endDate) return "endDate";
            if ((0, import_dayjs.default)(dateValue.startDate) && (0, import_dayjs.default)(dateValue.endDate) && (0, import_dayjs.default)(formattedDate).isAfter((0, import_dayjs.default)(dateValue.startDate)) && (0, import_dayjs.default)(formattedDate).isBefore((0, import_dayjs.default)(dateValue.endDate)))
              return "betweenDate";
            return "other";
          };
          const isDisabled = dateValue.startDate && (0, import_dayjs.default)(formattedDate).diff((0, import_dayjs.default)(dateValue.startDate), "day") > 8;
          if (condition === "other") {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateWrap, { $date: "other", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateLabel, { $date: condition, children: date2 }) }, i);
          } else if (formattedDate === today) {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              DateWrap,
              {
                $date: getDateStyle(),
                onClick: () => {
                  selectDate(formattedDate);
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateLabel, { $date: "today", children: date2 })
              },
              i
            );
          } else if (isPastDate) {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PastWrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateLabel, { $date: condition, children: date2 }) }, i);
          } else {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              DateWrap,
              {
                $date: getDateStyle(),
                onClick: () => {
                  if (!isDisabled || dateValue.endDate) selectDate(formattedDate);
                },
                style: isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {},
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateLabel, { $date: condition, children: date2 })
              },
              i
            );
          }
        }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MonthWrap, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DaysWrap, { children: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"].map((day, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayWrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayLabel, { $day: index, children: day }) }, index)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DatesWrap, { children: nextMonthDates.map((date2, i) => {
          const condition = i >= nextFirstDateIndex && i < nextLastDateIndex + 1 ? "this" : "other";
          const formattedDate = (0, import_dayjs.default)(`${viewYear}-${viewMonth + 2}-${date2}`).format("YYYY-MM-DD");
          const today = (0, import_dayjs.default)().format("YYYY-MM-DD");
          const isPastDate = (0, import_dayjs.default)(formattedDate).isBefore(today, "day");
          const getDateStyle = () => {
            if (formattedDate === dateValue.startDate) return "startDate";
            if (formattedDate === dateValue.endDate) return "endDate";
            if ((0, import_dayjs.default)(dateValue.startDate) && (0, import_dayjs.default)(dateValue.endDate) && (0, import_dayjs.default)(formattedDate).isAfter((0, import_dayjs.default)(dateValue.startDate)) && (0, import_dayjs.default)(formattedDate).isBefore((0, import_dayjs.default)(dateValue.endDate)))
              return "betweenDate";
            return "other";
          };
          const isDisabled = dateValue.startDate && (0, import_dayjs.default)(formattedDate).diff((0, import_dayjs.default)(dateValue.startDate), "day") > 8;
          if (condition === "other") {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateWrap, { $date: "other", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateLabel, { $date: "other", children: date2 }) }, i);
          } else if (formattedDate === today) {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              DateWrap,
              {
                $date: getDateStyle(),
                onClick: () => {
                  selectDate(formattedDate);
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateLabel, { $date: "today", children: date2 })
              },
              i
            );
          } else if (isPastDate) {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PastWrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateLabel, { $date: condition, children: date2 }) }, i);
          } else {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              DateWrap,
              {
                $date: getDateStyle(),
                onClick: () => {
                  if (!isDisabled || dateValue.endDate) selectDate(formattedDate);
                },
                style: isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {},
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateLabel, { $date: condition, children: date2 })
              },
              i
            );
          }
        }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectWrap, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StartWrap, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpperTag, { children: "\uCCB4\uD06C\uC778" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel, { children: dateValue.startDate })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EndWrap, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpperTag, { children: "\uCCB4\uD06C\uC544\uC6C3" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel, { children: dateValue.endDate })
      ] })
    ] })
  ] }) }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DatePicker
});
