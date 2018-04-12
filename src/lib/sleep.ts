type typeofTimeoutAlias = (callback : () => void, msec : number) => void

export const sleep = <T>(msec : number, value? : T) : Promise<T> => {
    const f : typeofTimeoutAlias = (msec > 0) ? setTimeout : setImmediate
    return new Promise((resolve, reject) => {
        f( () => {
            resolve(value);
        }, msec)
    })
}

