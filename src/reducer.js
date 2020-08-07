export const initialState = {
    user: null,
    playlists: [],
    playing: false, 
    item: null, 
    //token: 'BQBpVx6zgW1yLBW8ZpKrMVb2pTHMrl0l2AvXfRUjxSHP25I2lWH-3TcijzRFSsJ6um-uWBs8w2--uXF8-n3_puu7d4tBAfeWr5isCruGw8R8XAf4Fcff_h4IefTYA7b2QTKwRqoQ1k4SR6QxiWg6ikMbWA1VS1AgtrWkHF2wh3_NbgB5rHxH'
};

const reducer = (state, action) => {
    console.log(action);

    //action -> type, [payload]
    switch(action.type){
        case 'SET_USER':   
        return{
            ...state,
            user: action.user,
        };
        
        case 'SET_TOKEN': 
        return {
            ...state,
            token: action.token,
        };

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default: 
        return state;
    }
}

export default reducer;