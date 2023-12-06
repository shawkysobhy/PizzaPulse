function ErrorMessage({ error }) {
  return (
    <div className="m-2 rounded-lg bg-red-300 px-2 text-stone-700">{error}</div>
  );
}

export default ErrorMessage;
