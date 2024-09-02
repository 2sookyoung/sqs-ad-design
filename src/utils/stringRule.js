import { pwErrMsgByRegex, pwRegexUtil } from '@utils/authUtil'

// 글자 + 컨텐츠
export const getTextRule = (message, min, max) => {
  let rule = {
    minLength: {
      value: min,
      message: `최소 ${min}글자 이상 입력해주세요.`,
    },
    maxLength: {
      value: max,
      message: `최대 ${max}글자까지 입력할 수 있습니다.`,
    },
    validate: {
      format: value => !(value?.trim() === '') || message,
    },
  }

  if (message) return { required: message, ...rule }
  return rule
}

// 이름
export const getNameRule = message => {
  let rule = {
    validate: {
      format: name =>
        /^[가-힣a-zA-Z\s]+$/.test(name) || name === '' || name === undefined || '이름을 정확히 입력해주세요.',
    },
  }

  if (message) return { required: message, ...rule }
  return rule
}

export const getSiteUrlRule = message => {
  let rule = {
    validate: {
      format: url =>
        /^(https?:\/\/)?([a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?)$/i.test(url) ||
        url === '' ||
        url === undefined ||
        '도메인 형식을 확인해주세요.',
    },
  }

  if (message) return { required: message, ...rule }
  return rule
}

// 사업자등록번호
export const getBusinessNumberRule = message => {
  let rule = {
    validate: businessNumber => {
      if (!businessNumber) return
      const numberList = businessNumber
        .replaceAll('-', '')
        .split('')
        .map(number => parseInt(number, 10))

      if (numberList.length == 10) {
        const authKeyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5]
        let checkedNum = 0

        authKeyArr.forEach((d, i) => {
          checkedNum += d * numberList[i]
        })

        checkedNum += parseInt((authKeyArr[8] * numberList[8]) / 10, 10)
        return Math.floor(numberList[9]) === (10 - (checkedNum % 10)) % 10 || '사업자등록번호를 확인해주세요.'
      }

      return '사업자등록번호를 확인해주세요.'
    },
  }

  if (message) return { required: message, ...rule }
  return rule
}

// 이메일
export const getEmailRule = message => {
  let rule = {
    validate: {
      format: email =>
        email === '' ||
        email === undefined ||
        email === null ||
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) ||
        '유효한 이메일 주소를 입력해주세요.',
    },
  }

  if (message) return { required: message, ...rule }
  return rule
}

// 핸드폰 번호
export const getPhoneRule = message => {
  let rule = {
    validate: {
      format: phone =>
        phone === '' ||
        phone === undefined ||
        phone === null ||
        /(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}/ ||
        '휴대전화 번호를 확인해주세요.',
    },
    pattern: {
      value: /(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}/,
      message: '휴대전화 번호를 확인해주세요.',
    },
  }

  if (message) return { required: message, ...rule }
  return rule
}

// 유선 번호
export const getTelePhoneRule = message => {
  let rule = {
    validate: {
      format: phone =>
        phone === '' ||
        phone === undefined ||
        phone === null ||
        /(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}/ ||
        '전화 번호를 확인해주세요.',
    },
    pattern: {
      value: /(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}/,
      message: '전화 번호를 확인해주세요.',
    },
  }

  if (message) return { required: message, ...rule }
  return rule
}

// 사이트 이름, 제목 (한글/영문/숫자/하이픈(-)/언더바(_))
export const getSiteNameRule = () => {
  return {
    pattern: {
      value: /^[a-zA-Z가-힣0-9_-\s]+$/,
      message: '내용이 형식에 맞지 않습니다.',
    },
    validate: {
      format: value => value.trim() !== '' || '공백만 입력은 불가능합니다.',
    },
  }
}

export const getPasswordRule = pwOptions => {
  let rule = {
    pattern: {
      value: pwRegexUtil(pwOptions),
      message: pwErrMsgByRegex(pwOptions),
    },
  }

  return rule
}
