import { GitHubCalendar } from "react-github-calendar";
import { selectLastHalfYear } from "../../../utils/selectLastHalfYear";

interface Props {
  totalCountLabel: string;
  errorMessage: string;
}

export default function GithubActivity({
  totalCountLabel,
  errorMessage,
}: Props) {
  return (
    <GitHubCalendar
      username="JacobsM14"
      transformData={selectLastHalfYear}
      showColorLegend={false}
      labels={{ totalCount: totalCountLabel }}
      errorMessage={errorMessage}
    />
  );
}
