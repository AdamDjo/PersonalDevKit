const isTypography = ({ $type, path }) => $type === 'typography' && path.includes('Desktop') && (path.includes('Brand') || path.includes('System - Hind'));
const isTextColor = ({ $type, path }) =>
    $type === 'color' && path[0] === 'Theme' && path[1] === 'text';
const isBorderColor = ({ $type, path }) =>
    $type === 'color' && path[0] === 'Theme' && path[1] === 'border';
const isBackgroundColor = ({ $type, path }) =>
    $type === 'color' && path[0] === 'Theme' && path[1] === 'background';
const isBrandColor = ({ $type, path }) =>
    $type === 'color' && path[0] === 'Theme' && path[1] === 'brand';
const isIconColor = ({ $type, path }) =>
    $type === 'color' && path[0] === 'Theme' && path[1] === 'icon';
const isLinkColor = ({ $type, path }) =>
    $type === 'color' && path[0] === 'Theme' && path[1] === 'link';
const isSurfaceColor = ({ $type, path }) =>
    $type === 'color' && path[0] === 'Theme' && path[1] === 'surface';
const isGlobalColor = ({ $type, path }) =>
    $type === 'color' && path[0] === 'Global' && path[1] === 'palette';
const isOnlyWebAssets = ({ path }) => !path.includes('tv');
const isDefaultTheme = ({ name }) => !name.includes('-alt');

module.exports = {
    isTypography,
    isOnlyWebAssets,
    isDefaultTheme,
    isTextColor,
    isBorderColor,
    isBackgroundColor,
    isBrandColor,
    isIconColor,
    isLinkColor,
    isSurfaceColor,
    isGlobalColor,
};
