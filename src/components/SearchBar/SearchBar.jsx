import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export default function SearchBar() {
  const [params, setParams] = useSearchParams();
  const queryFilter = params.get('query') ?? '';

  const changeMovieFilter = newFilter => {
    params.set('query', newFilter);
    setParams(params);
  };

  const hundleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (form.elements.search.value.trim() === '') {
      return toast.error('You need to enter text to find pictures 🔍');
    }

    setParams({ query: form.elements.search.value });

    form.reset();
  };

  return (
    <>
      <form onSubmit={hundleSubmit}>
        <input
          type="text"
          name="search"
          value={queryFilter}
          onChange={e => changeMovieFilter(e.target.value)}
        />
      </form>

      <Toaster />
    </>
  );
}
