import { useRef } from 'react'
import { action } from '@storybook/addon-actions'
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import {
  COUNT_RULE,
  PRODUCT_DISCOUNT_PER_RULE,
  PRODUCT_DISCOUNT_WON_RULE,
  PRODUCT_STOCK_INCREASE_RULE,
  PRODUCT_STOCK_RULE,
} from '@utils/numberRule'
import { JOIN_INIT_PARAMS } from '../../params/authParams'
import Input from './Input'
import CopyInput from './CopyInput'
import NumberInput from './NumberInput'
import SuffixInput from './SuffixInput'
import SuffixSelect from '@components/select/SuffixSelect'
import FileUploadInput from './FileUploadInput'
import IncreaseInput from './IncreaseInput'
import InputLabel from './InputLabel'
import * as SC from './Input.styles'
import { FlexColumn } from '@styles/global/Flex.styles'

// import Form from '../form/Form';
// import Textarea from './Textarea';
const MAX_FILE_SIZE = 1024 ** 2 * 500 // 500MB
const ALLOW_FILE_TYPE = [
  'application/zip', // ZIP 파일
  'audio/flac', // FLAC 파일
  'audio/aac', // AAC 파일
  'audio/mpeg', // MP3 파일
  'audio/wav', // WAV 파일
  'video/mp4', // MP4 파일
  'image/png', // PNG 파일
  'image/jpeg', // JPEG 파일
  'image/gif', // GIF 파일
  'image/tiff', // TIFF 파일
  'image/vnd.adobe.photoshop', // PSD 파일
  'application/pdf', // PDF 파일
  'application/postscript', // EPS 파일
  'application/vnd.adobe.illustrator', // AI 파일
  'application/x-zip-compressed', // window zip
]

