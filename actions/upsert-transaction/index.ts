"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { UpsertTransactionInterface } from "@/types/Transactions";

export const upsertTransaction = async (params: UpsertTransactionInterface) => {
  upsertTransactionSchema.parse(params);

  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.upsert({
    where: {
      id: params.id ?? -1
    },
    update: { ...params, userId },
    create: { ...params, userId }
  });

  revalidatePath("/transaction")
}