import React, { useState } from "react";
import dayjs from "dayjs";

import * as styles from "./CalendarPicker.css";

interface CalendarPickerProps {
    startDate: string;
    endDate: string;
    onDateValueChange: (selectedDates: { startDate: string; endDate: string }) => void;

    lang? : "en" | "en-long" | "ko";
    maxMonth? : number;
    maxDate? : number;
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

export default function CalendarPicker({ startDate, endDate, onDateValueChange, lang = "en", maxMonth = 3, maxDate = 1}: CalendarPickerProps) {
    const [date, setDate] = useState(dayjs());
    const [dateValue, setDateValue] = useState({
        startDate: startDate || dayjs().format("YYYY-MM-DD"),
        endDate: endDate || dayjs().add(1, "day").format("YYYY-MM-DD"),
    });

    const selectDate = (selectedDate: string) => {
        const isBothDatesSet = dateValue.startDate !== "" && dateValue.endDate !== "";

        if (isBothDatesSet) {
            const newDateValue = { startDate: selectedDate, endDate: "" };
            setDateValue(newDateValue);
        } else {
            const isAfterStartDate = dayjs(selectedDate).isAfter(dateValue.startDate, "day");
            const dateDiff = dayjs(selectedDate).diff(dayjs(dateValue.startDate), "day");

            if (isAfterStartDate && dateDiff <= safeMaxDate) {
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

    const safeMaxMonth = Math.max(2, maxMonth ?? 2);
    const safeMaxDate = Math.max(1, maxDate ?? 1);

    const nextMonthClick = () => {
        const nextThreeMonths = dayjs().add(safeMaxMonth - 1, "month");
        if (date.isBefore(nextThreeMonths, "month")) {
            setDate(date.add(1, "month"));
        }
    };

    const langMap = {
        en: ["S", "M", "T", "W", "T", "F", "S"],
        "en-long": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        ko: ["일", "월", "화", "수", "목", "금", "토"],
    };

    const getWeekdays = (lang: "en" | "en-long" | "ko") => langMap[lang];

    const weekdays = getWeekdays(lang);

    return (
        <div className={styles.container}>
            <div className={styles.modalWrap}>
                <div className={styles.calendarWrap}>
                    <div className={styles.calTitleWrap}>
                        <div className={styles.yearWrap}>
                            <button className={styles.navBtn} onClick={prevMonthClick}>
                                <LeftIcon />
                            </button>
                            <h2 className={styles.yearMonth}>
                                {date.year()}. {date.month() + 1}
                            </h2>
                        </div>
                        <div className={styles.yearWrap}>
                            <h2 className={styles.yearMonth}>
                                {date.add(1, "month").year()}. {date.add(1, "month").month() + 1}
                            </h2>
                            <button className={styles.navBtn} onClick={nextMonthClick}>
                                <RightIcon />
                            </button>
                        </div>
                    </div>

                    <div className={styles.pickWrap}>
                        <div className={styles.monthWrap}>
                            <div className={styles.daysWrap}>
                                {weekdays.map((day, index) => {
                                    const variantClass = index === 0 ? styles.dayLabelVariants.sunday : index === 6 ? styles.dayLabelVariants.saturday : "";
                                    return (
                                        <div className={styles.dayWrap} key={index}>
                                            <p className={`${styles.dayLabelBase} ${variantClass}`}>{day}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className={styles.datesWrap}>
                                {dates.map((date, i) => {
                                    const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
                                    const formattedDate = dayjs(`${viewYear}-${viewMonth + 1}-${date}`).format("YYYY-MM-DD");
                                    const today = dayjs().format("YYYY-MM-DD");
                                    const isPastDate = dayjs(formattedDate).isBefore(today, "day");

                                    const getDateStyle = () => {
                                        if (formattedDate === dateValue.startDate) return styles.dateWrap.startDate;
                                        if (formattedDate === dateValue.endDate) return styles.dateWrap.endDate;
                                        if (
                                            dayjs(dateValue.startDate) &&
                                            dayjs(dateValue.endDate) &&
                                            dayjs(formattedDate).isAfter(dayjs(dateValue.startDate)) &&
                                            dayjs(formattedDate).isBefore(dayjs(dateValue.endDate))
                                        )
                                            return styles.dateWrap.betweenDate;
                                        if (formattedDate === today) return styles.dateWrap.today;
                                        return styles.dateWrap.other;
                                    };

                                    const isDisabled = dateValue.startDate && dayjs(formattedDate).diff(dayjs(dateValue.startDate), "day") > safeMaxDate;

                                    if (condition === "other") {
                                        return (
                                            <div className={styles.dateWrap.other} key={i}>
                                                <p className={styles.dateLabel.other}>{date}</p>
                                            </div>
                                        );
                                    } else if (isPastDate) {
                                        return (
                                            <div className={styles.pastWrap} key={i}>
                                                <p className={styles.dateLabel[condition]}>{date}</p>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className={getDateStyle()}
                                                key={i}
                                                onClick={() => {
                                                    if (!isDisabled || dateValue.endDate) selectDate(formattedDate);
                                                }}
                                                style={isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {}}
                                            >
                                                <p className={styles.dateLabel[condition]}>{date}</p>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>

                        <div className={styles.monthWrap}>
                            <div className={styles.daysWrap}>
                                {weekdays.map((day, index) => {
                                    const variantClass = index === 0 ? styles.dayLabelVariants.sunday : index === 6 ? styles.dayLabelVariants.saturday : "";
                                    return (
                                        <div className={styles.dayWrap} key={index}>
                                            <p className={`${styles.dayLabelBase} ${variantClass}`}>{day}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className={styles.datesWrap}>
                                {nextMonthDates.map((date, i) => {
                                    const condition = i >= nextFirstDateIndex && i < nextLastDateIndex + 1 ? "this" : "other";
                                    const formattedDate = dayjs(`${viewYear}-${viewMonth + 2}-${date}`).format("YYYY-MM-DD");
                                    const today = dayjs().format("YYYY-MM-DD");
                                    const isPastDate = dayjs(formattedDate).isBefore(today, "day");

                                    const getDateStyle = () => {
                                        if (formattedDate === dateValue.startDate) return styles.dateWrap.startDate;
                                        if (formattedDate === dateValue.endDate) return styles.dateWrap.endDate;
                                        if (
                                            dayjs(dateValue.startDate) &&
                                            dayjs(dateValue.endDate) &&
                                            dayjs(formattedDate).isAfter(dayjs(dateValue.startDate)) &&
                                            dayjs(formattedDate).isBefore(dayjs(dateValue.endDate))
                                        )
                                            return styles.dateWrap.betweenDate;
                                        if (formattedDate === today) return styles.dateWrap.today;
                                        return styles.dateWrap.other;
                                    };

                                    const isDisabled = dateValue.startDate && dayjs(formattedDate).diff(dayjs(dateValue.startDate), "day") > safeMaxDate;

                                    if (condition === "other") {
                                        return (
                                            <div className={styles.dateWrap.other} key={i}>
                                                <p className={styles.dateLabel.other}>{date}</p>
                                            </div>
                                        );
                                    } else if (isPastDate) {
                                        return (
                                            <div className={styles.pastWrap} key={i}>
                                                <p className={styles.dateLabel[condition]}>{date}</p>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className={getDateStyle()}
                                                key={i}
                                                onClick={() => {
                                                    if (!isDisabled || dateValue.endDate) selectDate(formattedDate);
                                                }}
                                                style={isDisabled && !dateValue.endDate ? { pointerEvents: "none", opacity: 0.1 } : {}}
                                            >
                                                <p className={styles.dateLabel[condition]}>{date}</p>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
