export const birthYearUtil = yearInput => {
  let currentYear = new Date().getFullYear()

  if (/^\d*(\.\d{0, 4})?$/.test(yearInput)) {
    if (yearInput > currentYear || yearInput <= 999) {
      return ''
    }
  } else {
    return ''
  }
}

export const birthMonthUtil = monthInput => {
  let birth_m = monthInput
  let regex = /^\d*(\.\d{0, 2})?$/
  if (regex.test(birth_m)) {
    if (parseInt(birth_m.trim()) < 10 && birth_m.trim().length < 2) {
      if (birth_m === '0') return `01`
      return `0${birth_m}`
    } else if (parseInt(birth_m.trim()) > 12 || birth_m.trim().length > 2) {
      return '12'
    }
    if (parseInt(birth_m.trim()) == 0) {
      return '01'
    }
  } else {
    return '01'
  }
}

export const birthDayUtil = dayInput => {
  let birth_d = dayInput
  if (/^\d*(\.\d{0, 2})?$/.test(birth_d)) {
    if (parseInt(birth_d.trim()) < 10 && birth_d.trim().length < 2) {
      if (birth_d === '0') return `01`
      return `0${birth_d}`
    } else if (parseInt(birth_d.trim()) > 31 || birth_d.trim().length > 2) {
      return '31'
    }
    if (parseInt(birth_d.trim()) == 0) {
      return '01'
    }
  } else {
    return '01'
  }
}

export const pwRegexUtil = pwOptions => {
  const { number, upperCase, lowerCase, specialCase, minLength, maxLength } = pwOptions

  //active 일 경우 반드시 포함이 되어야한다. inactive 일 경우 들어가도 되고 안들어가도 될때의 정규식.
  const isNumber = number === 'active' ? `(?=.*\\d+)` : ''
  const isUpperCase = upperCase === 'active' ? `(?=.*[A-Z])` : ''
  const isLowerCase = lowerCase === 'active' ? `(?=.*[a-z])` : ''
  const isSpecialCase = specialCase === 'active' ? `(?=.*[\\W]+)` : ''
  return new RegExp(`^${isNumber}${isUpperCase}${isLowerCase}${isSpecialCase}.{${minLength},${maxLength}}(?![\s\S])$`)
}

//password error message
export const pwErrMsgByRegex = pwOptions => {
  const { number, upperCase, lowerCase, specialCase, minLength, maxLength } = pwOptions

  const isNumber = number === 'active' ? `"숫자"` : ''
  const isUpperCase = upperCase === 'active' ? `"대` : ''
  const isLowerCase = lowerCase === 'active' ? `"소` : ''
  const isSpecialCase = specialCase === 'active' ? `"특수문자"` : ''

  const isChkValidationPw = isNumber || isUpperCase || isLowerCase || isSpecialCase

  if (isChkValidationPw) {
    return `비밀번호는 ${isUpperCase}${isLowerCase}${
      (isUpperCase || isLowerCase) && '문자"'
    } ${isNumber} ${isSpecialCase}를 포함하여 ${minLength}${maxLength && `~${maxLength}`}${
      (minLength || maxLength) && '자로'
    } 입력하세요..`
  } else {
    return `비밀번호는 ${minLength}${maxLength && `~${maxLength}`}${(minLength || maxLength) && '자로'} 입력하세요..`
  }
}

export const AUTH_VALIDATION = {
  loginAccount: /^.{6,20}$/,
  account: /^((?=.*[A-Za-z])|((?=.*[A-Za-z])(?=.*\d)))(?!.*\W).{6,16}$/,
  email: /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/,
  password: /^.{6,20}$/,
  name: /^(?:[가-힣]*|[a-zA-Z]+(?:\s[a-zA-Z]+)*)$/,
  birth: /^(\d{4})(\d{2})(\d{2})$/,
  cellPhone: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
  telephone: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
}

export const AUTH_PLACEHOLDER = {
  account: '사용하실 계정 아이디를 입력하세요.',
  email: '사용하실 이메일 주소를 입력하세요.',
  curPassword: '현재 비밀번호를 입력하세요.',
  password: '사용하실 비밀번호를 입력하세요.',
  passwordChk: '비밀번호를 다시 입력하세요..',
  name: '상호 또는 브랜드명이 아닌 가입하시는 분의 실명을 입력하세요..',
  birth: { year: '생일연도(4자)', month: '월', day: '일' },
  cellPhone: '휴대전화 번호',
  telephone: '전화번호',
  referrer: '추천인 코드를 입력하세요.',
  agreeText: '동의합니다',
}

//회원가입에러
export const AUTH_FORM_ERROR = {
  loginAccount: {
    empty: '아이디를 입력하세요..',
  },
  account: {
    empty: '아이디를 입력하세요..',
    validation: '6자~16자 이내의 영문/숫자로만 입력하세요.',
    duplicate: '이미 사용중인 아이디입니다.',
  },
  email: {
    empty: '이메일을 입력하세요..',
    validation: '이메일 형식이 맞지 않습니다.',
    duplicate: '이미 사용중인 이메일입니다.',
  },
  password: {
    empty: '비밀번호를 입력하세요.',
    // validation: '비밀번호는 알파벳(대문자) / 숫자 / 특수문자 1개씩을 포함하여 6~20자 이내로 작성해주세요',
    fail: '유효하지 않은 비밀번호입니다.',
  },
  passwordChk: {
    empty: '비밀번호를 확인해주세요',
    match: '비밀번호가 일치하지 않습니다.',
  },
  curPassword: {
    empty: '비밀번호를 입력하세요.',
    fail: '유효하지 않은 비밀번호입니다.',
  },
  name: {
    empty: '이름을 입력하세요..',
    validation: '가입하시는 분의 실명을 입력하세요..',
  },
  address: {
    empty: '주소찾기 버튼을 통해 주소를 입력하세요..',
  },
  address2: {
    empty: '상세주소를 입력하세요..',
  },
  cellPhone: {
    empty: '휴대전화 번호를 입력하세요..',
    validation: '휴대전화 번호를 확인해주세요',
  },
  telephone: {
    empty: '전화번호를 입력하세요..',
    validation: '전화번호를 확인해주세요',
  },
  birth: {
    empty: '생년월일을 입력하세요..',
    validation: '생년월일을 확인해주세요.',
    underAge: '14세 미만의 경우 가입이 제한됩니다.',
  },
  gender: {
    empty: '성별을 선택해주세요.',
  },
  referrer: {
    empty: '추천인 코드를 입력하세요..',
    validation: '유효하지 않은 추천인 코드 입니다.',
  },
  agreeText: {
    empty: '회원탈퇴를 위해 필수로 입력하세요..',
    validation: '텍스트가 올바르지 않습니다.',
  },
}

export const numberWithCommas = x => {
  return String(x)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
