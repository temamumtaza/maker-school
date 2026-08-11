import { chapters, sourceAudit } from "../src/data/course";

const lessons = chapters.flatMap((chapter) => chapter.lessons);
const materials = chapters.flatMap((chapter) => chapter.materials);
const subchapterKeys = chapters.flatMap((chapter) => [...new Set([
  ...chapter.lessons.map((lesson) => lesson.subchapter?.trim() || "Materi utama"),
  ...chapter.materials.map((material) => material.subchapter?.trim() || "Materi utama"),
])].map((title) => `${chapter.id}:${title}`));

const assert = (condition: boolean, message: string): void => {
  if (!condition) throw new Error(message);
};

assert(chapters.length === 4, `Expected 4 chapters, found ${chapters.length}`);
assert(lessons.length === 234, `Expected 234 lessons, found ${lessons.length}`);
assert(materials.length === 237, `Expected 237 materials, found ${materials.length}`);
assert(new Set(chapters.map((chapter) => chapter.id)).size === chapters.length, "Chapter IDs are not unique");
assert(new Set(lessons.map((lesson) => lesson.id)).size === lessons.length, "Lesson IDs are not unique");
assert(new Set(materials.map((material) => material.id)).size === materials.length, "Material IDs are not unique");
assert(new Set(subchapterKeys).size === subchapterKeys.length, "Subchapter IDs are not unique");
assert(lessons.every((lesson) => lesson.videoUrl.startsWith("https://drive.google.com/")), "At least one lesson has an invalid Drive URL");
assert(materials.every((material) => /^https:\/\/(?:drive|docs)\.google\.com\//.test(material.url)), "At least one material has an invalid Google Drive URL");
assert(!materials.some((material) => material.url.includes("1ZzzLW958clQ_J6g3if2ER09b40ZMJr_1")), "Beyond The Horizon promotion leaked into materials");
assert(!JSON.stringify(chapters).match(/beyond[\s_-]*the[\s_-]*horizon|beyon[\s_-]*the[\s_-]*horizon/i), "Beyond The Horizon advertising text leaked into the course manifest");

console.log(JSON.stringify({
  chapters: chapters.length,
  subchapters: subchapterKeys.length,
  lessons: lessons.length,
  materials: materials.length,
  uniqueChapterIds: new Set(chapters.map((chapter) => chapter.id)).size,
  uniqueLessonIds: new Set(lessons.map((lesson) => lesson.id)).size,
  excludedFiles: sourceAudit.excludedFiles,
  status: "pass",
}, null, 2));
