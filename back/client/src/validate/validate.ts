export const required = (value: string) => (value ? undefined : 'Required')
export const minValue = (min: number) => (value: number) =>
isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
export const composeValidators = (...validators: any) => (value: string) =>
validators.reduce((error: any, validator: any) => error || validator(value), undefined)
export const email = (value: string) =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined