export default async function Page({ params }) {
  const { id } = await params;
  
  return (
    <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Dynamic Route Page</h1>
        <p>This is the common page for dynamic id: <strong>{id}</strong></p>
    </div>
  );
}
