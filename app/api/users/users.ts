import prisma from "@/lib/prisma";

export interface ICreateUserParams {
  name: string;
  email: string;
}
export const UserApi = {
  getUsers: async () => {
    try {
      const users = await prisma.user.findMany();

      return users;
    } catch {
      throw new Error("Error BAD");
    }
  },

  createUser: async (props: ICreateUserParams) => {
    try {
      console.log('createUser props', props)
      const users = await prisma.user.create({
        data: {
          name: props.name,
          email: props.email,
        },
      });


      return users;
    } catch {
      throw new Error("Error BAD");
    }
  },
};
