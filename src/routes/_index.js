import * as React from 'react'
import { Link } from '@remix-run/react'
import { Title } from '/src/title.js'
import { Card } from '/src/card.js'
import { activities } from '/public/data.js'
import { CategoryFilters } from '/src/category-filters.js'
import '/public/globals.css'

export default function Index() {
  return (
    <div
      className='my-class'
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--off-white)',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px 0px 25px',
        gap: 5,
        boxShadow: '0px 2px 33px var(--yellow)',
        transition: 'all 3s ease-out',
        justifyContent: 'flex-start',
      }}
    >
      <Title title='BBeffore I Go !' />
      <div
        style={{
          background: '#dd4a76',
          width: '31.8%',
          height: 80,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 100,
          backgroundColor: 'rgb(0, 255, 149, 1)',
        }}
      >
        <Link
          style={{
            wordBreak: 'break-word',
            color: 'var(--off-white)',
            contain: 'layout',
            width: 206,
            height: 32,
            fontWeight: 700,
            fontFamily: 'var(--secondary)',
            fontSize: '28px',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
          to='/posts'
        >
          Hi Jaydon!
        </Link>
      </div>
    </div>
  )
}
