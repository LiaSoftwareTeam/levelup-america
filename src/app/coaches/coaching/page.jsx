'use client';
import { Suspense } from 'react';
import CoachingForm from './CoachingForm';

// Component that uses useSearchParams must be wrapped in Suspense
function CoachingContent() {
  // Import useSearchParams inside the component that's wrapped with Suspense
  const { useSearchParams } = require('next/navigation');
  const searchParams = useSearchParams();
  const coachId = searchParams.get('coachId');

  return <CoachingForm coachId={coachId} />;
}

export default function CoachingPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CoachingContent />
      </Suspense>
    </div>
  );
}