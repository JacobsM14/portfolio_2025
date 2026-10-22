const SHOWN_MONTHS = 6;

const pad = (n) => String(n).padStart(2, "0");

// Keeps the current month and the previous (SHOWN_MONTHS - 1), also across a year boundary.
export function selectLastHalfYear(contributions, now = new Date()) {
  const first = new Date(
    now.getFullYear(),
    now.getMonth() - (SHOWN_MONTHS - 1),
    1,
  );
  const since = `${first.getFullYear()}-${pad(first.getMonth() + 1)}-01`;

  return contributions.filter((activity) => activity.date >= since);
}
