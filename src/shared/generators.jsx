
import regeneratorRuntime from 'regenerator-runtime'

const N = function*( ) {
    let n = 1
    while( true ) {
        yield ++ n
    }
}

export const commercial = {
    generator: function* commercial( ) {
        const deck = '0.½.1.2.3.5.8.13.20.40.100'.split( '.' )
        for( const v of deck ) {
            yield v
        }
    },
    length: 11
}


export const fibonacci = {
    generator: function* fibonacci( ) {
        let a = 1,
            b = 1

        // include 0
        yield 0

        // first two numbers
        yield a
        yield b

        // rest
        while( true ) {
            const c = a + b
            a = b
            b = c
            yield c
        }
    }
}

export const playing = {
    generator: function* playing( ) {
        const deck = 'A.2.3.5.8.K'.split( '.' )
        for( const v of deck ) {
            yield v
        }
    },
    length: 6
}

export const primes = {
    generator: function* primes( ) {
        // 1 is a prime
        yield 1

        // find other primes
        for( let candidate of N( ) ) {
            const sqrt = Math.sqrt( candidate )

            // we use var here for function scope
            for( var i = 2; i <= sqrt; i ++ ) {
                if( candidate % i == 0 ) {
                    break
                }
            }

            // if for-loop finished, we have a prime
            if( i > sqrt ) {
                yield candidate
            }
        }
    }
}

export const squares = {
    generator: function*( ) {
        let n = 0

        while( true ) {
            yield ++ n ** 2
        }
    }
}