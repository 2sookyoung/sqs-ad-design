import React from 'react'
import Card from './Card'
import { FormProvider, useForm } from 'react-hook-form'
import { JOIN_INIT_PARAMS } from '../../params/authParams'
import * as TextSC from '@components/typography/Typography.styles'
import * as SC from './Card.styles'
import Input from '@components/input/Input'
import { FlexRow } from '@styles/global/Flex.styles'

//* https://storybook.js.org/docs/api/arg-types 에서 argTypes 확인가능.
export default {
  title: 'Common/Card',
  component: Card,
  tags: ['autodocs'],
}

export const card = () => {
  return (
    <SC.Card>
      <SC.CardTop justify="flex-start" gap={'0'}>
        <SC.CardFormRowTitle>카드 타이틀</SC.CardFormRowTitle>
      </SC.CardTop>
      <SC.CardBottom>
        <SC.CardFormRow direction={'column'} gap={'20px'}>
          <SC.CardFormRowTitle>카드 타이틀</SC.CardFormRowTitle>
          <SC.CardFormRowSubTitle>카드 서브 타이틀</SC.CardFormRowSubTitle>
        </SC.CardFormRow>
      </SC.CardBottom>
    </SC.Card>
  )
}
export const cardExample = () => {
  const methods = useForm({
    mode: 'all',
    defaultValues: JOIN_INIT_PARAMS,
  })
  const {
    control,
    formState: { errors },
  } = methods

  return (
    <FormProvider {...methods}>
      <SC.Card>
        <SC.CardTop justify="flex-start" gap={'0'}>
          <SC.CardFormRowTitle>사업자 정보</SC.CardFormRowTitle>
        </SC.CardTop>
        <SC.CardBottom>
          <SC.CardFormRow>
            <SC.CardFormRowSubTitle>회사/상호명/단체명</SC.CardFormRowSubTitle>
            <Input
              containerStyle={{ width: '300px' }}
              required={true}
              control={control}
              placeholder={'회사 또는 상호나 단체 이름을 입력하세요.'}
              name={'company'}
            />
          </SC.CardFormRow>
          <SC.CardFormRow>
            <SC.CardFormRowSubTitle>대표자 성명</SC.CardFormRowSubTitle>
            <Input
              containerStyle={{ width: '300px' }}
              required={true}
              control={control}
              placeholder={'대표자 이름을 입력하세요.'}
              name={'name'}
            />
          </SC.CardFormRow>
        </SC.CardBottom>
      </SC.Card>
    </FormProvider>
  )
}
