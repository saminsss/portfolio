import Stats from '@/components/Stats';
import Hero from '@/components/hero/Hero';

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <Stats />
    </main>
  );
}
