const { toBeSkipTemporary, cssFontValueMap, cssProperties } = require('./constants.cjs');
const { isOnlyWebAssets, isDefaultTheme } = require('./filters.cjs');
const { sanitizeName, formatValue, formatToCSSVar, fixVariablesName } = require('./formatter.cjs');

const fontPropertyFormatter = (key, tokenValue) => {
    const propertyValue = cssFontValueMap.has(tokenValue[key])
        ? cssFontValueMap.get(tokenValue[key])
        : tokenValue[key];
    const formattedValue = formatValue(key, propertyValue);
    return `${cssProperties.get(key)}: ${formattedValue}` + `; \n`;
};

const fontTransformer = ({ allTokens }) => {
    return allTokens
        .map(({ name, value }) => {
            const str = Object.keys(value)
                .filter((key) => !toBeSkipTemporary.includes(key))
                .map((key) => fontPropertyFormatter(key, value))
                .join('');
            return `@mixin ${sanitizeName(name)} { ${str} }`;
        })
        .join('\n');
};

const variableTransformer = ({ allTokens }) => {
    return allTokens
        .filter(isOnlyWebAssets)
        .filter(isDefaultTheme)
        .map(({ name, value }) => {
            const formattedValue = formatToCSSVar({ name, value });
            return `$${name}: ${formattedValue};`;
        })
        .join('\n');
};

module.exports = {
    fontTransformer,
    variableTransformer,
};
