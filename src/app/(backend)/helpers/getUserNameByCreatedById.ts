import prisma from "@/lib/prismadb";
import { getSession } from "./getCurrentUser";

export async function getUserNameByCreatedById(createdById: string): Promise<string> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: createdById,
      },
      select: {
        name: true,
      },
    });
    if (!user?.name) return 'Anonymous';
    const nameParts = user.name;
    return nameParts
  } catch (error: any) {
    throw new Error(error);
  }
}


export async function getAllUsers() {
try {

  const session = await getSession();

  if (!session?.user?.email) {
    return null;
  }

  const thisAdmin = await prisma.user.findUnique({
    where: {
      email: "admin@gmail.com",
    }
  });

  if (!thisAdmin) {
    return null;
  }


  const allUsers = await prisma.user.findMany({
    select:{
      name:true,
      email:true
    }

  })

  const safeUsers = allUsers.map((user) => ({
    ...user
  }));

  return safeUsers;
  
} catch (error) {
  return null
}
  
}