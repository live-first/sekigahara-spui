'use client'

import { NewsType } from '@/domain/news'
import { useEffect, useState } from 'react'

export const GetNews = () => {
  const [news, setNews] = useState<NewsType[]>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem('news') ?? ''
      setNews(JSON.parse(value))
    }

    fetch(
      'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLj6f9vrMw29OzOHdUXkfy64ZcaduLUB6Cv4djes7anwpevI8gbu-gg2Rc63Is_rUCkuslmdjcPyGWg5vUC9q3XQpbjZ58fP9JKkLCC2wcUnOhvY4oZARNJGI3VKSxTCWSqTBYg4lkhdswrxqHvnxr_8oIvdtOYNBTKWfEkU-4i9nl2jx4R9pai4LzAZbMvXl0MfgU9OUs-4LhBJAII1XgYgYCzWEYjloFhNgJV4RAdYOiNt_VNg3kh31UiBLmOz2PR6LuGW6VKkP45sT7P-wHT59GvUzq7DnvirrgBP&lib=MY2JYdKyDb5W5M6z0U42b53pjz42KUVZk',
      { mode: 'cors' },
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data)
        localStorage.setItem('news', JSON.stringify(data))
      })
      .catch((error) => {
        console.error('リクエストエラー:', error)
      })
  }, [])

  return { news }
}
