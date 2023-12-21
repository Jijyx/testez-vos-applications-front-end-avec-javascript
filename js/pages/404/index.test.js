import ErrorPage from "./index.js"

describe('ErrorPage Test Suites', () => {
    it('should match snapshot', () => {
        expect(ErrorPage.render()).toMatchInlineSnapshot(`
"
            <section>
                <h1>Error Page</h1>
                <p>This is just a test of the error page</p>
            </section>
        "
`)
    })
})
