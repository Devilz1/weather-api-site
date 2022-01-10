const initialState = {
    titleHeader: '',
    titleFooter: '',
    description: '',
    color: 'primary',
};

export const homeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_TITLE':
            return {
                ...state,
                titleHeader: 'Wow check',
                titleFooter: 'The End',
            };
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: 'Description',
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.colorName,
            };
        default:
            return state;
    }
};
