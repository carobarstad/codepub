import NavBar from '@/components/NavBar';
import React from 'react'

const CalendarLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <div className=''><NavBar/>{children}</div>
  )
}

export default CalendarLayout