import data from "../data";

export const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_PICTURE': {
            const pictures = state.pictures;
            const userArray = pictures.filter(item => item.id !== action.payload)
            return {...state, pictures: userArray};
        }
        case "FILTER_PICTURE" : {
            const pictures = state.pictures
            const clickedFilter = action.payload
            const filteredPictures = []
            const filterAction = (clickedFilter,pictures) => {
                if(clickedFilter.toLowerCase() === 'all'){
                    const enterData = filteredPictures.push(pictures)
                    return pictures
                }
                else {
                    const filteredData = pictures.filter(item => item.category.toLowerCase().trim() ===  clickedFilter.toLowerCase().trim()) ;
                    return filteredPictures.push(filteredData)
                }
            }
            filterAction(clickedFilter,pictures)

            
            return {...state.pictures, filteredPictures }
        }
        default:
            return state;
    }
    
}