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
    type: {
      control: 'select',
      options: ['noRule', 'text', 'name', 'url'],
    },
    required: { control: 'boolean' },
    isSearch: { control: 'boolean' },
    useTextLength: { control: 'boolean' },
    max: { control: { type: 'number', min: 1, max: 30, step: 1 } },
    width: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
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
const InputFormContext = ({ args }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <TextfieldInput
        control={control}
        name={'name'}
        required={args.required}
        placeholder={args.placeholder}
        label={args.label}
        type={args.type}
        isSearch={args.isSearch}
        width={args.width}
        useTextLength={args.useTextLength}
        max={args.max}
      />
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
