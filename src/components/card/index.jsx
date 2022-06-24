import React ,{useState}from "react";
import { CardWrapper,CardInner, CardBtn, CardImg} from "./style";
import { useContext } from "react";
import { Context } from "../../context/context";

const Card = () => {
    const {state,dispatch} = useContext(Context)
    const [visible, setVisible] = useState(5);
    const [showSeeMore, setShowSeeMore] = useState(true);
    const pictures = state.filteredPictures

   const handleLoadMore = () => {
        setVisible(visible + 5);
        const postsLength = pictures.length;
        const nowShowing = visible +5;
    if (postsLength <= nowShowing) {
      setShowSeeMore(false);
    }
  };

  const deleteItem = (id) => {
    dispatch({
      type:"DELETE_PICTURE",
      payload:id
    })
  }

  // const handleLoadMore = (pictures) => {
  //   dispatch({
  //     type:"FILTER_PICTURE",
  //     payload:pictures
  //   })
  // }
   
    return(
   <CardWrapper>
     {pictures &&
        pictures.slice(0, visible).map((item) => (
          <CardInner key={item.id}>
            <CardImg src={item.img}/>
            <CardBtn onClick={() => deleteItem(item.id)}>delete</CardBtn>
          </CardInner>
        ))}
      {showSeeMore && (
          <button onClick={handleLoadMore}>
            See More
          </button>
      )}
   </CardWrapper>
    )
}
export default Card