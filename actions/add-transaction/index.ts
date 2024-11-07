"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface AddTransactionInterface {
  name: string
  amount: number
  type: TransactionType
  category: TransactionCategory
  paymentMethod: TransactionPaymentMethod
  date: Date
}

export const addTransaction = async (params: AddTransactionInterface) => {
  addTransactionSchema.parse(params);

  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.create({
    data: { ...params, userId }
  });

  revalidatePath("/transaction")
}