const C_PLUS_FONT = 'Myui';
const HIND_FONT = 'Hind';

const formatFontValue = (value) => `"${value}"`;
const formatLetterSpacing = (value) =>
  value.includes('%') ? value.replace('%', '') : value;

const valueTypeToFormat = {
  fontFamilies: {
    formatter: formatFontValue,
  },
  fontFamily: {
    formatter: formatFontValue,
  },
  letterSpacing: {
    formatter: formatLetterSpacing,
  },
};

const formatValue = (type, value) =>
  valueTypeToFormat[type]?.formatter
    ? valueTypeToFormat[type].formatter(value)
    : value;

const screenVariables = ['xs', 'sm', 'md', 'lg', 'xlg', 'xxlg'];

const formatToCSSVar = ({ name, value }) =>
  screenVariables.includes(name) ? value : `var(--${name})`;

const sanitizeName = (rawName) => {
  const tokens = rawName.split('-');
  const removeOldAttributes = tokens[0] === 'old' ? tokens.slice(1) : tokens;
  // TODO update this part when the new token fix the "DIsplay" name
  return [...new Set(removeOldAttributes)]
    .join('-')
    .replaceAll('d-isplay', 'display');
};

const formatVariables = ({ dictionary, rules = [] }) => {
  return (
    dictionary?.allTokens
      .map((token) => {
        return rules
          .map(({ matcher, format }) => {
            if (matcher(token)) {
              return `${format(token)}: ${token.value};\n`;
            }
            return '';
          })
          .join('');
      })
      .join('') || ''
  );
};

const formatCssVariable = (name, value) => {
  return `  --${name}: ${value};\n`;
};

const getFontValuesFromTokenValue = (baseName, values) => {
  let variablesFromToken = '';
  const {
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    textTransform,
    textDecoration,
  } = values;
  if (fontFamily) {
    variablesFromToken =
      variablesFromToken +
      formatCssVariable(
        `${baseName}-font-family`,
        fontFamily
          .replace(C_PLUS_FONT, formatFontValue(C_PLUS_FONT))
          .replace(HIND_FONT, formatFontValue(HIND_FONT))
      );
  }
  if (fontSize) {
    variablesFromToken =
      variablesFromToken + formatCssVariable(`${baseName}-font-size`, fontSize);
  }
  if (fontWeight) {
    variablesFromToken =
      variablesFromToken +
      formatCssVariable(`${baseName}-font-weight`, fontWeight);
  }
  if (letterSpacing) {
    variablesFromToken =
      variablesFromToken +
      formatCssVariable(
        `${baseName}-letter-spacing`,
        formatLetterSpacing(letterSpacing)
      );
  }
  if (lineHeight) {
    variablesFromToken =
      variablesFromToken +
      formatCssVariable(`${baseName}-line-height`, lineHeight);
  }
  if (textTransform) {
    variablesFromToken =
      variablesFromToken +
      formatCssVariable(`${baseName}-text-transform`, textTransform);
  }
  if (textDecoration) {
    variablesFromToken =
      variablesFromToken +
      formatCssVariable(`${baseName}-text-decoration`, textDecoration);
  }
  return variablesFromToken;
};

const formatFontVariables = ({ dictionary }) => {
  return (
    dictionary?.allTokens
      .map((token) => {
        // TODO update this part when the new token fix the "DIsplay" name
        const baseName = `${token.name.replaceAll('d-isplay', 'display')}`;
        return getFontValuesFromTokenValue(baseName, token.value);
      })
      .join('') || ''
  );
};

module.exports = {
  valueTypeToFormat,
  formatToCSSVar,
  sanitizeName,
  formatValue,
  formatVariables,
  formatFontVariables,
};