export default {
  title: 'Renewal/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'phone', 'telePhone', 'businessNumber', 'name', 'url'] },
    label: { control: 'text', description: 'input label 타이틀' },
    required: { control: 'boolean' },
    isSearch: { control: 'boolean' },
    useTextLength: { control: 'boolean' },
    useErrorIcon: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    description: { control: 'text', description: 'input 설명 텍스트' },
    placeholder: { control: 'text', description: 'input 플레이스홀더' },
    //backgroundColor: { control: "color" },
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
const InputFormContext = ({ type = 'default', args }) => {
  const apiKeyRef = useRef(null)
  const value = text('value', 'id')

  const {
    control,
    formState: { errors },
    clearErrors,
    setValue,
    getValues,
    handleSubmit,
  } = useFormContext() // useFormContext로 폼 메서드에 접근

  const [priceType, clientSecret, apiKeyFile, quantity] = useWatch({
    control,
    name: ['priceType', 'clientSecret', 'apiKeyFile', 'quantity'],
  })

  const handleBlurAmount = ({ type, value, name }) => {
    switch (type) {
      case 'won':
        if (value !== 0 && !value) break
        // 10 미만 입력시, 10 자동 입력
        if (value < 10) {
          setValue(name, 10, { shouldValidate: true, shouldDirty: true })
          break
        }
        // 1의 자리수가 0이 아닌 경우 1의 자리수에서 내림하여 입력
        if (value % 10 !== 0) {
          setValue(name, Math.floor(value / 10) * 10, { shouldValidate: true, shouldDirty: true })
        }
      case 'per':
        if (value !== 0 && !value) break
        if (value < 1) {
          setValue(name, 1, { shouldValidate: true, shouldDirty: true })
        }
    }
  }

  const handleCopyClick = text => {
    if (!text) return
    const textarea = document.createElement('textarea')

    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('클립보드에 복사되었습니다.')
  }

  const handleFileInput = e => {
    const file = e.target.files[0]
    if (!file) return

    if (!ALLOW_FILE_TYPE.includes(file.type)) {
      alert('파일 형식을 확인해주세요.')
      return false
    }
    if (file.size > MAX_FILE_SIZE) {
      alert('파일 크기를 확인해주세요.')
      return false
    }
    setValue('apiKeyFile', file)
  }

  const handleIncrease = (data, action) => {
    if (action) {
      if (quantity + data.increase > 1_000_000_000) return alert('최대재고량은 10억개 입니다.')

      setValue('quantity', quantity + data.increase)
    } else {
      setValue('quantity', quantity - data.increase < 0 ? 0 : quantity - data.increase)
    }
  }

  return (
    <>
      {type === 'default' && <Input required={true} control={control} placeholder={args.placeholder} name={value} />}
      {type === 'number' && (
        <NumberInput
          control={control}
          name={value}
          suffix={'개'}
          rules={COUNT_RULE}
          onChange={value => Math.min(value, 10000)}
        />
      )}
      {type === 'suffix' && (
        <SC.SuffixInputContainer style={{ width: 300 }}>
          <SuffixInput
            rules={priceType === 'price' ? PRODUCT_DISCOUNT_WON_RULE : PRODUCT_DISCOUNT_PER_RULE}
            onBlur={value =>
              handleBlurAmount({ type: priceType === 'price' ? 'won' : 'per', value, name: 'priceType' })
            }
            required={true}
            control={control}
            name={'inputPrice'}
          />
          <SuffixSelect
            clearErrors={clearErrors}
            setValue={setValue}
            value={priceType}
            selectValue={'priceType'}
            inputValue={'inputPrice'}
          />
        </SC.SuffixInputContainer>
      )}
      {type === 'copy' && (
        <FlexColumn align={'flex-start'}>
          <CopyInput value={`https://yog.qshop.ai/sitemap.xml`} />
          <CopyInput value={'DB URL 생성중입니다. (최대 1시간 소요)'} disabled={true} />
          <SC.CopyInputContainer>
            <Input
              placeholder={'Client Secret를 입력하세요. (ex: lv_-3CpHAq10)'}
              control={control}
              name={`clientSecret`}
              required
            />
            <SC.CopyInputIconContainer
              disabled={!getValues('clientSecret')}
              onClick={() => handleCopyClick(getValues('clientSecret'))}
            >
              복사하기
            </SC.CopyInputIconContainer>
          </SC.CopyInputContainer>

          <SC.CopyInputContainer disabled={true}>
            <Input
              placeholder={'Client ID를 입력하세요. (ex: wpv6z7snuJiDYfSsN9ea)'}
              control={control}
              name={`clientId`}
              readOnly={true}
            />
            <SC.CopyInputIconContainer disabled={true}>복사하기</SC.CopyInputIconContainer>
          </SC.CopyInputContainer>
        </FlexColumn>
      )}
      {type === 'upload' && (
        <div style={{ width: '440px' }}>
          <FileUploadInput
            value={apiKeyFile?.name}
            onClick={() => {
              apiKeyRef.current.click()
            }}
            error={!apiKeyFile}
          />
          <input
            type="file"
            accept={ALLOW_FILE_TYPE}
            style={{ display: 'none' }}
            ref={apiKeyRef}
            onChange={handleFileInput}
          />
        </div>
      )}
      {type === 'increase' && (
        <FlexColumn style={{ width: '300px' }} gap={'25px'}>
          <NumberInput control={control} name={'quantity'} suffix={'개'} rules={PRODUCT_STOCK_RULE} maxLength={17} />
          <IncreaseInput
            control={control}
            plusAction={handleSubmit(data => handleIncrease(data, true))}
            minusAction={handleSubmit(data => handleIncrease(data, false))}
            name={'increase'}
            rules={PRODUCT_STOCK_INCREASE_RULE}
            maxLength={17}
          />
        </FlexColumn>
      )}
    </>
  )
}
export const input = args => {
  return (
    <StorybookFormProvider>
      <InputFormContext args={args} />
    </StorybookFormProvider>
  )
}
export const numberInput = args => {
  return (
    <StorybookFormProvider>
      <InputFormContext type={'number'} args={args} />
    </StorybookFormProvider>
  )
}

export const suffixInput = args => {
  return (
    <StorybookFormProvider>
      <InputFormContext type={'suffix'} args={args} />
    </StorybookFormProvider>
  )
}
export const copyInput = args => {
  return (
    <StorybookFormProvider>
      <InputFormContext type={'copy'} args={args} />
    </StorybookFormProvider>
  )
}
export const fileUploadInput = args => {
  return (
    <StorybookFormProvider>
      <InputFormContext type={'upload'} args={args} />
    </StorybookFormProvider>
  )
}
export const increaseInput = args => {
  return (
    <StorybookFormProvider>
      <InputFormContext type={'increase'} args={args} />
    </StorybookFormProvider>
  )
}

export const inputLabel = args => {
  const value = text('value', 'name')

  const methods = useForm({
    mode: 'all',
    defaultValues: JOIN_INIT_PARAMS,
  })

  const {
    control,
    formState: { errors },
  } = methods

  return (
    <StorybookFormProvider>
      <FlexColumn align="flex-start" gap={'32px'}>
        <FlexColumn align="flex-start" style={{ width: '500px' }} gap={'8px'}>
          <InputLabel required={true} label={args.label} />
          <Input
            type={'businessNumber'}
            required={true}
            control={control}
            placeholder={args.placeholder}
            name={value}
          />
        </FlexColumn>
        <FlexColumn align="flex-start" style={{ width: '500px' }} gap={'8px'}>
          <InputLabel label={args.label} />
          <Input
            type={'businessNumber'}
            name={'bizNumber'}
            required={false}
            control={control}
            placeholder={args.placeholder}
          />
        </FlexColumn>
      </FlexColumn>
    </StorybookFormProvider>
  )
}

input.story = {
  name: 'Default',
}
