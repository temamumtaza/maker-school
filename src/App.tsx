import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Menu,
  Play,
  RotateCcw,
  Search,
  Settings2,
  SlidersHorizontal,
  Upload,
  X,
} from "lucide-react";
import {
  createContext,
  type KeyboardEvent as ReactKeyboardEvent,
  type FormEvent,
  type ChangeEvent,
  type CSSProperties,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  HashRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { chapters as courseChapters } from "./data/course";
import {
  flattenLessons,
  formatChapterNumber,
  getChapterSubchapters,
  getChapterProgress,
  getCourseProgress,
  getDrivePreviewUrl,
  getNextLesson,
  getSubchapterProgress,
  isLessonComplete,
} from "./lib/course-utils";
import {
  parseProgress,
  readProgress,
  resetProgress,
  saveProgress,
  serializeProgress,
  setLastOpened,
  setLessonComplete,
  type ProgressState,
} from "./lib/progress";
import type { Chapter, Lesson, Material } from "./data/course";

type LearningContextValue = {
  chapters: Chapter[];
  lessons: Lesson[];
  progress: ProgressState;
  courseProgress: number;
  toggleComplete: (lessonId: string) => void;
  openLesson: (lessonId: string) => void;
  replaceProgress: (next: ProgressState) => void;
  clearProgress: () => void;
};

const LearningContext = createContext<LearningContextValue | null>(null);

function useLearning(): LearningContextValue {
  const context = useContext(LearningContext);
  if (!context) throw new Error("useLearning must be used inside LearningContext");
  return context;
}

export function App() {
  const [progress, setProgress] = useState<ProgressState>(() => readProgress());
  const lessons = useMemo(() => flattenLessons(courseChapters), []);
  const courseProgress = getCourseProgress(courseChapters, progress);

  const replaceProgress = useCallback((next: ProgressState) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  const toggleComplete = useCallback(
    (lessonId: string) => {
      replaceProgress(setLessonComplete(progress, lessonId, !isLessonComplete(progress, lessonId)));
    },
    [progress, replaceProgress],
  );

  const openLesson = useCallback(
    (lessonId: string) => {
      if (progress.lastOpenedLessonId === lessonId) return;
      replaceProgress(setLastOpened(progress, lessonId));
    },
    [progress, replaceProgress],
  );

  const clearProgress = useCallback(() => replaceProgress(resetProgress()), [replaceProgress]);

  return (
    <LearningContext.Provider
      value={{
        chapters: courseChapters,
        lessons,
        progress,
        courseProgress,
        toggleComplete,
        openLesson,
        replaceProgress,
        clearProgress,
      }}
    >
      <HashRouter>
        <AppShell />
      </HashRouter>
    </LearningContext.Provider>
  );
}

function AppShell() {
  const { courseProgress, progress } = useLearning();
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLButtonElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const pageTitle = getPageTitle(location.pathname);

  useEffect(() => {
    if (!mobileNavOpen) return;
    mobileCloseRef.current?.focus();
    const dialog = document.getElementById("mobile-workspace-nav");
    const focusable = dialog ? [...dialog.querySelectorAll<HTMLElement>("button, a, input, select, [tabindex]:not([tabindex='-1'])")] : [];
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
        mobileMenuRef.current?.focus();
      }
      if (event.key === "Tab" && focusable.length > 1) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileNavOpen]);

  return (
    <div className="app-shell">
      <aside className="desktop-sidebar">
        <Sidebar progress={progress} courseProgress={courseProgress} />
      </aside>

      {mobileNavOpen && (
        <>
          <button className="mobile-scrim" aria-label="Tutup navigasi" onClick={() => setMobileNavOpen(false)} />
          <aside id="mobile-workspace-nav" className="mobile-sidebar" role="dialog" aria-modal="true" aria-label="Navigasi workspace">
            <div className="mobile-sidebar-header">
              <Brand />
              <button ref={mobileCloseRef} className="icon-button" aria-label="Tutup navigasi" onClick={() => { setMobileNavOpen(false); mobileMenuRef.current?.focus(); }}>
                <X size={19} />
              </button>
            </div>
            <SidebarNav onNavigate={() => setMobileNavOpen(false)} />
            <ProgressSummary progress={progress} courseProgress={courseProgress} />
          </aside>
        </>
      )}

      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <main id="main-content" className="app-main">
        <header className="topbar">
          <div className="topbar-heading">
            <button ref={mobileMenuRef} className="mobile-menu-button" aria-label="Buka navigasi" aria-expanded={mobileNavOpen} aria-controls="mobile-workspace-nav" onClick={() => setMobileNavOpen(true)}>
              <Menu size={20} />
            </button>
            <div>
              <span className="eyebrow">Learning workspace</span>
              <h1>{pageTitle}</h1>
            </div>
          </div>
          <GlobalSearch key={`${location.pathname}${location.search}`} />
        </header>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/course" element={<CourseIndexPage />} />
            <Route path="/bab/:chapterId" element={<ChapterPage />} />
            <Route path="/topik/:lessonId" element={<LessonPage />} />
            <Route path="/cari" element={<SearchPage />} />
            <Route path="/pengaturan" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function GlobalSearch() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(() => (
    location.pathname === "/cari" ? new URLSearchParams(location.search).get("q") ?? "" : ""
  ));

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = searchValue.trim();
    navigate(query ? `/cari?q=${encodeURIComponent(query)}` : "/cari");
  }

  function handleSearchKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Enter") return;
    event.preventDefault();
    event.currentTarget.form?.requestSubmit();
  }

  return (
    <form className="global-search" onSubmit={submitSearch} role="search">
      <Search size={17} aria-hidden="true" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={handleSearchKeyDown}
        placeholder="Cari bab atau topik"
        aria-label="Cari bab atau topik"
      />
      <kbd>/</kbd>
    </form>
  );
}

