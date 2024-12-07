import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export default function DropdownMenu() {
  return (
    <div>
      <Link to="/" className={navigationMenuTriggerStyle()}>
        now-playing
      </Link>
      <Link to="/" className={navigationMenuTriggerStyle()}>
        popular
      </Link>
      <Link to="/" className={navigationMenuTriggerStyle()}>
        top-rated
      </Link>
      <Link to="/" className={navigationMenuTriggerStyle()}>
        release
      </Link>
    </div>
  );
}
