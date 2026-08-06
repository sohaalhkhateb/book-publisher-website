export const projects = [
    {
        id: 101,
        offerId: 1,
        title: "The Silent City",
        authorName: "Layla Hassan",
        status: "in-production", // in-production | editing | design | ready | published | cancelled
        priority: "high",
        dueDate: "2026-12-01",
        createdAt: "2026-07-21",
        files: [
            {
                name: "Manuscript v1",
                url: "https://storage.example.com/manuscripts/silent-city.pdf",
                type: "manuscript",
                uploadedAt: "2026-07-20"
            },
            {
                name: "Cover brief",
                url: "https://storage.example.com/briefs/silent-city-cover-brief.pdf",
                type: "brief",
                uploadedAt: "2026-07-22"
            }
        ],
        tasks: [
            {
                id: 1001,
                title: "Initial Editing",
                description: "Grammar, style, and structure editing.",
                type: "editing",
                assignedTo: "Omar Khalil",
                assignedEmail: "omar@publisher.com",
                status: "in-progress",
                priority: "high",
                dueDate: "2026-08-15",
                startedAt: "2026-07-25",
                completedAt: null,
                notes: "Focus on character development."
            },
            {
                id: 1002,
                title: "Translation to English",
                description: "Translate manuscript to English.",
                type: "translation",
                assignedTo: "Nina George",
                assignedEmail: "nina@publisher.com",
                status: "pending",
                priority: "high",
                dueDate: "2026-09-01",
                startedAt: null,
                completedAt: null,
                notes: null
            },
            {
                id: 1003,
                title: "Cover Design",
                description: "Create front, back, and spine cover.",
                type: "cover",
                assignedTo: "Maya Nasser",
                assignedEmail: "maya@publisher.com",
                status: "pending",
                priority: "normal",
                dueDate: "2026-09-10",
                startedAt: null,
                completedAt: null,
                notes: "Modern, minimal style."
            },
            {
                id: 1004,
                title: "Copyright Registration",
                description: "Register book for copyright.",
                type: "copyright",
                assignedTo: "Sam Hatem",
                assignedEmail: "sam@publisher.com",
                status: "pending",
                priority: "normal",
                dueDate: "2026-08-20",
                startedAt: null,
                completedAt: null,
                notes: null
            },
            {
                id: 1005,
                title: "Proofreading",
                description: "Final proofreading after translation.",
                type: "proofreading",
                assignedTo: "Tarek Nour",
                assignedEmail: "tarek@publisher.com",
                status: "pending",
                priority: "normal",
                dueDate: "2026-09-20",
                startedAt: null,
                completedAt: null,
                notes: null
            }
        ]
    },
    {
        id: 102,
        offerId: 5,
        title: "Audio Editing Mastery",
        authorName: "Nina George",
        status: "editing",
        priority: "normal",
        dueDate: "2026-11-15",
        createdAt: "2026-07-16",
        files: [
            {
                name: "Manuscript v1",
                url: "https://storage.example.com/manuscripts/audio-editing.pdf",
                type: "manuscript",
                uploadedAt: "2026-07-15"
            }
        ],
        tasks: [
            {
                id: 2001,
                title: "Developmental Editing",
                description: "Structure and content review.",
                type: "editing",
                assignedTo: "Layla Hassan",
                assignedEmail: "layla@publisher.com",
                status: "done",
                priority: "high",
                dueDate: "2026-08-01",
                startedAt: "2026-07-17",
                completedAt: "2026-07-30",
                notes: "Approved structure."
            },
            {
                id: 2002,
                title: "Copy Editing",
                description: "Line-by-line editing for clarity and consistency.",
                type: "editing",
                assignedTo: "Omar Khalil",
                assignedEmail: "omar@publisher.com",
                status: "in-progress",
                priority: "high",
                dueDate: "2026-08-20",
                startedAt: "2026-08-01",
                completedAt: null,
                notes: null
            },
            {
                id: 2003,
                title: "Cover Design",
                description: "Create a cover for print and ebook.",
                type: "cover",
                assignedTo: "Maya Nasser",
                assignedEmail: "maya@publisher.com",
                status: "pending",
                priority: "normal",
                dueDate: "2026-09-05",
                startedAt: null,
                completedAt: null,
                notes: "Tech + audio theme."
            },
            {
                id: 2004,
                title: "ISBN & Metadata",
                description: "Assign ISBN and create metadata.",
                type: "metadata",
                assignedTo: "Sam Hatem",
                assignedEmail: "sam@publisher.com",
                status: "pending",
                priority: "normal",
                dueDate: "2026-09-10",
                startedAt: null,
                completedAt: null,
                notes: null
            }
        ]
    }
];