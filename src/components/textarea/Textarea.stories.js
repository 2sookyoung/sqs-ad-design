import { action } from '@storybook/addon-actions'

import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { withKnobs, text, select } from '@storybook/addon-knobs'
// import InputLabel from './InputLabel';
import { FlexColumn } from '@styles/global/Flex.styles'
// import { JOIN_INIT_PARAMS } from '@params/authParams'

import Textarea from './Textarea'

// import Form from '../form/Form';
// import Textarea from './Textarea';

export default {
  title: 'Common/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  decorators: [withKnobs],
}
const StorybookFormProvider = ({ children }) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      account: '22sook00@gmail.com',
      password: 'zheldcjswo1!A',
    },
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}>{children}</form>
    </FormProvider>
  )
}

const TextareaFormContext = () => {
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      account: '22sook00@gmail.com',
      password: 'zheldcjswo1!A',
    },
  })

  const {
    control,
    formState: { errors },
  } = methods
  return (
    <FlexColumn align="flex-start" gap={'20px'}>
      <FlexColumn align="flex-start" style={{ width: '700px' }}>
        {/* <InputLabel label={'상품요약설명'} /> */}
        <Textarea
          required
          control={control}
          name={'birth'}
          max={1000}
          placeholder={'1000자 이내의 상품 요약설명을 입력할 수 있습니다.(필수)'}
        />
      </FlexColumn>
      <FlexColumn align="flex-start" style={{ width: '500px' }}>
        {/* <InputLabel label={'그룹 설명'} /> */}
        <Textarea placeholder={'상품요약 설명을 입력하세요. (선택)'} control={control} name={'phone'} />
      </FlexColumn>
    </FlexColumn>
  )
}
export const textarea = () => {
  return (
    <StorybookFormProvider>
      <TextareaFormContext />
    </StorybookFormProvider>
  )
}
textarea.story = {
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
