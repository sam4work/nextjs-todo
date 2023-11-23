"use client"

import Link from 'next/link'
import React, { HTMLProps } from 'react'


interface ICardProps {
    todo_id: string,
    task: string,
    description: string,
    dueDate: string,
    status: string,
}

export default function Card({ todo_id, task, description, dueDate, status }: ICardProps) {
    return (

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={"/todos/" + todo_id}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {task}
                </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {dueDate}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className={
                    ` rounded-full px-4 py-0.5 border text-xs lowercase 
                        ${status.toLowerCase() === 'pending' ? 'border-red-300' : ''
                    }`
                }>
                    {status}
                </span>
            </p>

            <Link href={"/todos/" + todo_id} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
    )
}
