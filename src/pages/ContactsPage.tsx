import { useFetcher } from 'react-router'
import { contactAction } from '../actions/contactAction'
import styled from 'styled-components'


export const ContactsPage = () => {

  const fetcher = useFetcher<typeof contactAction>()
  const actionData = fetcher.data
  const isBusy = fetcher.state !== 'idle'

  return (
    <Page>
      <Title>Контакты</Title>
      <Phone>88002000505</Phone>

      <fetcher.Form method='post'>
        <Field>
          <label htmlFor='name'>Имя</label>
          <Input id='name' name='name' type='text' required/>
        </Field>
        <Field>
          <label htmlFor='email'>Email</label>
          <Input id='email' name='email' type='email' required/>
        </Field>
        <Field>
          <Label htmlFor='message'>Сообщение</Label>
          <Textarea id='message' name='message' rows={5} required/>
        </Field>

        <SubmitButton type="submit" disabled={isBusy}>
          {fetcher.state === 'submitting'
            ? 'Отправляем...'
            : fetcher.state === 'loading'
            ? 'Обновляем...'
            : 'Отправить'}
        </SubmitButton>


      </fetcher.Form>

      <Status aria-live="polite">
        Состояние: {fetcher.state}
      </Status>

      {actionData && 'error' in actionData && (
        <ErrorMessage role="alert">{actionData.error}</ErrorMessage>
      )}

      {actionData && 'success' in actionData && (
        <SuccessMessage role="status">{actionData.message}</SuccessMessage>
      )}
    </Page >
  )
}












const Page = styled.main`
  width: min(100% - 32px, 720px);
  margin: 0 auto;
  padding: 48px 0;
`

const Title = styled.h1`
  margin: 0 0 12px;
  color: #111827;
`

const Phone = styled.p`
  margin: 0 0 32px;
  color: #4b5563;
`


const Field = styled.div`
  display: grid;
  gap: 8px;
`

const Label = styled.label`
  color: #111827;
  font-weight: 700;
`

const Input = styled.input`
  padding: 12px 14px;

  color: #111827;
  font: inherit;

  border: 1px solid #d1d5db;
  border-radius: 8px;

  &:focus {
    border-color: #4f46e5;
    outline: 3px solid rgb(79 70 229 / 15%);
  }
`

const Textarea = styled.textarea`
  min-height: 120px;
  padding: 12px 14px;
  resize: vertical;

  color: #111827;
  font: inherit;

  border: 1px solid #d1d5db;
  border-radius: 8px;

  &:focus {
    border-color: #4f46e5;
    outline: 3px solid rgb(79 70 229 / 15%);
  }
`

const SubmitButton = styled.button`
  justify-self: start;
  padding: 12px 20px;

  color: #ffffff;
  font: inherit;
  font-weight: 700;

  background-color: #4f46e5;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }

  &:focus-visible {
    outline: 3px solid rgb(79 70 229 / 35%);
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

const ErrorMessage = styled.p`
  margin: 16px 0 0;
  color: #b91c1c;
  font-weight: 700;
`

const SuccessMessage = styled.p`
  margin: 16px 0 0;
  color: #047857;
  font-weight: 700;
`

const Status = styled.p`
  margin: 16px 0 0;
  color: #6b7280;
  font-size: 14px;
`