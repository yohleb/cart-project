
import {Form, useLoaderData, Link} from 'react-router-dom'
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const {meta, params}= useLoaderData();

  const {search, company, category, shipping, order, price} = params;

  return (
    <Form className='bg-base-200 rounder-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
    <FormSelect label="select company" list={meta.companies} name="company" defaultValue={company}/>
    <FormInput type="search" label="search product" name="search" size="input-sm" defaultValue={search}/>
    <FormSelect label="select category" list={meta.categories} name="category" defaultValue={category} />
    <FormSelect label="sort by" list={['a-z', 'z-a', 'high', 'low']} name="order" defaultValue={order} />
    <FormRange name="price" size="range-small" label="select price" defaultValue={price} />
    <FormCheckbox name="shipping" label="free shipping" defaultValue={shipping} />

      <button type='submit' className='btn btn-primary btn-sm'>search</button>
      <Link to="/products" className='btn btn-accent btn-sm'>reset</Link>
      <h2></h2>
    </Form>
  );
}

export default Filters;
