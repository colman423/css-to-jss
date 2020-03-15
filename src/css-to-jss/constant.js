
export const NAMING_STYLE = {
  CAMEL_CASE: 'camelCase',
  PASCAL_CASE: 'PascalCase',
  SNAKE_CASE: 'snake_case',
  SNAKE_CASE_CAMEL: 'snake_Case',
  SNAKE_CASE_PASCAL: 'Snake_Case',
}

export const QUOTE = {
  NONE: 'none',
  SINGLE: "'single'",
  DOUBLE: '"double"'
}

export const defaultOptions = {
  selector: {
    style: NAMING_STYLE.PASCAL_CASE
  },
  minify: false,
  quote: QUOTE.NONE
}

export const defaultCssInput =
  `.some-class {
    margin-top: 40px;
    padding: 12px 16px;
  }
`

export const demoCssInput =
  `div {
  width: 850px;
  margin-top: 24px;
}

.div {
  height: 620vh;
  padding: 32px 48px 12px 48px;
  overflow-y: auto;
  width: 100%;
}

#div {
  font-size: 20px;
  color: #29354c;
  margin: 0 0 10px 0;
  height: 100px !important;
  width: 100 px;
}

@media all and (max-height: 700px) {
  .in-media-query {
      max-height: 450px;
  }
}

.animation {
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
`
