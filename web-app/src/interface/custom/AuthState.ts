export default interface AuthState {
    state: string,
    isUserAuthenticated: boolean,
    auth: string | null | undefined,
    loading: boolean
}