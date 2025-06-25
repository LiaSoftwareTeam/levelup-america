import { Suspense } from 'react';
import EventRegisterClient from './EventRegisterClient';

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <EventRegisterClient />
    </Suspense>
  );
}
