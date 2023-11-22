import ErrorPage from './index.js'

describe('ErrorPage', () => {
    it('should return the error page', () => {
        expect(ErrorPage.render()).toBe(`
            <section>
                <h1>Error Page</h1>
                <p>This is just a test of the error page</p>
            </section>
        `)
    })
})