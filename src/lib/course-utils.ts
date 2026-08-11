import type { Chapter, Lesson, Material } from "../data/course";
import type { ProgressState } from "./progress";

export type ChapterSubchapter = {
  id: string;
  title: string;
  lessons: Lesson[];
  materials: Material[];
};

export function flattenLessons(chapters: Chapter[]): Lesson[] {
  return chapters.flatMap((chapter) => chapter.lessons);
}

export function flattenMaterials(chapters: Chapter[]): Material[] {
  return chapters.flatMap((chapter) => chapter.materials);
}

function slugifySubchapter(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Reconstruct the Drive directory level that sits between a chapter and its files.
 * The manifest keeps the source folder name on each item, so the UI can expose
 * the actual Drive structure without duplicating or hand-maintaining groups.
 */
export function getChapterSubchapters(chapter: Chapter): ChapterSubchapter[] {
  const groups = new Map<string, ChapterSubchapter>();
  const ensureGroup = (sourceName?: string): ChapterSubchapter => {
    const title = sourceName?.trim() || "Materi utama";
    const existing = groups.get(title);
    if (existing) return existing;
    const group = {
      id: `${chapter.id}-subchapter-${slugifySubchapter(title) || "root"}`,
      title,
      lessons: [],
      materials: [],
    };
    groups.set(title, group);
    return group;
  };

  chapter.lessons.forEach((lesson) => ensureGroup(lesson.subchapter).lessons.push(lesson));
  chapter.materials.forEach((material) => ensureGroup(material.subchapter).materials.push(material));
  return [...groups.values()];
}

export function isLessonComplete(progress: ProgressState, lessonId: string): boolean {
  return progress.completedLessonIds.includes(lessonId);
}

export function getChapterProgress(chapter: Chapter, progress: ProgressState): number {
  return getLessonCollectionProgress(chapter.lessons, progress);
}

export function getSubchapterProgress(subchapter: ChapterSubchapter, progress: ProgressState): number {
  return getLessonCollectionProgress(subchapter.lessons, progress);
}

function getLessonCollectionProgress(lessons: Lesson[], progress: ProgressState): number {
  if (lessons.length === 0) return 0;
  const completed = lessons.filter((lesson) => isLessonComplete(progress, lesson.id)).length;
  return Math.round((completed / lessons.length) * 100);
}

export function getCourseProgress(chapters: Chapter[], progress: ProgressState): number {
  const lessons = flattenLessons(chapters);
  if (lessons.length === 0) return 0;
  const completed = lessons.filter((lesson) => isLessonComplete(progress, lesson.id)).length;
  return Math.round((completed / lessons.length) * 100);
}

export function formatChapterNumber(order: number): string {
  return String(order).padStart(2, "0");
}

export function getNextLesson(lessons: Lesson[], lessonId: string, direction: 1 | -1): Lesson | null {
  const index = lessons.findIndex((lesson) => lesson.id === lessonId);
  if (index === -1) return null;
  return lessons[index + direction] ?? null;
}

export function getDrivePreviewUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const fileId = parsed.pathname.match(/\/file\/d\/([^/]+)/)?.[1] ?? parsed.searchParams.get("id");
    return fileId ? `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview` : null;
  } catch {
    return null;
  }
}
