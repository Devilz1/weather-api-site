const initialState = {
    title: '',
    description: '',
};

export const homeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_TITLE':
            return {
                ...state,
                title: 'Wow check',
            };
        default:
            return state;
    }
};
