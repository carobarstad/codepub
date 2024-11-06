"use client"
const CalendarDayError = ({params}: {params: {id: string}}) => {
  const {id} = params
  return <div>Cannot find calendar day for {id}</div>
}

export default CalendarDayError