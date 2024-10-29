import prisma from "@/lib/prisma";
import { UserApi } from "./api/users/users";
import { Button } from "./components/Button";
import NewPost from "./components/NewPost";

export default async function Home() {
  const users = await UserApi.getUsers();

  console.log("users", users);

  // await UserApi.createUser({'name': 'Leon3', email: 'test3@test.com'});

  return (
    <div>
      HOME
      <NewPost />
    </div>
  );
}
