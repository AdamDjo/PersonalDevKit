const cssProperties = new Map([
    ['fontFamily', 'font-family'],
    ['fontWeight', 'font-weight'],
    ['lineHeight', 'line-height'],
    ['fontSize', 'font-size'],
    ['letterSpacing', 'letter-spacing'],
    ['paragraphSpacing', 'paragraph-spacing'],
    ['paragraphIndent', 'paragraph-indent'],
    ['textCase', 'text-transform'],
    ['textDecoration', 'text-decoration'],
    ['textTransform', 'text-transform'],
]);

const cssFontValueMap = new Map([
    ['Regular', 'normal'],
    ['Semibold', '600'],
    ['SemiBold', '600'],
]);

const typesNeedUnit = ['borderWidth', 'borderRadius', 'spacing', 'lineHeights', 'fontSizes'];

const toBeSkipTemporary = ['paragraphIndent', 'paragraphSpacing'];
const needUnit = ['lineHeight', 'fontSize', ''];

module.exports = {
    cssProperties,
    cssFontValueMap,
    typesNeedUnit,
    toBeSkipTemporary,
    needUnit,
};
