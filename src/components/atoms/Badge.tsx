import React, { ReactNode } from 'react'

interface BadgeProps {
  count: number
  children: ReactNode
}

const Badge = ({ count, children }: BadgeProps) => (
  <div className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 ">
    {children}
    {count > 0 && (
      <div className="inline-flex absolute top-0 right-0 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
        {count}
      </div>
    )}
  </div>
)

export default Badge
