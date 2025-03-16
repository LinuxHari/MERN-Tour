const TableSkeleton = () => {
  return (
    <div className="container py-4">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4">
                <div className="skeleton-element" style={{width: "40px", height: "20px"}} />
              </th>
              <th className="py-3 px-4">
                <div className="skeleton-element" style={{width: "60px", height: "20px"}} />
              </th>
              <th className="py-3 px-4">
                <div className="skeleton-element" style={{width: "100px", height: "20px"}} />
              </th>
              <th className="py-3 px-4">
                <div className="skeleton-element" style={{width: "100px", height: "20px"}} />
              </th>
              <th className="py-3 px-4">
                <div className="skeleton-element" style={{width: "80px", height: "20px"}} />
              </th>
              <th className="py-3 px-4">
                <div className="skeleton-element" style={{width: "60px", height: "20px"}} />
              </th>
              <th className="py-3 px-4">
                <div className="skeleton-element" style={{width: "80px", height: "20px"}} />
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="py-3 px-4">
                  <div className="skeleton-element" style={{width: "90px", height: "20px"}} />
                </td>
                <td className="py-3 px-4">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="skeleton-element"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "4px",
                      }}
                    />
                    <div className="skeleton-element" style={{width: "140px", height: "20px"}} />
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="skeleton-element" style={{width: "100px", height: "20px"}} />
                </td>
                <td className="py-3 px-4">
                  <div className="skeleton-element" style={{width: "100px", height: "20px"}} />
                </td>
                <td className="py-3 px-4">
                  <div className="skeleton-element" style={{width: "80px", height: "20px"}} />
                </td>
                <td className="py-3 px-4">
                  <div className="skeleton-element" style={{width: "60px", height: "20px"}} />
                </td>
                <td className="py-3 px-4">
                  <div
                    className="skeleton-element"
                    style={{
                      width: "80px",
                      height: "20px",
                      borderRadius: "16px",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSkeleton;
