import {ACTIVITIES, DESTINATIONS} from "../../../data";
import Dropdown from "../Dropdown/Dropdown";
import Tabs from "../Tabs/Tabs";
import DestinationLocations from "./PlacesLists";

type PlacesProps = {
  data: typeof DESTINATIONS | typeof ACTIVITIES;
  title: "Destinations" | "Activities";
  dataClick: string;
};

const Places = ({data, title, dataClick}: PlacesProps) => {
  return (
    <Dropdown className="lg:d-none js-form-dd">
      <Dropdown.Toggle dataClick={dataClick}>
        {title}
        <i className="icon-chevron-down text-18" />
      </Dropdown.Toggle>

      <Dropdown.Content dataClick={dataClick}>
        <div className="tabsMenu">
          <div className="tabsMenu__container">
            <Tabs>
              <div className="tabsMenu__tabs">
                <Tabs.TabList>
                  {Object.keys(data).map((tabName, index) => (
                    <Tabs.Tab key={tabName} index={index}>
                      {tabName}
                    </Tabs.Tab>
                  ))}
                </Tabs.TabList>
              </div>
              <div className="tabsMenu__content">
                <Tabs.TabContents>
                  {Object.values(data).map((data, index) => (
                    <Tabs.TabContent key={index} index={index}>
                      <DestinationLocations data={data} />
                    </Tabs.TabContent>
                  ))}
                </Tabs.TabContents>
              </div>
            </Tabs>
          </div>
        </div>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default Places;
