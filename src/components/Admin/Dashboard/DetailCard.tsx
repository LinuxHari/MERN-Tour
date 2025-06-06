type DetailCardProps = {
  title: string;
  total: number;
  currency?: string;
  amount?: number;
  icon: string;
};

const DetailCard = ({title, total, currency, amount, icon}: DetailCardProps) => {
  return (
    <div className="col-sm-6">
      <div className="rounded-12 bg-white shadow-2 px-30 py-30 h-full">
        <div className="row y-gap-20 items-center justify-between">
          <div className="col-auto">
            <div>{title}</div>
            <div className="text-30 fw-700">
              {currency && currency}
              {total}
            </div>

            {typeof amount !== "undefined" && (
              <div>
                <span className="text-accent-1">
                  {currency && currency}
                  {amount}
                </span>{" "}
                Today
              </div>
            )}
          </div>

          <div className="col-auto">
            <div className="size-80 flex-center bg-accent-1-05 rounded-full">
              <i className={`${icon} text-30 text-accent-1`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
