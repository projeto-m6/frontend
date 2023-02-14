import { MaterialUI } from "./style";

interface AvatarProps {
  username: string;
}

export const Avatar = ({ username }: AvatarProps) => {
  return (
    <MaterialUI>
      {username.split(" ").length > 1
        ? username.split(" ")[0][0] + username.split(" ")[1][0]
        : username.split(" ")[0][0]}
    </MaterialUI>
  );
};
