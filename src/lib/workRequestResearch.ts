export interface WorkRequestInput {
  title?: string;
  description?: string;
  labels?: string[];
}

const normalizeValue = (value?: string): string | null => {
  if (!value) return null;

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

export const buildWorkRequestQuery = (workRequest: WorkRequestInput): string => {
  const labels = (workRequest.labels ?? [])
    .map((label) => normalizeValue(label))
    .filter((label): label is string => Boolean(label));

  const segments = [
    normalizeValue(workRequest.title),
    normalizeValue(workRequest.description),
    ...labels,
  ].filter((segment): segment is string => Boolean(segment));

  if (segments.length === 0) {
    return "wedlock wizard marriage license requirements";
  }

  return [...new Set(segments)].join(" ");
};

export const getWorkRequestResearchUrl = (workRequest: WorkRequestInput): string => {
  const query = buildWorkRequestQuery(workRequest);
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
};

export const openWorkRequestResearch = (workRequest: WorkRequestInput): void => {
  window.open(getWorkRequestResearchUrl(workRequest), "_blank");
};
