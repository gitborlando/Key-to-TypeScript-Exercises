declare module 'date-wizard' {
    const pad: (s: number) => string
    interface DateDetails {
        year: number
        month: number
        date: number
        hours: number
        minutes: number
        seconds: number
    }
}