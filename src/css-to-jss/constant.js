
export const NAMING_STYLE = {
  CAMEL_CASE: 'camelCase',
  PASCAL_CASE: 'PascalCase',
  SNAKE_CASE: 'snake_case',
  SNAKE_CASE_CAMEL: 'snake_Case',
  SNAKE_CASE_PASCAL: 'Snake_Case',
  KEBEB_CASE: 'kebeb-case'
}

export const QUOTE = {
  NONE: 'none',
  SINGLE: 'SINGLE',
  DOUBLE: 'DOUBLE'
}

export const defaultOptions = {
  selector: {
    style: NAMING_STYLE.CAMEL_CASE
  },
  minify: false,
  quote: QUOTE.NONE
}
