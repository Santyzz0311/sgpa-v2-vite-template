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


export type TipoServicio = 'Otro si' | 'Otro no' | string

export type TipoProceso = 'proceso1' | 'proceso2' | string

export interface RandomFormValues {
  tipoServicio: TipoServicio
  motivoProceso: string
  desmotivoProceso: string
  tipoProceso: TipoProceso
  motproc1: string
  motproc2: string

}