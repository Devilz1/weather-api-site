export const setTitleAction = () => ({
    type: 'SET_TITLE',
});

export const setDescriptionAction = () => ({
    type: 'SET_DESCRIPTION',
});

export const setColorAction = (colorName: string) => ({
    type: 'SET_COLOR',
    colorName,
});
