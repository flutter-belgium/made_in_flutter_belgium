export function logDebug(message: string): void {
    console.log(message)
}
export function logError(message: string, e: unknown): void {
    console.log(`${message}\n${e}`)
}
