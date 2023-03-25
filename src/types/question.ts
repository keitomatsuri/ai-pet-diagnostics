import { Option } from "./option";

export interface Question {
  id: string;
  text: string;
  options: Option[];
}
