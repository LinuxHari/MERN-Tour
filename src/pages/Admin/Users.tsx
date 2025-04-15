import {RenderProps} from "../../type";
import withAuth from "../../hocs/withAuth";
import Table from "../../components/Admin/Users/Table";
import useUserListHandler from "../../hooks/Admin/useUserListHandler";
import TableSkeleton from "../../components/Skeletons/TableSkeleton";
import NoResult from "../../components/Shared/NoResult/NoResult";
import Pagination from "../../components/Shared/Pagination/Pagination";
import AdminSearchForm from "../../components/Shared/Forms/AdminSearchForm";
import DeletionModal from "../../components/Admin/Users/DeletionModal";

const Users = ({render}: RenderProps) => {
  const {
    users,
    isLoading,
    isError,
    tableHeaders,
    page,
    setPage,
    setEmail,
    showModal,
    closeModal,
    deleteUser,
    email,
    handleDeletion,
    isDeletionLoading,
  } = useUserListHandler();

  if (isError || (!isLoading && !users))
    return <NoResult title="Something went wrong" description="Maybe try again later." />;

  return (
    <>
      {render("Users", "All Users")}
      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:mb-20 mt-60">
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <div className="d-flex flex-column">
            <div className="align-self-end">
              <AdminSearchForm onSearch={setEmail} placeholder="Search Email" />
            </div>
            <Table headers={tableHeaders} data={users?.users || []} handleDeletion={handleDeletion} />
          </div>
        )}
        <Pagination page={page} setPage={setPage} totalCount={users?.totalPages || 0} />
      </div>
      <DeletionModal
        showModal={showModal}
        onClose={closeModal}
        onConfirm={deleteUser}
        email={email}
        isDeleting={isDeletionLoading}
      />
    </>
  );
};

const AuthenticatedUsers = withAuth(Users);

export default AuthenticatedUsers;
