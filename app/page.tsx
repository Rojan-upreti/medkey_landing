import Navigation from './components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            MedKey Landing Page
          </h1>
          <p className="text-xl text-gray-600">
            Your complete medical history in one place
          </p>
        </div>
      </div>
    </main>
  );
}

