const movieState = [];

const movieReducer = (state = movieState, action) => {
    switch (action.type) {
        case "MOVIE":
            return action.movie;
        default:
            return state;
    }
}

export default movieReducer; 