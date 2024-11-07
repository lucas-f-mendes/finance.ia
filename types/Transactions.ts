import { Transaction, TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";

export interface TransactionTypeBadgeInterface {
  transaction: Transaction
}

export interface TransactionCategoryLabelsInterface {
  EDUCATION: string,
  ENTERTAINMENT: string,
  FOOD: string,
  HEALTH: string,
  HOUSING: string,
  OTHER: string,
  SALARY: string,
  TRANSPORTATION: string,
  UTILITY: string
}

export interface TransactionPaymentMethodLabelsInterface {
  BANK_TRANSFER: string,
  BANK_SLIP: string,
  CASH: string,
  CREDIT_CARD: string,
  DEBIT_CARD: string,
  OTHER: string,
  PIX: string
};

export interface TransactionPaymentMethodOptionsInterface {
  value: TransactionPaymentMethod,
  label: string
};

export interface TransactionTypeOptionsInterface {
  value: TransactionType,
  label: string
}

export interface TransactionCategoryOptionsInterface {
  value: TransactionCategory,
  label: string
};