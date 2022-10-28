import { loggedAtom } from "atoms";
import { useRecoilState } from "recoil";
import IsNotLogin from "components/IsNotLogin";
import Write from "../../src/components/Write";

export default function WritePage() {
  const [logged] = useRecoilState(loggedAtom);
  return logged ? <Write /> : <IsNotLogin />;
}
