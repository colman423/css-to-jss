import cssParser from 'css';
import { QUOTE, NAMING_STYLE } from './constant';

//
// reference
// https://github.com/staxmanade/CssToReact/
//


function shouldFirstUp(style) {
  return (
    style === NAMING_STYLE.PASCAL_CASE ||
    style === NAMING_STYLE.SNAKE_CASE_PASCAL
  )
}
function shouldFirstDown(style) {
  return (
    style === NAMING_STYLE.CAMEL_CASE ||
    style === NAMING_STYLE.SNAKE_CASE ||
    style === NAMING_STYLE.SNAKE_CASE_CAMEL
  )
}
function isSnakeCase(style) {
  return (
    style === NAMING_STYLE.SNAKE_CASE ||
    style === NAMING_STYLE.SNAKE_CASE_PASCAL ||
    style === NAMING_STYLE.SNAKE_CASE_CAMEL
  )
}


function transformRules(rules, options, result) {
  // console.log("transformRules", rules, options)
  rules.forEach(function (rule) {
    var singleRuleResult = {};
    if (rule.type === 'media') {
      var mediaName = convertMediaName(rule.media);
      var media = result[mediaName] = result[mediaName] || {};
      transformRules(rule.rules, options, media)
    } else if (rule.type === 'rule') {
      rule.declarations.forEach(function (declaration) {
        if (declaration.type === 'declaration') {
          var key = convertKey(declaration.property, options);
          var value = convertValue(declaration.value, options);
          singleRuleResult[key] = value;
        }
      });
      rule.selectors.forEach(function (originSelector) {
        var selector = convertSelector(originSelector.trim(), options);
        pushIntoResult(result, selector, singleRuleResult, options)
      });
    }
  });


}

function pushIntoResult(result, key, value, options) {
  if (result[key]) {
    return pushIntoResult(result, convertSelector(key + "-next", options), value, options)
  }
  else {
    result[key] = value;
    return result;
  }

}

function convertValue(value) {
  // console.log("convertValue", value)

  // convert '12px' to 12
  if (value.match(/^-?\d*\.?\d* *px$/g)) {
    value = value.replace(/^(.*) *px$/g, "$1")
    value = parseFloat(value)
  }
  return value
}

function convertKey(name) {
  // console.log("convertKey", name)

  // turn things like 'align-items' into 'alignItems'
  name = name.replace(/(-.)/g, function (v) { return v[1].toUpperCase(); })

  return name;
}

function convertMediaName(name) {
  // console.log("mediaNameGenerator", name)
  return '@media ' + name;
};

function convertSelector(name, options) {
  // console.log("convertSelector", name, options)
  name = name.replace(/\s\s+/g, ' ');

  if (!isSnakeCase(options.selector.style)) {
    name = name.replace(/(-.)/g, function (v) { return v[1].toUpperCase(); })
  }
  else if (options.selector.style === NAMING_STYLE.SNAKE_CASE) {
  }
  else {
    name = name.replace(/(-.)/g, function (v) { return "_" + v[1].toUpperCase(); })
  }

  name = name.replace(/[^a-zA-Z0-9]/g, '_');
  name = name.replace(/^_+/g, '');
  name = name.replace(/_+$/g, '');

  if (shouldFirstUp(options.selector.style)) {
    // console.log("shouldFirstUp", name)
    name = name.replace(/^[a-z]/g, v => v[0].toUpperCase())
  }
  else if (shouldFirstDown(options.selector.style)) {
    name = name.replace(/^[A-Z]/g, v => v[0].toLowerCase())
  }
  // console.log("convertSelector", name)

  return name;
};


function stringify(obj, options) {
  let space = options.minify ? 0 : 2
  let result = JSON.stringify(obj, null, space);
  // console.log("stringify", obj, options, space, result)
  if (options.quote === QUOTE.SINGLE) {
    result = result.replace(/"([^"]+)":/g, "'$1':");
  }
  else if (options.quote === QUOTE.NONE) {
    // console.log("stringify2", result)
    result = result.replace(/"([^"]+)":/g, "$1:");
  }

  return result


}


export function transform(inputCssText, options) {
  return new Promise((res, rej) => {

    if (!inputCssText) {
      res("")
    }

    // If the input "css" doesn't wrap it with a css class (raw styles)
    // we need to wrap it with a style so the css parser doesn't choke.
    var wrapclass = false;
    if (inputCssText.indexOf("{") === -1) {
      wrapclass = true;
      inputCssText = `.wrapclass { ${inputCssText} }`;
    }

    var css = cssParser.parse(inputCssText);
    var result = {};
    transformRules(css.stylesheet.rules, options, result);
    // console.log("result1.1", result)

    // Don't expose the implementation detail of our wrapped css class.
    if (wrapclass) {
      result = Object.values(result)[0]
    }
    // console.log("result1.2", result)

    result = stringify(result, options)

    // console.log("result2", result)
    res(result)
  })

}
