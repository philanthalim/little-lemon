import { useReducer } from "react";
import { fetchAPI } from "../bookingsAPI";
import ReservationForm from "../Components/ReservationForm";

function Reservation() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      {/* <Heading /> */}
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}

export default Reservation;
