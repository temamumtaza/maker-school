/**
 * Static Maker School course manifest generated from the connected Google Drive source.
 *
 * Source folder: https://drive.google.com/drive/folders/1wetJ3HiT1pwIwyiE_Tc1rD3h6CPHwRZW
 * The root-level Watch Order.pdf promotion for Beyond The Horizon is intentionally excluded.
 */

export type Material = {
  id: string;
  title: string;
  type: string;
  url: string;
  chapterId: string;
  chapterTitle: string;
  subchapter?: string;
};

export type Lesson = {
  id: string;
  title: string;
  videoUrl: string;
  format: string;
  chapterId: string;
  chapterTitle: string;
  subchapter?: string;
};

export type Chapter = {
  id: string;
  title: string;
  order: number;
  driveUrl: string;
  lessons: Lesson[];
  materials: Material[];
};

export type Course = {
  title: string;
  chapters: Chapter[];
};

export const sourceAudit = {
  sourceFolderUrl: "https://drive.google.com/drive/folders/1wetJ3HiT1pwIwyiE_Tc1rD3h6CPHwRZW",
  excludedFiles: [
  {
    "id": "1ZzzLW958clQ_J6g3if2ER09b40ZMJr_1",
    "title": "Watch Order.pdf",
    "reason": "Root-level promotional PDF for Beyond The Horizon; excluded by source audit."
  },
  {
    "id": "1k4avOCkTpTNhkvQfRIi8fxzkcRq9cta-",
    "title": "10,000$ Courses Free Download.pdf",
    "reason": "Matched the Beyond The Horizon advertising exclusion rule."
  }
],
} as const;

