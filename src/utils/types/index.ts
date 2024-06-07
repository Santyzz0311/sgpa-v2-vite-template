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
