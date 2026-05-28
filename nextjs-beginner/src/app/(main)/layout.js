import MainNavbar from '@/components/MainNavbar'

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      <main className="flex-1 p-4">
        {children}
      </main>
    </>
  );
}
