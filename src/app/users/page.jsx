import AddUserModal from "../components/AddUserModal";
import UsersTable from "../components/UsersTable";
import { deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <div>
      <h2>User Management</h2>
      <p>Users = {users.length}</p>
      <AddUserModal />
      <UsersTable users={users} deleteUserAction = {deleteUser} />
    </div>
  );
};

export default UsersPage;
