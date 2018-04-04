type typeofTimeoutAlias = (callback : () => void, msec : number) => void

export const sleep = (msec : number, value : any) : Promise<any> => {
    const f : typeofTimeoutAlias = (msec > 0) ? setTimeout : setImmediate;
    return new Promise((resolve : (any) => void) => {
        f(() => {
            resolve(value);
        }, msec)
    })
}