function Sidebar({
  progress,
  courseProgress,
}: {
  progress: ProgressState;
  courseProgress: number;
}) {
  return (
    <div className="sidebar-inner">
      <Brand />
      <SidebarNav />
      <ProgressSummary progress={progress} courseProgress={courseProgress} />
      <div className="sidebar-footer">
        <span>Maker School</span>
        <span>Private learning workspace</span>
      </div>
    </div>
  );
}

function Brand() {
  return (
    <Link className="brand" to="/">
      <span className="brand-mark"><GraduationCap size={20} /></span>
      <span>
        <strong>Maker School</strong>
        <small>Learning workspace</small>
      </span>
    </Link>
  );
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();
  return (
    <nav className="sidebar-nav" aria-label="Navigasi utama">
      <span className="nav-label">Workspace</span>
      <NavLink
        to="/"
        end
        className={({ isActive }) => `sidebar-link${isActive ? " is-active" : ""}`}
        onClick={onNavigate}
      >
        <LayoutDashboard size={18} />
        <span>Ringkasan</span>
      </NavLink>
      <span className="nav-label sidebar-section-label">Materi course</span>
      <SidebarCourseTree key={location.pathname} onNavigate={onNavigate} />
      <div className="sidebar-nav-secondary">
        <NavLink
          to="/pengaturan"
          className={({ isActive }) => `sidebar-link${isActive ? " is-active" : ""}`}
          onClick={onNavigate}
        >
          <Settings2 size={18} />
          <span>Pengaturan</span>
        </NavLink>
      </div>
    </nav>
  );
}

