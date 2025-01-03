import {useMemo} from "react";
import TourSectionLayout from "../../layouts/TourSectionLayout";
import {TourSchemaType} from "../../schema/tourSchema";
import keyToTitle from "../../utils/keyToTitle";

type IncludedServicesProps = {
  included: TourSchemaType["included"];
};

const IncludedServices = ({included}: IncludedServicesProps) => {
  const [includedServices, serviceNotProvided] = useMemo(() => {
    const includedServices = {} as TourSchemaType["included"];
    const serviceNotProvided = {} as TourSchemaType["included"];

    Object.keys(included).forEach((key) => {
      const objKey = key as keyof typeof included;

      if (included[objKey]) includedServices[objKey] = included[objKey];
      else serviceNotProvided[objKey] = included[objKey];
    });

    return [includedServices, serviceNotProvided];
  }, []);

  return (
    <TourSectionLayout title="What's included">
      <div className="row x-gap-130 y-gap-20 pt-20">
        <div className="col-lg-6">
          <div className="y-gap-15">
            {Object.keys(includedServices).map((service) => (
              <div className="d-flex" key={service}>
                <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15" />
                {keyToTitle(service)}
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-6">
          <div className="y-gap-15">
            {Object.keys(serviceNotProvided).map((service) => (
              <div className="d-flex" key={service}>
                <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15" />
                {keyToTitle(service)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TourSectionLayout>
  );
};

export default IncludedServices;
