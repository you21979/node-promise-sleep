import * as assert from 'assert'
import { sleep } from '../lib/sleep'

type callback = (e?: Error) => void

describe('test', () => {
    it('zero delay', (done : callback) => {
        const ms = 1000
        const sleeptime = 0
        const base = process.uptime() * ms
        sleep(sleeptime * ms, "test data").then( (res) => {
            const  current = process.uptime() * ms
            assert( current - base >= sleeptime * ms )
            assert( res === "test data" )
            done()
        })
    })
    it('promise chain', (done : callback) => {
        const sleeptime = 0
        sleep(sleeptime, 100).then( (val) => {
            assert( val === 100 )
            return sleep(sleeptime, val + 1)
        }).then( (val) => {
            assert( val === 101 )
            return sleep(sleeptime, val + 1)
        }).then( (val) => {
            assert( val === 102 )
            return sleep(sleeptime, val + 1)
        }).then(() => {
            done()
        })
    })
    it('normal delay', (done : callback) => {
        const ms = 1000
        const sleeptime = 0.5
        const base = process.uptime() * ms
        sleep(sleeptime * ms, "test data").then( (res) => {
            const  current = process.uptime() * ms
            assert( current - base >= sleeptime * ms )
            assert( res === "test data" )
            done()
        })
    })
    it('wait only', (done : callback) => {
        const ms = 1000
        const sleeptime = 0.5
        const base = process.uptime() * ms
        sleep(sleeptime * ms).then( () => {
            const  current = process.uptime() * ms
            assert( current - base >= sleeptime * ms )
            done()
        })
    })
})