function SidebarCourseTree({ onNavigate }: { onNavigate?: () => void }) {
  const { chapters, lessons, progress, courseProgress } = useLearning();
  const location = useLocation();
  const activeLessonId = location.pathname.startsWith("/topik/") ? location.pathname.slice("/topik/".length) : null;
  const activeChapterId = location.pathname.startsWith("/bab/")
    ? location.pathname.slice("/bab/".length)
    : chapters.find((chapter) => chapter.lessons.some((lesson) => lesson.id === activeLessonId))?.id ?? null;
  const activeSubchapterId = activeLessonId
    ? chapters.flatMap((chapter) => getChapterSubchapters(chapter)).find((subchapter) => subchapter.lessons.some((lesson) => lesson.id === activeLessonId))?.id ?? null
    : null;
  const [treeOpen, setTreeOpen] = useState(true);
  const [expandedChapterIds, setExpandedChapterIds] = useState<Set<string>>(() => {
    const initialChapterId = activeChapterId ?? chapters[0]?.id;
    return initialChapterId ? new Set([initialChapterId]) : new Set();
  });
  const [expandedSubchapterIds, setExpandedSubchapterIds] = useState<Set<string>>(() => activeSubchapterId ? new Set([activeSubchapterId]) : new Set());
  const treeId = onNavigate ? "mobile-sidebar-course-tree-list" : "sidebar-course-tree-list";
  const completedLessons = lessons.filter((lesson) => isLessonComplete(progress, lesson.id)).length;

  function toggleChapter(chapterId: string) {
    setExpandedChapterIds((current) => {
      const next = new Set(current);
      if (next.has(chapterId)) next.delete(chapterId);
      else next.add(chapterId);
      return next;
    });
  }

  function toggleSubchapter(subchapterId: string) {
    setExpandedSubchapterIds((current) => {
      const next = new Set(current);
      if (next.has(subchapterId)) next.delete(subchapterId);
      else next.add(subchapterId);
      return next;
    });
  }

  function expandAll() {
    setExpandedChapterIds(new Set(chapters.map((chapter) => chapter.id)));
    setExpandedSubchapterIds(new Set(chapters.flatMap((chapter) => getChapterSubchapters(chapter).map((subchapter) => subchapter.id))));
  }

  function collapseAll() {
    setExpandedChapterIds(new Set());
    setExpandedSubchapterIds(new Set());
  }

  return (
    <div className="sidebar-course-tree">
      <div className="sidebar-course-root">
        <NavLink
          className={({ isActive }) => `sidebar-course-root-link${isActive ? " is-active" : ""}`}
          to="/course"
          onClick={onNavigate}
        >
          <BookOpen size={16} />
          <span className="sidebar-course-root-copy"><strong>Semua materi</strong><small>{chapters.length} bab · {lessons.length} topik</small></span>
          <span className="sidebar-course-root-progress">{courseProgress}%</span>
        </NavLink>
        <button
          className="sidebar-course-root-toggle"
          type="button"
          aria-label={treeOpen ? "Tutup daftar materi" : "Buka daftar materi"}
          aria-expanded={treeOpen}
          aria-controls={treeId}
          onClick={() => setTreeOpen((open) => !open)}
        >
          <ChevronDown size={15} />
        </button>
      </div>
      {treeOpen && (
        <div id={treeId} className="sidebar-tree-list">
          <div className="sidebar-tree-actions">
            <span>{completedLessons}/{lessons.length} selesai</span>
            <span>
              <button type="button" onClick={expandAll}>Buka semua</button>
              <button type="button" onClick={collapseAll}>Tutup semua</button>
            </span>
          </div>
          {chapters.map((chapter) => {
            const expanded = expandedChapterIds.has(chapter.id);
            const chapterProgress = getChapterProgress(chapter, progress);
            const completedInChapter = chapter.lessons.filter((lesson) => isLessonComplete(progress, lesson.id)).length;
            const subchapters = getChapterSubchapters(chapter).filter((subchapter) => subchapter.lessons.length > 0);
            return (
              <div className={`sidebar-tree-chapter${expanded ? " is-open" : ""}`} key={chapter.id}>
                <button
                  className="sidebar-tree-chapter-toggle"
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`${treeId}-${chapter.id}`}
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <span className={`sidebar-tree-chevron${expanded ? " is-open" : ""}`}><ChevronRight size={13} /></span>
                  <span className="sidebar-tree-chapter-order">{formatChapterNumber(chapter.order)}</span>
                  <span className="sidebar-tree-chapter-copy"><strong>{chapter.title}</strong><small>{completedInChapter}/{chapter.lessons.length} selesai · {subchapters.length} subbab</small></span>
                  <span className="sidebar-tree-chapter-progress">{chapterProgress}%</span>
                </button>
                {expanded && (
                  <div id={`${treeId}-${chapter.id}`} className="sidebar-tree-subchapters" role="group" aria-label={`Subbab dalam ${chapter.title}`}>
                    {subchapters.map((subchapter) => {
                      const subchapterExpanded = expandedSubchapterIds.has(subchapter.id);
                      const subchapterProgress = getSubchapterProgress(subchapter, progress);
                      const completedInSubchapter = subchapter.lessons.filter((lesson) => isLessonComplete(progress, lesson.id)).length;
                      return (
                        <div className={`sidebar-tree-subchapter${subchapterExpanded ? " is-open" : ""}`} key={subchapter.id}>
                          <button
                            className="sidebar-tree-subchapter-toggle"
                            type="button"
                            aria-expanded={subchapterExpanded}
                            aria-controls={`${treeId}-${subchapter.id}`}
                            onClick={() => toggleSubchapter(subchapter.id)}
                          >
                            <span className={`sidebar-tree-chevron${subchapterExpanded ? " is-open" : ""}`}><ChevronRight size={12} /></span>
                            <span className="sidebar-tree-subchapter-copy"><strong>{subchapter.title}</strong><small>{completedInSubchapter}/{subchapter.lessons.length} selesai</small></span>
                            <span className="sidebar-tree-subchapter-progress">{subchapterProgress}%</span>
                          </button>
                          {subchapterExpanded && (
                            <div id={`${treeId}-${subchapter.id}`} className="sidebar-tree-lessons" role="group" aria-label={`Topik dalam ${subchapter.title}`}>
                              {subchapter.lessons.map((lesson) => {
                                const complete = isLessonComplete(progress, lesson.id);
                                const active = activeLessonId === lesson.id;
                                return (
                                  <Link
                                    className={`sidebar-tree-lesson${complete ? " is-complete" : ""}${active ? " is-active" : ""}`}
                                    key={lesson.id}
                                    to={`/topik/${lesson.id}`}
                                    title={lesson.title}
                                    aria-current={active ? "page" : undefined}
                                    onClick={onNavigate}
                                  >
                                    <span className="sidebar-tree-lesson-status" aria-hidden="true">{complete ? <CheckCircle2 size={13} /> : <Circle size={13} />}</span>
                                    <span className="sidebar-tree-lesson-copy"><strong>{lesson.title}</strong><small>{complete ? "Selesai" : "Belum mulai"}</small></span>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ProgressSummary({ progress, courseProgress }: { progress: ProgressState; courseProgress: number }) {
  const completed = progress.completedLessonIds.length;
  return (
    <div className="sidebar-progress">
      <div className="sidebar-progress-top">
        <span>Progress course</span>
        <strong>{courseProgress}%</strong>
      </div>
      <ProgressBar value={courseProgress} />
      <span className="sidebar-progress-caption">{completed} topik selesai</span>
    </div>
  );
}

function DashboardPage() {
  const { chapters, lessons, progress, courseProgress } = useLearning();
  const completedCount = progress.completedLessonIds.length;
  const lastLesson = progress.lastOpenedLessonId ? lessons.find((lesson) => lesson.id === progress.lastOpenedLessonId) : null;
  const continueLesson = lastLesson && isLessonComplete(progress, lastLesson.id)
    ? getNextLesson(lessons, lastLesson.id, 1) ?? lastLesson
    : lastLesson ?? lessons[0];
  const activeChapter = chapters.find((chapter) => continueLesson?.chapterId === chapter.id);
  const nextChapter = chapters.find((chapter) => getChapterProgress(chapter, progress) < 100);

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Ritme belajar kamu</span>
          <h2>Bangun kemampuan creator, satu topik setiap kali.</h2>
          <p>
            Navigasi course dengan tenang, simpan progres di perangkatmu, dan selalu tahu langkah berikutnya.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" to={continueLesson ? `/topik/${continueLesson.id}` : "/course"}>
              {completedCount > 0 ? "Lanjutkan belajar" : "Mulai belajar"}
              <ArrowRight size={17} />
            </Link>
            <Link className="button button-ghost" to="/course">Lihat semua bab</Link>
          </div>
        </div>
        <div className="hero-progress" aria-label={`Progress course ${courseProgress}%`}>
          <div className="progress-orbit" style={{ "--progress": `${courseProgress * 3.6}deg` } as CSSProperties}>
            <div className="progress-orbit-inner">
              <strong>{courseProgress}%</strong>
              <span>selesai</span>
            </div>
          </div>
          <span className="hero-progress-label">{completedCount} dari {lessons.length} topik</span>
        </div>
      </section>

      <section className="metric-grid" aria-label="Ringkasan progres">
        <MetricCard label="Topik selesai" value={String(completedCount)} detail={`dari ${lessons.length} topik`} icon={<CheckCircle2 size={19} />} />
        <MetricCard label="Bab aktif" value={activeChapter ? formatChapterNumber(activeChapter.order) : "—"} detail={activeChapter?.title ?? "Belum mulai"} icon={<BookOpen size={19} />} />
        <MetricCard label="Langkah berikutnya" value={nextChapter ? formatChapterNumber(nextChapter.order) : "✓"} detail={nextChapter?.title ?? "Course selesai"} icon={<BarChart3 size={19} />} />
      </section>

      <section className="split-section">
        <div className="section-block">
          <SectionHeader eyebrow="Continue learning" title="Lanjutkan dari sini" linkTo={continueLesson ? undefined : "/course"} linkLabel="Lihat course" />
          <ContinueCard lesson={continueLesson} progress={progress} />
        </div>
        <div className="section-block">
          <SectionHeader eyebrow="Your rhythm" title="Ritme belajar" />
          <StudyRhythm completed={completedCount} total={lessons.length} courseProgress={courseProgress} />
        </div>
      </section>

      <section className="section-block">
        <SectionHeader eyebrow="Course map" title="Bab yang bisa kamu jelajahi" linkTo="/course" linkLabel="Lihat semua" />
        <div className="chapter-grid">
          {chapters.slice(0, 6).map((chapter) => <ChapterCard key={chapter.id} chapter={chapter} progress={progress} />)}
        </div>
      </section>
    </div>
  );
}

function MetricCard({ label, value, detail, icon }: { label: string; value: string; detail: string; icon: ReactNode }) {
  return (
    <div className="metric-card">
      <div className="metric-icon">{icon}</div>
      <span className="metric-label">{label}</span>
      <strong>{value}</strong>
      <span className="metric-detail">{detail}</span>
    </div>
  );
}

function ContinueCard({ lesson, progress }: { lesson: Lesson | null | undefined; progress: ProgressState }) {
  if (!lesson) {
    return <EmptyState title="Course belum tersedia" description="Tambahkan manifest course untuk mulai belajar." icon={<BookOpen size={22} />} />;
  }
  const complete = isLessonComplete(progress, lesson.id);
  return (
    <Link className="continue-card" to={`/topik/${lesson.id}`}>
      <div className="continue-card-icon"><Play size={19} fill="currentColor" /></div>
      <div className="continue-card-copy">
        <span className="eyebrow">{complete ? "Course selesai" : "Topik berikutnya"}</span>
        <h3>{lesson.title}</h3>
        <p>{lesson.chapterTitle}{lesson.subchapter ? ` · ${lesson.subchapter}` : ""}</p>
      </div>
      <ArrowUpRight className="card-arrow" size={21} />
    </Link>
  );
}

function StudyRhythm({ completed, total, courseProgress }: { completed: number; total: number; courseProgress: number }) {
  return (
    <div className="rhythm-card">
      <div className="rhythm-top">
        <div>
          <span className="eyebrow">Overall completion</span>
          <strong>{courseProgress}%</strong>
        </div>
        <span className="rhythm-count">{completed}/{total}</span>
      </div>
      <ProgressBar value={courseProgress} size="large" />
      <div className="rhythm-foot"><span>Setiap topik yang selesai membuat peta belajarmu lebih jelas.</span><span>Local progress</span></div>
    </div>
  );
}

function CourseIndexPage() {
  const { chapters, progress } = useLearning();
  return (
    <div className="page-stack">
      <section className="page-intro">
        <span className="eyebrow">Course navigator</span>
        <h2>Semua materi, satu peta belajar.</h2>
        <p>Struktur di bawah mengikuti folder Course → Bab → Subbab di Google Drive, lalu setiap subbab berisi video-nya.</p>
      </section>
      <div className="course-overview-bar">
        <div><strong>{chapters.length}</strong><span>bab tersedia</span></div>
        <div><strong>{chapters.reduce((total, chapter) => total + chapter.lessons.length, 0)}</strong><span>topik video</span></div>
        <div><strong>{chapters.reduce((total, chapter) => total + getChapterSubchapters(chapter).length, 0)}</strong><span>subbab dari Drive</span></div>
        <div><strong>{chapters.filter((chapter) => getChapterProgress(chapter, progress) === 100).length}</strong><span>bab selesai</span></div>
      </div>
      <CourseTree chapters={chapters} progress={progress} />
    </div>
  );
}

function CourseTree({ chapters, progress }: { chapters: Chapter[]; progress: ProgressState }) {
  const { lessons, courseProgress } = useLearning();
  const location = useLocation();
  const activeLessonId = location.pathname.startsWith("/topik/") ? location.pathname.slice("/topik/".length) : null;
  const activeSubchapterId = activeLessonId
    ? chapters.flatMap((chapter) => getChapterSubchapters(chapter)).find((subchapter) => subchapter.lessons.some((lesson) => lesson.id === activeLessonId))?.id ?? null
    : null;
  const [treeOpen, setTreeOpen] = useState(true);
  const [expandedChapterIds, setExpandedChapterIds] = useState<Set<string>>(() => new Set(chapters.slice(0, 1).map((chapter) => chapter.id)));
  const [expandedSubchapterIds, setExpandedSubchapterIds] = useState<Set<string>>(() => {
    const firstSubchapterId = chapters[0] ? getChapterSubchapters(chapters[0])[0]?.id ?? null : null;
    return new Set([activeSubchapterId ?? firstSubchapterId].filter((id): id is string => Boolean(id)));
  });
  const completedLessons = progress.completedLessonIds.length;
  const completedChapters = chapters.filter((chapter) => getChapterProgress(chapter, progress) === 100).length;

  function toggleChapter(chapterId: string) {
    setExpandedChapterIds((current) => {
      const next = new Set(current);
      if (next.has(chapterId)) next.delete(chapterId);
      else next.add(chapterId);
      return next;
    });
  }

  function toggleSubchapter(subchapterId: string) {
    setExpandedSubchapterIds((current) => {
      const next = new Set(current);
      if (next.has(subchapterId)) next.delete(subchapterId);
      else next.add(subchapterId);
      return next;
    });
  }

  function expandAll() {
    setExpandedChapterIds(new Set(chapters.map((chapter) => chapter.id)));
    setExpandedSubchapterIds(new Set(chapters.flatMap((chapter) => getChapterSubchapters(chapter).map((subchapter) => subchapter.id))));
  }

  function collapseAll() {
    setExpandedChapterIds(new Set());
    setExpandedSubchapterIds(new Set());
  }

  return (
    <section className="course-tree-panel" aria-label="Navigasi semua materi course">
      <div className="course-tree-header">
        <button className="course-tree-root-toggle" type="button" aria-expanded={treeOpen} aria-controls="course-tree-list" onClick={() => setTreeOpen((open) => !open)}>
          <span className={`tree-chevron${treeOpen ? " is-open" : ""}`}><ChevronRight size={17} /></span>
          <span className="course-tree-root-icon"><BookOpen size={19} /></span>
          <span className="course-tree-root-copy"><strong>Maker School</strong><small>{chapters.length} bab · {lessons.length} topik</small></span>
          <span className="course-tree-root-progress"><strong>{courseProgress}%</strong><small>{completedLessons}/{lessons.length} selesai</small></span>
        </button>
        <div className="course-tree-actions" aria-label="Kontrol tree view">
          <button className="tree-action" type="button" onClick={expandAll}>Buka semua</button>
          <button className="tree-action" type="button" onClick={collapseAll}>Tutup semua</button>
        </div>
      </div>
      {treeOpen && (
        <div id="course-tree-list" className="course-tree-list">
          <div className="course-tree-list-summary"><span>{completedChapters}/{chapters.length} bab selesai</span><span>{courseProgress}% progress course</span></div>
          {chapters.map((chapter) => {
            const chapterProgress = getChapterProgress(chapter, progress);
            const expanded = expandedChapterIds.has(chapter.id);
            const subchapters = getChapterSubchapters(chapter);
            return (
              <div className={`tree-chapter${expanded ? " is-open" : ""}`} key={chapter.id}>
                <button className="tree-chapter-toggle" type="button" aria-expanded={expanded} aria-controls={`tree-subchapters-${chapter.id}`} onClick={() => toggleChapter(chapter.id)}>
                  <span className={`tree-chevron${expanded ? " is-open" : ""}`}><ChevronRight size={16} /></span>
                  <span className="tree-chapter-number">Bab {formatChapterNumber(chapter.order)}</span>
                  <span className="tree-chapter-copy"><strong>{chapter.title}</strong><small>{chapter.lessons.length} topik · {subchapters.length} subbab{chapter.materials.length ? ` · ${chapter.materials.length} materi` : ""}</small></span>
                  <span className="tree-chapter-progress"><strong>{chapterProgress}%</strong><ProgressBar value={chapterProgress} /></span>
                </button>
                {expanded && (
                  <div id={`tree-subchapters-${chapter.id}`} className="tree-subchapters" role="group" aria-label={`Subbab dalam ${chapter.title}`}>
                    {subchapters.map((subchapter) => {
                      const subchapterExpanded = expandedSubchapterIds.has(subchapter.id);
                      const subchapterProgress = getSubchapterProgress(subchapter, progress);
                      return (
                        <div className={`tree-subchapter${subchapterExpanded ? " is-open" : ""}`} key={subchapter.id}>
                          <button className="tree-subchapter-toggle" type="button" aria-expanded={subchapterExpanded} aria-controls={`tree-subchapter-content-${subchapter.id}`} onClick={() => toggleSubchapter(subchapter.id)}>
                            <span className={`tree-chevron${subchapterExpanded ? " is-open" : ""}`}><ChevronRight size={15} /></span>
                            <span className="tree-subchapter-copy"><strong>{subchapter.title}</strong><small>{subchapter.lessons.length} topik{subchapter.materials.length ? ` · ${subchapter.materials.length} materi` : ""}</small></span>
                            <span className="tree-subchapter-progress"><strong>{subchapterProgress}%</strong><ProgressBar value={subchapterProgress} /></span>
                          </button>
                          {subchapterExpanded && (
                            <div id={`tree-subchapter-content-${subchapter.id}`} className="tree-subchapter-content">
                              {subchapter.lessons.length > 0 && (
                                <div className="tree-lessons" role="group" aria-label={`Topik dalam ${subchapter.title}`}>
                                  {subchapter.lessons.map((lesson, index) => {
                                    const complete = isLessonComplete(progress, lesson.id);
                                    const active = activeLessonId === lesson.id;
                                    return (
                                      <Link className={`tree-lesson-row${complete ? " is-complete" : ""}${active ? " is-active" : ""}`} key={lesson.id} to={`/topik/${lesson.id}`} aria-current={active ? "page" : undefined}>
                                        <span className="tree-lesson-status" aria-hidden="true">{complete ? <CheckCircle2 size={16} /> : <Circle size={16} />}</span>
                                        <span className="tree-lesson-index">{String(index + 1).padStart(2, "0")}</span>
                                        <span className="tree-lesson-copy"><strong>{lesson.title}</strong><small>{lesson.format}</small></span>
                                        <span className="tree-lesson-status-label">{complete ? "Selesai" : "Belum mulai"}</span>
                                        <ChevronRight className="tree-lesson-chevron" size={15} />
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                              {subchapter.materials.length > 0 && (
                                <div className="tree-materials">
                                  <span className="tree-materials-label">Materi tambahan</span>
                                  {subchapter.materials.map((material) => <a className="tree-material-row" key={material.id} href={material.url} target="_blank" rel="noreferrer"><FileText size={15} /><span>{material.title}</span><small>{material.type}</small><ExternalLink size={14} /></a>)}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

function ChapterPage() {
  const { chapterId } = useParams();
  const { chapters, progress } = useLearning();
  const chapter = chapters.find((item) => item.id === chapterId);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | "open" | "complete">("all");

  if (!chapter) return <NotFound title="Bab tidak ditemukan" description="Bab yang kamu cari tidak ada di manifest course." />;
  const chapterProgress = getChapterProgress(chapter, progress);
  const filteredSubchapters = getChapterSubchapters(chapter).map((subchapter) => ({
    ...subchapter,
    lessons: subchapter.lessons.filter((lesson) => {
    const matchesQuery = `${lesson.title} ${lesson.subchapter ?? ""}`.toLowerCase().includes(query.toLowerCase());
    const complete = isLessonComplete(progress, lesson.id);
    const matchesStatus = status === "all" || (status === "complete" ? complete : !complete);
    return matchesQuery && matchesStatus;
    }),
  })).filter((subchapter) => subchapter.lessons.length > 0);

  return (
    <div className="page-stack">
      <Link className="back-link" to="/course"><ArrowLeft size={16} /> Kembali ke semua bab</Link>
      <section className="chapter-hero">
        <div>
          <span className="eyebrow">Bab {formatChapterNumber(chapter.order)}</span>
          <h2>{chapter.title}</h2>
          <p>{chapter.lessons.length} topik video{chapter.materials.length ? ` · ${chapter.materials.length} materi tambahan` : ""}</p>
        </div>
        <div className="chapter-hero-progress"><strong>{chapterProgress}%</strong><span>bab selesai</span><ProgressBar value={chapterProgress} /></div>
      </section>
      <section className="lesson-section">
        <div className="lesson-toolbar">
          <div><span className="eyebrow">Lesson queue</span><h3>Topik dalam bab ini</h3><p className="lesson-toolbar-note">Folder Drive ditampilkan sebagai subbab.</p></div>
          <div className="lesson-filters">
            <label className="compact-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari topik" aria-label="Cari topik dalam bab" /></label>
            <label className="select-wrap"><SlidersHorizontal size={15} /><select value={status} onChange={(event) => setStatus(event.target.value as typeof status)} aria-label="Filter status topik"><option value="all">Semua status</option><option value="open">Belum selesai</option><option value="complete">Selesai</option></select><ChevronDown size={15} /></label>
          </div>
        </div>
        <div className="lesson-subchapter-list">
          {filteredSubchapters.length ? filteredSubchapters.map((subchapter) => (
            <section className="lesson-subchapter-section" key={subchapter.id}>
              <div className="lesson-subchapter-heading">
                <div><span className="eyebrow">Subbab</span><h3>{subchapter.title}</h3></div>
                <span>{subchapter.lessons.length} topik · {getSubchapterProgress(subchapter, progress)}% selesai</span>
              </div>
              <div className="lesson-list">
                {subchapter.lessons.map((lesson, index) => <LessonRow key={lesson.id} lesson={lesson} progress={progress} index={index} />)}
              </div>
            </section>
          )) : <EmptyState title="Tidak ada topik yang cocok" description="Coba ubah kata kunci atau filter status." icon={<Search size={22} />} />}
        </div>
      </section>
      {chapter.materials.length > 0 && <MaterialsPanel materials={chapter.materials} />}
    </div>
  );
}

function LessonPage() {
  const { lessonId } = useParams();
  const { chapters, lessons, progress, openLesson, toggleComplete } = useLearning();
  const lesson = lessons.find((item) => item.id === lessonId);
  const chapter = lesson ? chapters.find((item) => item.id === lesson.chapterId) : undefined;
  const complete = lesson ? isLessonComplete(progress, lesson.id) : false;
  const previous = lesson ? getNextLesson(lessons, lesson.id, -1) : null;
  const next = lesson ? getNextLesson(lessons, lesson.id, 1) : null;

  useEffect(() => {
    if (lesson) openLesson(lesson.id);
  }, [lesson, openLesson]);

  if (!lesson || !chapter) return <NotFound title="Topik tidak ditemukan" description="Topik yang kamu cari tidak ada di manifest course." />;

  return (
    <div className="page-stack">
      <div className="breadcrumb"><Link to={`/bab/${chapter.id}`}>Bab {formatChapterNumber(chapter.order)}</Link><ChevronRight size={15} /><span>{lesson.title}</span></div>
      <section className="lesson-header">
        <div><span className="eyebrow">{chapter.title}{lesson.subchapter ? ` · ${lesson.subchapter}` : ""}</span><h2>{lesson.title}</h2><p>Topik {String(chapter.lessons.findIndex((item) => item.id === lesson.id) + 1).padStart(2, "0")} dari {chapter.lessons.length}</p></div>
        <StatusPill complete={complete} />
      </section>
      <div className="lesson-layout">
        <div className="lesson-main-column">
          <LessonVideo lesson={lesson} />
          <div className="lesson-actions"><button className={`button ${complete ? "button-complete" : "button-dark"}`} onClick={() => toggleComplete(lesson.id)}>{complete ? <CheckCircle2 size={17} /> : <Check size={17} />}{complete ? "Tandai belum selesai" : "Tandai selesai"}</button><span className="action-hint">Progress tersimpan otomatis di browser ini.</span></div>
          <div className="lesson-pagination"><LessonPager lesson={previous} direction="previous" /><LessonPager lesson={next} direction="next" /></div>
        </div>
      </div>
      {chapter.materials.length > 0 && <MaterialsPanel materials={chapter.materials} compact />}
    </div>
  );
}

function LessonVideo({ lesson }: { lesson: Lesson }) {
  const previewUrl = getDrivePreviewUrl(lesson.videoUrl);

  return (
    <section className="video-player" aria-label={`Video ${lesson.title}`}>
      {previewUrl ? (
        <div className="video-embed-frame">
          <iframe
            title={`Video ${lesson.title}`}
            src={previewUrl}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="video-placeholder">
          <div className="video-placeholder-glow" />
          <div className="video-placeholder-content"><div className="video-play-mark"><Play size={24} fill="currentColor" /></div><span className="eyebrow">Video lesson</span><h3>Video siap dibuka dari Drive</h3><p>Format link video ini belum bisa dipasang sebagai embed.</p></div>
        </div>
      )}
      <div className="video-player-footer">
        <span><Play size={15} fill="currentColor" /> Diputar langsung dari Google Drive</span>
        <a className="text-link" href={lesson.videoUrl} target="_blank" rel="noreferrer">Buka di Drive <ExternalLink size={14} /></a>
      </div>
    </section>
  );
}

function LessonPager({ lesson, direction }: { lesson: Lesson | null; direction: "previous" | "next" }) {
  if (!lesson) return <span className="lesson-pager is-disabled" />;
  return <Link className={`lesson-pager ${direction}`} to={`/topik/${lesson.id}`}><span>{direction === "previous" ? <ChevronLeft size={17} /> : <ChevronRight size={17} />}</span><small>{direction === "previous" ? "Sebelumnya" : "Berikutnya"}</small><strong>{lesson.title}</strong></Link>;
}

function SearchPage() {
  const [params, setParams] = useSearchParams();
  const { lessons, progress } = useLearning();
  const query = params.get("q") ?? "";
  const [input, setInput] = useState(query);
  const results = lessons.filter((lesson) => `${lesson.title} ${lesson.chapterTitle} ${lesson.subchapter ?? ""}`.toLowerCase().includes(query.toLowerCase().trim())).slice(0, 50);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setParams(input.trim() ? { q: input.trim() } : {});
  }

  return (
    <div className="page-stack">
      <section className="page-intro"><span className="eyebrow">Search library</span><h2>Temukan topik yang kamu butuhkan.</h2><p>Cari berdasarkan nama bab, subbab, atau judul video.</p></section>
      <form className="search-page-form" onSubmit={submit}><Search size={18} /><input autoFocus value={input} onChange={(event) => setInput(event.target.value)} placeholder="Contoh: content strategy" aria-label="Cari course" /><button className="button button-dark" type="submit">Cari</button></form>
      {query ? <section className="search-results"><div className="section-header"><div><span className="eyebrow">{results.length} hasil</span><h3>Hasil untuk “{query}”</h3></div></div>{results.length ? <div className="lesson-list">{results.map((lesson, index) => <LessonRow key={lesson.id} lesson={lesson} progress={progress} index={index} />)}</div> : <EmptyState title="Belum menemukan topik" description="Coba kata kunci yang lebih pendek atau cari nama babnya." icon={<Search size={22} />} />}</section> : <EmptyState title="Mulai dengan pencarian" description="Ketik kata kunci untuk menemukan lesson di seluruh course." icon={<Search size={22} />} />}
    </div>
  );
}

function SettingsPage() {
  const { progress, replaceProgress, clearProgress, lessons } = useLearning();
  const [message, setMessage] = useState("");

  function downloadProgress() {
    const blob = new Blob([serializeProgress(progress)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "maker-school-progress.json";
    anchor.click();
    URL.revokeObjectURL(url);
    setMessage("Progress berhasil diekspor.");
  }

  function importProgressFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const parsed = typeof reader.result === "string" ? parseProgress(reader.result) : null;
      if (!parsed) setMessage("File tidak valid atau formatnya tidak cocok.");
      else { replaceProgress(parsed); setMessage("Progress berhasil diimpor."); }
    };
    reader.readAsText(file);
    event.target.value = "";
  }

  function confirmReset() {
    if (window.confirm("Reset seluruh progress course di browser ini?")) { clearProgress(); setMessage("Progress berhasil direset."); }
  }

  return (
    <div className="page-stack settings-page">
      <section className="page-intro"><span className="eyebrow">Workspace settings</span><h2>Atur cara kamu belajar.</h2><p>Tidak ada akun dan tidak ada server. Data belajar tetap berada di browser ini.</p></section>
      <section className="settings-grid">
        <div className="settings-card"><div className="settings-card-icon"><Download size={19} /></div><div><h3>Export progress</h3><p>Simpan backup progress sebagai file JSON agar bisa dipindahkan ke perangkat lain.</p><button className="button button-dark" onClick={downloadProgress}>Download progress <Download size={16} /></button></div></div>
        <div className="settings-card"><div className="settings-card-icon"><Upload size={19} /></div><div><h3>Import progress</h3><p>Restore progress dari file JSON yang pernah kamu simpan.</p><label className="button button-ghost file-button">Pilih file JSON <Upload size={16} /><input type="file" accept="application/json,.json" onChange={importProgressFile} /></label></div></div>
        <div className="settings-card settings-card-danger"><div className="settings-card-icon"><RotateCcw size={19} /></div><div><h3>Reset workspace</h3><p>Hapus semua topik selesai dan mulai kembali dari awal. Tindakan ini hanya memengaruhi browser ini.</p><button className="button button-ghost" onClick={confirmReset}>Reset progress <RotateCcw size={16} /></button></div></div>
      </section>
      <div className="settings-note"><CheckCircle2 size={18} /><span>{message || `${progress.completedLessonIds.length} dari ${lessons.length} topik tersimpan di workspace ini.`}</span></div>
    </div>
  );
}

function ChapterCard({ chapter, progress }: { chapter: Chapter; progress: ProgressState }) {
  const chapterProgress = getChapterProgress(chapter, progress);
  return <Link className="chapter-card" to={`/bab/${chapter.id}`}><div className="chapter-card-top"><span className="chapter-number">Bab {formatChapterNumber(chapter.order)}</span><span className="chapter-percent">{chapterProgress}%</span></div><h3>{chapter.title}</h3><p>{chapter.lessons.length} topik{chapter.materials.length ? ` · ${chapter.materials.length} materi` : ""}</p><ProgressBar value={chapterProgress} /></Link>;
}

function LessonRow({ lesson, progress, index }: { lesson: Lesson; progress: ProgressState; index: number }) {
  const complete = isLessonComplete(progress, lesson.id);
  return <Link className={`lesson-row${complete ? " is-complete" : ""}`} to={`/topik/${lesson.id}`}><span className="lesson-index">{String(index + 1).padStart(2, "0")}</span><span className="lesson-row-copy"><strong>{lesson.title}</strong><small>{lesson.chapterTitle}{lesson.subchapter ? ` · ${lesson.subchapter}` : ""}</small></span><span className={`lesson-status${complete ? " is-complete" : ""}`}>{complete ? <CheckCircle2 size={16} /> : <Circle size={16} />}<span>{complete ? "Selesai" : "Belum mulai"}</span></span><ArrowUpRight className="lesson-arrow" size={17} /></Link>;
}

function MaterialsPanel({ materials, compact = false }: { materials: Material[]; compact?: boolean }) {
  return <section className={`materials-panel${compact ? " is-compact" : ""}`}><div className="section-header"><div><span className="eyebrow">Supporting materials</span><h3>Materi tambahan</h3></div><FileText size={20} /></div><div className="material-list">{materials.map((material) => <a key={material.id} className="material-row" href={material.url} target="_blank" rel="noreferrer"><span className="material-icon"><FileText size={17} /></span><span><strong>{material.title}</strong><small>{material.type} · Buka dari Drive</small></span><ExternalLink size={16} /></a>)}</div></section>;
}

function StatusPill({ complete }: { complete: boolean }) {
  return <span className={`status-pill${complete ? " is-complete" : ""}`}>{complete ? <CheckCircle2 size={15} /> : <Circle size={15} />}{complete ? "Selesai" : "Belum mulai"}</span>;
}

function SectionHeader({ eyebrow, title, linkTo, linkLabel }: { eyebrow: string; title: string; linkTo?: string; linkLabel?: string }) {
  return <div className="section-header"><div><span className="eyebrow">{eyebrow}</span><h3>{title}</h3></div>{linkTo && linkLabel && <Link className="text-link" to={linkTo}>{linkLabel}<ArrowRight size={15} /></Link>}</div>;
}

function ProgressBar({ value, size = "small" }: { value: number; size?: "small" | "large" }) {
  return <div className={`progress-bar ${size === "large" ? "progress-bar-large" : ""}`} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={`${value}% selesai`}><span style={{ width: `${value}%` }} /></div>;
}

function EmptyState({ title, description, icon }: { title: string; description: string; icon: ReactNode }) {
  return <div className="empty-state"><span className="empty-state-icon">{icon}</span><h3>{title}</h3><p>{description}</p></div>;
}

function NotFound({ title, description }: { title: string; description: string }) {
  return <div className="not-found"><span className="not-found-code">404</span><h2>{title}</h2><p>{description}</p><Link className="button button-dark" to="/">Kembali ke ringkasan <ArrowRight size={16} /></Link></div>;
}

function getPageTitle(pathname: string): string {
  if (pathname.startsWith("/bab/")) return "Detail bab";
  if (pathname.startsWith("/topik/")) return "Lesson detail";
  if (pathname.startsWith("/cari")) return "Cari course";
  if (pathname.startsWith("/pengaturan")) return "Pengaturan";
  if (pathname.startsWith("/course")) return "Semua materi";
  return "Ringkasan belajar";
}
