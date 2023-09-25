import PropTypes from 'prop-types';
import { SearchForm, Input, Button } from './Form.styled';
import { useSearchParams } from 'react-router-dom';

const Form = ({ searchMovies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleInputChange = event => {
    const moovieValue = event.target.value;
    if (moovieValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: moovieValue });
    // searchParams.set('query', event.target.value);
    // setSearchParams(searchParams);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        autoComplete="off"
        placeholder="Search movie..."
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Form;
