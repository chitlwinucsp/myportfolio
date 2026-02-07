import { Project, Experience } from './types';

export const RESUME_CONTEXT = `
Name: Chit Lwin (ချစ်လွင်)
Role: Software Engineer
Experience: 
- Experienced Software Engineer with a track record of building robust and scalable applications.
- Proficient in full-stack development, specifically within the .NET ecosystem and Python.
- Skilled in modern frontend frameworks (Angular, Blazor) as well as established patterns (MVC, Web Forms).
- Expert in Windows Application development using C# WinForms and WPF with MVVM architecture.
- Specialized in hardware integration, RFID solutions, SignalR real-time communication, and Window Services.
- Committed to writing clean, efficient, and maintainable code.
Skills: C#, .NET, Python, Angular, Blazor, ASP.NET MVC, Web Forms, WinForms, WPF (MVVM), TypeScript, HTML, CSS, Bootstrap, SQL Server, PostgreSQL, MongoDB, Redis, RFID Integration, SignalR, Socket Programming.
Projects:
- Tunnel Gantry: RFID tracking system using SignalR and Microservices.
- Warehouse Management Systems: Comprehensive WMS with MVC, WPF, and RFID integration.
- Asset Management System: RFID-based asset tracking solution with real-time monitoring and reporting.
- RFID Printer Middleware: Socket-based middleware for RFID printing.
- Printer Software: Suite comprising WinForm, WebForm, and WebSocket implementations.
- Smart RFID Kiosk Application: Blazor-based kiosk with SQL Server and SignalR.
Interests: Technology trends, open source, reading, and problem solving.
Contact: contact@chitlwin.dev
`;

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Tunnel Gantry System",
    description: "A high-performance RFID tracking solution. Implemented as a microservice architecture comprising Windows Services and WebAPI for real-time data processing.",
    technologies: ["C# .NET", "RFID", "SignalR", "Windows Service", "WebAPI"],
    imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Warehouse Management System",
    description: "Comprehensive WMS leveraging RFID tags for inventory. Features reporting, data import/export, and interfaces via MVC Web and WPF Desktop applications.",
    technologies: ["C# .NET", "SQL Server", "SignalR", "MVC", "WPF", "RFID"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Asset Management System",
    description: "A complete asset lifecycle management system using RFID. Shares core architecture with WMS for efficient tracking, auditing, and reporting.",
    technologies: ["C# .NET", "SQL Server", "SignalR", "MVC", "WPF", "RFID"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 4,
    title: "RFID Printer Middleware",
    description: "Middleware connecting business logic to RFID printers using low-level Socket communication, exposed via WebAPI and hosted as a Windows Service.",
    technologies: ["C# .NET", "Socket", "RFID Printing", "Windows Service", "WebAPI"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 5,
    title: "Printer Software Suite",
    description: "A versatile printing solution supporting multiple interfaces including WinForms and WebForms, utilizing WebSockets and WebServices for communication.",
    technologies: ["C# .NET", "WinForms", "WebForms", "WebSocket", "WebAPI"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 6,
    title: "Smart RFID Kiosk",
    description: "Interactive self-service kiosk application built with Blazor. Manages real-time interactions via SignalR and stores data in SQL Server.",
    technologies: ["Blazor", "C# .NET", "SQL Server", "SignalR", "WebAPI"],
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "ETAG RFID",
    period: "2022 - Present",
    description: "Developing and maintaining core software services using .NET and Angular. Optimizing SQL Server database queries and collaborating with cross-functional teams."
  },
  {
    id: 2,
    role: "Junior Software Developer",
    company: "INFOLOG",
    period: "2021 - 2022",
    description: "Assisted in the development of web applications using ASP.NET MVC and C#. Wrote unit tests and participated in code reviews to ensure code quality."
  },
  {
    id: 3,
    role: "Software Developer",
    company: "ACTY System",
    period: "2016 - 2021",
    description: "Gained hands-on experience in full-stack development, fixed bugs in legacy Web Forms applications, and contributed to documentation."
  }
];