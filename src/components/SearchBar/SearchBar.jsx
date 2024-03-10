import toast from 'react-hot-toast';

export default function SearchBar({ query, onSetQuery }) {
  const hundleChange = e => {
    onSetQuery(e.target.value);
  };

  const hundleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.error('You need to enter text to find pictures 🔍');
    }
  };

  return (
    <>
      <form onSubmit={hundleSubmit}>
        <input
          type="text"
          name="search"
          value={query}
          onChange={hundleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
