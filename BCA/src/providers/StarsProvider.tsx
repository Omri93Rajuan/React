import React, { useState } from "react";

interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}
interface Props {
  children: React.ReactNode;
}

interface StarsProps {
  stars: User[];
  setStars: React.Dispatch<React.SetStateAction<User[]>>;
}
export const starsContext = React.createContext<StarsProps>({
  stars: [],
  setStars: () => {},
});

export default function StarsProvider({ children }: Props) {
  const [stars, setStars] = useState<User[]>([]);

  return (
    <>
      <starsContext.Provider value={{ stars, setStars }}>
        {children}
      </starsContext.Provider>
    </>
  );
}
