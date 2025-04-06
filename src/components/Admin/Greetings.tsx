import useUserHandler from "../../hooks/Users/useUserHandler";
import MiniSkeleton from "../Skeletons/MiniSkeleton";

const Greetings = () => {
  const {user, isLoading} = useUserHandler();

  const greetingText = (() => {
    const hour = new Date().getHours();

    if (hour < 5) return "Good Night";
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    if (hour < 21) return "Good Evening";

    return "Good Night";
  })();

  return (
    <>
      {user ? (
        <div className="d-flex flex-column align-items-start">
          <span className="text-13 text-light-2">{greetingText},</span>
          {isLoading ? (
            <MiniSkeleton />
          ) : (
            <h1 className="text-20">
              {user?.firstName} {user?.lastName}
            </h1>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Greetings;
