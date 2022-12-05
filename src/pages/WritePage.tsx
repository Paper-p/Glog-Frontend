import { loggedAtom } from "Atoms";
import { useRecoilState } from "recoil";
import IsNotLogin from "components/IsNotLogin";
import Write from "../components/Write/Page";

export default function WritePage() {
  const [logged] = useRecoilState(loggedAtom);
  return logged ? <Write /> : <IsNotLogin />;
}
