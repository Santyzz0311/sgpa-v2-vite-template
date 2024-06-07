export interface UserCredentials {
  email: string
  password?: string
}

export interface User {
  name: string
  email: string
  roles: string[]
  permissions: string[]
}

export interface UserResponse {
  user: User
  token: string
  hasBeenFound: boolean
}


export type OptionRandomForm = 'Otro si' | 'Otro no' | string

export interface RandomFormValues {
  tipoServicio: OptionRandomForm
  motivoProceso: string
  desmotivoProceso: string
  tipoProceso: string
  motproc1: string
  motproc2: string

}