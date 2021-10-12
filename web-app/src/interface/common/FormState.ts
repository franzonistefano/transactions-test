export interface FormState {
    col: string,
    id: string,
    type:string,
    required: boolean,
    placeholder: string,
    label?: string,
    regex?: string,
    options?: any[],
    feedback?: boolean
}

export interface FormFieldState {
    value: any,
    valid: boolean,
    required: boolean,
    regex?: string,
    options?: any[]
}