export const chapters: Chapter[] = [
  {
    "id": "chapter-pre-program",
    "title": "Pre Program",
    "order": 0,
    "driveUrl": "https://drive.google.com/drive/folders/1k3szbmwLGySXk65f3IqfddOyKNRR6W7r",
    "lessons": [
      {
        "id": "lesson-1-001",
        "title": "1. What this program is",
        "videoUrl": "https://drive.google.com/file/d/1BZHjOfsP_FHo77d15v2FcxH3gEe3dufc/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-pre-program",
        "chapterTitle": "Pre Program",
        "subchapter": "1. Maker School 101"
      },
      {
        "id": "lesson-1-002",
        "title": "2. Limiting beliefs",
        "videoUrl": "https://drive.google.com/file/d/1WTSHKZCFjWZF_ztYIEmjcplO6mMg4jso/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-pre-program",
        "chapterTitle": "Pre Program",
        "subchapter": "1. Maker School 101"
      },
      {
        "id": "lesson-1-003",
        "title": "3. Skill-building",
        "videoUrl": "https://drive.google.com/file/d/1BOUdGmYS7NKEAF90mZQe5p1m24lH54kp/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-pre-program",
        "chapterTitle": "Pre Program",
        "subchapter": "1. Maker School 101"
      },
      {
        "id": "lesson-1-004",
        "title": "4. The casino",
        "videoUrl": "https://drive.google.com/file/d/1T4dPBCh7P7qd4ecU39MbtaqonyeM5fMa/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-pre-program",
        "chapterTitle": "Pre Program",
        "subchapter": "1. Maker School 101"
      },
      {
        "id": "lesson-1-005",
        "title": "5. Revenue generating activities",
        "videoUrl": "https://drive.google.com/file/d/1hkRgSqvUKkZTmRqOfDyAbAS-3j2tmv-a/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-pre-program",
        "chapterTitle": "Pre Program",
        "subchapter": "1. Maker School 101"
      },
      {
        "id": "lesson-1-006",
        "title": "6. What does financial success actually look like.",
        "videoUrl": "https://drive.google.com/file/d/1RgwoGC07X18_gUvrupgaugwVNP9ap8Oj/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-pre-program",
        "chapterTitle": "Pre Program",
        "subchapter": "1. Maker School 101"
      },
      {
        "id": "lesson-1-007",
        "title": "1. Three cornerstone skills",
        "videoUrl": "https://drive.google.com/file/d/1WbqtY4ykq760V6zCu5bU60Za1ybsL6cn/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-pre-program",
        "chapterTitle": "Pre Program",
        "subchapter": "2. What will you build"
      },
      {
        "id": "lesson-1-008",
        "title": "2. Three lead generation methods",
        "videoUrl": "https://drive.google.com/file/d/1-hKSWNxMhgRRZ43MfW7MGr0TAT4ivp9n/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-pre-program",
        "chapterTitle": "Pre Program",
        "subchapter": "2. What will you build"
      },
      {
        "id": "lesson-1-009",
        "title": "3. A lifestyle that encourages work",
        "videoUrl": "https://drive.google.com/file/d/1cN33PDKkOvUkDTSu2sbmIsLEEpzXDoRT/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-pre-program",
        "chapterTitle": "Pre Program",
        "subchapter": "2. What will you build"
      },
      {
        "id": "lesson-1-010",
        "title": "4. An ambitious, motivated network",
        "videoUrl": "https://drive.google.com/file/d/1eaQfg4YIakjKZL1W2m5NdEn0HpKs7D_5/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-pre-program",
        "chapterTitle": "Pre Program",
        "subchapter": "2. What will you build"
      },
      {
        "id": "lesson-1-011",
        "title": "5. Let's get started!",
        "videoUrl": "https://drive.google.com/file/d/1Y0kbXamQEdWsdEiOlg7kBZMgfAVmCX7q/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-pre-program",
        "chapterTitle": "Pre Program",
        "subchapter": "2. What will you build"
      }
    ],
    "materials": []
  },
  {
    "id": "chapter-month-1",
    "title": "Month 1",
    "order": 1,
    "driveUrl": "https://drive.google.com/drive/folders/1BRQNQm3eFJtMzhykDCFH-lmZ1_F4l1mz",
    "lessons": [
      {
        "id": "lesson-2-001",
        "title": "1. This is an exercise program",
        "videoUrl": "https://drive.google.com/file/d/1wv-4n6X_KM5X5YJnyCv6Xj50YkdpGC3R/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "About Month 1"
      },
      {
        "id": "lesson-2-002",
        "title": "2. No days off for the next month",
        "videoUrl": "https://drive.google.com/file/d/1QzcLeyfKyvtjAPIksjuDInCypboCoA80/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "About Month 1"
      },
      {
        "id": "lesson-2-003",
        "title": "3. Remember to ask for feedback",
        "videoUrl": "https://drive.google.com/file/d/1mxN0A8t6vWqNNii-OCwfMGXhQma48zpJ/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "About Month 1"
      },
      {
        "id": "lesson-2-004",
        "title": "5. Lead gen & tool fees",
        "videoUrl": "https://drive.google.com/file/d/13j1fcXzySOBfic57WnK89hFQyqykIoHk/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "About Month 1"
      },
      {
        "id": "lesson-2-005",
        "title": "6. One day at a time",
        "videoUrl": "https://drive.google.com/file/d/1TcRXO2lUoZt-a2VZo82mFFm21zKp5qso/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "About Month 1"
      },
      {
        "id": "lesson-2-006",
        "title": "Building Your Business: Choosing an Operating Name",
        "videoUrl": "https://drive.google.com/file/d/1kozUyUamN02xMZE3ZhQZZWoOGtt3vS3U/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 1"
      },
      {
        "id": "lesson-2-007",
        "title": "Setting Up Cold Email Campaigns Tutorial",
        "videoUrl": "https://drive.google.com/file/d/1Hf-6i2NkCHvnpTPAMTNfa8KmqJff63_D/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 1"
      },
      {
        "id": "lesson-2-008",
        "title": "1. Select niche(s)",
        "videoUrl": "https://drive.google.com/file/d/1G9IzkPqpkoF4KauZJIhwH2AkKOWQ2SFd/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 2"
      },
      {
        "id": "lesson-2-009",
        "title": "2. Build ＂portfolio＂ & 3 case studies",
        "videoUrl": "https://drive.google.com/file/d/1gmj71bNsQ_gRJovfy9vLxtv_C75vpv-U/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 2"
      },
      {
        "id": "lesson-2-010",
        "title": "3. Create Upwork Profile",
        "videoUrl": "https://drive.google.com/file/d/1lcVcROAh0lwBqPHdltE5pNQgWkiv6R1P/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 2"
      },
      {
        "id": "lesson-2-011",
        "title": "Building Relationships in Online Communities 🌟",
        "videoUrl": "https://drive.google.com/file/d/1c065IA1zBjX4Ck15eWBWbSFIWAjDXD7S/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 3"
      },
      {
        "id": "lesson-2-012",
        "title": "Maximizing Upwork Applications",
        "videoUrl": "https://drive.google.com/file/d/17he-YPU6AMmlZaK4nE9zLPM6SteatCGr/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 3"
      },
      {
        "id": "lesson-2-013",
        "title": "Setting Up a Time Tracker for Improved Productivity 💡",
        "videoUrl": "https://drive.google.com/file/d/1mPjeousMvd5ul-Gnog0BG95UrYtShEF0/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 3"
      },
      {
        "id": "lesson-2-014",
        "title": "Setting up DKIM for Email Authentication 🔒",
        "videoUrl": "https://drive.google.com/file/d/1xtvcM3jO-HHbJXaeC9AhRl6c_umMzTDl/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 3"
      },
      {
        "id": "lesson-2-015",
        "title": "Upwork Application Strategies",
        "videoUrl": "https://drive.google.com/file/d/1ttzfPT5_d-IwIR-oVU_9WAJUMJfuJ8Hv/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 3"
      },
      {
        "id": "lesson-2-016",
        "title": "1. Send 10 applications",
        "videoUrl": "https://drive.google.com/file/d/1S_1brQXGO2eIiWclI7x5ELG5YT119J-A/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 4"
      },
      {
        "id": "lesson-2-017",
        "title": "Accelerate Your Sales Progress 🚀",
        "videoUrl": "https://drive.google.com/file/d/1jugRktKpfjTc8Gl9sOIoiWZ4YgNpuV4Z/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 4"
      },
      {
        "id": "lesson-2-018",
        "title": "Community Engagement Strategy",
        "videoUrl": "https://drive.google.com/file/d/1C_syQ3CLuXkpeF3QKPmnfJYpDRMsRKIs/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 4"
      },
      {
        "id": "lesson-2-019",
        "title": "Sales Process Simplified",
        "videoUrl": "https://drive.google.com/file/d/1HiwKq9oNSCmSMmDVHKbPL4aBxCXdmOBT/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 4"
      },
      {
        "id": "lesson-2-020",
        "title": "1. Send 10 applications - Month 1 · Maker School - https://www.skool.com/maker-school-7775/classroom/9376603b?md=80570e3ede3e47cb88f14733d48d7a13 - 11 September 2024",
        "videoUrl": "https://drive.google.com/file/d/15sGX5p0bDRnwUSNNnwvWi6M-xOPORtmp/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 5"
      },
      {
        "id": "lesson-2-021",
        "title": "Maximizing Community Engagement 🚀",
        "videoUrl": "https://drive.google.com/file/d/1o_80d0JM_MkmENzjjmSjOHcGRVhoeSsv/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 5"
      },
      {
        "id": "lesson-2-022",
        "title": "Proposal Process Optimization",
        "videoUrl": "https://drive.google.com/file/d/1V_xEqV5lRd86mAf6y5cQeNXRPP1DhtOe/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 5"
      },
      {
        "id": "lesson-2-023",
        "title": "Celebrating Milestones 🎉",
        "videoUrl": "https://drive.google.com/file/d/1TqHn5cBwnR1vwVtbavAnDveb3lT9bB2e/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 6"
      },
      {
        "id": "lesson-2-024",
        "title": "Creating Community Posts 🌟",
        "videoUrl": "https://drive.google.com/file/d/11nJvBf8hNVlVaY5BtCqqUN8MxmvRSYAK/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 6"
      },
      {
        "id": "lesson-2-025",
        "title": "Setting Up Stripe as Your Payment Processor",
        "videoUrl": "https://drive.google.com/file/d/1GnwV7Cu-hUUnNrx2T2Obh_oISKCHlal1/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 6"
      },
      {
        "id": "lesson-2-026",
        "title": "1. Send 10 applications - Month 1 · Maker School - https://www.skool.com/maker-school-7775/classroom/9376603b?md=0c6ff0ab8a9f4b95b9fc7cd9c3241c20 - 11 September 2024",
        "videoUrl": "https://drive.google.com/file/d/1g3xisjfp0DnZK0XoNS1A5I4r45MuPQb1/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 7"
      },
      {
        "id": "lesson-2-027",
        "title": "Lifestyle Audit Insights",
        "videoUrl": "https://drive.google.com/file/d/1Mxs8xhbQKmtxZ0AtxXW8y15uBM8jwy54/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 7"
      },
      {
        "id": "lesson-2-028",
        "title": "Mastering Community Posts 🚀",
        "videoUrl": "https://drive.google.com/file/d/19Adx4M_7z3Y1qZIC9gtKCpAvH2_wPpIb/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 7"
      },
      {
        "id": "lesson-2-029",
        "title": "Leveraging Community Posts for Lead Generation",
        "videoUrl": "https://drive.google.com/file/d/19ebCj9wFO-VZDmaSMNDqfiWL4CF3Kvsf/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 8"
      },
      {
        "id": "lesson-2-030",
        "title": "Setting Up Scraping Infrastructure for Lead Generation 👩‍💻",
        "videoUrl": "https://drive.google.com/file/d/1TNi0h1SBtrR2MMrCDT0VLr3DshsLACCu/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 8"
      },
      {
        "id": "lesson-2-031",
        "title": "Skill Improvement in Upwork Applications",
        "videoUrl": "https://drive.google.com/file/d/1Ju3XQQ1sSxp_s-0ryHBOSGf_pHjpi061/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 8"
      },
      {
        "id": "lesson-2-032",
        "title": "Leveraging Community Posts for Lead Generation",
        "videoUrl": "https://drive.google.com/file/d/1ZQtAgqxe7sCC4v-pDQeYnVZPcp3y2mTb/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 9"
      },
      {
        "id": "lesson-2-033",
        "title": "Setting Up Scraping Infrastructure for Lead Generation 👩‍💻",
        "videoUrl": "https://drive.google.com/file/d/1ZTC0jqRHt0JsQ1Yv7_GsOkaKkHUH2c_S/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 9"
      },
      {
        "id": "lesson-2-034",
        "title": "Lead Generation Method 🚀",
        "videoUrl": "https://drive.google.com/file/d/1grQrltMpvjmY9ue4lwtKlYNsxb6jAqAO/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 10"
      },
      {
        "id": "lesson-2-035",
        "title": "Leveraging Community Posts for Lead Generation",
        "videoUrl": "https://drive.google.com/file/d/1GzLrwIYAYkAwflPRgFSJU4H9vGPuRLoi/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 10"
      },
      {
        "id": "lesson-2-036",
        "title": "Reflections on Your First Week of Upwork Applications",
        "videoUrl": "https://drive.google.com/file/d/1PyvDx6hfWM2wu9Wq8-kMh9eaTD_A0eOh/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 10"
      },
      {
        "id": "lesson-2-037",
        "title": "Community Post Retrospective 🌟",
        "videoUrl": "https://drive.google.com/file/d/1FgNim_OHj4Y0ioxyvwGdrLJs2M8mf4Ky/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 11"
      },
      {
        "id": "lesson-2-038",
        "title": "Lifestyle Audit for Small Wins 💡",
        "videoUrl": "https://drive.google.com/file/d/1t5gWDNpwvyoVdvNkKZ1s4i7DemcxS_wl/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 11"
      },
      {
        "id": "lesson-2-039",
        "title": "Skill Improvement in Upwork Applications",
        "videoUrl": "https://drive.google.com/file/d/199qNKTmz9siIsa_NB3-ryHyY8pRoCNc3/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 11"
      },
      {
        "id": "lesson-2-040",
        "title": "Building a Professional Website 💻",
        "videoUrl": "https://drive.google.com/file/d/1mxsYWkC0Iz5PX2g5VMdZFSAUGYpJle5v/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 12"
      },
      {
        "id": "lesson-2-041",
        "title": "Lead Generation Method 🚀",
        "videoUrl": "https://drive.google.com/file/d/1_CcS3odkotBHAdOq10JoUG_QteZrlHNE/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 12"
      },
      {
        "id": "lesson-2-042",
        "title": "Skill Improvement in Upwork Applications",
        "videoUrl": "https://drive.google.com/file/d/1yokK2DBalOfxIxdQcvAxkr1_dhEEAbAX/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 12"
      },
      {
        "id": "lesson-2-043",
        "title": "Crafting Irresistible Offers for Cold Email Success 💡",
        "videoUrl": "https://drive.google.com/file/d/1rsxYZtcJVJKhsNdnhi7IsjDZwAcNtyF0/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 13"
      },
      {
        "id": "lesson-2-044",
        "title": "Leveraging Community Posts for Lead Generation",
        "videoUrl": "https://drive.google.com/file/d/1y8ybqETI3jv66S08gH1inmKYK0NZ8VIM/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 13"
      },
      {
        "id": "lesson-2-045",
        "title": "Skill Improvement in Upwork Applications",
        "videoUrl": "https://drive.google.com/file/d/1i8JjqPyrPAa6btAOd4EjgVytdeyxZP3f/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 13"
      },
      {
        "id": "lesson-2-046",
        "title": "Lead Generation Method 🚀",
        "videoUrl": "https://drive.google.com/file/d/1ngr1RZzO7dwlpRHyaLiOvyEJykGL0oIw/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 14"
      },
      {
        "id": "lesson-2-047",
        "title": "Maximizing Social Media Presence 📱",
        "videoUrl": "https://drive.google.com/file/d/1TxMmaHArsVEo_64MkTvevwMC0jRImtVV/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 14"
      },
      {
        "id": "lesson-2-048",
        "title": "Skill Improvement in Upwork Applications",
        "videoUrl": "https://drive.google.com/file/d/10kwCFAY1SIuDz8cObKhkU0MpmY7ScntQ/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 14"
      },
      {
        "id": "lesson-2-049",
        "title": "Leveraging Community Posts for Lead Generation",
        "videoUrl": "https://drive.google.com/file/d/1prKYoPleBiDgaeMCONDOp-uwtZYGKDBX/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 15"
      },
      {
        "id": "lesson-2-050",
        "title": "Setting Up Webhooks for Instant Replies 🚀",
        "videoUrl": "https://drive.google.com/file/d/1grXM8sd0VGIbs3m48lXJqeB0ms23Urtd/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 15"
      },
      {
        "id": "lesson-2-051",
        "title": "Skill Improvement in Upwork Applications",
        "videoUrl": "https://drive.google.com/file/d/1d1RCkwkeJpa-cRJNCrEG24k04ZhsZg0p/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 15"
      },
      {
        "id": "lesson-2-052",
        "title": "Cold Email Sequences Strategy 📧",
        "videoUrl": "https://drive.google.com/file/d/1I-SwjZXUPbDVQ1PUC2AK7UuTxW5UtbFQ/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 16"
      },
      {
        "id": "lesson-2-053",
        "title": "Improving Sales Call Skills",
        "videoUrl": "https://drive.google.com/file/d/1Neki58SUQQatr95WIRJqGv4rZN0DNJGI/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 16"
      },
      {
        "id": "lesson-2-054",
        "title": "Skill Improvement in Upwork Applications",
        "videoUrl": "https://drive.google.com/file/d/1Vm2oOGU-PhKFOYKP_4yhp-jScLHdCTnA/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 16"
      },
      {
        "id": "lesson-2-055",
        "title": "Friction Points Resolution 🛠️",
        "videoUrl": "https://drive.google.com/file/d/1lUL7i5xuwYA_5agSgzFWL_jZP7jwGTw8/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 17"
      },
      {
        "id": "lesson-2-056",
        "title": "Leveraging Community Posts for Lead Generation",
        "videoUrl": "https://drive.google.com/file/d/1nvVgljbwvPLcZT2ErJjvgNdFKpDyj8CT/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 17"
      },
      {
        "id": "lesson-2-057",
        "title": "Week Two Retrospectives 🎥",
        "videoUrl": "https://drive.google.com/file/d/1FAJkpV3C9RJE64eAQjPKz1A6yY2roC2E/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 17"
      },
      {
        "id": "lesson-2-058",
        "title": "Application Strategy Update",
        "videoUrl": "https://drive.google.com/file/d/1Lt3YiujLkF800Adi5awf9dn79S04yB1V/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 18"
      },
      {
        "id": "lesson-2-059",
        "title": "Campaign Email Setup Guide",
        "videoUrl": "https://drive.google.com/file/d/1TekMz9Yrhezun3A0w03qz7ynG9rIJGeI/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 18"
      },
      {
        "id": "lesson-2-060",
        "title": "Community Post Analysis",
        "videoUrl": "https://drive.google.com/file/d/14mAFp-BKm7G2jPUbUV8Joga2-Ry5nNBL/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 18"
      },
      {
        "id": "lesson-2-061",
        "title": "1. Send 5 applications - Month 1 · Maker School - https://www.skool.com/maker-school-7775/classroom/9376603b?md=64bf23f7220a49b6be9bf239ef15c335 - 11 September 2024",
        "videoUrl": "https://drive.google.com/file/d/1JpL6PibJQzHGk9k3nQzZDNR4hx_S420q/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 19"
      },
      {
        "id": "lesson-2-062",
        "title": "Email Campaign Checklist 📧",
        "videoUrl": "https://drive.google.com/file/d/1_rcUJlbQEtFTyjpKgLKwaGFFSwC1GY9m/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 19"
      },
      {
        "id": "lesson-2-063",
        "title": "Improving Cold Email Sequences 📧",
        "videoUrl": "https://drive.google.com/file/d/1lPUwlzRZ8ZIAJuEkWcGPfB5WsUykh6sR/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 19"
      },
      {
        "id": "lesson-2-064",
        "title": "1. Send 5 applications - Month 1 · Maker School - https://www.skool.com/maker-school-7775/classroom/9376603b?md=28f88cc6c04043c49fcd16be222ce7b3 - 11 September 2024",
        "videoUrl": "https://drive.google.com/file/d/1YmIbEAz4YLv8mBARQhWPAhNIuYr4baaG/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 20"
      },
      {
        "id": "lesson-2-065",
        "title": "Email Marketing Masterclass 📧",
        "videoUrl": "https://drive.google.com/file/d/167B0Rz6x23VrnTn-gC35TfD5dyGxHluT/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 20"
      },
      {
        "id": "lesson-2-066",
        "title": "Leveraging Community Posts for Lead Generation",
        "videoUrl": "https://drive.google.com/file/d/19Oa92iSLB2YqOiWM-133iroZBnpzYClW/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 20"
      },
      {
        "id": "lesson-2-067",
        "title": "1. Send 5 applications",
        "videoUrl": "https://drive.google.com/file/d/1RNH2VGIGrbn-vm8bxcsGAVJIZlWaFAav/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 21"
      },
      {
        "id": "lesson-2-068",
        "title": "Turning on Email Sending Today",
        "videoUrl": "https://drive.google.com/file/d/1QA6TH8em9DdotP42ZjIoir4Xz_S_hJlJ/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 21"
      },
      {
        "id": "lesson-2-069",
        "title": "1. Send 5 applications",
        "videoUrl": "https://drive.google.com/file/d/13hF5IfZRUOtIgEjJmYEevWt59PErCCdD/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 22"
      },
      {
        "id": "lesson-2-070",
        "title": "Leveraging Community Posts for Lead Generation",
        "videoUrl": "https://drive.google.com/file/d/1_O_ZtBEbBdk4xoJqqkJJzSgm6Bze16_m/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 22"
      },
      {
        "id": "lesson-2-071",
        "title": "1. Send 5 applications",
        "videoUrl": "https://drive.google.com/file/d/1P5oCbG50PPwcuUtY6jUiHoKvNJrDrVMi/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 23"
      },
      {
        "id": "lesson-2-072",
        "title": "Retrospective on Proposals",
        "videoUrl": "https://drive.google.com/file/d/1mRr8dgHnD1VhSDM2OgVJJsdkA5B_6qyH/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 23"
      },
      {
        "id": "lesson-2-073",
        "title": "Leveraging Community Posts for Lead Generation",
        "videoUrl": "https://drive.google.com/file/d/1T_fn5zpJmEQzY6L1kPSXkK5_6nf7Izwo/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 24"
      },
      {
        "id": "lesson-2-074",
        "title": "Upwork Retrospective Review",
        "videoUrl": "https://drive.google.com/file/d/1_OwPrTB3UtQchKQYCFm6eiIq27xK0ymM/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 24"
      },
      {
        "id": "lesson-2-075",
        "title": "1. Send 5 applications",
        "videoUrl": "https://drive.google.com/file/d/1YNkT8PbDYvJM0ybtDKQxLLOIu3aOTIvN/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 25"
      },
      {
        "id": "lesson-2-076",
        "title": "Lead Generation Method 🚀",
        "videoUrl": "https://drive.google.com/file/d/1SnmgC9nCFBhNKtzCrSnakAFcKlx7xj8m/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 25"
      },
      {
        "id": "lesson-2-077",
        "title": "1. Send 5 applications",
        "videoUrl": "https://drive.google.com/file/d/193xzdM1fl3DYaT-quM-G_UfkomV3c-EY/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 26"
      },
      {
        "id": "lesson-2-078",
        "title": "Leveraging Community Posts for Lead Generation",
        "videoUrl": "https://drive.google.com/file/d/1HMTAC_aQWMgkzHB8zJ81xychQ21TvAKT/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 26"
      },
      {
        "id": "lesson-2-079",
        "title": "1. Send 5 applications",
        "videoUrl": "https://drive.google.com/file/d/1ypiCa8-LC5diQyoYI3T07990I2Y2ksaD/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 27"
      },
      {
        "id": "lesson-2-080",
        "title": "Building a CRM for Effective Customer Management 💼",
        "videoUrl": "https://drive.google.com/file/d/1HXm-eZpSSja6RcxhqfMBNA19IDSTGd6u/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 27"
      },
      {
        "id": "lesson-2-081",
        "title": "1. Send 5 applications",
        "videoUrl": "https://drive.google.com/file/d/1CO4HGeg-L5iCGO5V7WtvC-eUAgdl5tTN/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 28"
      },
      {
        "id": "lesson-2-082",
        "title": "Cold Email Retrospective Analysis",
        "videoUrl": "https://drive.google.com/file/d/1cVPWsjfYeUiUTO9q1hjeuqjpiE-ELDY1/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 28"
      },
      {
        "id": "lesson-2-083",
        "title": "Leveraging Community Posts for Lead Generation",
        "videoUrl": "https://drive.google.com/file/d/1wJk-gFGnyXuIWWIM4T35jcgKmCAqP5n3/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 28"
      },
      {
        "id": "lesson-2-084",
        "title": "1. Send 5 applications",
        "videoUrl": "https://drive.google.com/file/d/19FPcrWnv6Nk_IoXNqn9S5d943PcTWV49/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 29"
      },
      {
        "id": "lesson-2-085",
        "title": "Improving Cold Email Sequences 📧",
        "videoUrl": "https://drive.google.com/file/d/1pGu5FQ0EEbkcJ_eAhdMSdn2K6PTVl0hR/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 29"
      },
      {
        "id": "lesson-2-086",
        "title": "Cold Email Retrospective Analysis",
        "videoUrl": "https://drive.google.com/file/d/1EP-U6aUc4h09H88dha5qWROEZjwGpzhh/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 30"
      },
      {
        "id": "lesson-2-087",
        "title": "Community Posts Progress Update",
        "videoUrl": "https://drive.google.com/file/d/1fuY0P097QlKfwrW7C9UDePj_Oyn5NhKQ/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 30"
      },
      {
        "id": "lesson-2-088",
        "title": "Farewell to Video Messages! 🎥",
        "videoUrl": "https://drive.google.com/file/d/17appqUHWf6zSuhs-5diqPNGIaPSak3kF/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 30"
      }
    ],
    "materials": [
      {
        "id": "material-2-001",
        "title": "4. Learn automation first - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1nrxvJ_-m421KQ60dOqMwuEm9gMl5-_BZ/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "About Month 1"
      },
      {
        "id": "material-2-002",
        "title": "1. Choose operating name - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/15nxUkov97IweVV412NXutK6U7D3ESUaK/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 1"
      },
      {
        "id": "material-2-003",
        "title": "2. Set up cold email & start warmup - Maker School Month 1 · Make Money With Make.com",
        "type": "Google Doc",
        "url": "https://docs.google.com/document/d/1q-gHjX_ytQOBfoxhqI35NW8HcMWkOa4NGt-k8p2G8J8/edit?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 1"
      },
      {
        "id": "material-2-004",
        "title": "2. Set up cold email & start warmup - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1hs9W4aI_tofS_s71NVFBoidZRHDzfCpb/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 1"
      },
      {
        "id": "material-2-005",
        "title": "1. Select niche(s) - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1GBjggOG3qPLFMoHtCQq6BE45RWRN8XDN/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 2"
      },
      {
        "id": "material-2-006",
        "title": "2. Build portfolio & 3 case studies - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/10NZCC_LqeLDRpK_R_9I4d8UNHzJ4vJs8/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 2"
      },
      {
        "id": "material-2-007",
        "title": "3. Create Upwork profile - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1StYVdeFc5ofdXSrBj7wYOwwtuSL6dnHb/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 2"
      },
      {
        "id": "material-2-008",
        "title": "1. Build Upwork application template - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1GNCC60Gi1lM1yCdZjxvNzKY8RBXKqlMx/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 3"
      },
      {
        "id": "material-2-009",
        "title": "2. Dry-run 5 applications - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1z9f-yxWiTlQSMnTiEtZoiNlQ5mKjjMCi/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 3"
      },
      {
        "id": "material-2-010",
        "title": "3. Join 3 niche-related communities - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1NAY0RfopuCFmDPIdKxIcVvtzya9iq0iM/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 3"
      },
      {
        "id": "material-2-011",
        "title": "4. Set up time tracker(s) - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1pupkeZP5IpXuTw0BkOfe2F1BpOiLDWi4/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 3"
      },
      {
        "id": "material-2-012",
        "title": "5. Set up DKIM - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1KAMGOsZSI6QSIfrFBtIzUO8HlNQh9HBp/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 3"
      },
      {
        "id": "material-2-013",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1y6LfEjSh2Rz3BJ7YZCGOrDpc0bGg_iLw/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 4"
      },
      {
        "id": "material-2-014",
        "title": "2. Create community post calendar - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1L8lftaYAYVkZj31lqDW5BjrA56bEkK6l/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 4"
      },
      {
        "id": "material-2-015",
        "title": "3. Memorize sales skeleton - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1zSpmk5qCroWZ8G_Fxfkc5mBxNv4VUXos/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 4"
      },
      {
        "id": "material-2-016",
        "title": "4. Set up call recording - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1EQETtlNkoi2L01WgZr47Kw3-nuucSVWN/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 4"
      },
      {
        "id": "material-2-017",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1iBLRKsIE1QQ9jtcFRrnhELeUqTghQKZn/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 5"
      },
      {
        "id": "material-2-018",
        "title": "2. Create first community post - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1-eyc_AVr5WcLu1nVEXvQs0bpzp_Cxm-o/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 5"
      },
      {
        "id": "material-2-019",
        "title": "3. Create proposal template - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1sPX6fF8SMOIV42uqGyznyPxWh5OdOYx8/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 5"
      },
      {
        "id": "material-2-020",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/15C3sGoK0j2mCqmVptF8WaWUAIj2XiENE/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 6"
      },
      {
        "id": "material-2-021",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1RIVmIsJXURVPuii4I2AUBNAyZLXNKDDR/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 6"
      },
      {
        "id": "material-2-022",
        "title": "3. Set up Stripe payment processor(s) - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1XNIEYcTNbf97DmOd_jltB2aIVhea4VxD/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 6"
      },
      {
        "id": "material-2-023",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1n7uVM_5oL54GFZXkJ53E2rM3lUAkBcj7/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 7"
      },
      {
        "id": "material-2-024",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1ZUSw08TknGLRXNGPY4mi_oWFxb-Gfgiu/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 7"
      },
      {
        "id": "material-2-025",
        "title": "3. Set up lifestyle audit - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1sYCA1Yd2FnEClAmnStQuLzz08F3gS1lg/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 7"
      },
      {
        "id": "material-2-026",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com (4)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1OHIigV-GggmofHrr5Z88fWScPmuiwa5f/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 8"
      },
      {
        "id": "material-2-027",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1fN2Vp2lqiDYtHccfk9ReGVz88seXd3nd/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 8"
      },
      {
        "id": "material-2-028",
        "title": "3. Set up scraping infra - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1YeFwZKd9QLl2s8kYEYBmVhd04LWoGSeq/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 8"
      },
      {
        "id": "material-2-029",
        "title": "Lead Personalization Flow (2)",
        "type": "JSON",
        "url": "https://drive.google.com/file/d/1FvAUsOgWXFtMZJ9rodsfj_pvnEWWj3mM/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 8"
      },
      {
        "id": "material-2-030",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com (5)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/14bCO_XSRAzB3ak_Eps4DNSgz4HkhtpYj/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 9"
      },
      {
        "id": "material-2-031",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1R-6P8s0B7UUvSLSpYQgx0tIxZk8T0BOV/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 9"
      },
      {
        "id": "material-2-032",
        "title": "1. Upwork application retrospective - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1lNt55SitN1I7NOCmpp8WHvErXbWFl0cb/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 10"
      },
      {
        "id": "material-2-033",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (4)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1nhbIT8Gp8ex4KmR6inD0okDTGDhHUD6Y/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 10"
      },
      {
        "id": "material-2-034",
        "title": "3. Scrape 1,000 leads - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1KLYWG1CLzmLtWbrU4BPabrd6l2ihf4N6/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 10"
      },
      {
        "id": "material-2-035",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com (6)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1reuH3EJ9RxB4cOVAtyDr4bUPOIf7xqie/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 11"
      },
      {
        "id": "material-2-036",
        "title": "2. Community post retrospective - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1D0YhiNC6jhX-MmitsmgZeqQ5HQafPWHN/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 11"
      },
      {
        "id": "material-2-037",
        "title": "3. Solve 5 friction points - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Qh1b4P3xiS5OO4gi7f4OsAFsb3ftR6Jw/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 11"
      },
      {
        "id": "material-2-038",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com (7)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/14AsUfI83kgvXZhW8DcqWvu8pjwblJbnb/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 12"
      },
      {
        "id": "material-2-039",
        "title": "2. Create website - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1iSiUWNjoZQAISu1jzmOnYOx3fWZ9fosP/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 12"
      },
      {
        "id": "material-2-040",
        "title": "3. Scrape 1,000 leads - Maker School Month 1 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1qjDG8eMYCuJsZaqANx5kTPZ4X6RkmUkd/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 12"
      },
      {
        "id": "material-2-041",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com (8)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1m1eZLbEr_KAT929Tr4DMYein-uG87in0/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 13"
      },
      {
        "id": "material-2-042",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (5)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1xB3ytZzQPxbcesSqKdKUZf4IZ5YIZB7z/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 13"
      },
      {
        "id": "material-2-043",
        "title": "3. Write six offers - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1W__y-KWrPpc2OD7DAeLsmHKaFMiX03qx/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 13"
      },
      {
        "id": "material-2-044",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com (9)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1u7plgA7NwhCCKySeDdsNpBeabGSsYeBx/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 14"
      },
      {
        "id": "material-2-045",
        "title": "2. Create social media profiles & links - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Q3dYYdoUiCJqC2P9kTt719r_VOsBM7Q4/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 14"
      },
      {
        "id": "material-2-046",
        "title": "3. Scrape 1,000 leads - Maker School Month 1 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1STtpmoiccDJAnugnfuMuM77WRKvwdSD_/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 14"
      },
      {
        "id": "material-2-047",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com (10)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/14im2r9tCTkV9Kb7iRhV1erjt1QoA6RJB/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 15"
      },
      {
        "id": "material-2-048",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (6)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1QVlYd650PjyMmHDBtWuh3hYtHhEftiP5/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 15"
      },
      {
        "id": "material-2-049",
        "title": "3. Set up cold email webhooks - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1cKFp1s6ACIAGA1622AbVhQrRQ3ODogXw/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 15"
      },
      {
        "id": "material-2-050",
        "title": "1. Send 10 applications - Maker School Month 1 · Make Money With Make.com (11)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1WRDcM7FEvwRyTQjU8RLNiMt77buoVl0O/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 16"
      },
      {
        "id": "material-2-051",
        "title": "2. Call(s) retrospective - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1nsDw9oKTU6Xn5pCh7RUUCh10FLJtWqtU/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 16"
      },
      {
        "id": "material-2-052",
        "title": "3. Write six cold email sequences - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1w3W06pW1RTPaiN8g0uDosW0o_4auEZCS/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 16"
      },
      {
        "id": "material-2-053",
        "title": "1. Upwork application retrospective - Maker School Month 1 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1W6UF5tvNdccDDYbovJu5dEmnVVil_rWG/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 17"
      },
      {
        "id": "material-2-054",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (7)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1R5VjrHBTe5JMPejJvnFU2WtwVfessmJq/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 17"
      },
      {
        "id": "material-2-055",
        "title": "3. Solve 5 friction points - Maker School Month 1 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/106FLQdPXkb5a4uAMTDEbCEl87pO99v3P/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 17"
      },
      {
        "id": "material-2-056",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1zhTGMg32FHti62LjYmkWwOcjKcIl5v0F/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 18"
      },
      {
        "id": "material-2-057",
        "title": "2. Community post retrospective - Maker School Month 1 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1jpwnadeAeq7_J6KWcwP9V72vQB6XaEP8/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 18"
      },
      {
        "id": "material-2-058",
        "title": "3. Double check DKIM, DMARC, SPF - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1BKbwghFx8diW5TPpk_XFztsCLItuXDZU/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 18"
      },
      {
        "id": "material-2-059",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1dno6NlJhpDlTAZK3N-UaEESUXuJcuGYB/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 19"
      },
      {
        "id": "material-2-060",
        "title": "2. Run through final pre-send cold email checklist - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1oyKy33kasD8NOT0SysYkLJmWXqZoTofF/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 19"
      },
      {
        "id": "material-2-061",
        "title": "3. Solve 5 friction points - Maker School Month 1 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1NL0PEqh8vKjSKWo7vwM3ZPRO-4lZJ8o2/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 19"
      },
      {
        "id": "material-2-062",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1MBHmOclTcNYPbzaqlR9TrGTmRue5c5BJ/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 20"
      },
      {
        "id": "material-2-063",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (8)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1AVRoI9SoSJ-nbmd7F3c9Qj3dTH51oz5h/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 20"
      },
      {
        "id": "material-2-064",
        "title": "3. Read through cold email masterclass - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1L8cXBbPnAzYTPWqR-6xYwPA3ibG9J8Rb/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 20"
      },
      {
        "id": "material-2-065",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1VfreHjL8E-Yl1KQ0yUiuqegOPLQHyjtX/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 21"
      },
      {
        "id": "material-2-066",
        "title": "2. Turn on email - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1uM0vi_Yp1EwL5gdAwtktZEFh8ZkUiuDl/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 21"
      },
      {
        "id": "material-2-067",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com (4)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1TBThp91oHuAuu2XWMAs989cxMluKAWon/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 22"
      },
      {
        "id": "material-2-068",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (9)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1913kTq9N-ZIH5pQ7rbn932Trli2JWPMx/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 22"
      },
      {
        "id": "material-2-069",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com (5)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1W0rV004VbL8p_YuSr_kWJa66RWMPYfiv/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 23"
      },
      {
        "id": "material-2-070",
        "title": "2. Proposal retrospective - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1AboWDKVlHJb9WSqhBSQL6Ko33Qe6W1oN/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 23"
      },
      {
        "id": "material-2-071",
        "title": "1. Upwork application retrospective - Maker School Month 1 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/150KX1yMY0t3DBhCpa5Xwjkf68l7JQGrA/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 24"
      },
      {
        "id": "material-2-072",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (10)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1aGIUWkOLssNC6BwK4KnnjwBjp9yIGGW5/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 24"
      },
      {
        "id": "material-2-073",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com (6)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1J3tQFZyqhbKuNignGmt4Yt8GnU7u7G9r/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 25"
      },
      {
        "id": "material-2-074",
        "title": "2. Scrape 1,000 leads - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1BH30A3WpD1QyRtp17dUlu_7w1_knZUoV/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 25"
      },
      {
        "id": "material-2-075",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com (7)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/13EDCEICgS_jR7cfO0MPCk61K7WpvsNc3/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 26"
      },
      {
        "id": "material-2-076",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (11)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1xwG7zSIYilK56NeUrL4Yi2uM3LThw-XV/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 26"
      },
      {
        "id": "material-2-077",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com (8)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1f88u1oAwcgyRh58wgZwrgZ8b84W62-Si/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 27"
      },
      {
        "id": "material-2-078",
        "title": "2. Set up CRM - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1fP9Jt_55hL3K1rM0x0I86VoUAWMUw6sO/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 27"
      },
      {
        "id": "material-2-079",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com (9)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1FMQEpShMAYjkSmSJgAjBSbpHz_UeIOjE/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 28"
      },
      {
        "id": "material-2-080",
        "title": "2. Create next community post - Maker School Month 1 · Make Money With Make.com (12)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1YBUxzmYIoWVzbWTIb1kO2MRJr54K0RbI/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 28"
      },
      {
        "id": "material-2-081",
        "title": "3. Cold email retrospective - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1QKAsERjljLZmkZy4MuYhX9VknqyFKfOY/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 28"
      },
      {
        "id": "material-2-082",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com (10)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1-B8Rtz6XModE-HQOxXnUX07njNrF-wOO/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 29"
      },
      {
        "id": "material-2-083",
        "title": "2. Write 3 new cold email sequences - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/160Y8XFfpU4onZAtXUGSsihiec7Yo3_IG/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 29"
      },
      {
        "id": "material-2-084",
        "title": "1. Send 5 applications - Maker School Month 1 · Make Money With Make.com (11)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1LrTS9GjZmNCYCaiV9YmpHDfIZQxlBbv3/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 30"
      },
      {
        "id": "material-2-085",
        "title": "2. Create last community post - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1yqQEzKY8IpcNF_obash5WlRVZCXClWAj/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 30"
      },
      {
        "id": "material-2-086",
        "title": "3. Month 1 retrospective - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/19nRkvHOMX3MfPFrmpN1pQ81yR2zzTBnd/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 30"
      },
      {
        "id": "material-2-087",
        "title": "Congratulations! You've won a day off - Maker School Month 1 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Nj8Gx30JS4bBRDNH6Te2a3CMubjBjyb5/view?usp=drivesdk",
        "chapterId": "chapter-month-1",
        "chapterTitle": "Month 1",
        "subchapter": "Day 31"
      }
    ]
  },
  {
    "id": "chapter-month-2",
    "title": "Month 2",
    "order": 2,
    "driveUrl": "https://drive.google.com/drive/folders/1qt6gkNG5MC3f4Z3WbFRAcxH0nID7cSZ8",
    "lessons": [
      {
        "id": "lesson-3-001",
        "title": "Building Momentum Towards Success",
        "videoUrl": "https://drive.google.com/file/d/1TeUJEnyXpXUDrelBap8ZH5rnu8sFjVUM/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "lesson-3-002",
        "title": "Month 2 Program Update 📅",
        "videoUrl": "https://drive.google.com/file/d/1vXb6sKy4W66ADIwoU7hWPCn9jGw2UF_V/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "lesson-3-003",
        "title": "Month Two of Makerschool 🌟",
        "videoUrl": "https://drive.google.com/file/d/17r5VU6B4Zdi5XZOg_JeQQ-4DFshYvcmj/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "lesson-3-004",
        "title": "Seeking Feedback and Growth 🌱",
        "videoUrl": "https://drive.google.com/file/d/1D94LgvQVEmzPqOXfJfNS-Uru2wMt4liH/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "lesson-3-005",
        "title": "Leveraging Affiliate Links for Increased Revenue",
        "videoUrl": "https://drive.google.com/file/d/1fnSEq-D7cBQQCBf2z9qRaDmr1V3vSVGi/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 1"
      },
      {
        "id": "lesson-3-006",
        "title": "Lifestyle Audit Progress Update",
        "videoUrl": "https://drive.google.com/file/d/1vS6c70nFhWFG4s5M4TnFYlMTwIizutt2/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 1"
      },
      {
        "id": "lesson-3-007",
        "title": "Shifting Lead Sources 🔄",
        "videoUrl": "https://drive.google.com/file/d/1Dwa-WU468AzGs6ytLq3GoJmJTq3a0P8r/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 1"
      },
      {
        "id": "lesson-3-008",
        "title": "Community Post Strategy Update",
        "videoUrl": "https://drive.google.com/file/d/1jNousVUazuk6JGQEHDZU3lA2-DsZK7I-/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 2"
      },
      {
        "id": "lesson-3-009",
        "title": "Setting Up Software Affiliate Links",
        "videoUrl": "https://drive.google.com/file/d/1mNhVHfKHMM4TLJDNvzTpAffR-dckL2jD/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 2"
      },
      {
        "id": "lesson-3-010",
        "title": "Upwork Application Strategy 🚀",
        "videoUrl": "https://drive.google.com/file/d/19wsg7XZbzyz5gA79koGf84mhEAitekm7/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 2"
      },
      {
        "id": "lesson-3-011",
        "title": "Application Vetting Strategy",
        "videoUrl": "https://drive.google.com/file/d/1WBvHV0Q_B8tMYYHn9I1S4PLqq_d_5iuC/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 3"
      },
      {
        "id": "lesson-3-012",
        "title": "Automating Proposal Generation for Increased Efficiency and Conversion Rates 💼",
        "videoUrl": "https://drive.google.com/file/d/1EzBLMwLEfrvTPUXYPGZ9U4fKCXToVy7v/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 3"
      },
      {
        "id": "lesson-3-013",
        "title": "Setting Up Software Affiliate Links 👩‍💻",
        "videoUrl": "https://drive.google.com/file/d/1fHQJBmNnoc1sPAmTE9LweB5cLeW1hmln/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 3"
      },
      {
        "id": "lesson-3-014",
        "title": "Community Post Automation Ideas",
        "videoUrl": "https://drive.google.com/file/d/102EuSt6J32811RyUyVu8LHNksz-hBWLV/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 4"
      },
      {
        "id": "lesson-3-015",
        "title": "Prioritizing Upwork Applications 📝",
        "videoUrl": "https://drive.google.com/file/d/1ofrqM8e9a30vo3d4BWeVR7Nq-PJchKrZ/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 4"
      },
      {
        "id": "lesson-3-016",
        "title": "Scaling Your Business with Project Management Systems 🚀",
        "videoUrl": "https://drive.google.com/file/d/15xe9yV7xn9o1QCO7PwvNBtIb15vpd80-/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 4"
      },
      {
        "id": "lesson-3-017",
        "title": "1. Send 4 applications - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=6c3be6310cc14c71b6ea7ea0c33a5eaf - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/1JWq0d_0Oa9oEbXXm8FqLT-NV49JMdUVw/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 5"
      },
      {
        "id": "lesson-3-018",
        "title": "Cold Email Retrospective 📧",
        "videoUrl": "https://drive.google.com/file/d/12zAINj0BBsPuV0AznJeLaNAItBPXJ9Mf/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 5"
      },
      {
        "id": "lesson-3-019",
        "title": "1. Send 4 applications - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=b2397dc5c05841189aec480ac0e0f22b - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/1vpNPmtpbqyA1nyop7RVB-Sv3B2pXKWtX/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 6"
      },
      {
        "id": "lesson-3-020",
        "title": "Building a Post Calendar 📅",
        "videoUrl": "https://drive.google.com/file/d/1pfp2ILMo9ImuML3RStu6M_N6zHNb5gju/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 6"
      },
      {
        "id": "lesson-3-021",
        "title": "Maximizing Your Return on Investment 💰",
        "videoUrl": "https://drive.google.com/file/d/1u5WmLthNXSD16HmRzhQrBYHSs8dgY33l/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 6"
      },
      {
        "id": "lesson-3-022",
        "title": "A Day of Leisure and Recharge",
        "videoUrl": "https://drive.google.com/file/d/1Y1jnfDn3MWn-kTd2g3ZbVLYZAwvWOcGS/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 7"
      },
      {
        "id": "lesson-3-023",
        "title": "Niche Down Your Upwork Profile 🎯",
        "videoUrl": "https://drive.google.com/file/d/1udOZ4s4TWxtwLV1gn0DdRodyAaeWa9ZI/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 8"
      },
      {
        "id": "lesson-3-024",
        "title": "Progress Update on Upwork Applications",
        "videoUrl": "https://drive.google.com/file/d/1gix1B_GHEZ_00Uin2IqZ-UcswBHeiB24/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 8"
      },
      {
        "id": "lesson-3-025",
        "title": "Upwork Retrospective Insights 🎯",
        "videoUrl": "https://drive.google.com/file/d/12hvL8GHWGaqkimFRCale4lfaOmOYJLGu/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 8"
      },
      {
        "id": "lesson-3-026",
        "title": "Efficient Community Post Calendar Strategy 📅",
        "videoUrl": "https://drive.google.com/file/d/1AyU28M1WGvsaDP3WBWPVWUIegcdt-bHU/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 9"
      },
      {
        "id": "lesson-3-027",
        "title": "Lifestyle Audit Strategies 📊",
        "videoUrl": "https://drive.google.com/file/d/1zX1ecCmmYUvJO7RtWLS1unuIlJGDpQ4s/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 9"
      },
      {
        "id": "lesson-3-028",
        "title": "Upwork Application Tips",
        "videoUrl": "https://drive.google.com/file/d/1aCGS3led6_79op2oMMW-WdbhuLL6RcDj/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 9"
      },
      {
        "id": "lesson-3-029",
        "title": "1. Send 5 applications - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=cdc79b3283224c1fb22a7b9a0d5b2e55 - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/13YFkpp8fKECGPAif7ZHlI28ggu_aXq7J/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 10"
      },
      {
        "id": "lesson-3-030",
        "title": "Niching Down Cold Email Campaigns 📧",
        "videoUrl": "https://drive.google.com/file/d/1L4bDbc3vAsJv34fOg0n7zO3v9C2KR1eF/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 10"
      },
      {
        "id": "lesson-3-031",
        "title": "Setting Up Affiliate Links Tutorial",
        "videoUrl": "https://drive.google.com/file/d/1AP8DIxKPi4_dkjEp1_nfeAjZ_cTV5khA/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 10"
      },
      {
        "id": "lesson-3-032",
        "title": "Community Engagement Strategies for Increased ROI 💡",
        "videoUrl": "https://drive.google.com/file/d/1Y5dujkqavEAJWyNTw0UwUIrsQ1_C0CYS/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 11"
      },
      {
        "id": "lesson-3-033",
        "title": "Generating Specific Niche Leads for Email Campaigns 🎯",
        "videoUrl": "https://drive.google.com/file/d/1ByfCM540VZ9-_fR05J1PAZJe_mgPuJul/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 11"
      },
      {
        "id": "lesson-3-034",
        "title": "Upwork Applications Update 🚀",
        "videoUrl": "https://drive.google.com/file/d/1tXe8nrAEzq3fQ0HJ6FqPZIuLrJq5iMQ8/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 11"
      },
      {
        "id": "lesson-3-035",
        "title": "1. Send 5 applications - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=bb8a961309d744b9ad897625b4be8bbe - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/1Hoc6GTbAINj7Qw5eNYSAgTV5F93a2Si9/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 12"
      },
      {
        "id": "lesson-3-036",
        "title": "Cold Email Retrospective Update",
        "videoUrl": "https://drive.google.com/file/d/1-wwoSEr9l756CHAuhudMO1y6VlJSwvho/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 12"
      },
      {
        "id": "lesson-3-037",
        "title": "Niche Down Strategy 🚀",
        "videoUrl": "https://drive.google.com/file/d/1PKjYKX7JRig_5_B_rXZMAxA3HPyJexA_/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 12"
      },
      {
        "id": "lesson-3-038",
        "title": "Boosting Your Upwork Applications 🚀",
        "videoUrl": "https://drive.google.com/file/d/134NAGl47Ab7vtisJx2H_A3WOt7pmq4Bh/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 13"
      },
      {
        "id": "lesson-3-039",
        "title": "Creating Niche Community Posts 🌟",
        "videoUrl": "https://drive.google.com/file/d/1h_JxF91_hC-6VDnZw5PxnifvXKKvJ9xi/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 13"
      },
      {
        "id": "lesson-3-040",
        "title": "Financial Dashboard Creation Process",
        "videoUrl": "https://drive.google.com/file/d/1oydE3hwx9ZGkXjwsMC8ORA4K1pMj_52k/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 13"
      },
      {
        "id": "lesson-3-041",
        "title": "A Day of Leisure and Recharge",
        "videoUrl": "https://drive.google.com/file/d/1iDyqPWpH6illKr2Cnh5BrwIMNCUQdH7S/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 14"
      },
      {
        "id": "lesson-3-042",
        "title": "Boosting Affiliate Signups! 🚀",
        "videoUrl": "https://drive.google.com/file/d/1RclYRAazpOu3Det7Q36BrES_mG4LrBGu/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 15"
      },
      {
        "id": "lesson-3-043",
        "title": "Boosting ROI Sales Activity 💼",
        "videoUrl": "https://drive.google.com/file/d/1jn8oZkduXRjjrkRC0vnHi8BVySbhWh2E/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 15"
      },
      {
        "id": "lesson-3-044",
        "title": "Community Post Solution 🌟",
        "videoUrl": "https://drive.google.com/file/d/1XzGzBGoO7_NpVSfkMaQCQxUeONBth0wS/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 15"
      },
      {
        "id": "lesson-3-045",
        "title": "1. Send 5 applications - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=87b84d9d165942e09833c844df305df4 - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/1LizEGwfs0ZOvQADfKOK8fgvQRjATi1vP/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 16"
      },
      {
        "id": "lesson-3-046",
        "title": "Exploring Affiliate Links and Platforms",
        "videoUrl": "https://drive.google.com/file/d/1EGMCGQ_IDi_8PcguRnR5Oi0xhmMQi0D0/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 16"
      },
      {
        "id": "lesson-3-047",
        "title": "Tackling Upwork Applications Efficiently",
        "videoUrl": "https://drive.google.com/file/d/19rF8mAhfwu5cpGuvHkfm3oj9N5L0xIK2/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 16"
      },
      {
        "id": "lesson-3-048",
        "title": "1. Send 5 applications - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=172df0b4b83641e28ba3e774bf45d612 - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/15Sxqny6JPixWdr5ECoWx3pqlcsyCs3QT/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 17"
      },
      {
        "id": "lesson-3-049",
        "title": "Creating a Community Post 🌟",
        "videoUrl": "https://drive.google.com/file/d/1LPX8psGuL_GUFKT3ypGhdodH-pYPd0oB/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 17"
      },
      {
        "id": "lesson-3-050",
        "title": "1. Send 5 applications - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=f93892a669824cffbdefc3ff6df6ce1d - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/1oSJuHzRhgd5ZAee0J4oWQk3WolPNYokA/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 18"
      },
      {
        "id": "lesson-3-051",
        "title": "Lead Generation Strategies Update",
        "videoUrl": "https://drive.google.com/file/d/1o4lqNv1lAJI22B-Wbt6w4eKp7cLXnRDF/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 18"
      },
      {
        "id": "lesson-3-052",
        "title": "Retrospective on Upwork Applications Progress",
        "videoUrl": "https://drive.google.com/file/d/1r0I1o8Xgx64jwxMm7-0-Y4S9WftGiS3s/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 18"
      },
      {
        "id": "lesson-3-053",
        "title": "Cold Email Retrospective Analysis 📧",
        "videoUrl": "https://drive.google.com/file/d/145YazYbijgIlPEMIN6IMfI9_amyybVqH/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 19"
      },
      {
        "id": "lesson-3-054",
        "title": "Creating Community Posts 🌟",
        "videoUrl": "https://drive.google.com/file/d/1fRVog18Fkuh5-YlFMZO-BEL7C6sqi4XG/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 19"
      },
      {
        "id": "lesson-3-055",
        "title": "Friendly Reminder for Upwork Applications",
        "videoUrl": "https://drive.google.com/file/d/1eAStxBEfO0ROWJVrhqJw74l9VAX5yxmB/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 19"
      },
      {
        "id": "lesson-3-056",
        "title": "1. Send 5 applications - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=6a57cba05c2e4a7594b9f02c3e0f8dfb - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/1NK5yQPdMnFfAzsN_YpUeP5L-yBAEpxS4/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 20"
      },
      {
        "id": "lesson-3-057",
        "title": "Building Productized Systems 💡",
        "videoUrl": "https://drive.google.com/file/d/1cB6y2dsnUCaksfKgTdkitZ4JrXUOngPe/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 20"
      },
      {
        "id": "lesson-3-058",
        "title": "A Day of Leisure and Recharge",
        "videoUrl": "https://drive.google.com/file/d/1EMudydXyNJ6GLhYDlQnKZ9sHKG-pD0US/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 21"
      },
      {
        "id": "lesson-3-059",
        "title": "Daily Task Update",
        "videoUrl": "https://drive.google.com/file/d/14rG7gUalakIS4yaviJV52LO4B1DbYCaR/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 22"
      },
      {
        "id": "lesson-3-060",
        "title": "Recycling Community Posts",
        "videoUrl": "https://drive.google.com/file/d/128OdDgSbCqqFztu6B7Aim9QAasiA1sEy/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 22"
      },
      {
        "id": "lesson-3-061",
        "title": "Solving Friction Points Efficiency",
        "videoUrl": "https://drive.google.com/file/d/18Q66k4ZIlE_QPCo3G_OBORmZhBirh0Rw/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 22"
      },
      {
        "id": "lesson-3-062",
        "title": "1. Send 4 applications - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=6064b2458a9d4f3db0180cfe8463312b - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/1LetM1bEUNxnPJoTWO1Wk9ahboXPKUUPA/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 23"
      },
      {
        "id": "lesson-3-063",
        "title": "Completing Software Affiliate Links",
        "videoUrl": "https://drive.google.com/file/d/19cjgoLMCUwcVB6SyfLrgd3yqmfsZ72dn/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 23"
      },
      {
        "id": "lesson-3-064",
        "title": "2. Create next community post - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=791f94f69fb44efe9acdcaadbcef5632 - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/1-8g_o6y8VDak8KMEcJ1ELiJkGfxA6QIQ/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 24"
      },
      {
        "id": "lesson-3-065",
        "title": "Upwork Application Strategy",
        "videoUrl": "https://drive.google.com/file/d/1mQ69jgu2XJszzSh-Gm4cxivC3rFIdGBT/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 24"
      },
      {
        "id": "lesson-3-066",
        "title": "2. Create 3 retainer products - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=db12636522c6449483e8cb8a24ab3957 - 16 October 2024",
        "videoUrl": "https://drive.google.com/file/d/1iCUD1Wes8Lp5kkaOayCKFWnm8CScuxfb/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 25"
      },
      {
        "id": "lesson-3-067",
        "title": "Maximizing Upwork Application Success",
        "videoUrl": "https://drive.google.com/file/d/1JrWHNV47Y45VkpegC5xVD2F1dQ5tOutE/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 25"
      },
      {
        "id": "lesson-3-068",
        "title": "Quick Lead Scraping Task",
        "videoUrl": "https://drive.google.com/file/d/1wu65QJM345hfl_wwUOoGmEeBiOEe8pbg/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 25"
      },
      {
        "id": "lesson-3-069",
        "title": "1. Send 3 applications - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=f0c6d4b9ea084770b7aee248a3751347 - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/1pcOOW2OPiienQxsU5Hc851BGM2c9wvdZ/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 26"
      },
      {
        "id": "lesson-3-070",
        "title": "2. Create next community post - Month 2 · Maker School - https://www.skool.com/makerschool/classroom/c99d54b4?md=d49bc8b2271c45e0ac98a35106ba5089 - 15 October 2024",
        "videoUrl": "https://drive.google.com/file/d/1Vpyh_TBPqGKS6rdggQReYVkIA7BhbwuC/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 26"
      },
      {
        "id": "lesson-3-071",
        "title": "Total Email Volume Analysis",
        "videoUrl": "https://drive.google.com/file/d/1P-co5eCxCv2nisWvvhonO0JWg_vn7FDq/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 26"
      },
      {
        "id": "lesson-3-072",
        "title": "Tackling Friction Points in Today's Tasks",
        "videoUrl": "https://drive.google.com/file/d/1VKNantfp_9s8mIaSRJ6Acrp83QYXnH_r/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 27"
      },
      {
        "id": "lesson-3-073",
        "title": "A Day of Leisure and Recharge",
        "videoUrl": "https://drive.google.com/file/d/1SxQELE0MbGAuoJESl_v9Ybj6yVTVGUGa/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 28"
      },
      {
        "id": "lesson-3-074",
        "title": "3. Build hiring pipeline",
        "videoUrl": "https://drive.google.com/file/d/18snijXkl6IDklR85M4yUcUVGC5fBnypR/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 29"
      },
      {
        "id": "lesson-3-075",
        "title": "Celebrating Progress 🎉",
        "videoUrl": "https://drive.google.com/file/d/1ua_I2gR9JHErWhwb4BWaSWOqwzqOUw8-/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 29"
      },
      {
        "id": "lesson-3-076",
        "title": "Volume Increase Strategy 📈",
        "videoUrl": "https://drive.google.com/file/d/1CGZSRykDVvBdOwiKh4vk59CA5NBuAofO/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 29"
      },
      {
        "id": "lesson-3-077",
        "title": "Month Two Retrospective",
        "videoUrl": "https://drive.google.com/file/d/1jRwFl9abdz8cphxFlAoSi6_V0S9Ys_uE/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 30"
      },
      {
        "id": "lesson-3-078",
        "title": "Month Two Wrap-Up",
        "videoUrl": "https://drive.google.com/file/d/1BKlB7xFSQpbmdSiz7IWUcs-RLQcxbxj-/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 30"
      },
      {
        "id": "lesson-3-079",
        "title": "Scaling Up Lead Generation for Productized Offers",
        "videoUrl": "https://drive.google.com/file/d/1aqq5_qs2ZPJym_RD5yhP_5aVfeB2ffgT/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 30"
      }
    ],
    "materials": [
      {
        "id": "material-3-001",
        "title": "1. More of what works - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1LeUfMsctJr9k4wv2dnQoI_4pVc56PIId/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "material-3-002",
        "title": "2. Some days off in the next month - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1aRyVcs4-W3JcQZlmOvHjUxKEAANSN3UH/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "material-3-003",
        "title": "3. Remember to ask for feedback - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1g2XiZ4E4jqaGKlRyFEwLgty7MfhHNbzC/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "material-3-004",
        "title": "4. One day at a time! - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1rWsttTRclYalp8Ia2jJFLu9hSUVxYgvT/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "material-3-005",
        "title": "1. Send 3 applications - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1mHtShJVp5UZNPYgzttIhiXgFdxtEyT77/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 1"
      },
      {
        "id": "material-3-006",
        "title": "2. Solve 5 friction points - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1naT1UmfViJQfMXHb4Ze_FYJhsJ6hM8Zy/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 1"
      },
      {
        "id": "material-3-007",
        "title": "3. Set up 5 software affiliate links - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1ToWLoV8uSCzH7FXwMki_k4RY9biyjXFV/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 1"
      },
      {
        "id": "material-3-008",
        "title": "1. Send 3 applications - Maker School Month 2 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1pPYpB5Xs2ZxFqZ248aAXkl8f3p_JD4D2/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 2"
      },
      {
        "id": "material-3-009",
        "title": "2. Create next community post - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Hf0K2vTZFLyO-lzOmuNmQB1hSdu-ocTa/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 2"
      },
      {
        "id": "material-3-010",
        "title": "3. Set up 5 more software affiliate links - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/12Z4ALljzKVklug8ptiuDE7bSChGsODk5/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 2"
      },
      {
        "id": "material-3-011",
        "title": "1. Send 4 applications - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/11AyEFPvqRu6Ku1ykO2h0eab_dKFiajT0/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 3"
      },
      {
        "id": "material-3-012",
        "title": "2. Create automated proposal system - Maker School Month 2 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1s4t-lOWU9zDTixZrm1wFJpSLX_lyo5wK/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 3"
      },
      {
        "id": "material-3-013",
        "title": "2. Create automated proposal system - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/10BtuFUJ4SIw5MhJbHg1hSguSqEjLwlTd/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 3"
      },
      {
        "id": "material-3-014",
        "title": "3. Set up 5 more software affiliate links - Maker School Month 2 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1xyW88G2Gz2HfM4hb9Xu1zzAi2c5S_xGk/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 3"
      },
      {
        "id": "material-3-015",
        "title": "1. Send 4 applications - Maker School Month 2 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/130yFgvUcSxOFj1hACVnoLB-kNZRVuPDa/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 4"
      },
      {
        "id": "material-3-016",
        "title": "2. Create next community post - Maker School Month 2 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1JNPBYpSj-sCtxXctWn__zcwajsNdYxHi/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 4"
      },
      {
        "id": "material-3-017",
        "title": "3. Build project management system - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1SliZoGmKWQAvO62VVtAJs4aeU_GeH6J1/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 4"
      },
      {
        "id": "material-3-018",
        "title": "1. Send 4 applications - Maker School Month 2 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1lzb7gicRKy8QnpDPXAav0-1pkV-goS6V/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 5"
      },
      {
        "id": "material-3-019",
        "title": "3. Cold email retrospective - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1NETiyRHyu_UzlCKxyPWg8ttEPrTlWekc/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 5"
      },
      {
        "id": "material-3-020",
        "title": "1. Send 4 applications - Maker School Month 2 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1DYy5eVA75pZ_68FVx3l6kttQjjh9Mmxc/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 6"
      },
      {
        "id": "material-3-021",
        "title": "2. Create next community post - Maker School Month 2 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1MUsrqVA1YvJCM-Cm_NzBKlGuqV712K7C/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 6"
      },
      {
        "id": "material-3-022",
        "title": "3. Identify your new niche - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1SY51v7JwKa9OHrx1eNBqlkGDlLdwVP5U/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 6"
      },
      {
        "id": "material-3-023",
        "title": "1. Leisure, relaxation, rest - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/18_XuI3fVcFYh4kJRqBJNuH8vFUqrRGsE/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 7"
      },
      {
        "id": "material-3-024",
        "title": "1. Upwork application retrospective - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1yAnIL-FDk1wT5nKwpCVbSGt23mseRaRn/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 8"
      },
      {
        "id": "material-3-025",
        "title": "2. Create a specialized Upwork profile - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1YD9d2t0Ken6Ecw2VfK7qZdmvhfrGngb5/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 8"
      },
      {
        "id": "material-3-026",
        "title": "3. Send 5 applications - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1g6zRzIXMov3Enn_bZcQY52nvFXpdZmhM/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 8"
      },
      {
        "id": "material-3-027",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1NC_68ftuPtrDQsJtsBE6Ojq-mtnbKGGM/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 9"
      },
      {
        "id": "material-3-028",
        "title": "2. Create community post calendar - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1AuyAP6pyMmUT2gHm6cFee9iQpIIkOLBz/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 9"
      },
      {
        "id": "material-3-029",
        "title": "3. Solve 5 friction points - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1oCen0FldaNrlCOyDijSEMwzuBsMvbmvK/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 9"
      },
      {
        "id": "material-3-030",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1OCYndaqE_dkwSsp0uyuHjXCfqesu8bzd/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 10"
      },
      {
        "id": "material-3-031",
        "title": "2. Niche down your cold email campaigns - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Kyari6goOdXS9RsaZtBBHudfJZYbYHrG/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 10"
      },
      {
        "id": "material-3-032",
        "title": "3. Set up 5 more software affiliate links - Maker School Month 2 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/11UUr6V3uFGwKPtqkVTxfsifBImaZ571C/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 10"
      },
      {
        "id": "material-3-033",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/13vYcfc8GdhhqnNpJqTwYg7iydatP_Tie/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 11"
      },
      {
        "id": "material-3-034",
        "title": "2. Create next community post - Maker School Month 2 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1GHGaE3f95awuD_aEqJpfXfHPXvwKC6wb/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 11"
      },
      {
        "id": "material-3-035",
        "title": "3. Scrape 1,000 leads - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1su-J1ZsfGzy25HOViBZJb_vEfePPAmWn/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 11"
      },
      {
        "id": "material-3-036",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1MomqnqRDG4pAb9HtU0A0ENkH8lONamtQ/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 12"
      },
      {
        "id": "material-3-037",
        "title": "2. Niche down your communities - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1AwE5lK2K3Xb3b1Hweqh3ziGH9HrO-HQ3/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 12"
      },
      {
        "id": "material-3-038",
        "title": "3. Cold email retrospective - Maker School Month 2 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1b0_9Mn0az-bmHyGVmKGccmKKvc_PbGHK/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 12"
      },
      {
        "id": "material-3-039",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com (4)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1-Yu0VP5zSW9kf-5U35IWEKc6cu-dDQ76/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 13"
      },
      {
        "id": "material-3-040",
        "title": "2. Create next community post - Maker School Month 2 · Make Money With Make.com (4)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1d8Y12lJNXqbhWitqdPznXTVEd5xK_tk4/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 13"
      },
      {
        "id": "material-3-041",
        "title": "3. Create sales dashboard - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1h7XiPumCt9KgtkW55EorCwTaIQZpSOSU/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 13"
      },
      {
        "id": "material-3-042",
        "title": "1. Leisure, relaxation, rest - Maker School Month 2 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1I1h0dNNnSPkHEMxvRrUqu6z_mXqnPOeY/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 14"
      },
      {
        "id": "material-3-043",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com (5)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1d0PTBgF_diePMRgPvNRuA3DopH6wBGWC/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 15"
      },
      {
        "id": "material-3-044",
        "title": "2. Create next community post - Maker School Month 2 · Make Money With Make.com (5)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1ZMkIci5BSEhikejzMvgWryqhevDwnvv6/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 15"
      },
      {
        "id": "material-3-045",
        "title": "3. Set up 5 more software affiliate links - Maker School Month 2 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1DkQKZSZJdMbncc5jE5L6ByHRppPrwRwf/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 15"
      },
      {
        "id": "material-3-046",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com (6)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1p_b9TPm0AgRFNHaF_kiuW-k3sb-Kp-aX/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 16"
      },
      {
        "id": "material-3-047",
        "title": "2. Solve 4 friction points - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1x4nmLqoTAB-fQUzOnPNeO0NZUGvdt-Cl/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 16"
      },
      {
        "id": "material-3-048",
        "title": "3. Set up 5 more software affiliate links - Maker School Month 2 · Make Money With Make.com (4)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1NqOafPVPmKHjnDXjaStXZk7SNY-rfk6o/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 16"
      },
      {
        "id": "material-3-049",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com (7)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1RLTxMjbuj7cwSSyp7z4HP8sx_gQpJreE/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 17"
      },
      {
        "id": "material-3-050",
        "title": "2. Create next community post - Maker School Month 2 · Make Money With Make.com (6)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/11l-ZVLUacbb-S5sAB3kw4AZeO2uOM6Cj/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 17"
      },
      {
        "id": "material-3-051",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com (8)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1mEfOilANVpnrV7mw2eM6Y02856CAYQQz/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 18"
      },
      {
        "id": "material-3-052",
        "title": "2. Upwork application retrospective - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1VS6BS6EVML-UjBC_Vk_Js9-xpw9NyB1y/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 18"
      },
      {
        "id": "material-3-053",
        "title": "3. Scrape 1,000 leads - Maker School Month 2 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/18rw0pZGce3jhXFNhojTqJVKoYjqNHEqO/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 18"
      },
      {
        "id": "material-3-054",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com (9)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/19JufFszlSwKqPwKGFhSZ40L510KDhY7f/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 19"
      },
      {
        "id": "material-3-055",
        "title": "2. Create next community post - Maker School Month 2 · Make Money With Make.com (7)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1BZwpd22lMur7DimX2QQc_3GSi_q9ukOB/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 19"
      },
      {
        "id": "material-3-056",
        "title": "3. Cold email retrospective - Maker School Month 2 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/12OIy6OOl4B5I6SpixfYALRwqetYnSNsI/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 19"
      },
      {
        "id": "material-3-057",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com (10)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1W9sLXTX6JPT_OhSoVY_vVRRDeuV6X1zA/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 20"
      },
      {
        "id": "material-3-058",
        "title": "2. Build 3 productized systems - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1skdPToqmhDB3PLjeLOwlQSnVFMlr8JzT/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 20"
      },
      {
        "id": "material-3-059",
        "title": "3. Set up 5 more software affiliate links - Maker School Month 2 · Make Money With Make.com (5)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1sgf7Ag5VNJkPKwGmsEvT3nZZW9G868gn/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 20"
      },
      {
        "id": "material-3-060",
        "title": "1. Leisure, relaxation, rest - Maker School Month 2 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1XMrwXd9BijM6DjW7PlBbKzcIgLYG_C-T/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 21"
      },
      {
        "id": "material-3-061",
        "title": "1. Send 4 applications - Maker School Month 2 · Make Money With Make.com (4)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1IuOnxEDnmTMvb-ZZ1612QR9QHC-S5fVs/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 22"
      },
      {
        "id": "material-3-062",
        "title": "2. Create next community post - Maker School Month 2 · Make Money With Make.com (8)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Y4rNbyXFkWMFnlif7yhjQJedeJc4tVl9/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 22"
      },
      {
        "id": "material-3-063",
        "title": "3. Solve 4 friction points - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/10mY_W1Hwa8-6_BhfwOw4lcqNgTmgv60D/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 22"
      },
      {
        "id": "material-3-064",
        "title": "1. Send 4 applications - Maker School Month 2 · Make Money With Make.com (5)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1S1rCWRZg8BT_lYmhINL4Bo0BX6b8rjDH/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 23"
      },
      {
        "id": "material-3-065",
        "title": "2. Set up 5 more software affiliate links - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/17_4tumShpNFz4UHdI3TE6Td9MksPAA20/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 23"
      },
      {
        "id": "material-3-066",
        "title": "1. Send 3 applications - Maker School Month 2 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1FE9TpUtnxRhkC26QX9B9YKSmL9zQ_ogn/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 24"
      },
      {
        "id": "material-3-067",
        "title": "2. Create next community post - Maker School Month 2 · Make Money With Make.com (9)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1tSk0bdp2En3mj8EdPQoRpg6cHmEDk4_s/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 24"
      },
      {
        "id": "material-3-068",
        "title": "1. Send 3 applications - Maker School Month 2 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1U0nNMxJMTBnklzwCIMIO9ND_VPGxDJ4r/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 25"
      },
      {
        "id": "material-3-069",
        "title": "2. Create 3 retainer products - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Zz9ryT-cEGVDH3GNts7MeZ2k6uHirqkK/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 25"
      },
      {
        "id": "material-3-070",
        "title": "3. Scrape 1,000 leads - Maker School Month 2 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/107qfcoraK0znjzqFMWX_eQTAJO9lZFQ7/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 25"
      },
      {
        "id": "material-3-071",
        "title": "1. Send 3 applications - Maker School Month 2 · Make Money With Make.com (4)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1YtxGTQgMpSsX-8ynxXWOQxuvUbFFQ45i/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 26"
      },
      {
        "id": "material-3-072",
        "title": "2. Create next community post - Maker School Month 2 · Make Money With Make.com (10)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1fH1Q94gQngjF3XmFLJ9emp_cfKZ67stv/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 26"
      },
      {
        "id": "material-3-073",
        "title": "3. Cold email retrospective - Maker School Month 2 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1tOGk5fa244QWckdM4YnUXBnuLEj9zb5S/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 26"
      },
      {
        "id": "material-3-074",
        "title": "1. Send 3 applications - Maker School Month 2 · Make Money With Make.com (5)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1u9M30B-pjMGknqsKn-aslR_kiNsRUbWP/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 27"
      },
      {
        "id": "material-3-075",
        "title": "2. Solve 3 friction points - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1uCmpd9aeTlIGQgW3ZeRGotQd2sB9QHc1/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 27"
      },
      {
        "id": "material-3-076",
        "title": "1. Leisure, relaxation, rest - Maker School Month 2 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1zG-pKHqO5ELC-uvMHJyXHKs2BSNdgoA4/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 28"
      },
      {
        "id": "material-3-077",
        "title": "1. Applicant Fills Out Form (2)",
        "type": "JSON",
        "url": "https://drive.google.com/file/d/1GBsemmi6iggJON9u_YJb5hkH8DqTbqlg/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 29"
      },
      {
        "id": "material-3-078",
        "title": "1. Send 4 applications - Maker School Month 2 · Make Money With Make.com (6)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1sZD_bvya1oE-GjLRpFNDRZ1tG8Wx2MOt/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 29"
      },
      {
        "id": "material-3-079",
        "title": "2. Applicant Moved to Request Trial",
        "type": "JSON",
        "url": "https://drive.google.com/file/d/1Ec4BjznTNZMuKen1y5YxJ1LdB4sa4VqC/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 29"
      },
      {
        "id": "material-3-080",
        "title": "2. Create last community post - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1QVIzWHXmzx-0xFNlbnDO7uSCLcvU_fnN/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 29"
      },
      {
        "id": "material-3-081",
        "title": "3. Applicant Fills Out Trial Form (1)",
        "type": "JSON",
        "url": "https://drive.google.com/file/d/1Qlzh_X5SGqBEtpKjj1mL12O4uHC4t99K/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 29"
      },
      {
        "id": "material-3-082",
        "title": "3. Build hiring pipeline - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1vOdj-gdl6qMbZTxaCwF9fPKNWzhQLSCF/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 29"
      },
      {
        "id": "material-3-083",
        "title": "4. Applicant Moved to Onboarding - Send Email and Invite",
        "type": "JSON",
        "url": "https://drive.google.com/file/d/1e8Cwu9g0U2B7EDe6n_vlpbEK1XOIDnSD/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 29"
      },
      {
        "id": "material-3-084",
        "title": "1. Send 5 applications - Maker School Month 2 · Make Money With Make.com (11)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/19CNkgFQXuKgNh3JJBBXh6meCEpc0gs9p/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 30"
      },
      {
        "id": "material-3-085",
        "title": "2. Scrape 1,000 leads - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1s_l602gYJeV9WiLzSm6aa5_g3yF3GTLK/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 30"
      },
      {
        "id": "material-3-086",
        "title": "3. Month 2 retrospective - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Q7zMyM0nIlAjtbKJtWdNMj05rBObgjlT/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 30"
      },
      {
        "id": "material-3-087",
        "title": "1. Congratulations! You've won another break - Maker School Month 2 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1l1mz2G2sKguUFJbtMpSvNFH9c6WK1D0Z/view?usp=drivesdk",
        "chapterId": "chapter-month-2",
        "chapterTitle": "Month 2",
        "subchapter": "Day 31"
      }
    ]
  },
  {
    "id": "chapter-month-3",
    "title": "Month 3",
    "order": 3,
    "driveUrl": "https://drive.google.com/drive/folders/1dxrsb7_vyxGEQYZoHAccNZeKfZ_c6bpp",
    "lessons": [
      {
        "id": "lesson-4-001",
        "title": "Honest Feedback for Growth! 🌟",
        "videoUrl": "https://drive.google.com/file/d/13siLXNT8HkB745Ym8JphLMDunsbGYIjY/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "lesson-4-002",
        "title": "Month One Journey 🌟",
        "videoUrl": "https://drive.google.com/file/d/1T93y_3oscqF8MqMu60QKb6RKZ9SJLrMB/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "lesson-4-003",
        "title": "Month Three: Business Growth and Strategy",
        "videoUrl": "https://drive.google.com/file/d/1dJ9IRD-HRXwBGPcc4M5FyW8IrYSh-imo/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "lesson-4-004",
        "title": "Optimizing Your Schedule for Success 💪",
        "videoUrl": "https://drive.google.com/file/d/1dhTNP_UhKTRktS5S9gV68K19GxJNZo9K/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "lesson-4-005",
        "title": "Upwork Strategy Update 🚀",
        "videoUrl": "https://drive.google.com/file/d/1pfVEP6g8aUWrmTaysWIDm5B5GEx_EwjC/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "lesson-4-006",
        "title": "Cold Email 10x Strategy 📧",
        "videoUrl": "https://drive.google.com/file/d/1slHhiJCCFw7AKxFVAedLGX6xtLMqQjOl/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 1"
      },
      {
        "id": "lesson-4-007",
        "title": "Sales Objection Handling Strategies",
        "videoUrl": "https://drive.google.com/file/d/1Ja-L1-KKBIl1AEPBK_1icjkbAze_DVfh/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 1"
      },
      {
        "id": "lesson-4-008",
        "title": "Solving Friction Points",
        "videoUrl": "https://drive.google.com/file/d/1c7NGcpJkxWcaAVhETVnO3yku1JijE81W/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 2"
      },
      {
        "id": "lesson-4-009",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/1FoOhr6idJnkjoXFZX1sCjRrsZY-svtee/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 2"
      },
      {
        "id": "lesson-4-010",
        "title": "2. Create next community post - Month 3 (Hidden) · Maker School - https://www.skool.com/makerschool/classroom/a6afd77f?md=370fb66b302a4db58c90ead6d823be6b - 13 November 2024",
        "videoUrl": "https://drive.google.com/file/d/1cCOr5gZLkgucsi7kBAmDoEIU63mq5nYf/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 3"
      },
      {
        "id": "lesson-4-011",
        "title": "Leveraging Automation for Increased Productivity",
        "videoUrl": "https://drive.google.com/file/d/1zyJgOo7I1iWtmd6VmiQEHI5iPGF_JrD5/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 3"
      },
      {
        "id": "lesson-4-012",
        "title": "Increasing Lead Generation Strategies 💡",
        "videoUrl": "https://drive.google.com/file/d/1-IkmoFuud14Nvq-7KY-HBSbW5LyOm_4B/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 4"
      },
      {
        "id": "lesson-4-013",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/13ojsYwWaaLPN4YVcN0YbIV-Ef6y0nWYs/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 4"
      },
      {
        "id": "lesson-4-014",
        "title": "Building Standard Operating Procedures for Business 🏢",
        "videoUrl": "https://drive.google.com/file/d/1tR5Z25MS7VdBG8UsgdunPHsccZoO1qVO/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 5"
      },
      {
        "id": "lesson-4-015",
        "title": "Cold Email Retrospective Insights 📧",
        "videoUrl": "https://drive.google.com/file/d/1kgl9b0yATqEHd9WCwNkHx6u1q8XVjVmI/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 5"
      },
      {
        "id": "lesson-4-016",
        "title": "Solving Friction Points",
        "videoUrl": "https://drive.google.com/file/d/1FoCreC4ajmhGJ5S6TAYkcnYqtmbqnAdL/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 6"
      },
      {
        "id": "lesson-4-017",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/163L24scVkJAPVQIkJBz-lvjXGxCX0Ccm/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 6"
      },
      {
        "id": "lesson-4-018",
        "title": "2. Create next community post - Month 3 (Hidden) · Maker School - https://www.skool.com/makerschool/classroom/a6afd77f?md=370fb66b302a4db58c90ead6d823be6b - 13 November 2024",
        "videoUrl": "https://drive.google.com/file/d/1GBMml-0ARikauoqK3X2iHDlCktHfuyb3/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 8"
      },
      {
        "id": "lesson-4-019",
        "title": "Standard Operating Procedures - Second Quarter Overview",
        "videoUrl": "https://drive.google.com/file/d/1FmZ7o5ZUzxH_8TU7hjb2_oy-lRYYccbS/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 8"
      },
      {
        "id": "lesson-4-020",
        "title": "Increasing Lead Generation Strategies 💡",
        "videoUrl": "https://drive.google.com/file/d/1vIw7IHzf-KaeLMgxg5bWdg6EXtXhuZ1p/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 9"
      },
      {
        "id": "lesson-4-021",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/1jmADptx8iNI7gf5JVJ4KuvIVJ23vb0YO/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 9"
      },
      {
        "id": "lesson-4-022",
        "title": "Cold Email Retrospective Insights 📧",
        "videoUrl": "https://drive.google.com/file/d/1MwXHiQeg5VSDNatDUIUuVLqgc4oSjyy8/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 10"
      },
      {
        "id": "lesson-4-023",
        "title": "Reactivating Contact Lists for Business Growth 💼",
        "videoUrl": "https://drive.google.com/file/d/13y5F_eyYIkVGLR0ob_lS8kV3MUvryj8W/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 10"
      },
      {
        "id": "lesson-4-024",
        "title": "Understanding Operationalizing Knowledge in Business",
        "videoUrl": "https://drive.google.com/file/d/1pvI48WBz2JsniN_AHlls1f7Stmk8P519/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 11"
      },
      {
        "id": "lesson-4-025",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/1NUMswhzpj2Y1j8jdYgmB_PWXKPff2AZw/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 11"
      },
      {
        "id": "lesson-4-026",
        "title": "1. Document 4/4 of your SOPs - Month 3 (Hidden) · Maker School - https://www.skool.com/makerschool/classroom/a6afd77f?md=08a0a96549a9458b86d019549fa4d11d - 14 November 2024",
        "videoUrl": "https://drive.google.com/file/d/1TZf4KlqCRqGjnQb2U1YUbCDiLhmasY7t/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 12"
      },
      {
        "id": "lesson-4-027",
        "title": "2. Create next community post",
        "videoUrl": "https://drive.google.com/file/d/1vJ-bD_MUhB2xmAZjrHZ4yE8-ifG91feU/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 12"
      },
      {
        "id": "lesson-4-028",
        "title": "Increasing Lead Generation Strategies 💡",
        "videoUrl": "https://drive.google.com/file/d/1UqEP2CATPrXO2GcfaBNHKS6F67ogPGIG/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 13"
      },
      {
        "id": "lesson-4-029",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/1IcDCz40A7dJY767N6z9-diBZHi3Nhqlc/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 13"
      },
      {
        "id": "lesson-4-030",
        "title": "Building a Resource Hub for Business 🛠️",
        "videoUrl": "https://drive.google.com/file/d/1WE3eECpOlHCk5BJ0SvpGZiRU1GKlaRQg/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 15"
      },
      {
        "id": "lesson-4-031",
        "title": "Cold Email Retrospective Insights 📧",
        "videoUrl": "https://drive.google.com/file/d/1rR2h4FPZavACMhQKEo9g5VP6WBTDfMOU/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 15"
      },
      {
        "id": "lesson-4-032",
        "title": "2. Create next community post",
        "videoUrl": "https://drive.google.com/file/d/1G8XgrQdXv-2uUxhzHSsXEBpvI1g4c68v/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 16"
      },
      {
        "id": "lesson-4-033",
        "title": "Understanding Outbound Sales and Inbound Marketing",
        "videoUrl": "https://drive.google.com/file/d/1c6g0V4oy1znqeRSGA843D6BRZgaokngZ/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 16"
      },
      {
        "id": "lesson-4-034",
        "title": "Solving Friction Points",
        "videoUrl": "https://drive.google.com/file/d/1BerxlWK2tgzS1ItjmMTSTxxVD8BxAmSl/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 17"
      },
      {
        "id": "lesson-4-035",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/1Wzb1gs8XDXLpzg8WH_3nydVL0mMPPl90/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 17"
      },
      {
        "id": "lesson-4-036",
        "title": "Getting Newswire and PR Social Proof",
        "videoUrl": "https://drive.google.com/file/d/1Clteq3ImUZCoEFjlkn3saXAFaJ_SJOeq/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 18"
      },
      {
        "id": "lesson-4-037",
        "title": "Increasing Lead Generation Strategies 💡",
        "videoUrl": "https://drive.google.com/file/d/16QT9CkqAJl1wC3W8BMzuARgFIellSK-y/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 18"
      },
      {
        "id": "lesson-4-038",
        "title": "Upwork Application Retrospective 📊",
        "videoUrl": "https://drive.google.com/file/d/15_zBvnNaY908lhg1rP842qnQ676wf2wf/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 19"
      },
      {
        "id": "lesson-4-039",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/1DbwyV71JxPsWy3ApxP5sUfQW2-nDWxd8/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 19"
      },
      {
        "id": "lesson-4-040",
        "title": "2. Create next community post",
        "videoUrl": "https://drive.google.com/file/d/1QDtx1sKb52ozKbe09wcoQ8pE-IzLPPHr/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 20"
      },
      {
        "id": "lesson-4-041",
        "title": "Cold Email Retrospective Insights 📧",
        "videoUrl": "https://drive.google.com/file/d/1aXSb78lNAGG2W91X4UdP1XdtUvqIFn4l/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 20"
      },
      {
        "id": "lesson-4-042",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/1S7QaSjDTeQ_UZK1GGA-kkYhuhyMKR4SV/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 22"
      },
      {
        "id": "lesson-4-043",
        "title": "Increasing Lead Generation Strategies 💡",
        "videoUrl": "https://drive.google.com/file/d/1EX_v4Nv3jU7Z8pBp6h3sp-JDIk2xA1T7/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 23"
      },
      {
        "id": "lesson-4-044",
        "title": "Solving Friction Points",
        "videoUrl": "https://drive.google.com/file/d/1k3tEebBEL_JK40rJ8jgbSeKxZFw23TMH/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 23"
      },
      {
        "id": "lesson-4-045",
        "title": "2. Create next community post",
        "videoUrl": "https://drive.google.com/file/d/1u0YOHnZ6pfKZlSlLZlHLuiUYoDYGu-qs/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 24"
      },
      {
        "id": "lesson-4-046",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/1fKSSoJvj3J9QKAAEMMkA-gbxMxuHrAdG/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 24"
      },
      {
        "id": "lesson-4-047",
        "title": "Automating Media Opportunities 🤖",
        "videoUrl": "https://drive.google.com/file/d/1fLtjW4K1-c9LM3N__XjqJFG_jqMlZque/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 25"
      },
      {
        "id": "lesson-4-048",
        "title": "Cold Email Retrospective Insights 📧",
        "videoUrl": "https://drive.google.com/file/d/1jyGXIbtJOqRIeA4ByKU05PdPnbrs3YnR/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 25"
      },
      {
        "id": "lesson-4-049",
        "title": "Solving Friction Points",
        "videoUrl": "https://drive.google.com/file/d/1QZ3VF3VqHgLBVJrf3kBsUzwikO3u-2mf/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 26"
      },
      {
        "id": "lesson-4-050",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/1bzPDwcUXF7ZeGKAd5sMz17Y1tPD6o3pf/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 26"
      },
      {
        "id": "lesson-4-051",
        "title": "Increasing Lead Generation Strategies 💡",
        "videoUrl": "https://drive.google.com/file/d/1rBtiuaBDPnZ8lptq_nfbM0LjGV2G8XEo/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 27"
      },
      {
        "id": "lesson-4-052",
        "title": "Setting Up an Automatic Invoice Collection System",
        "videoUrl": "https://drive.google.com/file/d/1aQoTm0WKbADmxZwvF8dEWjXL9omK2u4Z/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 27"
      },
      {
        "id": "lesson-4-053",
        "title": "Solving Friction Points",
        "videoUrl": "https://drive.google.com/file/d/19MlxQwa_ph9nl7GQNrzU86tuhwuOoI2M/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 29"
      },
      {
        "id": "lesson-4-054",
        "title": "Upwork Applications Reminder 📅",
        "videoUrl": "https://drive.google.com/file/d/1CINWggz7WkcuId78wWCWKEXvmZZLsf3s/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 29"
      },
      {
        "id": "lesson-4-055",
        "title": "Create next community post",
        "videoUrl": "https://drive.google.com/file/d/1376ZD9dPPDLqqgLBzd4MqOEMI5F4Saqn/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 30"
      },
      {
        "id": "lesson-4-056",
        "title": "Month 3 Retrospective 🎉",
        "videoUrl": "https://drive.google.com/file/d/14ITOV5W29SI5HEQW1K2aA0k3P77vRJDt/view?usp=drivesdk",
        "format": "MP4",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 30"
      }
    ],
    "materials": [
      {
        "id": "material-4-001",
        "title": "1. More of what works - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/12ye2C0Ca7bpTMpHD_T2pkXbhMuqBTbWv/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "material-4-002",
        "title": "2. Some days off in the next month - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1UoiCfYdLk5m5W1eKCpiYozGyrBlHdeMz/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "material-4-003",
        "title": "3. Remember to ask for feedback - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1-0x347oVgf3kvLMDyhEtMFv2U33AKD3r/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "material-4-004",
        "title": "4. Changes to Upwork - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1tSCs6-WYTW6Kyjy_lBS8t5hC7MKQRlZS/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "material-4-005",
        "title": "5. One day at a time! - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/189AkuvAHfumO5U5PneR-46Y9BeTNuAwd/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "1. About & how to use"
      },
      {
        "id": "material-4-006",
        "title": "1. Compile & solve 10 objections - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1TJ6Ub1Bd0j5vlU0y1SNuWLsxR5Xz8Siy/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 1"
      },
      {
        "id": "material-4-007",
        "title": "2. 10x your cold email - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/16W_3asPZpfwegAqi1X21J_T0LTUmTXTf/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 1"
      },
      {
        "id": "material-4-008",
        "title": "1. Solve 3 friction points - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/131EsZK8yDx45cd7ztBaEqqOH8Xjz7fDt/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 2"
      },
      {
        "id": "material-4-009",
        "title": "2. Send 5 applications - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1pNrFHMX6tzFz7ixX5sni691jeWf1-NJn/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 2"
      },
      {
        "id": "material-4-010",
        "title": "1. Compile automation templates for scalability - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1wyQV1YP5y3KOSGqPcVooEgyNxhbWZ2DB/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 3"
      },
      {
        "id": "material-4-011",
        "title": "2. Create next community post - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1GBE3OrDUZPULQBf2V-miIJO-tv6N0mEy/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 3"
      },
      {
        "id": "material-4-012",
        "title": "1. Scrape 3,000 leads - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1GU0cb2UOUY-bow2xTMiVCrG_tkZDAb_c/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 4"
      },
      {
        "id": "material-4-013",
        "title": "2. Send 5 applications - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1bLC9oVZeQGaRbzc7gxYoH1QlCA3cM3sW/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 4"
      },
      {
        "id": "material-4-014",
        "title": "1. Document 1 4 of your SOPs - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1EezXbqL79KKbzkJoRwyAYUqln9lSK8F6/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 5"
      },
      {
        "id": "material-4-015",
        "title": "2. Cold email retrospective - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Dz3NoT7CWRWsl0MTTFSelKEfUm_X8fdn/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 5"
      },
      {
        "id": "material-4-016",
        "title": "1. Solve 3 friction points - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1SCatBGMfMtn1G59YsM4FVFWMmXN-zZy9/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 6"
      },
      {
        "id": "material-4-017",
        "title": "2. Send 5 applications - Maker School Month 3 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1vKUVQLfC_q5TWfP1Px0jxIVOU40MEywk/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 6"
      },
      {
        "id": "material-4-018",
        "title": "1. Leisure, relaxation, rest - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/16WrKswEfQQJCtIel2rqP1GoXQ8czz17x/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 7"
      },
      {
        "id": "material-4-019",
        "title": "1. Document 2 4 of your SOPs - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1_0CeoLHpqpn1LFG-67LisrmslNjP1OQw/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 8"
      },
      {
        "id": "material-4-020",
        "title": "2. Create next community post - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1b-i6KdZROAI4Epni1bxJ5-UfMR3mCNcY/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 8"
      },
      {
        "id": "material-4-021",
        "title": "1. Scrape 3,000 leads - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1j6qAPm8kCDtGgVJ4gnMG7qKAQh8jrP_t/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 9"
      },
      {
        "id": "material-4-022",
        "title": "2. Send 5 applications - Maker School Month 3 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1E17dcDHD3sSJTTnsXw0IXVKyJzq9JREk/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 9"
      },
      {
        "id": "material-4-023",
        "title": "1. Create & deploy reactivation campaign - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1WwTzxHy6iuUYUFxp5brqC772qEJFOya-/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 10"
      },
      {
        "id": "material-4-024",
        "title": "2. Cold email retrospective - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Z1vTikrdFl_J8Iv6uql_IRCUe6fbiZ0c/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 10"
      },
      {
        "id": "material-4-025",
        "title": "1. Document 3 4 of your SOPs - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1PjOyXW1CFKMn-Nh6guSJJcWaPqbGkSOW/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 11"
      },
      {
        "id": "material-4-026",
        "title": "2. Send 5 applications - Maker School Month 3 · Make Money With Make.com (4)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1EmUuu79MM-9kOaujwGaFe_vZnqJz9tA0/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 11"
      },
      {
        "id": "material-4-027",
        "title": "1. Document 4 4 of your SOPs - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1UMEV-gd5kVriXZ5dZZvqs_iDi3Q-ywLM/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 12"
      },
      {
        "id": "material-4-028",
        "title": "2. Create next community post - Maker School Month 3 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1P4u2h1fqHxgVk-2nm9P94aT8L8cKtMic/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 12"
      },
      {
        "id": "material-4-029",
        "title": "1. Scrape 3,000 leads - Maker School Month 3 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1q5UvvW95gqEH1JC3ou7Pf5Tef_1dkpy1/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 13"
      },
      {
        "id": "material-4-030",
        "title": "2. Send 5 applications - Maker School Month 3 · Make Money With Make.com (5)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1skzOvuPqEtjeLbUivrAhRzZvGv2pHuTd/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 13"
      },
      {
        "id": "material-4-031",
        "title": "1. Leisure, relaxation, rest - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1mnEVbT-eyxHQEesz7llYmjo6MLxzZlnp/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 14"
      },
      {
        "id": "material-4-032",
        "title": "1. Build a centralized resource hub - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1paScYcWbadNKEus9Nlgwf6IZeha0Mh3F/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 15"
      },
      {
        "id": "material-4-033",
        "title": "2. Cold email retrospective - Maker School Month 3 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1j5WRSX2uXWXEdnhmb4OjrCXCqMnCu17K/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 15"
      },
      {
        "id": "material-4-034",
        "title": "1. Set up inbound lead gen funnels - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1AsqTZFWxabSkhXnSyMMmQJOcJ5BIKJbV/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 16"
      },
      {
        "id": "material-4-035",
        "title": "2. Create next community post - Maker School Month 3 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/13NqOhXeiLZafnKMC8ZI7hhjT3p0nkZml/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 16"
      },
      {
        "id": "material-4-036",
        "title": "1. Solve 2 friction points - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1_1zi4hWe1LJq34jSaiKM1w3_WMpgDiza/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 17"
      },
      {
        "id": "material-4-037",
        "title": "2. Send 5 applications - Maker School Month 3 · Make Money With Make.com (6)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/18HHEUtwgmZpsAQtraXsiyyitY_tIMTMf/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 17"
      },
      {
        "id": "material-4-038",
        "title": "1. Get newswire for PR social proof - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1n8YYOvNsv5adleIZFYtfJlDebbrejH20/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 18"
      },
      {
        "id": "material-4-039",
        "title": "2. Scrape 3,000 leads - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1ewUBY12rVtWLQDaMS5zjZT2efEGEVzEE/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 18"
      },
      {
        "id": "material-4-040",
        "title": "1. Upwork application retrospective - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/14jAy7U8DdTZSvIwNxkwIr4IabjkMCwOq/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 19"
      },
      {
        "id": "material-4-041",
        "title": "2. Send 5 applications - Maker School Month 3 · Make Money With Make.com (7)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1p0ZAa_iU7O_r_yFHhse29lSJqRa6OALG/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 19"
      },
      {
        "id": "material-4-042",
        "title": "1. Create next community post - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1JmePQ0SZn3TlurHv3gstVZqaKOMepdRP/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 20"
      },
      {
        "id": "material-4-043",
        "title": "2. Cold email retrospective - Maker School Month 3 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Lg6I8mvtCml__ANmYV4KGMU11ezTFBSZ/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 20"
      },
      {
        "id": "material-4-044",
        "title": "1. Leisure, relaxation, rest - Maker School Month 3 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1cXpv4-MjPfWMQcFxP9DK_MC-CO_e1ySU/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 21"
      },
      {
        "id": "material-4-045",
        "title": "1. Send 5 applications - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1U3GSC2eFNcVdM8pANqTsd6DB5OdXXvTN/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 22"
      },
      {
        "id": "material-4-046",
        "title": "1. Solve 2 friction points - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1bZ1AjQayrkP_e3wkqOSV9XIM0LQ4I_Yq/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 23"
      },
      {
        "id": "material-4-047",
        "title": "2. Scrape 3,000 leads - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1vF5B7RN0PvWPDR1W1V7EaxPSDPZ9nwPV/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 23"
      },
      {
        "id": "material-4-048",
        "title": "1. Create next community post - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1SbQlYBXmO1red50xqCvjAiqwNyILyemT/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 24"
      },
      {
        "id": "material-4-049",
        "title": "2. Send 5 applications - Maker School Month 3 · Make Money With Make.com (8)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/19pV_MpXH9V_pnwVwZ9V5UchkBOPQ_Rx9/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 24"
      },
      {
        "id": "material-4-050",
        "title": "1. Set up SOS system & Qwoted - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1WmC5nxLKkEztYHLpHDfQ6FkUlvJP0p9D/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 25"
      },
      {
        "id": "material-4-051",
        "title": "1. Set up SOS system & Qwoted - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1qJ8asx23VrI6T2Fksf-wkdWByoywq05d/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 25"
      },
      {
        "id": "material-4-052",
        "title": "2. Cold email retrospective - Maker School Month 3 · Make Money With Make.com (4)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1w6o5KOiNsu5xsiAAcDy_2TIJ3SfDbk1D/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 25"
      },
      {
        "id": "material-4-053",
        "title": "1. Solve 1 friction point - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1A-TsNdFQzTTaq6QDyluJRnh8jUPQiyRy/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 26"
      },
      {
        "id": "material-4-054",
        "title": "2. Send 5 applications - Maker School Month 3 · Make Money With Make.com (9)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1qusmT1fXyNXoc3Q2uAJL2bbKU8GZs-rw/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 26"
      },
      {
        "id": "material-4-055",
        "title": "1. Set up auto invoice collection system - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/122PCUzXlcnVBZHuNRWZNyrAVSjhET53f/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 27"
      },
      {
        "id": "material-4-056",
        "title": "1. Set up auto invoice collection system - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1oayKj4felhxMsq2ZldCNpTUqXNraqvrk/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 27"
      },
      {
        "id": "material-4-057",
        "title": "2. Scrape 3,000 leads - Maker School Month 3 · Make Money With Make.com (2)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/10gMDwyna-JSPP7mn_J9oOnZJV_Gf0Onp/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 27"
      },
      {
        "id": "material-4-058",
        "title": "1. Leisure, relaxation, rest - Maker School Month 3 · Make Money With Make.com (3)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Noo1y2nFp4Mgt3O6CFyhnVypJwqCpU2n/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 28"
      },
      {
        "id": "material-4-059",
        "title": "1. Solve 1 friction point - Maker School Month 3 · Make Money With Make.com (1)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1h1hzBwNKZbDsod-MkGu4ku3SMacPJDbf/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 29"
      },
      {
        "id": "material-4-060",
        "title": "2. Send 5 applications - Maker School Month 3 · Make Money With Make.com (10)",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1UAOJWVDvWz2MIPLfgOevyOgJvn3Mkh_w/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 29"
      },
      {
        "id": "material-4-061",
        "title": "1. Create last community post - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1ynXLnevBEjgsnaMspxWlLye5VqQY-OeI/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 30"
      },
      {
        "id": "material-4-062",
        "title": "2. Month 3 retrospective - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1qCYtJzEAX2aNmfT30z_M1DRggCBPeMLD/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 30"
      },
      {
        "id": "material-4-063",
        "title": "1. Congratulations! You've won another break - Maker School Month 3 · Make Money With Make.com",
        "type": "HTML",
        "url": "https://drive.google.com/file/d/1Etq6lfewY8iR5-H3_2c12nUwKNP8j3gO/view?usp=drivesdk",
        "chapterId": "chapter-month-3",
        "chapterTitle": "Month 3",
        "subchapter": "Day 31"
      }
    ]
  }
];

export const course: Course = {
  title: "Maker School",
  chapters,
};
