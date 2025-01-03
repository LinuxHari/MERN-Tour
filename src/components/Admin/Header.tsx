const Header = () => {
  return (
    <div className="dashboard__content_header">
      <div className="d-flex items-center">
        <div className="mr-60">
          <button className="d-flex js-toggle-db-sidebar">
            <i className="icon-main-menu text-20" />
          </button>
        </div>
      </div>

      <div>
        <div>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 8.125C18.5842 8.125 18.4253 8.19085 18.3081 8.30806C18.1908 8.42527 18.125 8.58424 18.125 8.75V13.75C18.125 14.2473 17.9275 14.7242 17.5758 15.0758C17.2242 15.4275 16.7473 15.625 16.25 15.625H3.75C3.25272 15.625 2.77581 15.4275 2.42417 15.0758C2.07254 14.7242 1.875 14.2473 1.875 13.75V8.75C1.875 8.58424 1.80915 8.42527 1.69194 8.30806C1.57473 8.19085 1.41576 8.125 1.25 8.125C1.08424 8.125 0.925268 8.19085 0.808058 8.30806C0.690848 8.42527 0.625 8.58424 0.625 8.75V13.75C0.625 14.5788 0.95424 15.3737 1.54029 15.9597C1.83047 16.2499 2.17497 16.4801 2.55411 16.6371C2.93326 16.7942 3.33962 16.875 3.75 16.875H16.25C17.0788 16.875 17.8737 16.5458 18.4597 15.9597C19.0458 15.3737 19.375 14.5788 19.375 13.75V8.75C19.375 8.58424 19.3092 8.42527 19.1919 8.30806C19.0747 8.19085 18.9158 8.125 18.75 8.125Z"
                fill="#05073C"
              />
              <path
                d="M0.625 6.25C0.6251 6.37268 0.661304 6.49262 0.729099 6.59487C0.796894 6.69712 0.893282 6.77715 1.00625 6.825L7.7875 9.73125C8.48763 10.0313 9.24141 10.186 10.0031 10.186C10.7648 10.186 11.5186 10.0313 12.2188 9.73125L19 6.825C19.1118 6.77621 19.2069 6.69577 19.2735 6.59359C19.3401 6.49142 19.3754 6.37198 19.375 6.25C19.375 5.4212 19.0458 4.62634 18.4597 4.04029C17.8737 3.45424 17.0788 3.125 16.25 3.125H3.75C3.33962 3.125 2.93326 3.20583 2.55411 3.36288C2.17497 3.51992 1.83047 3.75011 1.54029 4.04029C0.95424 4.62634 0.625 5.4212 0.625 6.25ZM3.75 4.375H16.25C16.6786 4.37544 17.094 4.52268 17.4272 4.7922C17.7604 5.06172 17.9913 5.43725 18.0812 5.85625L11.725 8.58125C11.18 8.81509 10.5931 8.93568 10 8.93568C9.40692 8.93568 8.82003 8.81509 8.275 8.58125L1.91875 5.85625C2.00875 5.43725 2.23957 5.06172 2.57277 4.7922C2.90597 4.52268 3.32144 4.37544 3.75 4.375Z"
                fill="#05073C"
              />
            </svg>
          </button>
        </div>

        <div>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3.75C9.655 3.75 9.375 3.47 9.375 3.125V2.5C9.375 2.155 9.655 1.875 10 1.875C10.345 1.875 10.625 2.155 10.625 2.5V3.125C10.625 3.47 10.345 3.75 10 3.75Z"
                fill="#05073C"
              />
              <path
                d="M15.455 9.20471C15.11 9.20471 14.83 8.92471 14.83 8.57971C14.83 6.03971 12.7675 3.87533 10.2325 3.75533C7.69434 3.63814 5.43152 5.59283 5.19246 8.11814C5.17809 8.26908 5.1709 8.42408 5.1709 8.57971C5.1709 8.92471 4.8909 9.20471 4.5459 9.20471C4.2009 9.20471 3.9209 8.92471 3.9209 8.57971C3.9209 8.38471 3.92996 8.18971 3.94809 8.00033C4.24902 4.82033 7.09809 2.35658 10.2915 2.50689C13.4834 2.65783 16.08 5.38221 16.08 8.57971C16.08 8.92502 15.8 9.20471 15.455 9.20471Z"
                fill="#05073C"
              />
              <path
                d="M16.6268 13.4675C16.4728 13.4675 16.3181 13.4106 16.1971 13.2966C15.3284 12.4741 14.83 11.3159 14.83 10.1194C14.83 9.77438 15.11 9.49438 15.455 9.49438C15.8 9.49438 16.08 9.77438 16.08 10.1194C16.08 10.9741 16.4359 11.8016 17.0565 12.3888C17.3071 12.6259 17.3181 13.0216 17.0809 13.2725C16.9581 13.4019 16.7925 13.4675 16.6268 13.4675Z"
                fill="#05073C"
              />
              <path
                d="M3.37297 13.4675C3.20703 13.4675 3.04172 13.4022 2.91891 13.2722C2.68172 13.0216 2.69266 12.6259 2.94328 12.3888C3.56391 11.8016 3.91985 10.9744 3.91985 10.1194C3.91985 9.77438 4.19985 9.49438 4.54485 9.49438C4.88985 9.49438 5.16985 9.77438 5.16985 10.1194C5.16985 11.3166 4.67141 12.4747 3.80266 13.2966C3.68141 13.4106 3.52703 13.4675 3.37297 13.4675Z"
                fill="#05073C"
              />
              <path
                d="M10 18.125C8.30625 18.125 6.875 16.6937 6.875 15C6.875 14.655 7.155 14.375 7.5 14.375C7.845 14.375 8.125 14.655 8.125 15C8.125 16.0163 8.98375 16.875 10 16.875C11.0163 16.875 11.875 16.0163 11.875 15C11.875 14.655 12.155 14.375 12.5 14.375C12.845 14.375 13.125 14.655 13.125 15C13.125 16.6937 11.6937 18.125 10 18.125Z"
                fill="#05073C"
              />
              <path
                d="M4.23328 15.625C3.47171 15.625 2.79421 15.1594 2.50703 14.4388C2.21953 13.7172 2.39109 12.9125 2.94421 12.3888C3.19484 12.1513 3.59015 12.1622 3.82796 12.4128C4.06515 12.6635 4.05453 13.0591 3.8039 13.2966C3.53015 13.556 3.63078 13.8825 3.66828 13.9763C3.70546 14.0694 3.8564 14.375 4.23328 14.375C4.57828 14.375 4.85828 14.655 4.85828 15C4.85828 15.345 4.57859 15.625 4.23328 15.625Z"
                fill="#05073C"
              />
              <path
                d="M15.7661 15.625C15.4211 15.625 15.1411 15.345 15.1411 15C15.1411 14.655 15.4211 14.375 15.7661 14.375C16.1433 14.375 16.2945 14.0681 16.332 13.9741C16.3692 13.8806 16.4695 13.5553 16.1958 13.2963C15.9452 13.0588 15.9342 12.6635 16.1714 12.4125C16.4089 12.1619 16.8042 12.151 17.0552 12.3881C17.6083 12.9119 17.7802 13.716 17.4933 14.4363C17.2058 15.1584 16.5277 15.625 15.7661 15.625Z"
                fill="#05073C"
              />
              <path
                d="M4.54541 10.7441C4.20041 10.7441 3.92041 10.4641 3.92041 10.1191V8.57971C3.92041 8.23471 4.20041 7.95471 4.54541 7.95471C4.89042 7.95471 5.17042 8.23471 5.17042 8.57971V10.1191C5.17042 10.4641 4.89073 10.7441 4.54541 10.7441Z"
                fill="#05073C"
              />
              <path
                d="M15.4536 10.7441C15.1086 10.7441 14.8286 10.4641 14.8286 10.1191V8.57971C14.8286 8.23471 15.1086 7.95471 15.4536 7.95471C15.7986 7.95471 16.0786 8.23471 16.0786 8.57971V10.1191C16.0786 10.4641 15.7986 10.7441 15.4536 10.7441Z"
                fill="#05073C"
              />
              <path
                d="M15.7673 15.625H4.23291C3.88791 15.625 3.60791 15.345 3.60791 15C3.60791 14.655 3.88791 14.375 4.23291 14.375H15.767C16.112 14.375 16.392 14.655 16.392 15C16.392 15.345 16.1123 15.625 15.7673 15.625Z"
                fill="#05073C"
              />
            </svg>
          </button>
        </div>

        <div>
          <img src="img/dashboard/header/1.png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Header;
