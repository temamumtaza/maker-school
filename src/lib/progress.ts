export type ProgressState = {
  completedLessonIds: string[];
  lastOpenedLessonId: string | null;
  updatedAt: string;
};

const STORAGE_KEY = "maker-school:progress:v1";

export const emptyProgress: ProgressState = {
  completedLessonIds: [],
  lastOpenedLessonId: null,
  updatedAt: new Date(0).toISOString(),
};

function isProgressState(value: unknown): value is ProgressState {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<ProgressState>;
  return (
    Array.isArray(candidate.completedLessonIds) &&
    candidate.completedLessonIds.every((id) => typeof id === "string") &&
    (candidate.lastOpenedLessonId === null || typeof candidate.lastOpenedLessonId === "string") &&
    typeof candidate.updatedAt === "string"
  );
}

export function readProgress(): ProgressState {
  if (typeof window === "undefined") return emptyProgress;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress;
    const parsed: unknown = JSON.parse(raw);
    return isProgressState(parsed) ? parsed : emptyProgress;
  } catch {
    return emptyProgress;
  }
}

export function saveProgress(progress: ProgressState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function setLessonComplete(progress: ProgressState, lessonId: string, complete: boolean): ProgressState {
  const completed = new Set(progress.completedLessonIds);
  if (complete) completed.add(lessonId);
  else completed.delete(lessonId);
  return {
    completedLessonIds: [...completed],
    lastOpenedLessonId: progress.lastOpenedLessonId,
    updatedAt: new Date().toISOString(),
  };
}

export function setLastOpened(progress: ProgressState, lessonId: string): ProgressState {
  return {
    ...progress,
    lastOpenedLessonId: lessonId,
    updatedAt: new Date().toISOString(),
  };
}

export function resetProgress(): ProgressState {
  return { ...emptyProgress, updatedAt: new Date().toISOString() };
}

export function serializeProgress(progress: ProgressState): string {
  return JSON.stringify({ version: 1, ...progress }, null, 2);
}

export function parseProgress(raw: string): ProgressState | null {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isProgressState(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}
