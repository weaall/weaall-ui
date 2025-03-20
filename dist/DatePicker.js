import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import dayjs from "dayjs";
import * as tw from "./DatePicker.styles";
export default function DatePicker({ startDate, endDate, onDateValueChange }) {
    const [date, setDate] = useState(dayjs());
    const [dateValue, setDateValue] = useState({
        startDate: startDate,
        endDate: endDate,
    });
    const selectDate = (selectedDate) => {
        const isBothDatesSet = dateValue.startDate !== "" && dateValue.endDate !== "";
        if (isBothDatesSet) {
            const newDateValue = { startDate: selectedDate, endDate: "" };
            setDateValue(newDateValue);
        }
        else {
            const isAfterStartDate = dayjs(selectedDate).isAfter(dateValue.startDate, "day");
            const dateDiff = dayjs(selectedDate).diff(dayjs(dateValue.startDate), "day");
            if (isAfterStartDate && dateDiff <= 8) {
                const newDateValue = Object.assign(Object.assign({}, dateValue), { endDate: selectedDate });
                setDateValue(newDateValue);
                if (newDateValue.endDate) {
                    onDateValueChange(newDateValue);
                }
            }
            else if (!isAfterStartDate) {
                const newDateValue = Object.assign(Object.assign({}, dateValue), { startDate: selectedDate });
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
    return (_jsx(tw.Container, { children: _jsx(tw.ModalWrap, { children: _jsxs(tw.CalendarWrap, { children: [_jsxs(tw.CalTitleWrap, { children: [_jsxs(tw.YearWrap, { children: [_jsx(tw.NavBtn, Object.assign({ onClick: prevMonthClick }, { children: _jsx(tw.NavSvg, { alt: "", src: require("../../../assets/svg_black/left_icon.svg").default }) })), _jsxs(tw.YearMonth, { children: [viewYear, ". ", viewMonth + 1] })] }), _jsxs(tw.YearWrap, { children: [_jsxs(tw.YearMonth, { children: [nextViewYear, ". ", nextViewMonth + 1] }), _jsx(tw.NavBtn, Object.assign({ onClick: nextMonthClick }, { children: _jsx(tw.NavSvg, { alt: "", src: require("../../../assets/svg_black/right_icon.svg").default }) }))] })] }), _jsxs(tw.PickWrap, { children: [_jsxs(tw.MonthWrap, { children: [_jsx(tw.DaysWrap, { children: ["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (_jsx(tw.DayWrap, { children: _jsx(tw.DayLabel, Object.assign({ "$day": index }, { children: day })) }, index))) }), _jsx(tw.DatesWrap, { children: dates.map((date, i) => {
                                            const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
                                            const formattedDate = dayjs(`${viewYear}-${viewMonth + 1}-${date}`).format("YYYY-MM-DD");
                                            const today = dayjs().format("YYYY-MM-DD");
                                            const isPastDate = dayjs(formattedDate).isBefore(today, "day");
                                            const getDateStyle = () => {
                                                if (formattedDate === dateValue.startDate)
                                                    return "startDate";
                                                if (formattedDate === dateValue.endDate)
                                                    return "endDate";
                                                if (dayjs(dateValue.startDate) &&
                                                    dayjs(dateValue.endDate) &&
                                                    dayjs(formattedDate).isAfter(dayjs(dateValue.startDate)) &&
                                                    dayjs(formattedDate).isBefore(dayjs(dateValue.endDate)))
                                                    return "betweenDate";
                                                return "other";
                                            };
                                            const isDisabled = dateValue.startDate && dayjs(formattedDate).diff(dayjs(dateValue.startDate), "day") > 8;
                                            if (condition === "other") {
                                                return (_jsx(tw.DateWrap, Object.assign({ "$date": "other" }, { children: _jsx(tw.DateLabel, Object.assign({ "$date": condition }, { children: date })) }), i));
                                            }
                                            else if (formattedDate === today) {
                                                return (_jsx(tw.DateWrap, Object.assign({ "$date": getDateStyle(), onClick: () => {
                                                        selectDate(formattedDate);
                                                    } }, { children: _jsx(tw.DateLabel, Object.assign({ "$date": "today" }, { children: date })) }), i));
                                            }
                                            else if (isPastDate) {
                                                return (_jsx(tw.PastWrap, { children: _jsx(tw.DateLabel, Object.assign({ "$date": condition }, { children: date })) }, i));
                                            }
                                            else {
                                                return (_jsx(tw.DateWrap, Object.assign({ "$date": getDateStyle(), onClick: () => {
                                                        if (!isDisabled || dateValue.endDate)
                                                            selectDate(formattedDate);
                                                    }, style: isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {} }, { children: _jsx(tw.DateLabel, Object.assign({ "$date": condition }, { children: date })) }), i));
                                            }
                                        }) })] }), _jsxs(tw.MonthWrap, { children: [_jsx(tw.DaysWrap, { children: ["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (_jsx(tw.DayWrap, { children: _jsx(tw.DayLabel, Object.assign({ "$day": index }, { children: day })) }, index))) }), _jsx(tw.DatesWrap, { children: nextMonthDates.map((date, i) => {
                                            const condition = i >= nextFirstDateIndex && i < nextLastDateIndex + 1 ? "this" : "other";
                                            const formattedDate = dayjs(`${viewYear}-${viewMonth + 2}-${date}`).format("YYYY-MM-DD");
                                            const today = dayjs().format("YYYY-MM-DD");
                                            const isPastDate = dayjs(formattedDate).isBefore(today, "day");
                                            const getDateStyle = () => {
                                                if (formattedDate === dateValue.startDate)
                                                    return "startDate";
                                                if (formattedDate === dateValue.endDate)
                                                    return "endDate";
                                                if (dayjs(dateValue.startDate) &&
                                                    dayjs(dateValue.endDate) &&
                                                    dayjs(formattedDate).isAfter(dayjs(dateValue.startDate)) &&
                                                    dayjs(formattedDate).isBefore(dayjs(dateValue.endDate)))
                                                    return "betweenDate";
                                                return "other";
                                            };
                                            const isDisabled = dateValue.startDate && dayjs(formattedDate).diff(dayjs(dateValue.startDate), "day") > 8;
                                            if (condition === "other") {
                                                return (_jsx(tw.DateWrap, Object.assign({ "$date": "other" }, { children: _jsx(tw.DateLabel, Object.assign({ "$date": "other" }, { children: date })) }), i));
                                            }
                                            else if (formattedDate === today) {
                                                return (_jsx(tw.DateWrap, Object.assign({ "$date": getDateStyle(), onClick: () => {
                                                        selectDate(formattedDate);
                                                    } }, { children: _jsx(tw.DateLabel, Object.assign({ "$date": "today" }, { children: date })) }), i));
                                            }
                                            else if (isPastDate) {
                                                return (_jsx(tw.PastWrap, { children: _jsx(tw.DateLabel, Object.assign({ "$date": condition }, { children: date })) }, i));
                                            }
                                            else {
                                                return (_jsx(tw.DateWrap, Object.assign({ "$date": getDateStyle(), onClick: () => {
                                                        if (!isDisabled || dateValue.endDate)
                                                            selectDate(formattedDate);
                                                    }, style: isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {} }, { children: _jsx(tw.DateLabel, Object.assign({ "$date": condition }, { children: date })) }), i));
                                            }
                                        }) })] })] }), _jsxs(tw.SelectWrap, { children: [_jsxs(tw.StartWrap, { children: [_jsx(tw.UpperTag, { children: "\uCCB4\uD06C\uC778" }), _jsx(tw.SelectLabel, { children: dateValue.startDate })] }), _jsxs(tw.EndWrap, { children: [_jsx(tw.UpperTag, { children: "\uCCB4\uD06C\uC544\uC6C3" }), _jsx(tw.SelectLabel, { children: dateValue.endDate })] })] })] }) }) }));
}
