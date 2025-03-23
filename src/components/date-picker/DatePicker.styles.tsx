import tw from "tailwind-styled-components"

interface DayProps {
    $day: number
}

interface DateProps {
    $date: String
}

interface StartDateProps{
    $date: String
}

export const Container = tw.div`absolute w-full px-4 mt-2 mobile:pt-0 text-black`

export const ModalWrap = tw.div`w-full flex rounded-xl h-auto bg-white shadow-md border p-4`

export const ContentsWrap = tw.div`w-full flex flex-col space-y-2 px-6 py-6 border-b`
export const ContentsFlex = tw.div`w-full flex items-center justify-between`
export const HalfCol = tw.div`w-[50%] flex flex-col`
export const HalfFlex = tw.div`w-[50%] flex justify-end`
export const FlexWrap = tw.div`flex w-full justify-center`

export const CalendarWrap = tw.div`h-[80%] px-6 mobile:px-2 flex flex-col`
export const CalTitleWrap = tw.div`w-full flex items-center justify-between mb-3`

export const YearWrap = tw.div`flex gap-4 items-center`
export const YearMonth = tw.h2`text-base font-semibold
mobile:text-base`

export const NavBtn = tw.button`p-1 rounded-full hover:bg-gray-50`
export const NavSvg = tw.img`w-6`

export const DaysWrap = tw.div`h-4 flex justify-center`
export const DayWrap = tw.div`w-[14%] text-center`
export const DayLabel = tw.p<DayProps>`font-semibold
${(p) => (p.$day === 0 ? "text-red-500" : p.$day === 6 ? "text-blue-500" : "")}`

export const DatesWrap = tw.div`flex flex-wrap w-full justify-center my-2`
export const DateWrap = tw.div<StartDateProps>`h-10 w-[14%] p-2 text-center flex flex-col justify-center
hover:bg-gray-100 cursor-pointer mobile:hover:bg-main/[.25] hover:rounded-xl
${(p) => (p.$date === "startDate" ? "bg-main/[.25] rounded-l-xl" :  p.$date === "endDate" ? "bg-main/[.25] rounded-r-xl"  :
p.$date === "betweenDate" ? "bg-main/[.13]" : p.$date === "today" ? "bg-main" :"")}`
export const PastWrap = tw.div`h-10 w-[14%] p-2 text-center flex flex-col justify-center rounded-lg text-gray-300 cursor-default`
export const DateLabel = tw.p<DateProps>`
${(p) => (p.$date === "today" ? "text-main font-bold" : p.$date === "other" ? "hidden" : "")}`

export const SelectWrap = tw.div`h-[60px] flex border-t mx-4 mobile:mx-2 flex-shrink-0`
export const UpperTag = tw.p`text-xs`
export const SelectLabel = tw.p`text-center text-lg font-bold
mobile:text-base`
export const StartWrap = tw.div`w-1/2 p-2 border-r`
export const EndWrap = tw.div`w-1/2 p-2`

export const PickWrap = tw.div`flex text-sm gap-20`
export const MonthWrap = tw.div`flex flex-col w-[50%]`

