import { FC } from "react";
import { Option } from "@/components/Option/Option";

interface OptionListProps {
  name: string[];
  onSelect: (genre: string) => void;
}

export const OptionList: FC<OptionListProps> = ({ name, onSelect }) => {
  return (
    <>
      {name.map((item) => (
        <Option string={item} onSelect={onSelect} />
      ))}
    </>
  );
};
