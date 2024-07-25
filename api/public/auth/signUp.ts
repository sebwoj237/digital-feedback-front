import { requiredEmail, requiredString } from '@/utils/formValidationFormulas'
import axios, { AxiosResponse } from 'axios'
import { z } from 'zod'

export const signUpSchema = z.object({
  email: requiredEmail,
  username: requiredString,
  password: requiredString,
  confirmPassword: requiredString
})

export type SignUpFormFields = z.infer<typeof signUpSchema>

export type SignUpResponse = {
  id: string
}

export const signUp = (
  data: SignUpFormFields,
): Promise<AxiosResponse<SignUpResponse>['data']> =>
  axios({
    method: 'POST',
    url: `http://localhost:5095/users/sign-up`,
    data,
    withCredentials: false,
  }).then(({ data }) => data)
