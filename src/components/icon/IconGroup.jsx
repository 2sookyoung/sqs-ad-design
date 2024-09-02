import React from 'react'
import { FlexBox, FlexColumn } from '@styles/global/Flex.styles'
import { GridBox } from '@styles/global/Grid.styles'
import * as TextSC from '@components/typography/Typography.styles'
import { ErrorIcon, ErrorSolidIcon } from '@components/icon/common/Error'
import { CloseIcon, CloseCircleIcon, CloseTagIcon } from './common/X'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowDoubleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowGuideUpIcon,
  ArrowGuideDownIcon,
  AngularArrowDownIcon,
  AngularArrowUpIcon,
} from './common/Arrow'
import { InfoTipIcon, HelpTipIcon } from './common/Help'
import { PlusIcon, PlusInputIcon, MinusInputIcon } from './common/Calculate'
import { CheckedIcon, UnCheckedIcon } from './common/Check'
import { RadioSelectedIcon, RadioUnSelectedIcon } from './common/Radio'
import { SubIndicatorIcon } from './common/Indicator'
import { DotBurger } from './common/Setting'
import { SuccessIcon } from './common/Success'
import { CalendarIcon, ClockIcon } from './common/DatePicker'
import { StarIcon } from './common/Star'
import { SliderThumbIcon } from './common/Slider'
import { SearchIcon } from './common/Search'
import { SpinnerIcon } from './common/Loading'
import { ImgPlaceholderIcon, ImgPreviewIcon } from './common/Image'

import { UploadIcon } from './common/Upload'
import { QuickCheckedIcon, QuickUncheckIcon, ShortcutEditorIcon, ShortcutMysiteIcon } from './dashboard/Dashboard'
import { EarthIcon, SitePreviewIcon } from './site/Site'
import { DreamSecurityIcon } from './identity/DreamSecurity'
import { KakaoDisabledIcon, KakaoIcon } from './pg/Kakao'
import { NaverIcon } from './pg/Naver'
import { PaycoIcon } from './pg/Payco'
import { TossIcon } from './pg/Toss'
import { DeleteIcon, DeleteSmallIcon, EditIcon, RefreshIcon } from './common/Button'
import {
  BenefitIcon,
  CardIcon,
  ChatIcon,
  ContentIcon,
  DefaultInfoIcon,
  HomeIcon,
  JoinIcon,
  LinkIcon,
  MemberIcon,
  MessageIcon,
  OperationIcon,
  PayMethodIcon,
  ProductIcon,
  ReviewIcon,
  SettingIcon,
  ShoppingIcon,
  ShopActiveIcon,
  ShopIcon,
  PartnerGoogleIcon,
  PartnerIcon,
  PartnerKakaoIcon,
  PartnerMetaIcon,
  PartnerNaverIcon,
} from './navbar/Lnb'

