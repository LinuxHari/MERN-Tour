import { ACTIVITIES, DESTINATIONS } from "../../../data";
import Dropdown from "../Dropdown/Dropdown";
import Tabs from "../Tabs/Tabs";
import DestinationLocations from "./PlacesLists";

type PlacesProps = {
  data: typeof DESTINATIONS | typeof ACTIVITIES
  title: "Destionations" | "Activities"
  dataClick: string
}

const Places = ({data, title, dataClick}: PlacesProps) => {
  return (
    <Dropdown className="lg:d-none js-form-dd">
      <Dropdown.Toggle dataClick={dataClick}>
        {title}
        <i className="icon-chevron-down text-18"></i>
      </Dropdown.Toggle>

      <Dropdown.Content dataClick={dataClick}>
        <Tabs>
          <Tabs.TabList>
            {Object.keys(data).map((tabName) => (
              <Tabs.Tab key={tabName}>{tabName}</Tabs.Tab>
            ))}
          </Tabs.TabList>

          <Tabs.TabContents>
            {Object.values(data).map(
              (data, index) => (
                <Tabs.TabContent key={index}>
                  <DestinationLocations
                    data={data}
                  />
                </Tabs.TabContent>
              )
            )}
          </Tabs.TabContents>
        </Tabs>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default Places;