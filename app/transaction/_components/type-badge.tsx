import { Badge } from "@/components/ui/badge";
import { TransactionTypeBadgeInterface } from "@/types/TransactionTypeBadge";
import { TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeInterface) => {

  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="fill-primary mr-2" size={10} />
        Depósito
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger font-bold text-danger bg-opacity-10 hover:bg-muted">
        <CircleIcon className="fill-danger mr-2" size={10} />
        Despesa
      </Badge>
    );
  }

  if (transaction.type === TransactionType.INVESTIMENT) {
    return (
      <Badge className="bg-white font-bold text-white bg-opacity-10 hover:bg-muted">
        <CircleIcon className="fill-white mr-2" size={10} />
        Investimento
      </Badge>
    );
  }
};

export default TransactionTypeBadge;