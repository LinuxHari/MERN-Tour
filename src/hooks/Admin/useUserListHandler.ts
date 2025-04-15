import {useCallback, useState} from "react";
import toast from "react-hot-toast";
import {useDeleteUserMutation, useGetUsersQuery} from "../../redux/api/adminApi";
import useModal from "../Shared/useModal";
import {EmailSchema} from "../../schema/authSchema";

const useUserListHandler = () => {
  const tableHeaders = [
    "Name",
    "Email",
    "Country Code",
    "Phone Number",
    "Country",
    "State",
    "City",
    "Address",
    "Verified",
    "Created At",
    "Action",
  ];
  const [email, setEmail] = useState("");
  const [page, setPage] = useState(1);
  const [userDeletionEmail, setUserDeletionEmail] = useState("");
  const {data: users, isLoading, isError} = useGetUsersQuery({email, page});
  const [deleteSelectedUser, {isLoading: isDeletionLoading}] = useDeleteUserMutation();
  const {showModal, openModal, onClose} = useModal();

  const handlePage = useCallback((page: number) => setPage(page), []);

  const handleEmail = useCallback((email: string) => setEmail(email), []);

  const deleteUser = useCallback(async (email: string) => {
    const toastId = toast.loading("Deleting user...");
    const {error} = await deleteSelectedUser(email);

    if (error) return toast.error("Failed to delete user", {id: toastId});
    toast.success("User was deleted successfully!", {id: toastId});
    onClose();
  }, []);

  const handleDeletion = useCallback((email: string) => {
    const {success} = EmailSchema.shape.email.safeParse(email);

    if (!success) return toast.error("Invaild email", {id: "invalid-user-email"});
    setUserDeletionEmail(email);
    openModal();
  }, []);

  return {
    users,
    page,
    isLoading,
    isError,
    tableHeaders,
    setPage: handlePage,
    setEmail: handleEmail,
    showModal,
    closeModal: onClose,
    email: userDeletionEmail,
    handleDeletion,
    deleteUser,
    isDeletionLoading,
  };
};

export default useUserListHandler;
