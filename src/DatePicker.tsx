import React, { useState } from "react";
import dayjs from "dayjs";

import * as tw from "./DatePicker.styles";

interface DatePickerProps {
    startDate: string;
    endDate: string;
    onDateValueChange: (selectedDates: { startDate: string; endDate: string }) => void;
}

export default function DatePicker({ startDate, endDate, onDateValueChange }: DatePickerProps) {
    const [date, setDate] = useState(dayjs());
    const [dateValue, setDateValue] = useState({
        startDate: startDate,
        endDate: endDate,
    });

    const selectDate = (selectedDate: string) => {
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

    const prevDates: number[] = [];
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

    const nextPrevDates: number[] = [];
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

    return (
        <tw.Container>
            <tw.ModalWrap>
                <tw.CalendarWrap>
                    <tw.CalTitleWrap>
                        <tw.YearWrap>
                            <tw.NavBtn onClick={prevMonthClick}>
                                <tw.NavSvg alt="" src={require("../../../assets/svg_black/left_icon.svg").default} />
                            </tw.NavBtn>
                            <tw.YearMonth>
                                {viewYear}. {viewMonth + 1}
                            </tw.YearMonth>
                        </tw.YearWrap>
                        <tw.YearWrap>
                            <tw.YearMonth>
                                {nextViewYear}. {nextViewMonth + 1}
                            </tw.YearMonth>
                            <tw.NavBtn onClick={nextMonthClick}>
                                <tw.NavSvg alt="" src={require("../../../assets/svg_black/right_icon.svg").default} />
                            </tw.NavBtn>
                        </tw.YearWrap>
                    </tw.CalTitleWrap>

                    <tw.PickWrap>
                        <tw.MonthWrap>
                            <tw.DaysWrap>
                                {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
                                    <tw.DayWrap key={index}>
                                        <tw.DayLabel $day={index}>{day}</tw.DayLabel>
                                    </tw.DayWrap>
                                ))}
                            </tw.DaysWrap>

                            <tw.DatesWrap>
                                {dates.map((date, i) => {
                                    const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
                                    const formattedDate = dayjs(`${viewYear}-${viewMonth + 1}-${date}`).format("YYYY-MM-DD");
                                    const today = dayjs().format("YYYY-MM-DD");
                                    const isPastDate = dayjs(formattedDate).isBefore(today, "day");

                                    const getDateStyle = () => {
                                        if (formattedDate === dateValue.startDate) return "startDate";
                                        if (formattedDate === dateValue.endDate) return "endDate";
                                        if (
                                            dayjs(dateValue.startDate) &&
                                            dayjs(dateValue.endDate) &&
                                            dayjs(formattedDate).isAfter(dayjs(dateValue.startDate)) &&
                                            dayjs(formattedDate).isBefore(dayjs(dateValue.endDate))
                                        )
                                            return "betweenDate";
                                        return "other";
                                    };

                                    const isDisabled = dateValue.startDate && dayjs(formattedDate).diff(dayjs(dateValue.startDate), "day") > 8;

                                    if (condition === "other") {
                                        return (
                                            <tw.DateWrap $date={"other"} key={i}>
                                                <tw.DateLabel $date={condition}>{date}</tw.DateLabel>
                                            </tw.DateWrap>
                                        );
                                    } else if (formattedDate === today) {
                                        return (
                                            <tw.DateWrap
                                                $date={getDateStyle()}
                                                key={i}
                                                onClick={() => {
                                                    selectDate(formattedDate);
                                                }}
                                            >
                                                <tw.DateLabel $date={"today"}>{date}</tw.DateLabel>
                                            </tw.DateWrap>
                                        );
                                    } else if (isPastDate) {
                                        return (
                                            <tw.PastWrap key={i}>
                                                <tw.DateLabel $date={condition}>{date}</tw.DateLabel>
                                            </tw.PastWrap>
                                        );
                                    } else {
                                        return (
                                            <tw.DateWrap
                                                $date={getDateStyle()}
                                                key={i}
                                                onClick={() => {
                                                    if (!isDisabled || dateValue.endDate) selectDate(formattedDate);
                                                }}
                                                style={isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {}}
                                            >
                                                <tw.DateLabel $date={condition}>{date}</tw.DateLabel>
                                            </tw.DateWrap>
                                        );
                                    }
                                })}
                            </tw.DatesWrap>
                        </tw.MonthWrap>

                        <tw.MonthWrap>
                            <tw.DaysWrap>
                                {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
                                    <tw.DayWrap key={index}>
                                        <tw.DayLabel $day={index}>{day}</tw.DayLabel>
                                    </tw.DayWrap>
                                ))}
                            </tw.DaysWrap>

                            <tw.DatesWrap>
                                {nextMonthDates.map((date, i) => {
                                    const condition = i >= nextFirstDateIndex && i < nextLastDateIndex + 1 ? "this" : "other";
                                    const formattedDate = dayjs(`${viewYear}-${viewMonth + 2}-${date}`).format("YYYY-MM-DD");
                                    const today = dayjs().format("YYYY-MM-DD");
                                    const isPastDate = dayjs(formattedDate).isBefore(today, "day");

                                    const getDateStyle = () => {
                                        if (formattedDate === dateValue.startDate) return "startDate";
                                        if (formattedDate === dateValue.endDate) return "endDate";
                                        if (
                                            dayjs(dateValue.startDate) &&
                                            dayjs(dateValue.endDate) &&
                                            dayjs(formattedDate).isAfter(dayjs(dateValue.startDate)) &&
                                            dayjs(formattedDate).isBefore(dayjs(dateValue.endDate))
                                        )
                                            return "betweenDate";
                                        return "other";
                                    };

                                    const isDisabled = dateValue.startDate && dayjs(formattedDate).diff(dayjs(dateValue.startDate), "day") > 8;

                                    if (condition === "other") {
                                        return (
                                            <tw.DateWrap $date={"other"} key={i}>
                                                <tw.DateLabel $date={"other"}>{date}</tw.DateLabel>
                                            </tw.DateWrap>
                                        );
                                    } else if (formattedDate === today) {
                                        return (
                                            <tw.DateWrap
                                                $date={getDateStyle()}
                                                key={i}
                                                onClick={() => {
                                                    selectDate(formattedDate);
                                                }}
                                            >
                                                <tw.DateLabel $date={"today"}>{date}</tw.DateLabel>
                                            </tw.DateWrap>
                                        );
                                    } else if (isPastDate) {
                                        return (
                                            <tw.PastWrap key={i}>
                                                <tw.DateLabel $date={condition}>{date}</tw.DateLabel>
                                            </tw.PastWrap>
                                        );
                                    } else {
                                        return (
                                            <tw.DateWrap
                                                $date={getDateStyle()}
                                                key={i}
                                                onClick={() => {
                                                    if (!isDisabled || dateValue.endDate) selectDate(formattedDate);
                                                }}
                                                style={isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {}}
                                            >
                                                <tw.DateLabel $date={condition}>{date}</tw.DateLabel>
                                            </tw.DateWrap>
                                        );
                                    }
                                })}
                            </tw.DatesWrap>
                        </tw.MonthWrap>
                    </tw.PickWrap>

                    <tw.SelectWrap>
                        <tw.StartWrap>
                            <tw.UpperTag>체크인</tw.UpperTag>
                            <tw.SelectLabel>{dateValue.startDate}</tw.SelectLabel>
                        </tw.StartWrap>
                        <tw.EndWrap>
                            <tw.UpperTag>체크아웃</tw.UpperTag>
                            <tw.SelectLabel>{dateValue.endDate}</tw.SelectLabel>
                        </tw.EndWrap>
                    </tw.SelectWrap>
                </tw.CalendarWrap>
            </tw.ModalWrap>
        </tw.Container>
    );
}
