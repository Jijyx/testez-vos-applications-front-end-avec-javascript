import { isInTestEnv } from './index.js'

/*
Test 1
• Given : Je suis en environnement de test
• When : J’appelle la fontion isInTestEnv()
• Then : La fonction me retourne le booléen true
Test 2
• Given : Je suis en environnement de test
• When : J’appelle la fontion isInTestEnv() et que je précise que je ne suis pas en environ-
nement de test
• Then : La fonction me retourne le booléen false
*/

describe('isInTestEnv test', () => {
    it('should return true', () => {
        expect(isInTestEnv()).toBe(true)
    })

    it('should return false', () => {
        process.env.NODE_ENV = 'something else'
        expect(isInTestEnv()).toBe(false)
    })
})

