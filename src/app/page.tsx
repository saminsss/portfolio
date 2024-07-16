import Stats from '@/components/Stats';
import Hero from '@/components/hero/Hero';

export default function Home() {
  return (
    <section className="flex flex-col gap-12">
      <Hero />
      <Stats />
    </section>
  );
}
