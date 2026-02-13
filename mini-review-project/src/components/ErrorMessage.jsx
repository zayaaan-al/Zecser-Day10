function ErrorMessage({ message }) {
  return (
    <div className="text-center text-red-500 py-5">
      {message}
    </div>
  );
}

export default ErrorMessage;
