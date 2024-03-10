'use client'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import React from 'react'

export default function ShadcnPage() {
  const [value, setValue] = React.useState('')

  return (
    <form className="container relative flex-1 flex flex-col justify-center items-center">
      <InputOTP
        autoFocus
        // test pwmb
        type="password"
        autoComplete="username"
        passwordManagerBehavior="none"
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        //
        value={value}
        onChange={setValue}
        maxLength={6}
        render={({ slots }) => (
          <>
            <InputOTPGroup>
              {slots.slice(0, 3).map((slot, index) => (
                <InputOTPSlot key={index} {...slot} />
              ))}{' '}
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              {slots.slice(3).map((slot, index) => (
                <InputOTPSlot key={index} {...slot} />
              ))}
            </InputOTPGroup>
          </>
        )}
      />
    </form>
  )
}
