import { useSearchParams } from 'react-router-dom';

export default function SearchBar() {
  const [params, setParams] = useSearchParams();
  const queryFilter = params.get('query') ?? '';

  const changeMovieFilter = newFilter => {
    params.set('query', newFilter.trim());
    setParams(params);
  };

  const hundleSubmit = e => {
    e.preventDefault();
    const form = e.target;

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
    </>
  );
}
