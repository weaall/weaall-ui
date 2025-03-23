import React, { useState } from "react";
import dayjs from "dayjs";

import * as tw from "./DatePicker.styles";


interface DatePickerProps {
    startDate: string;
    endDate: string;
    onDateValueChange: (selectedDates: { startDate: string; endDate: string }) => void;
}

const RightIcon = () => (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" 
        stroke="#000000" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
  
  const LeftIcon = () => (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5" 
        stroke="#000000" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );

export default function DatePicker({ startDate, endDate, onDateValueChange }: DatePickerProps) {
    const [date, setDate] = useState(dayjs());
    const [dateValue, setDateValue] = useState({
        startDate: startDate || dayjs().format('YYYY-MM-DD'),
        endDate: endDate || dayjs().add(1, 'day').format('YYYY-MM-DD'),
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
                                <LeftIcon />
                            </tw.NavBtn>
                            <tw.YearMonth>
                                {date.year()}. {date.month() + 1}
                            </tw.YearMonth>
                        </tw.YearWrap>
                        <tw.YearWrap>
                            <tw.YearMonth>
                                {date.add(1, "month").year()}. {date.add(1, "month").month() + 1}
                            </tw.YearMonth>
                            <tw.NavBtn onClick={nextMonthClick}>
                                <RightIcon />
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
