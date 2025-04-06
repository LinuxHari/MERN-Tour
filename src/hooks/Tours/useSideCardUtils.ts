import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useGetAvailabilityQuery} from "../../redux/api/baseApi";
import {LoginSchemaType} from "../../schema/authSchema";
import {TourSchemaType} from "../../schema/tourSchema";
import {CURRENCIES} from "../../data";
import {PaxProps} from "../../type";
import useAuthHandler from "../Users/useAuthHandler";
import useModal from "../Shared/useModal";
import useUserHandler from "../Users/useUserHandler";
import useAfterEffect from "../Shared/useAfterEffect";
import useLocalStorage from "../Shared/useLocalStorage";
import useBookingHandler from "./useBookingHandler";
import usePaxHandler from "./usePaxHandler";

type SideCardUtilsProps = {
  pax: PaxProps;
  price: TourSchemaType["price"];
  startDate: string;
  endDate: string;
  tourId: string;
};

const useSideCardUtils = ({pax, price, startDate, endDate, tourId}: SideCardUtilsProps) => {
  const {currentPax, setPax} = usePaxHandler(pax);
  const total = (() => {
    let totalAmount = currentPax.adults * price.adult;

    if (price?.teen) totalAmount += price.teen * currentPax.teens;
    if (price?.child) totalAmount += price.child * currentPax.children;
    if (price?.infant) totalAmount += price?.infant * currentPax.infants;

    return totalAmount;
  })();

  const totalPassengers = Object.values(currentPax).reduce((prev, curr) => prev + curr, 0);

  const navigate = useNavigate();
  const {isLoggedIn} = useUserHandler();
  const {showModal, onClose, openModal} = useModal();
  const {showModal: showErrorModal, onClose: onErrorClose, openModal: openErrorModal} = useModal();
  const {showModal: showAvailModal, onClose: onAvailClose, openModal: openAvailModal} = useModal();
  const {onLogin, isLoginLoading, isVerificationError} = useAuthHandler();
  const {reserve, isLoading} = useBookingHandler();
  const {data: availability, isError, isLoading: isAvailabilityLoading} = useGetAvailabilityQuery(tourId);
  const availableDates = availability?.map((data) => ({date: new Date(data.date), extraInfo: data.availableSeats}));
  const [currency] = useLocalStorage("currency", CURRENCIES[0].value);
  const isAvailable = (() => {
    if (!availability) return false;
    else {
      for (const detail of availability) {
        if (
          new Date(detail.date).toDateString() === new Date(startDate).toDateString() &&
          detail.availableSeats >= totalPassengers
        )
          return true;
      }

      return false;
    }
  })();

  const handleLogin = (data: LoginSchemaType) => {
    onClose();
    onLogin({skipRedirect: true, ...data});
  };

  const handleReserve = () => {
    if (!isLoggedIn) openModal();
    else if (!isAvailable) openAvailModal();
    else {
      const paxToSend = {...currentPax};

      Object.keys(paxToSend).forEach((key) => {
        if (!paxToSend[key as keyof PaxProps]) delete paxToSend[key as keyof PaxProps];
      });
      reserve({startDate, endDate, pax: paxToSend, tourId, onError: openAvailModal, currency: currency as string});
    }
  };

  const goBack = () => navigate(-1);

  useEffect(() => {
    if (isError) openErrorModal();
  }, [isError]);

  useAfterEffect(() => {
    if (!isAvailable) openAvailModal();
  }, [isAvailable]);

  return {
    currentPax,
    isLoggedIn,
    onClose,
    total,
    setPax,
    isLoading,
    isError,
    availableDates,
    isAvailabilityLoading,
    handleLogin,
    handleReserve,
    showModal,
    isLoginLoading,
    showErrorModal,
    onErrorClose,
    goBack,
    isAvailable,
    showAvailModal,
    onAvailClose,
    openAvailModal,
    isVerificationError,
  };
};

export default useSideCardUtils;
