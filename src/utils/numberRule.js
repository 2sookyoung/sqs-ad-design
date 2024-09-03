import { numberWithCommas } from './authUtil'

const MAX_INT = 1_000_000_000

// 가격
export const WON_RULE = {
  required: '가격을 입력해주세요.',
  min: {
    value: 10,
    message: '최소금액은 10원 입니다.',
  },
  max: {
    value: 1_000_000_000,
    message: '최대 금액은 1,000,000,000 입니다.',
  },
  validate: {
    format: price => price % 10 === 0 || '10원 단위로 입력해주세요.',
  },
}
//갯수
export const COUNT_RULE = {
  required: '필수 입력 항목입니다.',
  min: {
    value: 1,
    message: '최소 1개 이상 입력해주세요.',
  },
  max: {
    value: 10000,
    message: '최대 10,000개 까지 입력 가능합니다.',
  },
}

// 퍼센트
export const PER_RULE = {
  required: '퍼센티지를 입력해주세요.',
  min: {
    value: 1,
    message: '최소 할인율은 1% 입니다.',
  },
  max: {
    value: 99,
    message: '최대 할인율은 99% 입니다.',
  },
  validate: {
    format: price => !isNaN(price) || '숫자를 입력해주세요.',
  },
}

// 개수
export const STOCK_RULE = {
  required: '개수를 입력해주세요.',
  min: {
    value: 0,
    message: '최소 개수는 0개 입니다.',
  },
  max: {
    value: 1_000_000_000,
    message: '0 이상, 10억 이하의 숫자로 입력해주세요.',
  },
  validate: {
    format: price => !isNaN(price) || '0 이상, 10억 이하의 숫자로 입력해주세요.',
  },
}

export const PRODUCT_STOCK_RULE = {
  required: '재고량을 입력해주세요.',
  min: {
    value: 0,
    message: '차감할 재고량이 아닌 최종 재고량을 입력해주세요.',
  },
  max: {
    value: 1_000_000_000,
    message: '재고량은 0 이상, 10억 이하의 숫자로 입력해주세요.',
  },
  validate: {
    format: stock => !isNaN(stock) || '0 이상, 10억 이하의 숫자로 입력해주세요.',
  },
}

export const PRODUCT_STOCK_INCREASE_RULE = {
  min: {
    value: 0,
    message: '재고량은 0 이상, 10억 이하의 숫자로 입력해주세요.',
  },
  max: {
    value: 1_000_000_000,
    message: '재고량은 0 이상, 10억 이하의 숫자로 입력해주세요.',
  },
  validate: {
    format: stock => !isNaN(stock) || '0 이상, 10억 이하의 숫자로 입력해주세요.',
  },
}

export const SHIPPING_STOCK_RULE = {
  max: {
    value: 1_000_000_000,
    message: '개수를 확인하세요',
  },
}

// 정가
export const PRODUCT_PRICE_RULE = {
  required: '상품의 정가를 입력해주세요.',
  max: {
    value: 1_000_000_000,
    message: '정가는 10억원 이내로 입력해주세요.',
  },
  validate: {
    format: price => {
      if (price === null || price === undefined || Number.isNaN(price)) return '상품의 정가를 입력해주세요.'
      if (price === 0) return true
      if (price > 0 && price < 10) return '최소 10원이상 입력해주세요.'
      return price <= 10 || price % 10 === 0 || '10원 단위로 입력해주세요.'
    },
  },
}

// 할인 - 정률
export const PRODUCT_DISCOUNT_PER_RULE = {
  required: '할인율을 입력해주세요.',
  min: {
    value: 1,
    message: '최소 1%, 최대 100% 이내로 입력해주세요.',
  },
  max: {
    value: 100,
    message: '최소 1%, 최대 100% 이내로 입력해주세요.',
  },
  validate: {
    format: price => {
      if (price === null || price === undefined || Number.isNaN(price)) return '할인율을 입력해주세요.'
    },
  },
}

// 할인 - 정액
export const PRODUCT_DISCOUNT_WON_RULE = {
  required: '할인액을 입력해주세요.',
  min: {
    value: 10,
    message: '최소 10원 이상 입력해주세요.',
  },
  max: {},
  validate: {
    format: price => {
      if (price === null || price === undefined || Number.isNaN(price)) return '할인액을 입력해주세요.'
      if (price > 0 && price < 10) return '최소 10원이상 입력해주세요.'
      return price <= 10 || price % 10 === 0 || '10원 단위로 입력해주세요.'
    },
  },
}

// 주문제한설정
export const PRODUCT_RESTRICTION = {
  min: {
    value: 0,
    // message: '최소 1개 이상 입력해주세요',
  },
  max: {
    value: MAX_INT,
    message: `${numberWithCommas(MAX_INT)}개 이상 입력할 수 없습니다.`,
  },
  // validate: {
  //   format: num => {
  //     if (num === null || num === undefined || Number.isNaN(num)) return '숫자만 입력이 가능합니다.'
  //   },
  // },
}

export const getRestrictionRule = (minNum, maxNum) => {
  let rule = {
    min: {
      value: 1,
      message: '최소 1개 이상 입력해주세요',
    },
    max: {
      value: MAX_INT,
      message: `${numberWithCommas(MAX_INT)}개 이상\n 입력할 수 없습니다.`,
    },
    validate: {
      format: num => {
        if (minNum === null && num > maxNum) {
          return `주문당 최소 구매수량은 주문당 \n 최대 구매수량보다 같거나 작아야합니다`
        }
        if (maxNum === null && num < minNum) {
          return `주문당 최대 구매수량은 주문당 \n최소 구매수량보다 같거나 커야합니다.`
        } else {
          if (num === null || num === undefined || Number.isNaN(num)) return '숫자만 입력이 가능합니다.'
        }
      },
    },
  }
  return rule
}

export const getProductPerRule = (requiredMsg, max) => {
  return {
    required: requiredMsg || false,
    min: {
      value: 1,
      message: '최소 1%, 최대 100% 이내로 입력해주세요.',
    },
    max: {
      value: max || 100,
      message: `최소 1%, 최대 ${max || 100}% 이내로 입력해주세요.`,
    },
    validate: {
      format: price => {
        if (price === null || price === undefined || Number.isNaN(price)) return requiredMsg
      },
    },
  }
}

export const DELIVERY_PRICE_RULE = {
  required: '배송비를 입력해주세요.',
  max: {
    value: 1_000_000_000,
    message: '배송비는 10억원 이내로 입력해주세요.',
  },
  validate: {
    format: price => {
      if (price === null || price === undefined || Number.isNaN(price)) return '배송비를 입력해주세요.'
      if (price === 0) return true
      if (price > 0 && price < 10) return '최소 10원이상 입력해주세요.'
      return price <= 10 || price % 10 === 0 || '10원 단위로 입력해주세요.'
    },
  },
}
