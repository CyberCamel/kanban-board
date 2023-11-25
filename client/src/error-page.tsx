import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    let errorMessage: string = ''
    if (isRouteErrorResponse(errorMessage)) {
        errorMessage = error?.error?.message || error?.error?.statusText
    }

    return (
        <>
            <h1>Regeringen är död</h1>
            <h2>{'Alla ska dö nu :)'}</h2>
            <p>
                <i>{errorMessage}</i>
            </p>
        </>
    )
}
export default ErrorPage
