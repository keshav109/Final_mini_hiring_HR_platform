# TalentFlow

A modern, full-stack talent management platform built with React, TypeScript, and Vite. TalentFlow provides comprehensive tools for HR teams to manage job postings, candidate assessments, and recruitment workflows.

## Features

### Core Functionality

- **Job Management**: Create, edit, and manage job postings with detailed requirements
- **Candidate Management**: Track and manage candidate profiles and applications
- **Assessment Builder**: Create dynamic, multi-section assessments with various question types
- **Assessment Preview**: Real-time preview of assessments before publishing
- **Assessment Results**: View and analyze candidate assessment responses
- **Dashboard Analytics**: Comprehensive HR dashboard with key metrics

### Question Types

- Single Choice
- Multiple Choice
- Short Text
- Long Text
- Numeric Input
- File Upload

### Advanced Features

- **Conditional Logic**: Questions can be shown/hidden based on previous answers
- **Real-time Validation**: Client-side validation with customizable rules
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Mock API**: Complete mock backend with MSW (Mock Service Worker)
- **Local Storage**: Persistent data storage with IndexedDB via Dexie

## Tech Stack

### Frontend

- **React 19.1.1** - UI library with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 7.1.2** - Fast build tool and dev server
- **React Router DOM 7.9.0** - Client-side routing
- **Tailwind CSS 4.1.13** - Utility-first CSS framework

### State Management & Data

- **Dexie 4.2.0** - IndexedDB wrapper for local storage
- **MSW 2.11.2** - Mock Service Worker for API mocking
- **Axios 1.12.1** - HTTP client for API requests

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Hot Toast** - Toast notifications
- **Class Variance Authority** - Component variant management

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Faker.js** - Fake data generation for development

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (JobCard, JobSkeleton)
│   ├── HrDashboard/     # HR-specific components
│   ├── Jobs/            # Job-related components
│   ├── layout/          # Layout components (Header, Footer, HrLayout)
│   ├── sections/        # Landing page sections
│   └── ui/              # Base UI components (Button, Card, Logo)
├── pages/               # Page components
│   ├── AssessmentBuilder.tsx
│   ├── AssessmentPreview.tsx
│   ├── AssessmentResults.tsx
│   ├── Assessments.tsx
│   ├── CandidateJobs.tsx
│   ├── CandidateProfile.tsx
│   ├── Candidates.tsx
│   ├── HrDashboard.tsx
│   ├── JobDetails.tsx
│   ├── Jobs.tsx
│   └── Landing.tsx
├── services/            # Business logic and data layer
│   ├── db/              # Database layer (Dexie)
│   ├── mocks/           # Mock API handlers (MSW)
│   └── seed/            # Seed data generation
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── main.tsx            # Application entry point
```

////ending of README.md
