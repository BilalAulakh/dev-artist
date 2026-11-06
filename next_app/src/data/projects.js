export const projects = [
    {
        slug: 'medicare-clinic-portal',
        title: 'MediCare Clinic Portal',
        category: 'Healthcare',
        tagline: 'Online appointments + patient records',
        summary:
            'A booking and records portal for a multi-doctor clinic. Patients book online, doctors view history, and admin manages schedules — all from one dashboard.',
        stack: ['Next.js', 'Node.js', 'MySQL', 'Tailwind', 'Stripe'],
        metrics: [
            { label: 'Appointments / mo', value: '1,200+' },
            { label: 'No-show drop', value: '32%' },
            { label: 'Doctors onboarded', value: '14' },
        ],
        accent: '#0ea5e9',
        featured: true,
        timeline: '10 weeks',
        team: '3 engineers + 1 designer',
        problem:
            'The clinic was juggling appointments across phone calls, WhatsApp, and a paper diary. Patients showed up at the wrong times, files went missing, and front desk staff spent half their day reconciling schedules.',
        solution:
            'We built a single web portal with three roles — patient, doctor, and admin. Patients self-book by doctor and slot, get SMS reminders, and access their previous visits. Doctors see daily queues with patient history one click away.',
        features: [
            'Role-based portal for patients, doctors, and admin',
            'Slot-based booking with conflict detection',
            'SMS + email appointment reminders',
            'Patient records with searchable visit history',
            'Stripe-powered online deposits to reduce no-shows',
            'Daily, weekly, and monthly reporting for management',
        ],
        outcome:
            'Within three months no-shows dropped by a third, front desk workload halved, and the clinic added two new doctors without hiring extra admin staff.',
    },
    {
        slug: 'spice-route-orders',
        title: 'Spice Route Online Orders',
        category: 'Restaurant',
        tagline: 'Online ordering with live kitchen view',
        summary:
            'A web ordering system for a 4-branch restaurant. Customers order online, kitchens get live tickets, and owners track sales across branches.',
        stack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
        metrics: [
            { label: 'Orders / day', value: '450+' },
            { label: 'Repeat customers', value: '38%' },
            { label: 'Branches live', value: '4' },
        ],
        accent: '#ff8a3d',
        timeline: '8 weeks',
        team: '2 engineers + 1 designer',
        problem:
            'Orders were coming in over phone and WhatsApp screenshots. Kitchens lost orders during rush, and management had no idea which menu items were actually selling.',
        solution:
            'We built a mobile-first ordering site with a real-time kitchen display per branch. Customers order, pay online, and the right kitchen gets a ticket within seconds. Owners get a live dashboard across all four branches.',
        features: [
            'Mobile-first menu with category filters and modifiers',
            'Real-time kitchen display screen per branch',
            'Live order status tracking for customers',
            'Branch-aware delivery / pickup options',
            'Daily revenue and best-seller dashboard for owners',
            'Loyalty points to drive repeat visits',
        ],
        outcome:
            'Online orders grew from zero to 450+ per day in the first quarter, and repeat-customer rate hit 38% thanks to the loyalty layer.',
    },
    {
        slug: 'urban-threads-store',
        title: 'Urban Threads Store',
        category: 'E-Commerce',
        tagline: 'Custom storefront for a fashion brand',
        summary:
            'A fast, mobile-first storefront with size guide, wishlist, and inventory sync. Built for a UK clothing brand selling across Europe.',
        stack: ['Next.js', 'Shopify', 'Tailwind', 'Algolia'],
        metrics: [
            { label: 'Conversion lift', value: '+22%' },
            { label: 'Page speed', value: '94/100' },
            { label: 'SKUs managed', value: '800+' },
        ],
        accent: '#e91e63',
        timeline: '12 weeks',
        team: '2 engineers + 1 designer',
        problem:
            'The brand was on a stock Shopify theme that felt slow and generic. Conversion was flat, mobile bounce was high, and the size guide was a PDF nobody opened.',
        solution:
            'We rebuilt the storefront on a custom Next.js + Shopify Hydrogen stack. Algolia powers instant search and filters, the size guide became an interactive picker, and the entire site loads in under a second on 4G.',
        features: [
            'Headless Next.js storefront on Shopify backend',
            'Instant search and filters via Algolia',
            'Interactive size guide with body-type recommendations',
            'Persistent wishlist across devices',
            'Edge-cached product pages for sub-second loads',
            'Klaviyo integration for abandoned cart recovery',
        ],
        outcome:
            'Conversion lifted by 22% in the first 60 days, mobile bounce dropped by a third, and the team can now ship marketing pages without developer help.',
    },
    {
        slug: 'bella-salon-booking',
        title: 'Bella Salon Booking',
        category: 'Mobile App',
        tagline: 'Appointment app for 30+ salons',
        summary:
            'A booking app where users find nearby salons, pick a stylist, and pay in-app. Salons get a simple panel to manage bookings and staff.',
        stack: ['Flutter', 'Firebase', 'Node.js', 'Stripe'],
        metrics: [
            { label: 'Active salons', value: '32' },
            { label: 'Bookings / mo', value: '2,800+' },
            { label: 'App rating', value: '4.7★' },
        ],
        accent: '#a855f7',
        timeline: '14 weeks',
        team: '2 mobile + 1 backend + 1 designer',
        problem:
            'Independent salons had no easy way to take online bookings. Customers were calling around to find a stylist available that evening, and salons were leaving idle chairs unbooked.',
        solution:
            'We shipped a Flutter app for both iOS and Android. Customers see nearby salons, browse stylists, and book a slot in under 60 seconds. Salons get a lightweight web panel for staff schedules and walk-in management.',
        features: [
            'Map and list view of nearby salons',
            'Per-stylist availability and portfolio',
            'In-app payments with deposit option',
            'Push notifications for booking confirmations and reminders',
            'Salon panel for staff, services, and walk-in bookings',
            'Reviews and photo gallery per stylist',
        ],
        outcome:
            'The app now handles 2,800+ bookings a month across 32 salons, with a 4.7★ average rating on both stores.',
    },
    {
        slug: 'edutrack-school',
        title: 'EduTrack School System',
        category: 'Education',
        tagline: 'Attendance, fees, results in one place',
        summary:
            'A school management system handling attendance, fee collection, and report cards. Used by teachers, parents, and admin from web and mobile.',
        stack: ['React', 'Laravel', 'MySQL', 'Tailwind'],
        metrics: [
            { label: 'Students managed', value: '1,800+' },
            { label: 'Paper saved', value: '70%' },
            { label: 'Parent app users', value: '1,400+' },
        ],
        accent: '#16a34a',
        timeline: '16 weeks',
        team: '3 engineers + 1 designer',
        problem:
            'The school ran on registers, paper fee slips, and printed report cards. Parents had no visibility into their child\'s attendance or grades until the term ended, and fee follow-up consumed half of admin\'s week.',
        solution:
            'We built a school management system with separate logins for teachers, parents, and admin. Teachers mark attendance from a phone, parents see live updates, and admin runs the entire fee cycle digitally.',
        features: [
            'Class-wise digital attendance from any device',
            'Parent app with live attendance, results, and fee status',
            'Online fee collection with auto-generated invoices',
            'Term-wise report cards exported to PDF',
            'Timetable and homework boards per class',
            'Bulk SMS for fee reminders and announcements',
        ],
        outcome:
            'Paper usage dropped by 70%, fee collection cycle went from 3 weeks to 5 days, and 1,400+ parents are now active on the parent app.',
    },
    {
        slug: 'fleettrack-lite',
        title: 'FleetTrack Lite',
        category: 'Logistics',
        tagline: 'GPS dashboard for small fleets',
        summary:
            'A live tracking dashboard for delivery and rental fleets. Owners see vehicle location, trips, and fuel reports without expensive enterprise tools.',
        stack: ['Next.js', 'PostgreSQL', 'Leaflet', 'Node.js'],
        metrics: [
            { label: 'Vehicles tracked', value: '180+' },
            { label: 'Fuel report time', value: '−85%' },
            { label: 'Fleet owners', value: '12' },
        ],
        accent: '#00c2cb',
        timeline: '10 weeks',
        team: '2 engineers',
        problem:
            'Small fleet owners (10-30 vehicles) were stuck between cheap consumer GPS trackers with no analytics and enterprise platforms costing thousands per month. Fuel theft and idle time were eating margins.',
        solution:
            'We built a lightweight web dashboard that ingests data from any standard GPS device. Owners see live vehicle locations on a map, full trip history, and weekly fuel-vs-distance reports — for a fraction of enterprise pricing.',
        features: [
            'Live vehicle location on Leaflet map',
            'Trip history with route playback',
            'Fuel consumption vs distance reports',
            'Geofencing with entry / exit alerts',
            'Driver scorecards based on speed and braking',
            'Multi-fleet support for rental companies',
        ],
        outcome:
            'Owners now generate fuel reports in minutes instead of hours, and three of them caught and stopped fuel theft within the first month of going live.',
    },
    {
        slug: 'propertypro-rentals',
        title: 'PropertyPro Rentals',
        category: 'Real Estate',
        tagline: 'Rental listings with map search',
        summary:
            'A rental marketplace with map-based search, owner dashboards, and tenant inquiries. Built for a UK property company managing 200+ listings.',
        stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
        metrics: [
            { label: 'Active listings', value: '240+' },
            { label: 'Inquiries / mo', value: '650+' },
            { label: 'Time to list', value: '8 min' },
        ],
        accent: '#7c5cff',
        timeline: '12 weeks',
        team: '2 engineers + 1 designer',
        problem:
            'The property team was managing listings on a clunky legacy system. Adding a property took 30 minutes, the public site had no map search, and inquiries came in via three separate inboxes.',
        solution:
            'We replaced the legacy stack with a Next.js + Prisma platform. Agents add a listing in 8 minutes with drag-and-drop photos, the public site has Mapbox-powered map search, and every inquiry lands in a single CRM-style inbox.',
        features: [
            'Map-based search with draw-to-search area',
            'Filter by price, beds, type, availability',
            'Agent dashboard for listings, photos, and viewings',
            'Unified inquiry inbox with response templates',
            'Saved searches and email alerts for tenants',
            'SEO-optimized listing pages with structured data',
        ],
        outcome:
            'Inquiries grew to 650+ a month, listings doubled within a quarter, and the average listing now goes live in 8 minutes instead of 30.',
    },
    {
        slug: 'salesdesk-crm',
        title: 'SalesDesk CRM',
        category: 'SaaS',
        tagline: 'Lightweight CRM for small sales teams',
        summary:
            'A simple CRM for SMBs — leads, pipeline, follow-up reminders, and WhatsApp integration. Built to replace messy spreadsheets and email threads.',
        stack: ['Next.js', 'NestJS', 'PostgreSQL', 'WhatsApp API'],
        metrics: [
            { label: 'Active teams', value: '45+' },
            { label: 'Leads tracked', value: '12K+' },
            { label: 'Avg setup time', value: '20 min' },
        ],
        accent: '#0046ad',
        timeline: '14 weeks',
        team: '3 engineers + 1 designer',
        problem:
            'Small sales teams were drowning in spreadsheets and forwarded emails. Big CRMs were too expensive and too complex — most teams used 5% of the features and gave up within a month.',
        solution:
            'We built an opinionated CRM that does five things really well: capture leads, run a pipeline, schedule follow-ups, log calls, and message on WhatsApp. Setup takes 20 minutes and the entire team is productive on day one.',
        features: [
            'Drag-and-drop pipeline by stage',
            'WhatsApp Business API integration for chat from inside the CRM',
            'Auto follow-up reminders based on stage age',
            'Web form builder to capture leads from any site',
            'Activity log and notes per contact',
            'Team-wide reporting on conversion and revenue',
        ],
        outcome:
            '45+ teams are now running their entire sales motion on SalesDesk, with 12K+ leads tracked and a typical onboarding time of 20 minutes.',
    },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
