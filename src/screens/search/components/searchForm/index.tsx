import { Form } from 'react-bootstrap';
import useSearch from 'screens/search/hooks/useSearch';
import FormSelect from 'components/utils/selectBox';
import FormInput from 'components/utils/input';

export default function SearchForm() {
  const { register, errors, changeQueryHandler, changeTypeHanlder, onSubmit } =
    useSearch();
    
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form_box">
        <Form.Group className="col-8 col-sm-7 col-md-5 mb-3">
          <FormInput
            type="search"
            register={register}
            inputName="query"
            placeholder="Start typing to search..."
            changeHandler={changeQueryHandler}
            data-testid="query"
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors?.query ? 'd-block' : 'd-none'}
          >
            {errors?.query?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="col-4 col-sm-3 col-md-2 mb-3">
          <FormSelect
            selectName="type"
            register={register}
            changeHandler={changeTypeHanlder}
          >
            <option value="1">Users</option>
            <option value="2">Repositories </option>
          </FormSelect>
        </Form.Group>
      </div>
    </form>
  );
}
