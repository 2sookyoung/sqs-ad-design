import { action } from '@storybook/addon-actions'

import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { withKnobs, text, select } from '@storybook/addon-knobs'
// import InputLabel from './InputLabel';

import Input from './Input'
import { JOIN_INIT_PARAMS } from '../../params/authParams'
import CopyInput from './CopyInput'
import NumberInput from './NumberInput'
import SuffixInput from './SuffixInput'
import SortableTagInput from './SortableTagInput'

// import Form from '../form/Form';
// import Textarea from './Textarea';

export default {
  title: 'Common/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [withKnobs],
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
const InputFormContext = ({ type = 'default' }) => {
  const placeholder = text('placeholder', '회사명/상호명/단체명을 입력해 주세요')
  const value = text('value', 'id')

  const {
    control,
    formState: { errors },
  } = useFormContext() // useFormContext로 폼 메서드에 접근

  console.log('type', type)

  return (
    <>
      {/* <Input required={true} control={control} placeholder={placeholder} name={value} /> */}
      {type === 'default' && <Input required={true} control={control} placeholder={placeholder} name={value} />}
      {type === 'number' && <NumberInput required={true} control={control} placeholder={placeholder} name={value} />}
      {type === 'suffix' && <SuffixInput required={true} control={control} placeholder={placeholder} name={value} />}
      {type === 'copy' && <CopyInput required={true} control={control} placeholder={placeholder} name={value} />}
      {type === 'tag' && <SortableTagInput required={true} control={control} placeholder={placeholder} name={value} />}
    </>
  )
}
export const input = () => {
  return (
    <StorybookFormProvider>
      <InputFormContext />
    </StorybookFormProvider>
  )
}
export const numberInput = () => {
  return (
    <StorybookFormProvider>
      <InputFormContext type={'number'} />
    </StorybookFormProvider>
  )
}

export const suffixInput = () => {
  return (
    <StorybookFormProvider>
      <InputFormContext type={'suffix'} />
    </StorybookFormProvider>
  )
}
export const copyInput = () => {
  return (
    <StorybookFormProvider>
      <InputFormContext type={'copy'} />
    </StorybookFormProvider>
  )
}
export const sortableTagInput = () => {
  return (
    <StorybookFormProvider>
      <InputFormContext type={'tag'} />
    </StorybookFormProvider>
  )
}
input.story = {
  name: 'Default',
}

// export const inputLabel = () => {
//   return (
//     <StorybookFormProvider>
//       <FlexColumn align="flex-start" gap={'32px'}>
//         <FlexColumn align="flex-start" style={{ width: '500px' }} gap={'8px'}>
//           {/* <InputLabel required={true} label={'회사명/상호명/단체명'} /> */}
//           <Input
//             required={true}
//             requireErrMsg={'회사명은 필수 입력입니다.'}
//             placeholder={'회사명/상호명/단체명을 입력하세요'}
//             value={'id'}
//           />
//         </FlexColumn>
//         <FlexColumn align="flex-start" style={{ width: '500px' }} gap={'8px'}>
//           {/* <InputLabel label={'사업자 등록번호'} /> */}
//           <Input
//             value={'number'}
//             requireErrMsg={'회사명은 필수 입력입니다.'}
//             placeholder={'사업자 등록번호를 입력해 주세요'}
//           />
//         </FlexColumn>
//       </FlexColumn>
//     </StorybookFormProvider>
//   )
// }

// export const textarea = () => {
//   const methods = useForm({
//     mode: 'all',
//     defaultValues: JOIN_INIT_PARAMS,
//   });

//   const {
//     control,
//     formState: { errors },
//   } = methods;
//   return (
//     <StorybookFormProvider>
//       <FlexColumn align="flex-start" gap={'20px'}>
//         <FlexColumn align="flex-start" style={{ width: '700px' }}>
//           {/* <InputLabel label={'상품요약설명'} /> */}
//           <Textarea
//             required
//             control={control}
//             name={'birth'}
//             max={1000}
//             placeholder={
//               '1000자 이내의 상품 요약설명을 입력할 수 있습니다.(필수)'
//             }
//           />
//         </FlexColumn>
//         <FlexColumn align="flex-start" style={{ width: '500px' }}>
//           {/* <InputLabel label={'그룹 설명'} /> */}
//           <Textarea
//             placeholder={'상품요약 설명을 입력하세요. (선택)'}
//             control={control}
//             name={'phone'}
//           />
//         </FlexColumn>
//       </FlexColumn>
//     </StorybookFormProvider>
//   );
// };

// export const withForm = () => {
//   return <Form />;
// };
