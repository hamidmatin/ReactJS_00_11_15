import React, { useState, useEffect, Fragment } from 'react';
import { UserCard } from './user-card';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

import './users.css';
import { BasePage } from '../../components/base-page';
import { Link } from 'react-router-dom';
import { withLoading } from '../../HOC/with-loading';
import { Pagination } from '../../components/pagination';
export const UsersIndex = () => {
  const [allUsers, setAllUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({
    limit: 10,
    skip: 0,
    currentPage: 1,
  });
  const BasePageWithLoading = withLoading(BasePage);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${BASE_URL}/users?limit=${pageInfo.limit}&skip=${pageInfo.skip}`)
      .then((response) => {
        console.log(response);
        setAllUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageInfo]);

  const nextPageHandler = () => {
    setPageInfo({
      ...pageInfo,
      skip: pageInfo.skip + pageInfo.limit,
      currentPage: pageInfo.currentPage + 1,
    });
  };
  const prevPageHandler = () => {
    setPageInfo({
      ...pageInfo,
      skip: pageInfo.skip - pageInfo.limit,
      currentPage: pageInfo.currentPage - 1,
    });
  };

  const firstPageHandler = () => {
    setPageInfo({
      ...pageInfo,
      skip: 0,
      currentPage: 1,
    });
  };

  const lastPageHandler = () => {
    setPageInfo({
      ...pageInfo,
      skip: allUsers.total - pageInfo.limit,
      currentPage: Math.ceil(allUsers.total / pageInfo.limit),
    });
  };

  const pageChangeHandler = (pageNo) => {
    setPageInfo({
      ...pageInfo,
      skip: (pageNo - 1) * pageInfo.limit,
      currentPage: pageNo,
    });
  }

  const ItemsPerPageChangeHandler = (count) => {
    setPageInfo({...pageInfo, limit: count})
  }
  return (
    <BasePageWithLoading isLoading={isLoading} title={'Users'}>
      <div className='new-wrapper'>
        <Link to={`new`} className='icon-button'>
          <i className='material-icons'>person_add</i>
        </Link>
      </div>
      {allUsers && allUsers.users.length > 0 ? (
        <Fragment>
          <div className='row'>
            {allUsers.users.map((user) => (
              <div key={user.id} className='col-sm-6 col-md-4'>
                <UserCard
                  id={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  email={user.email}
                  username={user.username}
                  phone={user.phone}
                />
              </div>
            ))}
          </div>
          <Pagination
            pageCount={Math.ceil(allUsers.total / pageInfo.limit)}
            currentPage={pageInfo.currentPage}
            onNextPage={nextPageHandler}
            onPrevPage={prevPageHandler}
            onFirstPage={firstPageHandler}
            onLastPage={lastPageHandler}
            onPageChange={pageChangeHandler}
            itemsPerPage={pageInfo.limit}
            onItemsPerPageChange={ItemsPerPageChangeHandler}
          />
        </Fragment>
      ) : (
        <p className='list-empty'>List is empty</p>
      )}
    </BasePageWithLoading>
  );
};
