import { useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ReactSortable } from 'react-sortablejs'
import * as SC from './Input.styles'
import { CloseTagIcon } from '@components/icon/common/X'

const SortableTagInput = ({ values, index }) => {
  const [valueArr, setValueArr] = useState([])
  const [tagView, setTagView] = useState(false)

  const [inputValue, setInputValue] = useState()
  const [isError, setIsError] = useState(false)

  const inputRef = useRef(null)

  const {
    setValue,
    setError,
    clearErrors,
    formState: { errors, isDirty },
  } = useFormContext()

  const checkOptionCount = inputValues => {
    const result = [...new Set([...valueArr, ...inputValues])]
    inputRef.current.value = ''

    if (result.length > 5) return true

    setValueArr(...[result.map(el => el)])
    return false
  }

  const handleInput = val => {
    const inputValues = val
      .trim()
      .split(',')
      .map(el => el.trim())
      .filter(el => el !== '')

    if (checkOptionCount(inputValues)) return alert('수신 번호는 최대 5개까지 가능합니다.')
  }

  const handleDelete = val => setValueArr(pre => pre.filter(el => el !== val))

  useEffect(() => {
    if ((values?.length || 0) === 0) return
    setValueArr(values)
  }, [])

  useEffect(() => {
    setValue(`receiveNumber`, valueArr)

    if (valueArr.length === 0) {
      setError(`receiveNumber`, { type: 'custom', message: '옵션 값 0' })
    } else {
      clearErrors(`receiveNumber`)
    }
  }, [valueArr])

  return (
    <div
      style={{ position: 'relative', width: '100%' }}
      onMouseLeave={() => setTagView(false)}
      onMouseEnter={() => setTagView(true)}
    >
      <SC.OptionInput
        ref={inputRef}
        onKeyPress={e => {
          if (e.key !== 'Enter') return
          handleInput(inputValue)
        }}
        placeholder="휴대전화 번호를 입력하세요. (엔터 입력시 개별 등록)"
        maxLength={13}
        onChange={e => {
          // const regex = /^[\d()-]+$/
          const regex = /^01[016789][\d()-]*$/
          // const regex = /^01[016789](\d{7,8}|-\d{3,4}-\d{4})$/

          {
            /* 지역번호 제외, 실제 휴대전화번호
          -(하이픈)을 기준으로 첫번째 구간이 01[0,1,6,7,8,9](핸드폰) 체크
          -(하이픈)을 기준으로 두번째 구간이 숫자 3~4 자리로 이루어져 있는지 체크
          -(하이픈)을 기준으로 세번째 구간이 숫자 4자리로 이루어져 있는지 체크 
          */
          }
          const val = e.target.value
          // console.log('RE:', regex.test(val))
          if (regex.test(val)) {
            setIsError(false)
            setInputValue(val)
          } else {
            console.log('xxx')
            setIsError(true)
          }
        }}
      />
      {tagView ? (
        <SC.TagViewContainer>
          <div style={{ position: 'relative' }}>
            <ReactSortable
              list={valueArr}
              setList={(newVal, _, store) => {
                if (!store.dragging) return
                if (newVal.length === 0) return
                setValueArr(newVal)
              }}
              onKeyPress={e => e.preventDefault()}
            >
              {valueArr.length === 0 ? (
                <SC.TempText>0개</SC.TempText>
              ) : (
                valueArr.map((el, idx) => (
                  <SC.Tag key={`input-tag-view-${idx}`}>
                    <CloseTagIcon onClick={e => handleDelete(el)} />
                    {el}
                  </SC.Tag>
                ))
              )}
            </ReactSortable>
            {valueArr.length !== 0 && (
              <SC.TempText2 view="true">{<span>{`등 총 ${valueArr.length} 개`}</span>}</SC.TempText2>
            )}
          </div>
        </SC.TagViewContainer>
      ) : (
        <SC.TagSummaryContainer>
          <div style={{ position: 'relative' }}>
            <ReactSortable
              list={valueArr}
              setList={(newVal, _, store) => {
                if (!store.dragging) return
                if (newVal.length === 0) return
                setValueArr(newVal)
              }}
              onKeyPress={e => e.preventDefault()}
            >
              {valueArr.length === 0 ? (
                <SC.TempText>0개</SC.TempText>
              ) : (
                valueArr.map((el, idx) => (
                  <SC.Tag key={`input-tag-${idx}`}>
                    <CloseTagIcon onClick={e => handleDelete(el)} />
                    {el}
                  </SC.Tag>
                ))
              )}
            </ReactSortable>
            {valueArr.length !== 0 && (
              <SC.TempText2 view="false">{<span>{`등 총 ${valueArr.length} 개`}</span>}</SC.TempText2>
            )}
          </div>
        </SC.TagSummaryContainer>
      )}

      {isError && (
        <SC.ErrorMessage style={{ left: '0px', bottom: '-55px' }}>휴대전화 번호를 확인해주세요.</SC.ErrorMessage>
      )}
    </div>
  )
}

export default SortableTagInput
