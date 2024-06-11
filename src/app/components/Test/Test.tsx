'use client'

import { useRouter } from 'next/navigation'
import * as S from './Test.css'

function Test() {
  const router = useRouter()
  return (
    <div>
      <p className={S.test}>This is Test for vanilla-extract</p>
      <button
        type="button"
        className={S.button}
        onClick={() => router.push('/rooms/1')}
      >
        Let's go to Room 1
      </button>
    </div>
  )
}

export default Test
