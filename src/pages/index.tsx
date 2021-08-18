import AlertModal from '../components/AlertModal';

export default function Home() {
  return (
    <div className="text-center p-20">
      <h2 className="font-bold">Alert Modal Example</h2>
      <p>
        Note: Modal initialState is set to active=true to pop the modal for
        example.
      </p>
      <AlertModal />
    </div>
  );
}
