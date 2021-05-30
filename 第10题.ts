type OriginFunction<T> = (callBack: (response: ApiResponse<T>) => void) => void

export function promisify<T>(func: OriginFunction<T>): () => Promise<T> {
    return () => new Promise((resolve, reject) => {
        func((res) => {
            if (res.status === 'success') {
                resolve(res.data)
            } else {
                reject(new Error(res.error))
            }
        })
    })
}