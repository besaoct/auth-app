import { getServerSession } from "next-auth/next"

import {Options} from "../api/auth/[...nextauth]/authOptions";
import prisma from "@/lib/prismadb";

export async function getSession() {
  return await getServerSession(Options)
}

export default async function getAdmin() {
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

    return {
      ...thisAdmin,
      createdAt: thisAdmin.createdAt.toISOString(),
    };
  } catch (error: any) {
    return null;
  }
}



