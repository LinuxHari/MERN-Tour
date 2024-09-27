import { useState } from 'react'
import FiltersCard from './FiltersCard';
import { FiltersProps } from '../../type';

const MobileFilters = (props: FiltersProps) => {
    const [isShowFilter, setShowFilter] = useState(false);
    const toggleFilter = () => {
        setShowFilter(prev => !prev);
      }
  return (
    <>
    <button
        className={`button -dark-1 bg-light-1 px-25 py-10 border-1 rounded-12 d-flex d-lg-none ${
          isShowFilter ? "mb-4" : "mb-0"
        }`}
        onClick={toggleFilter}
      >
        <i className="icon-sort-down mr-10 text-16"></i>
        Filter
      </button>
      {isShowFilter && (
        <FiltersCard {...props}/>
      )}
    </>
  )
}

export default MobileFilters