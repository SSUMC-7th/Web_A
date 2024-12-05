import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import { CartItem } from "../const/cart_items";

interface ItemCardProps extends CartItem {
  onIncrement: () => void;
  onDecrement: () => void;
}

export function ItemCard({
  title,
  singer,
  amount,
  price,
  img,
  onIncrement,
  onDecrement,
}: ItemCardProps) {
  return (
    <div className="flex flex-row items-center gap-[2rem]">
      <img src={img} className="rounded-[0.75rem] w-[7.5rem] h-[7.5rem]" />
      <Card className="w-[40rem] h-[10rem]">
        <CardHeader>
          <CardTitle className="flex items-start">{title}</CardTitle>
          <CardDescription className="flex items-start">
            {singer}
          </CardDescription>
          <CardDescription className="flex items-start">
            {price}원
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end gap-[1rem]">
          <Button variant="outline" onClick={onDecrement}>
            <Minus />
          </Button>
          <Badge className="bg-blue-500 hover:bg-blue-700">{amount}</Badge>
          <Button
            className="bg-green-500 hover:bg-green-700"
            onClick={onIncrement}
          >
            <Plus />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
