import classes from "@/components/auth/UserButton.module.css";

import { User } from "next-auth";
import { UserRound } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserButton({ user }: { user: User }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className={classes["user-intro"]}>
          <UserRound />
          <p>{user.name}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={classes.content}>
        <DropdownMenuLabel className={classes.label}>
          User Settings
        </DropdownMenuLabel>
        <DropdownMenuSeparator className={classes.separator} />
        <DropdownMenuItem className={classes.item}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
