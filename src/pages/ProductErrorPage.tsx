import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export const ProductErrorPage = () => {
    const error = useRouteError()

    if(isRouteErrorResponse(error)){
        return(
            <main>
                <h1>Ошибка {error.status}</h1>
                <p>
                    {typeof error.data === 'string' ? error.data : 'Не удалось загрузить товар'}             
                </p>
                <Link to="/catalog">
                    ← Вернуться в каталог
                </Link>
            </main>
        )
    }

    return (
        <main>
            <h1>Непредвиденная ошибка</h1>
            <p>Не удалось загрузить товар.</p>

            <Link to="/catalog">
                ← Вернуться в каталог
            </Link>
        </main>
    );

    
}