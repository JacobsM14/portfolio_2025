import { useEffect, useState } from "react";
import { ActivityCalendar, type Activity } from "react-activity-calendar";
import { selectLastHalfYear } from "../../../utils/selectLastHalfYear";
import CalendarPlaceholder from "./CalendarPlaceholder";
import FrogLoader from "./FrogLoader";

const USERNAME = "JacobsM14";
const PROFILE_URL = `https://github.com/${USERNAME}`;
const API_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;

const purpleTheme = {
  light: ["#ebedf0", "#ddd6fe", "#a78bfa", "#7c3aed", "#5b21b6"],
  dark: ["#18181b", "#2e1065", "#5b21b6", "#7c3aed", "#a78bfa"],
};

type State =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; activities: Activity[] };

interface Props {
  totalCountLabel: string;
  loadingLabel: string;
  errorMessage: string;
}

export default function GithubActivity({
  totalCountLabel,
  loadingLabel,
  errorMessage,
}: Props) {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    fetch(API_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<{ contributions: Activity[] }>;
      })
      .then(({ contributions }) => {
        const activities = selectLastHalfYear(contributions);
        setState(
          activities.length > 0
            ? { status: "ready", activities }
            : { status: "error" },
        );
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === "AbortError") return;
        setState({ status: "error" });
      });

    return () => controller.abort();
  }, []);

  if (state.status === "loading") return <FrogLoader label={loadingLabel} />;
  if (state.status === "error") return <ActivityError message={errorMessage} />;

  return (
    <ActivityCalendar
      data={state.activities}
      theme={purpleTheme}
      maxLevel={4}
      showColorLegend={false}
      labels={{ totalCount: totalCountLabel }}
      className="[&_svg]:w-full [&_svg]:h-auto desktop:[&_svg]:max-h-[calc(100cqh-3rem)]"
    />
  );
}

function ActivityError({ message }: { message: string }) {
  return (
    <CalendarPlaceholder
      role="alert"
      footer={
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow leading-5.25 text-primary-light hover:text-white transition-colors"
        >
          github.com/{USERNAME} ↗
        </a>
      }
    >
      <div className="flex items-center justify-center size-10 rounded-full bg-primary/15 text-primary-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      </div>
      <p className="text-gray-light max-w-xs text-balance">{message}</p>
    </CalendarPlaceholder>
  );
}
