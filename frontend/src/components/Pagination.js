import React from 'react'
import PropTypes from 'prop-types';


const pagination = (props) => {
  const getNumbers = () =>{
    let numbers = [];
    let itemsPerPage = props.itemsPerPage;
    let pageNumber = 1;

    for(let i=0; i<props.count; i+=itemsPerPage){
      const page = pageNumber;
      let style = 'pagination_number';
      let content = null;

      if(props.active === page){
        style = 'pagination_number pagination_number--active';
        content = (
          <div key={i} className={style}>
            {pageNumber}
          </div>
        );
      }else{
        content = (
          <div key={i} onClick={()=>props.visitPage(page)} className={style}>
            {pageNumber}
          </div>
        );
      }
      numbers.push(
        content
      );
      pageNumber++;
    }
    return numbers;
  };
  return (
    <div className='pagination'>
      <div onClick={() => props.previous()} className='pagination_number'>
        Previos
      </div>
      {getNumbers()}
      <div onClick={() => props.next()} className='pagination_number'>
        Next
      </div>
    </div>
  );
};

pagination.propTypes = {
  itemsPerPage : PropTypes.number.isRequired,
  count : PropTypes.number.isRequired,
  active : PropTypes.number.isRequired,
  visitPage : PropTypes.func.isRequired,
  previos : PropTypes.func.isRequired,
  next : PropTypes.func.isRequired,
};
export default pagination