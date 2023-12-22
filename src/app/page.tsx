import Link from 'next/link';
import WidgetMeteo from '@/components/WidgetMeteo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 bg-gradient-to-bl from-sky-800 to-sky-200">
      <WidgetMeteo city="Paris" code="75001" />
      <WidgetMeteo city="Savines-le-Lac" code="05160" />

      <footer>
        <Link href="/about">About us</Link>
      </footer>
    </main>
  )
}
