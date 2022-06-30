// import axios from "axios";
// import { GET_MAP_INFO } from "../types/types";

// export const getMapInfo = () => (dispatch) => {
//   axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=dc6c0581466d44edf93dc66d053163f9`).then((res) => {
//     const newData = res.data.map((post) => ({ ...post, likes: 0 }));
//     dispatch({ type: GET_MAP_INFO, payload: newData });
//   });
// };
