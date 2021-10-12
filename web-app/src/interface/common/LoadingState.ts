export interface LoadingState {
    loading: boolean;
    id: string;
    counter: number
}

export interface LoadingStateAction {
    counter: number,
    id?: string
}