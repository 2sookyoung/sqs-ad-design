import { UploadIcon } from '@components/icon/common/Upload'
import { color } from '@styles/values/color'
import * as SC from './Input.styles'
import * as TextSC from '@components/typography/Typography.styles'

// import Loading from '../layout/Loading'

const FileUploadInput = ({ value, onClick, error, width, isLoading = false }) => {
  return (
    <SC.UploadInputContainer width={width}>
      <div style={{ flex: 1 }}>
        <SC.UploadInputBox readOnly value={value} error={error} disabled={value !== ''} />
      </div>

      <SC.UploadIconContainer onClick={() => (isLoading ? null : onClick())} error={error}>
        {isLoading ? (
          // <Loading size={16} leftPosition="40%" delay={false} />
          <p>로딩</p>
        ) : (
          <>
            <UploadIcon />
            <TextSC.Sub12 customColor={color.grayscale.gray[600]}>파일 업로드</TextSC.Sub12>
          </>
        )}
      </SC.UploadIconContainer>
    </SC.UploadInputContainer>
  )
}

export default FileUploadInput
