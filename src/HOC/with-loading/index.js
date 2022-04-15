import { Loading } from '../../components/loading';

export const withLoading = (component) => {
  const Component = component;

  return ({ isLoading, ...props }) => {
    return (
      <>
        <Component {...props} />
        {isLoading ? <Loading /> : null}
      </>
    );
  };
};
