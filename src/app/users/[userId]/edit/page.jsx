import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";

const UserEditPage = async ({ params }) => {
  console.log(params);
  const { userId } = await params;
  console.log(userId);
  const user = await getUserById(userId);

  const updateUserWrapper = async (formData) => {
    "use server";
    return updateUser(userId, formData);
  };
  return (
    <div>
      <h2>User Edit: </h2>
      <div>
        <form action={updateUserWrapper} className="flex flex-col gap-4">
          <TextField
            className="w-full"
            name="name"
            defaultValue={user?.name}
            type="text"
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            className="w-full"
            defaultValue={user?.email}
            name="email"
            type="email"
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            className="w-full"
            defaultValue={user?.role}
            name="role"
            type="text"
          >
            <Label>Role</Label>
            <Input placeholder="Enter your role" />
          </TextField>
          <div className="flex gap-5">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Update User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditPage;