const IconGroup = () => {
  const IconContainer = ({ children, text }) => {
    return (
      <FlexColumn style={{ width: '100px', height: '100px' }}>
        <FlexColumn style={{ width: '20px', height: '20px' }}>{children}</FlexColumn>
        <TextSC.Sub12 type={'sub'} style={{ textAlign: 'center' }}>
          {text}
        </TextSC.Sub12>
      </FlexColumn>
    )
  }
  return (
    <FlexColumn align={'flex-start'}>
      <TextSC.Title40>Common Icons</TextSC.Title40>
      <GridBox col={'repeat(8, 1fr)'} gap={'10px'}>
        {/* 에러아이콘 */}
        <IconContainer text={'Error '}>
          <ErrorIcon />
        </IconContainer>
        <IconContainer text={'Error solid'}>
          <ErrorSolidIcon />
        </IconContainer>
        <IconContainer text={'Close'}>
          <CloseIcon width={20} height={20} />
        </IconContainer>
        <IconContainer text={'Close solid'}>
          <CloseCircleIcon />
        </IconContainer>
        <IconContainer text={'Close Tag'}>
          <CloseTagIcon />
        </IconContainer>
        {/* 화살표아이콘 */}
        <IconContainer text={'Arrow Up'}>
          <ArrowUpIcon />
        </IconContainer>
        <IconContainer text={'Arrow Down'}>
          <ArrowDownIcon />
        </IconContainer>
        <IconContainer text={'Arrow Double'}>
          <ArrowDoubleIcon />
        </IconContainer>
        <IconContainer text={'Arrow Left'}>
          <ArrowLeftIcon />
        </IconContainer>
        <IconContainer text={'Arrow Right'}>
          <ArrowRightIcon />
        </IconContainer>
        <IconContainer text={'Arrow GuideUp'}>
          <ArrowGuideUpIcon />
        </IconContainer>
        <IconContainer text={'Arrow GuideDown'}>
          <ArrowGuideDownIcon />
        </IconContainer>
        <IconContainer text={'Angular ArrowDown'}>
          <AngularArrowDownIcon />
        </IconContainer>
        <IconContainer text={'Angular ArrowUp'}>
          <AngularArrowUpIcon />
        </IconContainer>
        {/*헬프 팁 아이콘 */}
        <IconContainer text={'Info Tip'}>
          <InfoTipIcon />
        </IconContainer>
        <IconContainer text={'Help Tip'}>
          <HelpTipIcon />
        </IconContainer>
        {/* 사칙연산 아이콘 */}
        <IconContainer text={'Plus'}>
          <PlusIcon />
        </IconContainer>
        <IconContainer text={'Plus Input'}>
          <PlusInputIcon style={{ fill: '#D5D5D7' }} />
        </IconContainer>
        <IconContainer text={'Minus Input'}>
          <MinusInputIcon style={{ fill: '#D5D5D7' }} />
        </IconContainer>
        {/* 체크박스 */}
        <IconContainer text={'Check'}>
          <CheckedIcon />
        </IconContainer>
        <IconContainer text={'Uncheck'}>
          <UnCheckedIcon />
        </IconContainer>

        {/* 라디오 */}
        <IconContainer text={'Radio Selected'}>
          <RadioSelectedIcon />
        </IconContainer>
        <IconContainer text={'Radio UnSelected'}>
          <RadioUnSelectedIcon />
        </IconContainer>
        {/* 인디케이터 */}
        <IconContainer text={'Sub Indicator'}>
          <SubIndicatorIcon />
        </IconContainer>
        <IconContainer text={'Dot Burger'}>
          <DotBurger />
        </IconContainer>

        {/* 데이트피커 */}
        <IconContainer text={'Calendar'}>
          <CalendarIcon />
        </IconContainer>
        <IconContainer text={'Calendar'}>
          <ClockIcon />
        </IconContainer>
        {/* 이미지 */}
        <IconContainer text={'Image Placeholder'}>
          <ImgPlaceholderIcon />
        </IconContainer>
        <IconContainer text={'Image Preview'}>
          <ImgPreviewIcon />
        </IconContainer>
        <IconContainer text={'Upload'}>
          <UploadIcon />
        </IconContainer>

        <IconContainer text={'Success'}>
          <SuccessIcon />
        </IconContainer>
        <IconContainer text={'Star'}>
          <StarIcon />
        </IconContainer>
        <IconContainer text={'Slider'}>
          <SliderThumbIcon />
        </IconContainer>
        <IconContainer text={'Search'}>
          <SearchIcon />
        </IconContainer>
        <IconContainer text={'Spinner'}>
          <SpinnerIcon />
        </IconContainer>
      </GridBox>

      <TextSC.Title40>LNB Icons</TextSC.Title40>
      <GridBox col={'repeat(8, 1fr)'} gap={'10px'}>
        <IconContainer text={'Home'}>
          <HomeIcon />
        </IconContainer>
        <IconContainer text={'Product'}>
          <ProductIcon />
        </IconContainer>
        <IconContainer text={'Card'}>
          <CardIcon />
        </IconContainer>
        <IconContainer text={'Link'}>
          <LinkIcon />
        </IconContainer>
        <IconContainer text={'Benefit'}>
          <BenefitIcon />
        </IconContainer>
        <IconContainer text={'Review'}>
          <ReviewIcon />
        </IconContainer>
        <IconContainer text={'Chat'}>
          <ChatIcon />
        </IconContainer>
        <IconContainer text={'Member'}>
          <MemberIcon />
        </IconContainer>
        <IconContainer text={'Message'}>
          <MessageIcon />
        </IconContainer>
        <IconContainer text={'Content'}>
          <ContentIcon />
        </IconContainer>
        <IconContainer text={'Default'}>
          <DefaultInfoIcon />
        </IconContainer>
        <IconContainer text={'Join'}>
          <JoinIcon />
        </IconContainer>
        <IconContainer text={'Operation'}>
          <OperationIcon />
        </IconContainer>
        <IconContainer text={'Shopping'}>
          <ShoppingIcon />
        </IconContainer>
        <IconContainer text={'Payment method'}>
          <PayMethodIcon />
        </IconContainer>
        <IconContainer text={'Operate Tab Active'}>
          <ShopActiveIcon />
        </IconContainer>
        <IconContainer text={'Operate Tab Gray'}>
          <ShopIcon />
        </IconContainer>
        <IconContainer text={'Setting'}>
          <SettingIcon />
        </IconContainer>
        <IconContainer text={'Partner'}>
          <PartnerIcon />
        </IconContainer>
        <IconContainer text={'Partner Naver'}>
          <PartnerNaverIcon />
        </IconContainer>
        <IconContainer text={'Partner Google'}>
          <PartnerGoogleIcon />
        </IconContainer>
        <IconContainer text={'Partner Meta'}>
          <PartnerMetaIcon />
        </IconContainer>
        <IconContainer text={'Partner Kakao'}>
          <PartnerKakaoIcon />
        </IconContainer>
      </GridBox>

      <TextSC.Title40>ETC Icons</TextSC.Title40>
      <GridBox col={'repeat(8, 1fr)'} gap={'10px'}>
        {/* 대시보드 */}
        <IconContainer text={'Quick checked'}>
          <QuickCheckedIcon />
        </IconContainer>
        <IconContainer text={'Quick Unchecked'}>
          <QuickUncheckIcon />
        </IconContainer>
        <IconContainer text={'Shortcut Mysite'}>
          <ShortcutMysiteIcon />
        </IconContainer>
        <IconContainer text={'Shortcut Editor'}>
          <ShortcutEditorIcon />
        </IconContainer>
        {/* 사이트 프리뷰 */}
        <IconContainer text={'Site Preview'}>
          <SitePreviewIcon />
        </IconContainer>
        <IconContainer text={'Site Preview'}>
          <EarthIcon />
        </IconContainer>
        <IconContainer text={'Site Preview'}>
          <EditIcon />
        </IconContainer>
        <IconContainer text={'Dream Security'}>
          <DreamSecurityIcon />
        </IconContainer>

        {/* PG */}
        <IconContainer text={'Kakao'}>
          <KakaoIcon />
        </IconContainer>
        <IconContainer text={'Kakao Disabled'}>
          <KakaoDisabledIcon />
        </IconContainer>
        <IconContainer text={'Naver'}>
          <NaverIcon />
        </IconContainer>
        <IconContainer text={'Payco'}>
          <PaycoIcon />
        </IconContainer>
        <IconContainer text={'Toss'}>
          <TossIcon />
        </IconContainer>
      </GridBox>
    </FlexColumn>
  )
}

export default IconGroup
