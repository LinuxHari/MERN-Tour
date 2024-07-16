import { RECENT_SEARCHES } from "../../../data";
import Dropdown from "../Dropdown/Dropdown";

const Search = () => {
  return (
    <Dropdown className="header__search js-liverSearch js-form-dd">
      <Dropdown.Toggle>
      <i className="icon-search text-18"></i>
      <input
        type="text"
        placeholder="Search destinations or activities"
        className="js-search"
        data-x-click="headerSearch"
      />
      </Dropdown.Toggle>

      <Dropdown.Content
        className="headerSearchRecent"
        dataClick="headerSearch"
      >
        <div className="headerSearchRecent__container">
          <div className="headerSearchRecent__title">
            <h4 className="text-18 fw-500">Recent Searches</h4>
          </div>

          <div className="headerSearchRecent__list js-results">
      {RECENT_SEARCHES.map((item, index) => (
        <button
          key={index}
          className="headerSearchRecent__item js-search-option"
          data-x-click="headerSearch"
        >
          <div className="size-50 bg-white rounded-12 border-1 flex-center">
            {item.icon.startsWith('icon-') ? (
              <i className={`${item.icon} text-20`}></i>
            ) : (
              <img
                src={item.icon}
                alt="image"
                className="rounded-12"
              />
            )}
          </div>
          <div className="ml-10">
            <div className="fw-500 js-search-option-target">{item.title}</div>
            <div className="lh-14 text-14 text-light-2">{item.location}</div>
          </div>
        </button>
      ))}
    </div>
        </div>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default Search;
