import UsersTable from "../components/UsersTable";
import { getUsers } from "../lib/data";

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <div>
      <h2>User Management</h2>
      <p>Users = {users.length}</p>
      <UsersTable users={users} />
    </div>
  );
};

export default UsersPage;
