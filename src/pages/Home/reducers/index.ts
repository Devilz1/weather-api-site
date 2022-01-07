const initialState = {
    titleHeader: '',
    titleFooter: '',
    description: '',
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
        default:
            return state;
    }
};
