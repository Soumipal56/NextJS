import AuthNav from '@/components/AuthNav'

export default function AuthLayout({ children }) {
  return (
    <>
      <AuthNav />
      <main className="flex-1 p-4">
        {children}
      </main>
    </>
  );
}
