
import ImageSlideShow from "../components/ImageSlideShow";
import React from "react";
import ItemContent from "../components/ItemContent";
import { useParams } from "react-router-dom";

export default function ItemDetail() {
  // const {id} = useParams();
  // const [details, setDetails] = useState({});

  // useEffect(() => {
  //   Axios.get("/1")
  // }, [])

  return (
    <>
      {/* <p>{id}</p> */}
      <ImageSlideShow/>
      <ItemContent/>
    </>
  );
}
