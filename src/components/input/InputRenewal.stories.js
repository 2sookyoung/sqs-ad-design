import { action } from '@storybook/addon-actions'
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { text } from '@storybook/addon-knobs'
import { JOIN_INIT_PARAMS } from '../../params/authParams'
import TextfieldInput from './TextfieldInput'

export default {
  title: 'Renewal/Input',
  component: TextfieldInput,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    label: { control: 'text', description: 'input 라벨' },
    placeholder: { control: 'text', description: 'input 플레이스홀더' },
  },
}
const StorybookFormProvider = ({ children }) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: JOIN_INIT_PARAMS,
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}>{children}</form>
    </FormProvider>
  )
}
const InputFormContext = args => {
  const value = text('value', 'id')

  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <TextfieldInput required={true} control={control} name={'id'} placeholder={args.placeholder} label={args.label} />
    </>
  )
}
export const textFieldInput = args => {
  return (
    <StorybookFormProvider>
      <InputFormContext args={args} />
    </StorybookFormProvider>
  )
}

textFieldInput.story = {
  name: 'Default',
}
