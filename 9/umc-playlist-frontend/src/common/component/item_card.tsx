import { CartItem } from "@/common/const/cart_items";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ItemCard({ title, singer, amount, price, img }: CartItem) {
  return (
    <div className="flex flex-row ">
      <img src={img} className="w-[10rem] h-[10rem]" />
      <Card className="w-[40rem] h-[10rem]">
        <CardHeader className="flex item-start flex-col justify-start">
          <CardTitle>
            {title} - {singer}
          </CardTitle>
          <CardDescription>{price}원</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
