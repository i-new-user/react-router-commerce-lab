import type { ActionFunctionArgs } from "react-router";

export const contactAction = async ({request,}: ActionFunctionArgs) => {
    const formData = await request.formData()

    await new Promise((resolve) => {
  setTimeout(resolve, 1000)
})

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const hasEmptyField = [name, email, message].some( 
        (value) => 
        typeof value !== 'string' || value.trim() === ''
    )

    if(hasEmptyField){
        return  {
            error: 'Заполните все поля',
        }
    }

    return{
        success: true,
        message: 'Сообщение отправлено',
    }
}