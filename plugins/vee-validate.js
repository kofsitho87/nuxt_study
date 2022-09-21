/* eslint-disable import/namespace */
// import Vue from 'vue'
// import VeeValidate from 'vee-validate'
import { configure, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules' // Available Rules에서 제공하는 모든 rule, 추천하지 않는 방식

import { messages } from 'vee-validate/dist/locale/ko.json'

// import moment from 'moment'

// rules setting
Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  })
})

extend('hangul_alpha_num', {
  validate: (value) => {
    const regex = /^[가-힣|aA-zZ|0-9|/\s/g]*$/.test(value)
    if (!regex) {
      return false
    } else {
      return true
    }
  },
  message: (_) => {
    return '올바른 한글, 영문, 숫자만 입력해주세요.'
  }
})

extend('hangul_alpha_num_link', {
  validate: (value) => {
    const regex = /^[가-힣|aA-zZ|0-9|/\s/g]*$/.test(value)
    if (!regex) {
      return false
    } else {
      return true
    }
  },
  message: (_) => {
    return '올바른 한글, 영문, 숫자만 입력해주세요.'
  }
})

// extend('date_format', {
//   validate: (value, format) => {
//     const isDateValid = moment(value, format, true).isValid()
//     return isDateValid
//   },
//   message: (v) => {
//     return `유효하지 않은 ${v}입니다.`
//   }
// })

// extend('search_date', {
//   params: ['min', 'max'],
//   validate: (value, { min, max }) => {
//     if (!min) {
//       return false
//     }

//     const isDateValid = moment(value, 'YYYY-MM-DD', true).isValid()
//     if (!isDateValid) {
//       return false
//     }

//     const isValid = new Date(min).getTime() <= new Date(max).getTime()

//     if (!isValid) {
//       if (value === max) {
//         return false
//       }
//     }

//     return true
//   },
//   message: (_) => {
//     // return `유효하지 않은 ${v}입니다.`
//     return '유효하지 않은 날짜 형식입니다.'
//   }
// })

// config setting
const config = {
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  },
  bails: true,
  skipOptional: true,
  mode: 'aggressive',
  useConstraintAttrs: true
}
configure(config)
